import { NextResponse } from "next/server";
import { REGISTRATION_FEE_LABEL } from "@/lib/registration";

export const runtime = "nodejs";

type BodyPayload = {
  fullName: string;
  email: string;
  age: string;
  contact: string;
  qualification: string;
  course: string;
  paymentMethod: string;
  fee: string;
  screenshotBase64?: string;
  screenshotName?: string;
};

function fileToDataUrl(file: File): Promise<string> {
  return file.arrayBuffer().then((buf) => {
    const bytes = Buffer.from(buf);
    const base64 = bytes.toString("base64");
    const mime = file.type || "image/png";
    return `data:${mime};base64,${base64}`;
  });
}

export async function POST(request: Request) {
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL?.trim();

  if (!scriptUrl) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "GOOGLE_SCRIPT_URL is not configured. Add it in .env.local for local, or in your host Environment Variables (Vercel/hosting) for production, then redeploy.",
      },
      { status: 500 },
    );
  }

  try {
    const formData = await request.formData();

    const fullName = String(formData.get("fullName") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const age = String(formData.get("age") || "").trim();
    const contact = String(formData.get("contact") || "").trim();
    const qualification = String(formData.get("qualification") || "").trim();
    const course = String(formData.get("course") || "").trim();
    const paymentMethod = String(formData.get("paymentMethod") || "").trim();
    const screenshot = formData.get("screenshot");

    if (!fullName || !email || !contact || !course || !paymentMethod) {
      return NextResponse.json(
        { ok: false, message: "Missing required registration fields." },
        { status: 400 },
      );
    }

    if (!(screenshot instanceof File) || screenshot.size === 0) {
      return NextResponse.json(
        { ok: false, message: "Payment screenshot is required." },
        { status: 400 },
      );
    }

    // Keep Apps Script payload reasonable (Apps Script has post size limits)
    if (screenshot.size > 4.5 * 1024 * 1024) {
      return NextResponse.json(
        {
          ok: false,
          message: "Screenshot is too large for upload. Please use an image under 4.5MB.",
        },
        { status: 400 },
      );
    }

    const screenshotBase64 = await fileToDataUrl(screenshot);

    const payload: BodyPayload = {
      fullName,
      email,
      age,
      contact,
      qualification,
      course,
      paymentMethod,
      fee: REGISTRATION_FEE_LABEL,
      screenshotBase64,
      screenshotName: screenshot.name || "payment-screenshot.png",
    };

    // Apps Script web apps often 302-redirect; follow redirects from the server.
    const res = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });

    const text = await res.text();
    let parsed: { ok?: boolean; message?: string } = {};
    try {
      parsed = JSON.parse(text);
    } catch {
      // Some deployments return empty/HTML after redirect — treat HTTP ok as success
      if (res.ok) {
        return NextResponse.json({
          ok: true,
          message: "Registration saved.",
        });
      }
      return NextResponse.json(
        {
          ok: false,
          message: "Something went wrong. Please try again.",
          raw: text.slice(0, 300),
        },
        { status: 502 },
      );
    }

    if (!parsed.ok) {
      return NextResponse.json(
        { ok: false, message: parsed.message || "Failed to save." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      message: parsed.message || "Saved",
    });
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        message: err instanceof Error ? err.message : "Unexpected server error",
      },
      { status: 500 },
    );
  }
}
