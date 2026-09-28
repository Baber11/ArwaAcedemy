import Image from "next/image";
import Link from "next/link";
import { HomeCourseCard } from "@/components/CourseCards";
import Reveal from "@/components/Reveal";
import { POPULAR_COURSES } from "@/lib/courses";

const FEATURES = [
  {
    title: "Expert Trainers",
    desc: "Learn from certified industry professionals.",
    icon: "trainer",
  },
  {
    title: "Practical Learning",
    desc: "Hands-on projects and real-world experience.",
    icon: "practical",
  },
  {
    title: "Certification",
    desc: "Get recognized certificates upon completion.",
    icon: "cert",
  },
  {
    title: "Career Growth",
    desc: "Boost your skills and secure your future.",
    icon: "career",
  },
] as const;

const WHY = [
  { title: "Industry Relevant Skills", icon: "skills" },
  { title: "Practical Training", icon: "practice" },
  { title: "Expert Mentorship", icon: "mentor" },
  { title: "Career Support", icon: "support" },
  { title: "Affordable Fees", icon: "fees" },
] as const;

export default function HomePage() {
  return (
    <>
      <section className="w-full max-w-none hero-enter">
        <Link href="/registration" className="block w-full" aria-label="Enroll Now">
          <Image
            src="/images/hero-home.png"
            alt="When opportunities blur, adjust your aim — Join ARWA Institute"
            width={1280}
            height={578}
            priority
            className="w-full h-auto block"
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </Link>
      </section>

      <section className="relative z-10 -mt-4 sm:-mt-6 md:-mt-8 px-3 sm:px-4 md:px-6">
        <div className="mx-auto w-full max-w-[1200px]">
          <Reveal className="bg-white rounded-xl shadow-[0_8px_28px_rgba(0,33,94,0.08)] border border-[#e6ebf2]/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#e6ebf2]">
            {FEATURES.map((f, i) => (
              <div
                key={f.title}
                className={`flex gap-3 p-4 sm:p-5 items-start stagger-${i + 1}`}
              >
                <span className="anim-float-slow" style={{ animationDelay: `${i * 0.4}s` }}>
                  <FeatureIcon type={f.icon} />
                </span>
                <div>
                  <h3 className="font-semibold text-[#00215E] text-sm mb-1">{f.title}</h3>
                  <p className="text-[#5c667a] text-xs leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
          <Reveal className="text-center mb-8 md:mb-10">
            <p className="text-[#1a6dff] text-xs font-semibold tracking-[0.2em] uppercase mb-2">
              Our Courses
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00215E]">
              Popular <span className="text-[#1a6dff]">Courses</span>
            </h2>
            <p className="text-[#5c667a] mt-3 max-w-xl mx-auto text-sm">
              Industry-focused courses designed to build your skills and secure your future.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-5">
            {POPULAR_COURSES.map((course, i) => (
              <Reveal key={course.id} delay={i * 80}>
                <HomeCourseCard course={course} />
              </Reveal>
            ))}
          </div>

          <Reveal className="flex justify-center mt-8 md:mt-10" delay={200}>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 bg-[#ffc107] text-[#111] font-bold text-sm px-6 py-3 rounded-md hover:bg-[#fecb00] btn-yellow"
            >
              View All Courses →
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="pb-8 md:pb-12">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
          <Reveal>
            <Image
              src="/images/banner-limited-seats.png"
              alt="Limited seats available"
              width={1200}
              height={400}
              className="w-full h-auto block rounded-xl sm:rounded-2xl"
              sizes="(max-width: 1200px) 100vw, 1200px"
              style={{ width: "100%", height: "auto" }}
            />
          </Reveal>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-[#f5f8fc]">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6">
          <Reveal className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00215E]">
              WHY CHOOSE <span className="text-[#1a6dff]">ARWA?</span>
            </h2>
            <p className="text-[#5c667a] mt-3 text-sm">
              We are committed to provide quality education and practical training.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {WHY.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div className="bg-white rounded-xl p-4 text-center shadow-[0_8px_28px_rgba(0,33,94,0.06)] card-lift h-full">
                  <div className="mx-auto mb-3 w-11 h-11 rounded-full bg-[#3abef9]/15 flex items-center justify-center text-[#1a6dff] anim-float-slow">
                    <WhyIcon type={item.icon} />
                  </div>
                  <p className="text-[#00215E] text-xs sm:text-sm font-semibold leading-snug">
                    {item.title}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20">
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 grid md:grid-cols-2 gap-8 items-center">
          <Reveal>
            <div className="overflow-hidden rounded-2xl shadow-[0_8px_28px_rgba(0,33,94,0.08)] img-zoom">
              <Image
                src="/images/institute-building.png"
                alt="ARWA Institute building"
                width={800}
                height={600}
                className="w-full h-auto block"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00215E] mb-4">
                ABOUT <span className="text-[#1a6dff]">ARWA</span>
              </h2>
              <p className="text-[#5c667a] text-sm leading-relaxed mb-4">
                Arwa Institute of Advance Multimedia is dedicated to empowering students with
                industry-ready skills in graphic design, video editing, UI/UX, digital marketing,
                and more.
              </p>
              <p className="text-[#5c667a] text-sm leading-relaxed mb-6">
                Our hands-on training approach prepares Matric & Intermediate students for
                freelancing, jobs, and online earning opportunities with expert mentorship and
                recognized certification.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-md bg-[#00215E] text-white text-sm font-semibold px-5 py-3 hover:bg-[#003087] btn-navy"
              >
                Learn More About Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function FeatureIcon({ type }: { type: string }) {
  const common = "w-8 h-8 shrink-0 text-[#1a6dff] block";
  if (type === "trainer") {
    return (
      <svg className={common} viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="14" r="6" stroke="currentColor" strokeWidth="2" />
        <path d="M8 32c2-6 6-9 12-9s10 3 12 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "practical") {
    return (
      <svg className={common} viewBox="0 0 40 40" fill="none">
        <rect x="8" y="10" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M14 28v4h12v-4" stroke="currentColor" strokeWidth="2" />
      </svg>
    );
  }
  if (type === "cert") {
    return (
      <svg className={common} viewBox="0 0 40 40" fill="none">
        <rect x="10" y="8" width="20" height="24" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M15 16h10M15 21h10M15 26h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg className={common} viewBox="0 0 40 40" fill="none">
      <path d="M20 8l3 7h7l-5.5 4.5 2 7.5L20 23l-6.5 4 2-7.5L10 15h7l3-7z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function WhyIcon({ type }: { type: string }) {
  const props = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none" as const };
  if (type === "skills") {
    return (
      <svg {...props}>
        <path d="M12 3l2 5h5l-4 3.5 1.5 5L12 14l-4.5 2.5L9 11.5 5 8h5l2-5z" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }
  if (type === "practice") {
    return (
      <svg {...props}>
        <rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "mentor") {
    return (
      <svg {...props}>
        <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M5 19c1.5-3.2 4-5 7-5s5.5 1.8 7 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "support") {
    return (
      <svg {...props}>
        <rect x="5" y="7" width="14" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 7V5.5A3 3 0 0 1 15 5.5V7" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }
  return (
    <svg {...props}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
