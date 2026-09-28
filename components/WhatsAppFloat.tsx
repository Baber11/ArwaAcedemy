import { SITE } from "@/lib/constants";

export default function WhatsAppFloat() {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center anim-float anim-pulse-soft hover:scale-110 transition-transform"
    >
      <svg width="28" height="28" viewBox="0 0 32 32" fill="white" aria-hidden>
        <path d="M16.1 3C9.3 3 3.8 8.5 3.8 15.3c0 2.1.5 4.1 1.6 5.9L3.5 29l7.9-2.1c1.7.9 3.6 1.4 5.5 1.4 6.8 0 12.3-5.5 12.3-12.3S22.9 3 16.1 3zm0 22.4c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-4.7 1.2 1.3-4.5-.2-.3c-1-1.5-1.5-3.3-1.5-5.1 0-5.6 4.6-10.2 10.2-10.2s10.2 4.6 10.2 10.2-4.5 10.2-10.2 10.2zm5.6-7.6c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6 0-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.2-.2.3-.3.5-.5.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 2 3.1 4.9 4.3 1.7.7 2.4.8 3.2.7.5-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4 0-.1-.3-.2-.6-.4z" />
      </svg>
    </a>
  );
}
