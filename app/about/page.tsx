import Image from "next/image";
import { JourneyCTA } from "@/components/JourneyCTA";
import { LearnPracticeEarn } from "@/components/DesignBlocks";
import Reveal from "@/components/Reveal";

const FEATURES = [
  {
    title: "Practical Learning",
    desc: "100% Practical classes with live projects",
    icon: "cap",
  },
  {
    title: "Expert Instructors",
    desc: "Industry professionals with real experience",
    icon: "user",
  },
  {
    title: "Career Support",
    desc: "Job & freelancing opportunities",
    icon: "briefcase",
  },
  {
    title: "Student Success",
    desc: "Building skills that create the future",
    icon: "trophy",
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
    color: "text-blue",
    bg: "bg-[#e8f2ff]",
    icon: "calendar",
  },
  {
    title: "Class Duration",
    desc: "1 Hour Per Class",
    color: "text-emerald-600",
    bg: "bg-[#e9f8ef]",
    icon: "clock",
  },
  {
    title: "Available Time",
    desc: "11:00 AM To 09:00 PM",
    color: "text-orange-500",
    bg: "bg-[#fff8e6]",
    icon: "clock",
  },
  {
    title: "Class Type",
    desc: "All Physical Classes",
    color: "text-purple-600",
    bg: "bg-[#f3eaff]",
    icon: "user",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <section className="w-full max-w-none hero-enter">
        <Image
          src="/images/hero-about.png"
          alt="About Arwa Institute"
          width={1280}
          height={496}
          priority
          className="w-full h-auto block"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </section>

      <section className="relative z-10 -mt-8 md:-mt-12 mb-4 px-3 sm:px-4">
        <div className="mx-auto w-full max-w-[1200px]">
          <Reveal className="bg-white rounded-2xl card-shadow border border-border/50 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-border">
            {FEATURES.map((f, i) => (
              <div key={f.title} className="p-5 md:p-6 flex gap-3 items-start">
                <span
                  className="w-11 h-11 rounded-full bg-blue text-white flex items-center justify-center shrink-0 anim-float-slow"
                  style={{ animationDelay: `${i * 0.35}s` }}
                >
                  <FeatureIcon type={f.icon} />
                </span>
                <div>
                  <h3 className="text-navy font-bold text-sm mb-1">{f.title}</h3>
                  <p className="text-muted text-xs leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site grid lg:grid-cols-[0.9fr_1.2fr_0.85fr] gap-8 lg:gap-10 items-start">
          <Reveal>
            <div className="relative aspect-[4/5] max-h-[520px] rounded-2xl overflow-hidden card-shadow img-zoom">
              <Image
                src="/images/student-classroom.png"
                alt="Student learning at ARWA Institute"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Who We Are</h2>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Arwa Institute of Advance Multimedia is a Karachi-based training institute focused
                on practical, career-oriented education. We help students learn modern creative and
                digital skills that open doors to freelancing, employment, and online earning.
              </p>
              <ul className="space-y-3">
                {CHECKS.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-sm text-navy">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-blue text-white flex items-center justify-center text-[10px] shrink-0">
                      ✓
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={140} className="space-y-4">
            <div className="rounded-xl border-2 border-sky/40 p-5">
              <div className="w-10 h-10 rounded-lg border-2 border-blue text-blue flex items-center justify-center mb-3">
                <MissionIcon />
              </div>
              <p className="text-navy font-bold mb-2">Our Mission</p>
              <p className="text-muted text-xs leading-relaxed">
                To empower students with practical multimedia skills so they can build successful
                careers and create opportunities for themselves.
              </p>
            </div>
            <div className="rounded-xl border-2 border-sky/40 p-5">
              <div className="w-10 h-10 rounded-lg border-2 border-blue text-blue flex items-center justify-center mb-3">
                <VisionIcon />
              </div>
              <p className="text-navy font-bold mb-2">Our Vision</p>
              <p className="text-muted text-xs leading-relaxed">
                To become a leading institute for advance multimedia education, known for quality
                training and student success.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-bg-soft">
        <div className="container-site">
          <Reveal className="text-center mb-10">
            <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-blue/10 text-blue flex items-center justify-center">
              <CalendarIcon />
            </div>
            <h2 className="text-3xl font-bold text-navy">Our Timings & Schedule</h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {TIMINGS.map((t, i) => (
              <Reveal key={t.title} delay={i * 60}>
                <div className={`${t.bg} rounded-xl p-5 h-full`}>
                  <span className={`${t.color} mb-2 inline-flex`}>
                    <TimingIcon type={t.icon} />
                  </span>
                  <h3 className="text-navy font-bold text-sm mb-1">{t.title}</h3>
                  <p className="text-muted text-xs leading-relaxed">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
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
                      <td className="px-5 py-3">
                        <span className="inline-flex w-7 h-7 rounded-full bg-blue text-white items-center justify-center text-xs font-bold">
                          ✓
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-3">Option 2</td>
                      <td className="px-5 py-3">Tuesday / Thursday / Saturday</td>
                      <td className="px-5 py-3">
                        <span className="inline-flex w-7 h-7 rounded-full bg-blue text-white items-center justify-center text-xs font-bold">
                          ✓
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-[#eef5ff] text-navy text-xs md:text-sm px-5 py-3 flex gap-2 items-start border-t border-border">
                <span className="text-blue font-bold shrink-0">ℹ</span>
                <p>
                  Students can choose either Option 1 (M/W/F) or Option 2 (T/T/S) according to their
                  convenience.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-site">
          <LearnPracticeEarn />
        </div>
      </section>

      <JourneyCTA />
    </>
  );
}

function FeatureIcon({ type }: { type: string }) {
  const p = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none" as const };
  if (type === "user") {
    return (
      <svg {...p}>
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
  if (type === "trophy") {
    return (
      <svg {...p}>
        <path
          d="M8 4h8v4a4 4 0 0 1-8 0V4zM8 6H5a2 2 0 0 0 2 4M16 6h3a2 2 0 0 1-2 4M10 18h4M12 12v6"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
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
      <path d="M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function MissionIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M3 10l9-6 9 6v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function VisionIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="1" fill="currentColor" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 3v4M16 3v4M3 10h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function TimingIcon({ type }: { type: string }) {
  const p = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none" as const };
  if (type === "clock") {
    return (
      <svg {...p}>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "user") {
    return (
      <svg {...p}>
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
  return (
    <svg {...p}>
      <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 3v4M16 3v4M3 10h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
