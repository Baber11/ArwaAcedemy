import type { PaymentMethod } from "./registration";

export type PaymentCheckResult = {
  ok: boolean;
  message: string;
  score: number;
  foundKeywords: string[];
};

const PAYMENT_KEYWORDS = [
  "jazzcash",
  "jazz cash",
  "easypaisa",
  "easy paisa",
  "meezan",
  "bank",
  "transfer",
  "transaction",
  "payment",
  "paid",
  "successful",
  "success",
  "sent",
  "received",
  "rs",
  "pkr",
  "rupees",
  "amount",
  "tid",
  "trx",
  "id",
  "account",
  "wallet",
  "mobile account",
  "raast",
  "iban",
];

const AMOUNT_PATTERNS = [
  /(?:rs\.?|pkr)\s*1[,.]?000\b/i,
  /\b1[,.]000\b/,
  /\b1000\b/,
];

const METHOD_KEYWORDS: Record<PaymentMethod, string[]> = {
  jazzcash: ["jazzcash", "jazz cash", "jazz"],
  easypaisa: ["easypaisa", "easy paisa", "telenor"],
  bank: ["meezan", "bank", "iban", "transfer", "account"],
};

/**
 * Lightweight screenshot check using OCR text.
 * Looks for payment-app language + Rs 1,000 amount.
 * Not 100% fraud-proof, but blocks random photos/selfies well.
 */
export function analyzePaymentScreenshotText(
  ocrText: string,
  method: PaymentMethod,
): PaymentCheckResult {
  const text = ocrText.toLowerCase().replace(/\s+/g, " ").trim();

  if (!text || text.length < 8) {
    return {
      ok: false,
      message:
        "We could not read any payment text from this image. Please upload a clear screenshot of your JazzCash, EasyPaisa, or bank transfer confirmation.",
      score: 0,
      foundKeywords: [],
    };
  }

  const foundKeywords = PAYMENT_KEYWORDS.filter((k) => text.includes(k));
  const hasAmount = AMOUNT_PATTERNS.some((p) => p.test(text));
  const methodHits = METHOD_KEYWORDS[method].filter((k) => text.includes(k));

  let score = 0;
  score += Math.min(foundKeywords.length * 12, 48);
  if (hasAmount) score += 30;
  if (methodHits.length > 0) score += 22;

  // Reject obvious non-payment content
  const selfieHints = ["selfie", "camera", "portrait"];
  const looksLikeRandom =
    foundKeywords.length === 0 && !hasAmount && text.length < 40;

  if (looksLikeRandom || selfieHints.some((h) => text.includes(h))) {
    return {
      ok: false,
      message:
        "This does not look like a payment screenshot. Please upload the confirmation screen showing PKR 1,000 transferred to Arwa Institute.",
      score,
      foundKeywords,
    };
  }

  if (score < 40) {
    return {
      ok: false,
      message:
        "Please upload a valid payment screenshot (JazzCash / EasyPaisa / bank transfer) that clearly shows PKR 1,000.",
      score,
      foundKeywords,
    };
  }

  if (!hasAmount) {
    return {
      ok: false,
      message:
        "Payment amount PKR 1,000 was not found in the screenshot. Please upload the receipt that shows Rs 1,000 / PKR 1,000.",
      score,
      foundKeywords,
    };
  }

  return {
    ok: true,
    message: "Payment screenshot looks valid. You can complete registration.",
    score,
    foundKeywords,
  };
}
