import Image from "next/image";
import Link from "next/link";
import { JourneyCTA } from "@/components/JourneyCTA";

const FEATURES = [
  {
    title: "Practical Learning",
    desc: "100% Practical classes with live projects",
  },
  {
    title: "Expert Instructors",
    desc: "Industry professionals with real experience",
  },
  {
    title: "Career Support",
    desc: "Job & freelancing opportunities",
  },
  {
    title: "Student Success",
    desc: "Building skills that create the future",
  },
] as const;

const CHECKS = [
  "All classes are 100% practical.",
  "Career-focused courses for real-world success.",
  "Professional instructors with industry experience.",
  "Supportive environment for growth and learning.",
  "Preparing students for jobs & freelancing.",
];

const TIMINGS = [
  {
    title: "Class Days",
    desc: "M/W/F or T/T/S (Students can select)",
    bg: "bg-[#e8f2ff]",
  },
  {
    title: "Class Duration",
    desc: "1 Hour Per Class",
    bg: "bg-[#e9f8ef]",
  },
  {
    title: "Available Time",
    desc: "11:00 AM To 09:00 PM",
    bg: "bg-[#fff8e6]",
  },
  {
    title: "Class Type",
    desc: "All Physical Classes",
    bg: "bg-[#f3eaff]",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="w-full max-w-none">
        <Image
          src="/images/hero-about.png"
          alt="About Arwa Institute"
          width={1280}
          height={560}
          priority
          className="w-full h-auto block"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </section>

      {/* Feature cards overlapping hero */}
      <section className="relative z-10 -mt-10 md:-mt-14 mb-4">
        <div className="container-site">
          <div className="bg-white rounded-2xl card-shadow border border-border/50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-border">
            {FEATURES.map((f) => (
              <div key={f.title} className="p-5 md:p-6 text-center">
                <div className="mx-auto mb-3 w-11 h-11 rounded-full bg-sky/15 text-blue flex items-center justify-center">
                  <span className="text-lg">★</span>
                </div>
                <h3 className="text-navy font-bold text-sm mb-1">{f.title}</h3>
                <p className="text-muted text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-pad">
        <div className="container-site grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
          <div className="relative aspect-[3/4] max-h-[520px] rounded-2xl overflow-hidden card-shadow">
            <Image
              src="/images/student-laptop-classroom.png"
              alt="Student learning at ARWA Institute"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Who We Are</h2>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Arwa Institute of Advance Multimedia is a Karachi-based training institute focused
              on practical, career-oriented education. We help students learn modern creative and
              digital skills that open doors to freelancing, employment, and online earning.
            </p>
            <ul className="space-y-3 mb-8">
              {CHECKS.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm text-navy">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-blue text-white flex items-center justify-center text-[10px] shrink-0">
                    ✓
                  </span>
                  {c}
                </li>
              ))}
            </ul>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border-2 border-sky/40 p-5">
                <p className="text-blue font-bold mb-2">Our Mission</p>
                <p className="text-muted text-xs leading-relaxed">
                  To empower students with practical multimedia skills so they can build
                  successful careers and create opportunities for themselves.
                </p>
              </div>
              <div className="rounded-xl border-2 border-sky/40 p-5">
                <p className="text-blue font-bold mb-2">Our Vision</p>
                <p className="text-muted text-xs leading-relaxed">
                  To become a leading institute for advance multimedia education, known for
                  quality training and student success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timings */}
      <section className="section-pad bg-bg-soft">
        <div className="container-site">
          <div className="text-center mb-10">
            <p className="text-blue text-2xl mb-2">📅</p>
            <h2 className="text-3xl font-bold text-navy">Our Timings & Schedule</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {TIMINGS.map((t) => (
              <div key={t.title} className={`${t.bg} rounded-xl p-5`}>
                <h3 className="text-navy font-bold text-sm mb-1">{t.title}</h3>
                <p className="text-muted text-xs leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl overflow-hidden card-shadow border border-border/50">
            <div className="bg-[#dcebff] px-5 py-3">
              <h3 className="text-navy font-bold text-sm">Choose Your Preferred Days</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-navy">
                    <th className="px-5 py-3 font-semibold">Option</th>
                    <th className="px-5 py-3 font-semibold">Days</th>
                    <th className="px-5 py-3 font-semibold">Select By Student</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-border">
                    <td className="px-5 py-3">Option 1</td>
                    <td className="px-5 py-3">Monday / Wednesday / Friday</td>
                    <td className="px-5 py-3 text-blue font-bold">✓</td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3">Option 2</td>
                    <td className="px-5 py-3">Tuesday / Thursday / Saturday</td>
                    <td className="px-5 py-3 text-blue font-bold">✓</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-navy text-white text-xs md:text-sm px-5 py-3 flex gap-2 items-start">
              <span className="font-bold">ℹ</span>
              <p>
                Students can choose either Option 1 (M/W/F) or Option 2 (T/T/S) according to
                their convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learn Practice Earn banner */}
      <section className="py-12 md:py-16">
        <div className="container-site text-center">
          <span className="inline-block bg-navy text-white text-xs font-bold tracking-widest px-4 py-2 rounded-full mb-6">
            ALL POPULAR COURSES
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-navy mb-6 tracking-tight">
            LEARN <span className="text-yellow">•</span>{" "}
            <span className="text-yellow">PRACTICE</span>{" "}
            <span className="text-yellow">•</span> EARN
          </h2>
          <div className="bg-yellow text-navy font-bold text-xs md:text-sm tracking-wide py-3 px-4 rounded-md">
            PRACTICAL TRAINING | EXPERT TRAINERS | CAREER BOOST
          </div>
          <div className="mt-8">
            <Link href="/courses" className="btn-navy">
              View Courses
            </Link>
          </div>
        </div>
      </section>

      <JourneyCTA />
    </>
  );
}
