import Image from "next/image";
import Link from "next/link";
import { FOOTER_COURSES, NAV_LINKS, SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="container-site py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Image
            src="/images/logofooter.png"
            alt={SITE.name}
            width={542}
            height={184}
            className="h-12 sm:h-14 w-auto mb-4"
          />
          <p className="text-white/70 text-sm leading-relaxed mb-5 max-w-xs">
            Empowering students with practical multimedia skills for freelancing,
            jobs, and digital careers.
          </p>
          <div className="flex items-center gap-3">
            <Social href={SITE.socials.facebook} label="Facebook">
              <path d="M14 9h2V6h-2c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.2l.8-3H14V9c0-.6.4-1 1-1z" fill="currentColor" />
            </Social>
            <Social href={SITE.socials.instagram} label="Instagram">
              <path
                d="M12 8.2A3.8 3.8 0 1 0 12 15.8 3.8 3.8 0 0 0 12 8.2zm0 6.2a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8zm4.9-6.4a.9.9 0 1 1-1.8 0 .9.9 0 0 1 1.8 0zM12 5.5c-1.6 0-1.8 0-2.5.1-.7 0-1.1.1-1.5.3-.4.2-.8.4-1.1.7-.3.3-.5.7-.7 1.1-.2.4-.3.8-.3 1.5 0 .7-.1.9-.1 2.5s0 1.8.1 2.5c0 .7.1 1.1.3 1.5.2.4.4.8.7 1.1.3.3.7.5 1.1.7.4.2.8.3 1.5.3.7 0 .9.1 2.5.1s1.8 0 2.5-.1c.7 0 1.1-.1 1.5-.3.4-.2.8-.4 1.1-.7.3-.3.5-.7.7-1.1.2-.4.3-.8.3-1.5 0-.7.1-.9.1-2.5s0-1.8-.1-2.5c0-.7-.1-1.1-.3-1.5-.2-.4-.4-.8-.7-1.1-.3-.3-.7-.5-1.1-.7-.4-.2-.8-.3-1.5-.3-.7 0-.9-.1-2.5-.1zm0 1.3c1.6 0 1.8 0 2.4.1.6 0 .9.1 1.1.2.3.1.5.3.7.5.2.2.4.4.5.7.1.2.2.5.2 1.1.1.6.1.8.1 2.4s0 1.8-.1 2.4c0 .6-.1.9-.2 1.1-.1.3-.3.5-.5.7-.2.2-.4.4-.7.5-.2.1-.5.2-1.1.2-.6.1-.8.1-2.4.1s-1.8 0-2.4-.1c-.6 0-.9-.1-1.1-.2-.3-.1-.5-.3-.7-.5-.2-.2-.4-.4-.5-.7-.1-.2-.2-.5-.2-1.1-.1-.6-.1-.8-.1-2.4s0-1.8.1-2.4c0-.6.1-.9.2-1.1.1-.3.3-.5.5-.7.2-.2.4-.4.7-.5.2-.1.5-.2 1.1-.2.6-.1.8-.1 2.4-.1z"
                fill="currentColor"
              />
            </Social>
            <Social href={SITE.socials.youtube} label="YouTube">
              <path
                d="M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.9.9 1.6 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z"
                fill="currentColor"
              />
            </Social>
            <Social href={SITE.socials.linkedin} label="LinkedIn">
              <path
                d="M6.5 9H3.7v11h2.8V9zM5.1 4a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2zM20.3 14.3V20h-2.8v-5.3c0-1.3-.5-2.2-1.7-2.2-.9 0-1.4.6-1.7 1.2-.1.2-.1.5-.1.8V20H11.2s.04-9.7 0-10.7h2.8v1.5c.4-.6 1.1-1.7 2.8-1.7 2 0 3.5 1.3 3.5 4.2z"
                fill="currentColor"
              />
            </Social>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-base mb-4">Quick Links</h3>
          <ul className="space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 hover:text-yellow transition-colors"
                >
                  {link.label === "Contact" ? "Contact Us" : link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-base mb-4">Courses</h3>
          <ul className="space-y-2.5">
            {FOOTER_COURSES.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 hover:text-yellow transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-base mb-4">Contact Info</h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2.5 items-start">
              <IconPhone />
              <a href={SITE.phoneHref} className="hover:text-yellow">
                {SITE.phone}
              </a>
            </li>
            <li className="flex gap-2.5 items-start">
              <IconMail />
              <a href={`mailto:${SITE.email}`} className="hover:text-yellow">
                {SITE.email}
              </a>
            </li>
            <li className="flex gap-2.5 items-start">
              <IconWeb />
              <a
                href={SITE.websiteHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow"
              >
                {SITE.website}
              </a>
            </li>
            <li className="flex gap-2.5 items-start">
              <IconPin />
              <span>{SITE.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/55">
          <p>© 2025 Arwa Institute Of Advance Multimedia. All Rights Reserved.</p>
          <p className="font-script text-base text-white/80">Learn · Create · Earn</p>
        </div>
      </div>
    </footer>
  );
}

function Social({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-navy transition-colors"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden>
        {children}
      </svg>
    </a>
  );
}

function IconPhone() {
  return (
    <svg className="shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
    </svg>
  );
}
function IconMail() {
  return (
    <svg className="shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
    </svg>
  );
}
function IconWeb() {
  return (
    <svg className="shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm7.9 9h-3.2a15.4 15.4 0 0 0-1.3-5 8 8 0 0 1 4.5 5zM12 4c.9 1.2 1.7 2.9 2.1 5H9.9C10.3 6.9 11.1 5.2 12 4zM4.1 13h3.2c.2 1.8.7 3.5 1.3 5A8 8 0 0 1 4.1 13zm3.2-2H4.1a8 8 0 0 1 4.5-5c-.6 1.5-1.1 3.2-1.3 5zm2.6 2h4.2c-.2 1.8-.7 3.5-1.3 5h-1.6c-.6-1.5-1.1-3.2-1.3-5zm6.8 0h3.2a8 8 0 0 1-4.5 5c.6-1.5 1.1-3.2 1.3-5z" />
    </svg>
  );
}
function IconPin() {
  return (
    <svg className="shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}
