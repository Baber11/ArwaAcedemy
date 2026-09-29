import Image from "next/image";
import RegistrationForm from "@/components/RegistrationForm";
import { JourneyCTA } from "@/components/JourneyCTA";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/constants";

const WHY_ITEMS = [
  {
    title: "Industry Relevant Courses",
    desc: "Learn skills that are in demand in the real world.",
    icon: "grad",
  },
  {
    title: "100% Practical Training",
    desc: "No boring theory, only hands-on practice.",
    icon: "laptop",
  },
  {
    title: "Expert Instructors",
    desc: "Learn from experienced professionals.",
    icon: "badge",
  },
  {
    title: "Career Support",
    desc: "Get guidance for freelancing and job opportunities.",
    icon: "briefcase",
  },
] as const;

export default function RegistrationPage() {
  return (
    <>
      <section className="relative w-full max-w-none hero-enter">
        <Image
          src="/images/hero-registration.png"
          alt="Registration Now Open"
          width={1280}
          height={514}
          priority
          className="w-full h-auto block"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </section>

      <section className="section-pad bg-bg-soft">
        <div className="container-site grid lg:grid-cols-[300px_1fr] gap-6 lg:gap-8 items-start">
          <aside className="space-y-4 lg:sticky lg:top-24">
            <Reveal>
              <div className="bg-white rounded-2xl p-5 card-shadow border border-border/50">
                <h2 className="text-navy font-bold text-lg mb-5">Why Choose Arwa Institute?</h2>
                <ul className="space-y-4">
                  {WHY_ITEMS.map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <span className="w-10 h-10 rounded-lg bg-navy text-white flex items-center justify-center shrink-0">
                        <WhyIcon type={item.icon} />
                      </span>
                      <div>
                        <p className="text-navy font-semibold text-sm">{item.title}</p>
                        <p className="text-muted text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="rounded-2xl bg-gradient-to-br from-navy to-navy-mid p-6 text-center">
                <p className="font-script text-white text-2xl sm:text-3xl leading-snug">
                  Your Future Starts Here
                </p>
                <span className="text-yellow text-xl mt-2 inline-block anim-bob">✈</span>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="bg-white rounded-2xl p-5 card-shadow border border-border/50 flex gap-3 items-start">
                <span className="w-10 h-10 rounded-full bg-sky/20 text-blue flex items-center justify-center shrink-0">
                  <PhoneIcon />
                </span>
                <div>
                  <p className="text-navy font-bold text-sm mb-1">Need Help?</p>
                  <p className="text-muted text-xs leading-relaxed">
                    Call Us{" "}
                    <a href={SITE.phoneHref} className="text-blue font-semibold">
                      {SITE.phone}
                    </a>
                    . We&apos;re here to assist you!
                  </p>
                </div>
              </div>
            </Reveal>
          </aside>

          <Reveal delay={60}>
            <RegistrationForm />
          </Reveal>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-site grid md:grid-cols-2 gap-8 items-center">
          <Reveal className="text-center md:text-left order-2 md:order-1">
            <p className="font-script text-[#1a6dff] text-4xl sm:text-5xl md:text-6xl leading-none mb-5">
              Kickstart Your Career
            </p>
            <p className="inline-block bg-[#F5C518] text-navy font-black text-2xl sm:text-3xl tracking-wide uppercase px-5 py-2 -rotate-1 shadow-sm">
              This Summer!
            </p>
          </Reveal>
          <Reveal className="w-full max-w-md mx-auto order-1 md:order-2" delay={100}>
            <Image
              src="/images/student-hijab-certificate.png"
              alt="ARWA graduate"
              width={480}
              height={520}
              className="w-full h-auto block"
              sizes="400px"
              style={{ width: "100%", height: "auto" }}
            />
          </Reveal>
        </div>
      </section>

      <JourneyCTA />
    </>
  );
}

function WhyIcon({ type }: { type: string }) {
  const p = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none" as const };
  if (type === "laptop") {
    return (
      <svg {...p}>
        <rect x="3" y="5" width="18" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M2 19h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "badge") {
    return (
      <svg {...p}>
        <circle cx="12" cy="9" r="5" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M8.5 13.5 7 20l5-2 5 2-1.5-6.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === "briefcase") {
    return (
      <svg {...p}>
        <rect x="3" y="7" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }
  return (
    <svg {...p}>
      <path
        d="M3 10l9-6 9 6v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M12 14v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
    </svg>
  );
}
