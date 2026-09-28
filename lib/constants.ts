export const SITE = {
  name: "ARWA Institute of Advance Multimedia",
  shortName: "ARWA",
  phone: "0308-9674919",
  phoneHref: "tel:03089674919",
  email: "info@arwainstitute.com",
  website: "www.arwainstitute.com",
  websiteHref: "https://www.arwainstitute.com",
  address: "Office No 21, Crown Shopping Centre Shadman Town Karachi",
  whatsapp: "https://wa.me/923089674919",
  socials: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    linkedin: "#",
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Our Courses" },
  { href: "/registration", label: "Registration" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
] as const;

export const FOOTER_COURSES = [
  { href: "/courses", label: "Graphic Design" },
  { href: "/courses", label: "Video Editing" },
  { href: "/courses", label: "UI/UX Design" },
  { href: "/courses", label: "Digital Marketing" },
  { href: "/courses", label: "All Courses" },
] as const;
