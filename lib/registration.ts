export const REGISTRATION_FEE = 1000;
export const REGISTRATION_FEE_LABEL = "PKR 1,000";

export type PaymentMethod = "jazzcash" | "easypaisa" | "bank";

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
    logo: "/images/banks/jazzcash.png",
    details: [
      { label: "Account Title", value: "Arwa Institute" },
      { label: "JazzCash Number", value: "0308-9674919" },
    ],
    transferHint: "Send PKR 1,000 via JazzCash to the number below, then upload the payment screenshot.",
  },
  {
    id: "easypaisa",
    name: "EasyPaisa",
    logo: "/images/banks/easypaisa.png",
    details: [
      { label: "Account Title", value: "Arwa Institute" },
      { label: "EasyPaisa Number", value: "0308-9674919" },
    ],
    transferHint: "Send PKR 1,000 via EasyPaisa to the number below, then upload the payment screenshot.",
  },
  {
    id: "bank",
    name: "Bank Transfer",
    logo: "/images/banks/meezan.png",
    details: [
      { label: "Bank Name", value: "Meezan Bank" },
      { label: "Account Title", value: "Arwa Institute" },
      { label: "Account No", value: "1234-5678901234" },
    ],
    transferHint: "Transfer PKR 1,000 to the Meezan Bank account below, then upload the payment screenshot.",
  },
];

export const COURSES = [
  "Canva Design",
  "CapCut Video Editing",
  "UI/UX Design (Figma)",
  "Digital Marketing",
  "YouTube Channel & Earning",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe Premiere Pro",
  "Adobe After Effects",
  "AI Generative Tools",
];

export const QUALIFICATIONS = [
  "Matriculation",
  "Intermediate",
  "Bachelors",
  "Masters",
  "Other",
];
