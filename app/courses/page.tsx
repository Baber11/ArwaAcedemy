import Image from "next/image";
import Link from "next/link";
import { GridCourseCard } from "@/components/CourseCards";
import Reveal from "@/components/Reveal";
import { ALL_COURSES } from "@/lib/courses";
import { SITE } from "@/lib/constants";

const HERO_FEATURES = [
  { title: "Practical Learning", desc: "100% Practical Classes" },
  { title: "Expert Trainers", desc: "Industry Professionals" },
  { title: "Certification", desc: "Recognized Certificates" },
] as const;

const STATS = [
  { value: "50+", label: "Courses Available" },
  { value: "500+", label: "Students Enrolled" },
  { value: "100+", label: "Projects Completed" },
  { value: "Expert", label: "Trainers" },
  { value: "100%", label: "Practical Learning" },
  { value: "Certificate", label: "Included" },
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
              Industry-focused courses with practical training to help you build your career
              and earn online.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {HERO_FEATURES.map((f) => (
                <div key={f.title} className="flex items-start gap-2.5">
                  <span className="mt-0.5 w-8 h-8 rounded-full border border-white/40 flex items-center justify-center shrink-0">
                    <CheckMini />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{f.title}</p>
                    <p className="text-xs text-white/65">{f.desc}</p>
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
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="h-px w-12 bg-yellow" />
              <p className="text-yellow text-xs font-bold tracking-[0.2em] uppercase">
                Explore Our Courses
              </p>
              <span className="h-px w-12 bg-yellow" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Popular <span className="text-blue">Courses</span>
            </h2>
            <p className="text-muted mt-3 text-sm max-w-lg mx-auto">
              Choose from our carefully designed programs to launch your multimedia career.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {ALL_COURSES.map((course, i) => (
              <Reveal key={course.id} delay={(i % 4) * 60}>
                <GridCourseCard course={course} />
              </Reveal>
            ))}

            <article className="bg-navy rounded-xl p-5 text-white flex flex-col relative overflow-hidden min-h-[320px]">
              <h3 className="text-yellow font-bold text-lg mb-4">All Courses Include</h3>
              <ul className="space-y-2.5 text-sm flex-1 relative z-10">
                {[
                  "100% Practical Training",
                  "Expert Instructors",
                  "Recognized Certificate",
                  "Career Guidance",
                  "Project-Based Learning",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-yellow">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/registration" className="btn-yellow mt-4 w-fit relative z-10">
                Enroll Now →
              </Link>
              <div className="absolute bottom-0 right-0 w-28 h-28 opacity-80">
                <Image
                  src="/images/grad-cap-diploma.png"
                  alt=""
                  fill
                  className="object-contain"
                  sizes="112px"
                />
              </div>
            </article>

            <article className="bg-white rounded-xl card-shadow border border-border/60 p-5 flex flex-col relative overflow-hidden min-h-[320px]">
              <span className="absolute top-0 left-0 bg-red text-white text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-br-lg">
                SPECIAL OFFER
              </span>
              <div className="mt-8 flex-1">
                <h3 className="text-navy font-extrabold text-2xl leading-tight mb-3">
                  Save More
                  <br />
                  Learn More!
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  Enroll in multiple courses and get exclusive discounts. Ask our advisors for
                  current bundle offers.
                </p>
              </div>
              <Link href="/registration" className="btn-navy w-full">
                Claim Offer
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-bg-soft border-y border-border">
        <div className="container-site py-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-navy font-extrabold text-xl">{s.value}</p>
              <p className="text-muted text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <div className="relative rounded-2xl bg-navy overflow-hidden px-6 py-10 md:px-12 md:py-12 grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-52 md:h-60">
              <Image
                src="/images/consultation-books.png"
                alt="Books and graduation cap"
                fill
                className="object-contain"
                sizes="400px"
              />
            </div>
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Not Sure Which Course is Right for You?
              </h2>
              <p className="text-sky text-sm mb-6">
                Contact our advisors and get free career guidance.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-yellow">
                  Get Free Consultation →
                </Link>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center gap-2 border border-white/50 text-white text-sm font-semibold px-4 py-2.5 rounded-md hover:bg-white/10 transition-colors"
                >
                  {SITE.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CheckMini() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12l5 5L20 7"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
