import Image from "next/image";
import RegistrationForm from "@/components/RegistrationForm";
import { JourneyCTA } from "@/components/JourneyCTA";
import { SITE } from "@/lib/constants";

const WHY_ITEMS = [
  {
    title: "Industry Relevant Courses",
    desc: "Skills that match today's freelance & job market.",
    icon: "🎓",
  },
  {
    title: "100% Practical Training",
    desc: "Learn by doing with real projects every class.",
    icon: "💻",
  },
  {
    title: "Expert Instructors",
    desc: "Guided by professionals with industry experience.",
    icon: "🏅",
  },
  {
    title: "Career Support",
    desc: "Help with freelancing, portfolios & job readiness.",
    icon: "💼",
  },
] as const;

export default function RegistrationPage() {
  return (
    <>
      <section className="w-full max-w-none">
        <Image
          src="/images/hero-registration.png"
          alt="Registration Now Open"
          width={1280}
          height={560}
          priority
          className="w-full h-auto block"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </section>

      <section className="section-pad bg-bg-soft">
        <div className="container-site grid lg:grid-cols-[280px_1fr] xl:grid-cols-[300px_1fr] gap-6 lg:gap-8 items-start">
          <aside className="space-y-4 lg:sticky lg:top-24">
            <div className="bg-[#e8f1fb] rounded-2xl p-5">
              <h2 className="text-navy font-bold text-lg mb-4">Why Choose Arwa Institute?</h2>
              <ul className="space-y-4">
                {WHY_ITEMS.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="w-10 h-10 rounded-full bg-navy text-white flex items-center justify-center shrink-0 text-base">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-navy font-semibold text-sm">{item.title}</p>
                      <p className="text-muted text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-navy to-navy-mid p-6 text-center">
              <p className="font-script text-white text-2xl sm:text-3xl leading-snug">
                Your Future Starts Here
              </p>
              <span className="text-yellow text-xl mt-2 inline-block">✈</span>
            </div>

            <div className="bg-white rounded-2xl p-5 card-shadow border border-border/50 flex gap-3 items-start">
              <span className="w-10 h-10 rounded-full bg-sky/20 text-blue flex items-center justify-center shrink-0">
                📞
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
          </aside>

          <RegistrationForm />
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-site grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <p className="font-script text-[#1a6dff] text-4xl sm:text-5xl md:text-6xl leading-none mb-5">
              Kickstart Your Career
            </p>
            <p className="inline-block bg-[#F5C518] text-navy font-black text-2xl sm:text-3xl tracking-wide uppercase px-5 py-2 -rotate-1 shadow-sm">
              This Summer!
            </p>
          </div>
          <div className="w-full max-w-md mx-auto order-1 md:order-2">
            <Image
              src="/images/student-hijab-certificate.png"
              alt="ARWA graduate"
              width={480}
              height={520}
              className="w-full h-auto block"
              sizes="400px"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>

      <JourneyCTA />
    </>
  );
}
