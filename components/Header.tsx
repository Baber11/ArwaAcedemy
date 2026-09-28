"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e8eef5] shadow-[0_1px_8px_rgba(0,33,94,0.05)]">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 h-[70px] md:h-[78px]">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt={SITE.name}
            width={159}
            height={57}
            className="h-[42px] sm:h-[48px] w-auto"
            priority
          />
        </Link>

        <nav className="hidden xl:flex items-center gap-7">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[14px] font-medium whitespace-nowrap ${
                  active ? "text-[#00215E]" : "text-[#00215E]/80 hover:text-[#00215E]"
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] rounded-full bg-[#00215E]" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-1.5 text-[#00215E] text-[13px] font-semibold"
          >
            <PhoneIcon />
            {SITE.phone}
          </a>
          <Link
            href="/registration"
            className="inline-flex items-center justify-center rounded-md bg-[#00215E] text-white text-[13px] font-semibold px-4 py-2.5 hover:bg-[#003087]"
          >
            Enroll Now
          </Link>
        </div>

        <button
          type="button"
          className="xl:hidden w-10 h-10 flex items-center justify-center text-[#00215E]"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden border-t border-[#e8eef5] bg-white">
          <nav className="px-4 py-3 flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-2.5 text-sm font-medium ${
                    active ? "bg-blue-50 text-[#00215E]" : "text-[#00215E]/80"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a href={SITE.phoneHref} className="px-3 py-2.5 text-sm font-semibold text-[#00215E]">
              {SITE.phone}
            </a>
            <Link
              href="/registration"
              onClick={() => setOpen(false)}
              className="mt-1 mb-1 rounded-md bg-[#00215E] text-white text-center text-sm font-semibold py-2.5"
            >
              Enroll Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
    </svg>
  );
}
function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
