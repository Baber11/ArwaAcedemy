"use client";

import Image from "next/image";
import { useMemo, useState, useTransition } from "react";
import {
  COURSES,
  PAYMENT_METHODS,
  QUALIFICATIONS,
  REGISTRATION_FEE_LABEL,
  type PaymentMethod,
} from "@/lib/registration";
import { analyzePaymentScreenshotText } from "@/lib/payment-validate";

type Step = "details" | "upload" | "done";

type FormState = {
  fullName: string;
  email: string;
  age: string;
  contact: string;
  qualification: string;
  course: string;
  payment: PaymentMethod;
};

const initialForm: FormState = {
  fullName: "",
  email: "",
  age: "",
  contact: "",
  qualification: "",
  course: "",
  payment: "jazzcash",
};

export default function RegistrationForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [step, setStep] = useState<Step>("details");
  const [errors, setErrors] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [checkMsg, setCheckMsg] = useState<string | null>(null);
  const [checkOk, setCheckOk] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [verifying, setVerifying] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const selectedMethod = useMemo(
    () => PAYMENT_METHODS.find((m) => m.id === form.payment)!,
    [form.payment],
  );

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors(null);
  }

  function validateDetails(): string | null {
    if (!form.fullName.trim()) return "Please enter your full name.";
    if (!form.email.trim() || !form.email.includes("@"))
      return "Please enter a valid Gmail / email address.";
    if (!form.age.trim()) return "Please enter your age.";
    if (!/^03\d{2}-?\d{7}$/.test(form.contact.replace(/\s/g, "")) && form.contact.replace(/\D/g, "").length < 11)
      return "Please enter a valid contact number (e.g. 03XX-XXXXXXX).";
    if (!form.qualification) return "Please select your qualification.";
    if (!form.course) return "Please select a course.";
    return null;
  }

  function handleProceed(e: React.FormEvent) {
    e.preventDefault();
    const err = validateDetails();
    if (err) {
      setErrors(err);
      return;
    }
    setStep("upload");
    setErrors(null);
    setCheckMsg(null);
    setCheckOk(false);
  }

  async function handleFileChange(f: File | null) {
    setFile(f);
    setCheckOk(false);
    setCheckMsg(null);
    if (preview) URL.revokeObjectURL(preview);
    if (!f) {
      setPreview(null);
      return;
    }
    if (!f.type.startsWith("image/")) {
      setCheckMsg("Please upload an image file (PNG, JPG, or screenshot).");
      setPreview(null);
      return;
    }
    if (f.size > 4.5 * 1024 * 1024) {
      setCheckMsg("Image is too large. Please upload a screenshot under 4.5MB.");
      setPreview(null);
      return;
    }
    setPreview(URL.createObjectURL(f));
    setVerifying(true);
    try {
      const { createWorker } = await import("tesseract.js");
      const worker = await createWorker("eng");
      const { data } = await worker.recognize(f);
      await worker.terminate();
      const result = analyzePaymentScreenshotText(data.text, form.payment);
      setCheckOk(result.ok);
      setCheckMsg(result.message);
    } catch {
      // Fallback if OCR fails to load: require manual confirmation keywords via filename is weak;
      // ask user to retry with a clearer screenshot.
      setCheckOk(false);
      setCheckMsg(
        "Could not verify the image automatically. Please upload a clearer payment screenshot showing PKR 1,000.",
      );
    } finally {
      setVerifying(false);
    }
  }

  async function handleComplete() {
    if (!file || !checkOk) {
      setCheckMsg(
        "Upload a valid payment screenshot of PKR 1,000 before completing registration.",
      );
      return;
    }

    setSubmitting(true);
    setCheckMsg(null);

    try {
      const body = new FormData();
      body.append("fullName", form.fullName);
      body.append("email", form.email);
      body.append("age", form.age);
      body.append("contact", form.contact);
      body.append("qualification", form.qualification);
      body.append("course", form.course);
      body.append(
        "paymentMethod",
        PAYMENT_METHODS.find((m) => m.id === form.payment)?.name || form.payment,
      );
      body.append("screenshot", file);

      const res = await fetch("/api/registration", {
        method: "POST",
        body,
      });
      const data = (await res.json()) as { ok?: boolean; message?: string };

      if (!res.ok || !data.ok) {
        setCheckMsg(data.message || "Could not save registration. Please try again.");
        return;
      }

      startTransition(() => {
        setStep("done");
      });
    } catch {
      setCheckMsg("Network error while saving. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (step === "done") {
    return (
      <div className="bg-white rounded-2xl overflow-hidden card-shadow border border-border/50 p-8 md:p-10 text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-3xl mb-4">
          ✓
        </div>
        <h2 className="text-2xl font-bold text-navy mb-2">Registration Submitted</h2>
        <p className="text-muted text-sm max-w-md mx-auto leading-relaxed mb-6">
          Thank you, <strong className="text-navy">{form.fullName}</strong>. We received your
          details and payment screenshot for <strong className="text-navy">{REGISTRATION_FEE_LABEL}</strong>{" "}
          via {selectedMethod.name}. Our team will verify and contact you on{" "}
          <strong className="text-navy">{form.contact}</strong>.
        </p>
        <p className="text-xs text-muted">Course: {form.course}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden card-shadow border border-border/50">
      <div className="bg-navy px-5 sm:px-6 py-5 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-white font-bold text-lg">Student Registration Form</h2>
          <p className="text-white/70 text-xs mt-0.5">
            {step === "details"
              ? "Fill in your details to secure your seat."
              : "Transfer the fee, then upload your payment screenshot."}
          </p>
        </div>
        <span className="font-script text-white/90 text-lg hidden sm:block">Easy & Secure</span>
      </div>

      {/* Steps */}
      <div className="flex border-b border-border text-xs sm:text-sm">
        <div
          className={`flex-1 px-4 py-3 font-semibold ${
            step === "details" ? "text-navy border-b-2 border-navy" : "text-muted"
          }`}
        >
          1. Details & Pay
        </div>
        <div
          className={`flex-1 px-4 py-3 font-semibold ${
            step === "upload" ? "text-navy border-b-2 border-navy" : "text-muted"
          }`}
        >
          2. Upload Screenshot
        </div>
      </div>

      {step === "details" ? (
        <form className="p-5 sm:p-6 md:p-8 space-y-4" onSubmit={handleProceed}>
          <Field
            label="Full Name"
            placeholder="Enter your full name"
            icon="user"
            value={form.fullName}
            onChange={(v) => update("fullName", v)}
          />
          <Field
            label="Email Address (Gmail)"
            placeholder="Enter your Gmail address"
            icon="mail"
            type="email"
            value={form.email}
            onChange={(v) => update("email", v)}
          />
          <div className="grid sm:grid-cols-2 gap-4">
            <Field
              label="Age"
              placeholder="Enter your age"
              icon="cal"
              type="number"
              value={form.age}
              onChange={(v) => update("age", v)}
            />
            <Field
              label="Contact Number"
              placeholder="03XX-XXXXXXX"
              icon="phone"
              type="tel"
              value={form.contact}
              onChange={(v) => update("contact", v)}
            />
          </div>

          <SelectField
            label="Education / Qualification"
            options={QUALIFICATIONS}
            value={form.qualification}
            onChange={(v) => update("qualification", v)}
          />
          <SelectField
            label="Select Course"
            options={COURSES}
            value={form.course}
            onChange={(v) => update("course", v)}
          />

          <div className="bg-[#eaf3ff] rounded-xl p-4 space-y-4">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <span className="text-navy font-semibold text-sm">Registration Fee</span>
              <span className="bg-white text-navy font-bold text-sm px-3 py-1.5 rounded-full shadow-sm border border-blue/20">
                {REGISTRATION_FEE_LABEL}
              </span>
            </div>

            <div>
              <p className="text-navy text-xs font-semibold mb-2">Select Payment Method</p>
              <div className="grid sm:grid-cols-3 gap-2.5">
                {PAYMENT_METHODS.map((m) => {
                  const active = form.payment === m.id;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => update("payment", m.id)}
                      className={`flex flex-col items-center gap-2 rounded-xl border-2 bg-white px-3 py-3 transition-all ${
                        active ? "border-navy shadow-md" : "border-border hover:border-sky"
                      }`}
                    >
                      <Image src={m.logo} alt={m.name} width={120} height={36} className="h-8 w-auto" />
                      <span className="text-xs font-semibold text-navy">{m.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 border border-border">
              <div className="flex items-center gap-3 mb-3">
                <Image
                  src={selectedMethod.logo}
                  alt={selectedMethod.name}
                  width={110}
                  height={34}
                  className="h-8 w-auto"
                />
                <p className="text-xs text-muted flex-1">{selectedMethod.transferHint}</p>
              </div>
              <dl className="space-y-1.5 text-sm">
                {selectedMethod.details.map((d) => (
                  <div key={d.label} className="flex flex-wrap gap-x-2">
                    <dt className="text-muted text-xs min-w-[110px]">{d.label}:</dt>
                    <dd className="text-navy font-semibold text-xs sm:text-sm">{d.value}</dd>
                  </div>
                ))}
                <div className="flex flex-wrap gap-x-2 pt-1 border-t border-border mt-2">
                  <dt className="text-muted text-xs min-w-[110px]">Amount:</dt>
                  <dd className="text-red font-bold text-sm">{REGISTRATION_FEE_LABEL}</dd>
                </div>
              </dl>
            </div>
          </div>

          {errors && (
            <p className="text-red text-sm bg-red/5 border border-red/20 rounded-lg px-3 py-2">
              {errors}
            </p>
          )}

          <button type="submit" className="btn-navy w-full py-3.5 text-base">
            Proceed to Pay & Continue →
          </button>
          <p className="text-center text-xs text-muted">
            🔒 Transfer exactly {REGISTRATION_FEE_LABEL} to complete registration.
          </p>
        </form>
      ) : (
        <div className="p-5 sm:p-6 md:p-8 space-y-5">
          <div className="rounded-xl border border-yellow/40 bg-yellow/10 p-4">
            <p className="text-navy text-sm font-semibold mb-1">
              Pay {REGISTRATION_FEE_LABEL} via {selectedMethod.name}
            </p>
            <p className="text-muted text-xs leading-relaxed mb-3">
              {selectedMethod.transferHint}
            </p>
            <dl className="space-y-1 text-xs">
              {selectedMethod.details.map((d) => (
                <div key={d.label} className="flex gap-2">
                  <dt className="text-muted">{d.label}:</dt>
                  <dd className="text-navy font-semibold">{d.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <label className="block text-navy text-sm font-semibold mb-2">
              Upload Payment Screenshot
            </label>
            <label className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border bg-bg-soft px-4 py-8 cursor-pointer hover:border-sky transition-colors">
              <span className="text-3xl">📷</span>
              <span className="text-sm text-navy font-medium">
                {file ? file.name : "Tap to upload screenshot"}
              </span>
              <span className="text-xs text-muted">PNG / JPG · Max 4.5MB · Must show PKR 1,000</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => handleFileChange(e.target.files?.[0] ?? null)}
              />
            </label>
          </div>

          {preview && (
            <div className="relative w-full max-h-64 overflow-hidden rounded-xl border border-border bg-black/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={preview} alt="Payment preview" className="w-full max-h-64 object-contain" />
            </div>
          )}

          {verifying && (
            <p className="text-sm text-blue animate-pulse">
              Checking if this looks like a payment screenshot…
            </p>
          )}

          {checkMsg && (
            <p
              className={`text-sm rounded-lg px-3 py-2 border ${
                checkOk
                  ? "bg-green-50 text-green-800 border-green-200"
                  : "bg-red/5 text-red border-red/20"
              }`}
            >
              {checkMsg}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              className="btn-navy flex-1 py-3 opacity-80"
              onClick={() => {
                setStep("details");
                setFile(null);
                setPreview(null);
                setCheckMsg(null);
                setCheckOk(false);
              }}
            >
              ← Back
            </button>
            <button
              type="button"
              className="btn-yellow flex-1 py-3 disabled:opacity-50"
              disabled={!checkOk || verifying || isPending || submitting}
              onClick={handleComplete}
            >
              {submitting ? "Completing the registration…" : "Complete Registration →"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  icon,
  value,
  onChange,
}: {
  label: string;
  placeholder: string;
  type?: string;
  icon: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="text-navy text-xs font-semibold mb-1.5 block">{label}</span>
      <span className="relative flex items-center">
        <span className="absolute left-3 text-muted">
          <FieldIcon type={icon} />
        </span>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-lg border border-border bg-bg-soft pl-10 pr-3 py-2.5 text-sm outline-none focus:border-blue focus:ring-2 focus:ring-sky/30"
        />
      </span>
    </label>
  );
}

function SelectField({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="text-navy text-xs font-semibold mb-1.5 block">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-border bg-bg-soft px-3 py-2.5 text-sm outline-none focus:border-blue focus:ring-2 focus:ring-sky/30 text-muted"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function FieldIcon({ type }: { type: string }) {
  if (type === "mail") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
      </svg>
    );
  }
  if (type === "phone") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
      </svg>
    );
  }
  if (type === "cal") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10z" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 2c-3.3 0-6 1.8-6 4v1h12v-1c0-2.2-2.7-4-6-4z" />
    </svg>
  );
}
