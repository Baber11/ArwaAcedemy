export type Course = {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: string;
  level?: string;
  accent: string;
  image: string;
  /** Optional full header thumbnail (Figma export) used on home cards */
  headerImage?: string;
};

export const POPULAR_COURSES: Course[] = [
  {
    id: "canva",
    title: "Canva",
    description: "Create stunning designs for social media, posters & branding.",
    duration: "03 Months",
    price: "PKR. 3,000",
    level: "Beginner",
    accent: "#00C4CC",
    image: "/images/courses/canva.png",
  },
  {
    id: "capcut",
    title: "CapCut",
    description: "Master video editing for Reels, TikTok & YouTube Shorts.",
    duration: "03 Months",
    price: "PKR. 3,000",
    level: "Beginner",
    accent: "#000000",
    image: "/images/courses/capcut.png",
    headerImage: "/images/courses/capcut-header.png",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    description: "Design modern websites & apps with Figma from scratch.",
    duration: "03 Months",
    price: "PKR. 4,000",
    level: "Intermediate",
    accent: "#A259FF",
    image: "/images/courses/figma.png",
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description: "Learn SEO, social ads & strategies to grow online business.",
    duration: "03 Months",
    price: "PKR. 5,000",
    level: "Intermediate",
    accent: "#FF6B35",
    image: "/images/courses/marketing.png",
  },
  {
    id: "youtube",
    title: "YouTube Channel",
    description: "Build & grow a YouTube channel with content that earns.",
    duration: "03 Months",
    price: "PKR. 4,000",
    level: "Beginner",
    accent: "#FF0000",
    image: "/images/courses/youtube.png",
  },
];

/** Our Courses page — built from promo banner creatives */
export const ALL_COURSES: Course[] = [
  {
    id: "summer-bootcamp",
    title: "Summer Bootcamp",
    description:
      "Flat 50% discount on all courses — Graphic Designing, Artificial Intelligence, Digital Marketing & Video Editing for Matric & Intermediate students.",
    duration: "08 Months",
    price: "PKR. 4,000",
    level: "Beginner",
    accent: "#1a6dff",
    image: "/images/banners/summer-bootcamp-discount.png",
  },
  {
    id: "canva-capcut-bootcamp",
    title: "Canva & CapCut Bootcamp",
    description:
      "Essential skills for a bright future — master Canva designing and CapCut video editing for Matric & Intermediate students.",
    duration: "03 Months",
    price: "PKR. 3,000",
    level: "Beginner",
    accent: "#00C4CC",
    image: "/images/banners/bootcamp-canva-capcut.png",
  },
  {
    id: "uiux-figma-photoshop",
    title: "UI/UX Design with Figma & Photoshop",
    description:
      "Learn UI/UX design with Figma and Adobe Photoshop — reserve your seat and build creative mastery.",
    duration: "03 Months",
    price: "PKR. 4,000",
    level: "Intermediate",
    accent: "#A259FF",
    image: "/images/banners/uiux-figma-photoshop.png",
  },
  {
    id: "bundle-5in1",
    title: "5 in 1 Bundle Offer",
    description:
      "5 powerful skills, 1 unbeatable price — Photoshop, Canva, Premiere, CapCut & Digital Media Marketing.",
    duration: "06 Months",
    price: "PKR. 5,000",
    level: "Beginner",
    accent: "#E31E24",
    image: "/images/banners/bundle-5in1.png",
  },
  {
    id: "ms-office-bootcamp",
    title: "Master MS Office Bootcamp",
    description:
      "Word, Excel, PowerPoint & Outlook — essential office skills for Matric & Intermediate students.",
    duration: "02 Months",
    price: "PKR. 3,000",
    level: "Beginner",
    accent: "#2B579A",
    image: "/images/banners/bootcamp-ms-office.png",
  },
  {
    id: "summer-apprenticeship",
    title: "Summer Apprenticeship Opportunity",
    description:
      "Hands-on training across Photoshop, Illustrator, Premiere, CapCut, Canva, After Effects, Figma, AI & Digital Media Marketing.",
    duration: "01 Year",
    price: "PKR. 5,000",
    level: "Beginner",
    accent: "#F5A623",
    image: "/images/banners/summer-apprenticeship.png",
  },
  {
    id: "digital-marketing-photoshop",
    title: "Digital Media Marketing & Photoshop",
    description:
      "Summer Bootcamp in Digital Media Marketing & Photoshop for Matric & Intermediate students.",
    duration: "03 Months",
    price: "PKR. 5,000",
    level: "Intermediate",
    accent: "#7B2CBF",
    image: "/images/banners/bootcamp-digital-marketing.png",
  },
  {
    id: "graphic-design-ai-premiere",
    title: "Graphic Designing, AI & Premiere",
    description:
      "Summer Bootcamp covering graphic designing, AI tools and Adobe Premiere for Matric & Intermediate students.",
    duration: "04 Months",
    price: "PKR. 5,500",
    level: "Intermediate",
    accent: "#6C63FF",
    image: "/images/banners/bootcamp-graphic-design.png",
  },
  {
    id: "generative-ai",
    title: "Generative AI",
    description:
      "Learn how AI works, create smarter solutions, and build innovative projects — the future is here.",
    duration: "02 Months",
    price: "PKR. 6,000",
    level: "Beginner",
    accent: "#E31E24",
    image: "/images/banners/generative-ai.png",
  },
  {
    id: "video-editing-bootcamp",
    title: "Video Editing Bootcamp",
    description:
      "Turn your creativity into a powerful skill — Premiere Pro & After Effects for Matric & Intermediate students.",
    duration: "03 Months",
    price: "PKR. 5,000",
    level: "Intermediate",
    accent: "#F5C518",
    image: "/images/banners/bootcamp-video-editing.png",
  },
  {
    id: "ecommerce-bootcamp",
    title: "E-Commerce Summer Bootcamp",
    description:
      "Master 2 powerful platforms — build your Shopify store and sell globally on Amazon.",
    duration: "06 Months",
    price: "PKR. 6,000",
    level: "Beginner",
    accent: "#96BF48",
    image: "/images/banners/bootcamp-ecommerce.png",
  },
  {
    id: "earn-youtube",
    title: "Earn from YouTube",
    description:
      "Channel creation, complete SEO, CapCut video editing & Canva designing — earn from YouTube and Fiverr.",
    duration: "03 Months",
    price: "PKR. 4,000",
    level: "Beginner",
    accent: "#FF0000",
    image: "/images/banners/earn-youtube.png",
  },
];
