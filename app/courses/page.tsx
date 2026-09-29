import Image from "next/image";
import { GridCourseCard } from "@/components/CourseCards";
import {
  AllCoursesIncludeCard,
  ConsultationBanner,
  SpecialOfferCard,
} from "@/components/DesignBlocks";
import Reveal from "@/components/Reveal";
import { ALL_COURSES } from "@/lib/courses";

const HERO_FEATURES = [
  { title: "Practical Learning", desc: "100% Practical Classes", icon: "practice" },
  { title: "Expert Trainers", desc: "Industry Professionals", icon: "trainer" },
  { title: "Certification", desc: "Recognized Certificates", icon: "cert" },
] as const;

const STATS = [
  { value: "50+", label: "Courses Available", icon: "book" },
  { value: "500+", label: "Students Enrolled", icon: "users" },
  { value: "100+", label: "Projects Completed", icon: "project" },
  { value: "Expert", label: "Trainers", icon: "trainer" },
  { value: "100%", label: "Practical Learning", icon: "practice" },
  { value: "Certificate", label: "Included", icon: "cert" },
] as const;

export default function CoursesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy doodle-grid">
        <div className="container-site relative grid lg:grid-cols-2 gap-6 lg:gap-8 items-center py-10 sm:py-12 md:py-16">
          <Reveal className="text-white order-2 lg:order-1" delay={80}>
            <p className="text-yellow text-xs font-bold tracking-[0.25em] uppercase mb-3">
              Our Courses
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Learn. Practice. <span className="text-sky">Get Skilled.</span>
            </h1>
            <p className="text-white/80 text-sm md:text-base max-w-md mb-6 sm:mb-8 leading-relaxed">
              Industry-focused courses with practical training to help you build your career and
              earn online.
            </p>
            <div className="flex flex-wrap gap-3">
              {HERO_FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="flex items-center gap-2.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm px-3.5 py-2.5 min-w-[150px]"
                >
                  <span className="w-8 h-8 rounded-full bg-sky/20 text-sky flex items-center justify-center shrink-0">
                    <HeroFeatIcon type={f.icon} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold leading-tight">{f.title}</p>
                    <p className="text-[11px] text-white/65">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <p className="absolute top-0 right-2 md:right-8 font-script text-yellow text-xl sm:text-2xl md:text-3xl rotate-[-8deg] z-10 drop-shadow anim-bob">
              Your Future Starts Here!
            </p>
            <div className="relative w-[200px] sm:w-[260px] md:w-[320px] h-[260px] sm:h-[340px] md:h-[400px] anim-float-slow">
              <Image
                src="/images/student-pointing.png"
                alt="ARWA student"
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 640px) 200px, 320px"
                priority
              />
            </div>
          </Reveal>
        </div>
        <div className="h-6 sm:h-8 bg-white rounded-t-[28px] sm:rounded-t-[40px] relative z-10" />
      </section>

      <section className="section-pad pt-8">
        <div className="container-site">
          <Reveal className="text-center mb-10">
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="h-px w-12 bg-blue/40" />
              <p className="text-blue text-xs font-bold tracking-[0.2em] uppercase">
                Explore Our Courses
              </p>
              <span className="h-px w-12 bg-blue/40" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Popular <span className="text-blue">Courses</span>
            </h2>
            <p className="text-muted mt-3 text-sm max-w-lg mx-auto">
              Choose from our carefully designed programs to launch your multimedia career.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {ALL_COURSES.map((course, i) => (
              <Reveal key={course.id} delay={(i % 4) * 60}>
                <GridCourseCard course={course} />
              </Reveal>
            ))}
            <Reveal delay={80} className="sm:col-span-2">
              <AllCoursesIncludeCard />
            </Reveal>
            <Reveal delay={120}>
              <SpecialOfferCard />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-bg-soft border-y border-border">
        <div className="container-site py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center flex flex-col items-center gap-2">
              <span className="w-10 h-10 rounded-full bg-sky/15 text-blue flex items-center justify-center">
                <HeroFeatIcon type={s.icon} />
              </span>
              <p className="text-navy font-extrabold text-lg leading-none">{s.value}</p>
              <p className="text-muted text-xs">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <Reveal>
            <ConsultationBanner />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function HeroFeatIcon({ type }: { type: string }) {
  const props = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none" as const };
  if (type === "trainer" || type === "users") {
    return (
      <svg {...props}>
        <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M5 19c1.5-3 4-4.5 7-4.5S17.5 16 19 19"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === "cert") {
    return (
      <svg {...props}>
        <rect x="6" y="3" width="12" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 8h6M9 12h6M9 16h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "book") {
    return (
      <svg {...props}>
        <path
          d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5V5.5z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }
  if (type === "project") {
    return (
      <svg {...props}>
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
    <svg {...props}>
      <rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
