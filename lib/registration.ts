export const REGISTRATION_FEE = 1000;
export const REGISTRATION_FEE_LABEL = "PKR 1,000";

export type PaymentMethod = "jazzcash" | "easypaisa" | "bank";

/** Canonical destination details — keep UI + OCR validation in sync */
export const PAYMENT_ACCOUNTS = {
  title: "MUHAMMAD SAQIB",
  jazzcash: {
    number: "0308-9674919",
    /** Digits only for OCR matching */
    numberDigits: "03089674919",
  },
  easypaisa: {
    number: "0308-9674919",
    numberDigits: "03089674919",
  },
  bank: {
    name: "Meezan Bank",
    accountNo: "00300113682408",
    iban: "PK46MEZN0000300113682408",
  },
} as const;

export const PAYMENT_METHODS: {
  id: PaymentMethod;
  name: string;
  logo: string;
  details: { label: string; value: string }[];
  transferHint: string;
}[] = [
  {
    id: "jazzcash",
    name: "JazzCash",
    logo: "/images/banks/jazzcash.jpeg",
    details: [
      { label: "Account Title", value: PAYMENT_ACCOUNTS.title },
      { label: "JazzCash Number", value: PAYMENT_ACCOUNTS.jazzcash.number },
    ],
    transferHint:
      "Send PKR 1,000 via JazzCash to the number below, then upload the payment screenshot.",
  },
  {
    id: "easypaisa",
    name: "EasyPaisa",
    logo: "/images/banks/easypaisa.jpeg",
    details: [
      { label: "Account Title", value: PAYMENT_ACCOUNTS.title },
      { label: "EasyPaisa Number", value: PAYMENT_ACCOUNTS.easypaisa.number },
    ],
    transferHint:
      "Send PKR 1,000 via EasyPaisa to the number below, then upload the payment screenshot.",
  },
  {
    id: "bank",
    name: "Bank Transfer",
    logo: "/images/banks/meezan.jpeg",
    details: [
      { label: "Bank Name", value: PAYMENT_ACCOUNTS.bank.name },
      { label: "Account Title", value: PAYMENT_ACCOUNTS.title },
      { label: "Account No", value: PAYMENT_ACCOUNTS.bank.accountNo },
      { label: "IBAN", value: PAYMENT_ACCOUNTS.bank.iban },
    ],
    transferHint:
      "Transfer PKR 1,000 to the Meezan Bank account below, then upload the payment screenshot.",
  },
];

export const COURSES = [
  "CIT + AI",
  "Canva + CapCut",
  "UI & UX Design",
  "YouTube Channel",
  "Digital Marketing",
  "E-Commerce",
  "Video Editing",
  "Graphic Designing",
  "1 Year Course",
  "5 In 1 Bundle Offer",
  "AI Generative Tools",
  "50% Discount Offer Course",
];

export const QUALIFICATIONS = [
  "Matriculation",
  "Intermediate",
  "Bachelors",
  "Masters",
  "Other",
];
