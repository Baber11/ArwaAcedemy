import Link from "next/link";
import { SITE } from "@/lib/constants";

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy relative overflow-hidden">
        <div className="container-site py-16 md:py-20 relative z-10">
          <p className="text-yellow text-xs font-bold tracking-[0.25em] uppercase mb-3">
            Get In Touch
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Contact <span className="text-sky">Us</span>
          </h1>
          <p className="text-white/75 text-sm md:text-base max-w-lg leading-relaxed">
            Have questions about courses, fees, or schedules? Reach out — we&apos;re happy to
            help you choose the right path.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid lg:grid-cols-2 gap-10">
          <div className="space-y-5">
            <InfoCard title="Phone" value={SITE.phone} href={SITE.phoneHref} />
            <InfoCard title="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
            <InfoCard title="Website" value={SITE.website} href={SITE.websiteHref} />
            <InfoCard title="Address" value={SITE.address} />
            <div className="flex flex-wrap gap-3 pt-2">
              <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-yellow">
                Chat on WhatsApp
              </a>
              <Link href="/registration" className="btn-navy">
                Enroll Now
              </Link>
            </div>
          </div>

          {/* Design-only contact form — functionality later */}
          <div className="bg-white rounded-2xl card-shadow border border-border/50 overflow-hidden">
            <div className="bg-navy px-6 py-4">
              <h2 className="text-white font-bold">Send Us a Message</h2>
              <p className="text-white/65 text-xs mt-0.5">
                Form functionality will be connected later.
              </p>
            </div>
            <form className="p-6 space-y-4" action="#">
              <label className="block">
                <span className="text-navy text-xs font-semibold mb-1.5 block">Full Name</span>
                <input
                  className="w-full rounded-lg border border-border bg-bg-soft px-3 py-2.5 text-sm outline-none focus:border-blue"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="text-navy text-xs font-semibold mb-1.5 block">Email</span>
                <input
                  type="email"
                  className="w-full rounded-lg border border-border bg-bg-soft px-3 py-2.5 text-sm outline-none focus:border-blue"
                  placeholder="you@gmail.com"
                />
              </label>
              <label className="block">
                <span className="text-navy text-xs font-semibold mb-1.5 block">Phone</span>
                <input
                  type="tel"
                  className="w-full rounded-lg border border-border bg-bg-soft px-3 py-2.5 text-sm outline-none focus:border-blue"
                  placeholder="03XX-XXXXXXX"
                />
              </label>
              <label className="block">
                <span className="text-navy text-xs font-semibold mb-1.5 block">Message</span>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-border bg-bg-soft px-3 py-2.5 text-sm outline-none focus:border-blue resize-y"
                  placeholder="How can we help?"
                />
              </label>
              <button type="button" className="btn-navy w-full py-3">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({
  title,
  value,
  href,
}: {
  title: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="bg-bg-soft rounded-xl border border-border/60 p-4">
      <p className="text-blue text-xs font-bold uppercase tracking-wider mb-1">{title}</p>
      <p className="text-navy text-sm font-medium leading-relaxed">{value}</p>
    </div>
  );
  if (href) {
    return (
      <a href={href} className="block hover:opacity-90 transition-opacity">
        {content}
      </a>
    );
  }
  return content;
}
