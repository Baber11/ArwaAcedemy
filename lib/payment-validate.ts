import { PAYMENT_ACCOUNTS, type PaymentMethod } from "./registration";

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
  "saqib",
  "muhammad",
];

const AMOUNT_PATTERNS = [
  /(?:rs\.?|pkr)\s*1[,.]?000\b/i,
  /\b1[,.]000\b/,
  /\b1000\b/,
];

const METHOD_KEYWORDS: Record<PaymentMethod, string[]> = {
  jazzcash: ["jazzcash", "jazz cash", "jazz"],
  easypaisa: ["easypaisa", "easy paisa", "telenor"],
  bank: ["meezan", "bank", "iban", "transfer", "account", "raast"],
};

function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

function alnumOnly(value: string): string {
  return value.replace(/[^a-z0-9]/gi, "").toUpperCase();
}

/**
 * Check that the receipt destination matches the selected payment method.
 * OCR often adds spaces/dashes, so we compare normalized forms.
 */
export function receiptMatchesAccount(
  ocrText: string,
  method: PaymentMethod,
): { ok: boolean; message: string } {
  const digits = digitsOnly(ocrText);
  const compact = alnumOnly(ocrText);

  if (method === "jazzcash") {
    const target = PAYMENT_ACCOUNTS.jazzcash.numberDigits;
    if (digits.includes(target) || digits.includes(target.slice(-10))) {
      return { ok: true, message: "" };
    }
    return {
      ok: false,
      message: `JazzCash number ${PAYMENT_ACCOUNTS.jazzcash.number} was not found in the screenshot. Please upload a receipt sent to this JazzCash number.`,
    };
  }

  if (method === "easypaisa") {
    const target = PAYMENT_ACCOUNTS.easypaisa.numberDigits;
    if (digits.includes(target) || digits.includes(target.slice(-10))) {
      return { ok: true, message: "" };
    }
    return {
      ok: false,
      message: `EasyPaisa number ${PAYMENT_ACCOUNTS.easypaisa.number} was not found in the screenshot. Please upload a receipt sent to this EasyPaisa number.`,
    };
  }

  // Meezan Bank: accept account number OR full IBAN
  const accountDigits = PAYMENT_ACCOUNTS.bank.accountNo;
  const ibanCompact = alnumOnly(PAYMENT_ACCOUNTS.bank.iban);
  // IBAN embeds account: PK46 MEZN 00 00300113682408 → digits include 00300113682408
  const hasAccount = digits.includes(accountDigits);
  const hasIban = compact.includes(ibanCompact);
  // OCR sometimes drops leading zeros — also accept without leading zeros
  const accountNoLeadingZero = accountDigits.replace(/^0+/, "");
  const hasAccountLoose =
    accountNoLeadingZero.length >= 10 && digits.includes(accountNoLeadingZero);

  if (hasAccount || hasIban || hasAccountLoose) {
    return { ok: true, message: "" };
  }

  return {
    ok: false,
    message: `Meezan Bank account ${PAYMENT_ACCOUNTS.bank.accountNo} (or IBAN) was not found in the screenshot. Please upload a receipt transferred to this account.`,
  };
}

/**
 * Lightweight screenshot check using OCR text.
 * Requires PKR 1,000 + destination account matching the selected method.
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
  const accountCheck = receiptMatchesAccount(ocrText, method);

  let score = 0;
  score += Math.min(foundKeywords.length * 12, 48);
  if (hasAmount) score += 30;
  if (methodHits.length > 0) score += 22;
  if (accountCheck.ok) score += 25;

  const selfieHints = ["selfie", "camera", "portrait"];
  const looksLikeRandom =
    foundKeywords.length === 0 && !hasAmount && text.length < 40;

  if (looksLikeRandom || selfieHints.some((h) => text.includes(h))) {
    return {
      ok: false,
      message:
        "This does not look like a payment screenshot. Please upload the confirmation screen showing PKR 1,000 transferred to MUHAMMAD SAQIB.",
      score,
      foundKeywords,
    };
  }

  if (score < 40 && !accountCheck.ok) {
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

  if (!accountCheck.ok) {
    return {
      ok: false,
      message: accountCheck.message,
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
