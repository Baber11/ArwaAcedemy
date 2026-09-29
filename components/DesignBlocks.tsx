import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/constants";

export function LimitedSeatsBanner() {
  return (
    <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-[#0B1E3F]">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, rgba(58,190,249,0.25), transparent 45%), radial-gradient(circle at 10% 80%, rgba(255,193,7,0.12), transparent 40%)",
        }}
      />
      <div className="relative grid md:grid-cols-[220px_1fr_auto] gap-6 md:gap-8 items-center px-5 py-8 sm:px-8 sm:py-10 md:px-10">
        <div className="relative h-44 sm:h-52 md:h-56 anim-float-slow mx-auto md:mx-0 w-full max-w-[220px]">
          <Image
            src="/images/student-pointing.png"
            alt="ARWA student"
            fill
            className="object-contain object-bottom"
            sizes="220px"
          />
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-[#F5C518] text-2xl sm:text-3xl md:text-4xl font-black italic tracking-wide mb-2">
            LIMITED SEATS AVAILABLE!
          </h2>
          <p className="text-white/75 text-sm max-w-md mx-auto md:mx-0 mb-5">
            Secure your seat now and start building industry-ready multimedia skills with expert
            trainers.
          </p>
          <Link
            href="/registration"
            className="inline-flex items-center gap-2 rounded-md bg-[#FCA311] text-[#0B1E3F] font-bold text-sm px-5 py-3 hover:brightness-105 transition"
          >
            Enroll Now →
          </Link>
        </div>

        <div className="flex md:flex-col gap-3 justify-center">
          {[
            { value: "500+", label: "Students Enrolled", icon: "users" },
            { value: "50+", label: "Courses Available", icon: "book" },
            { value: "100+", label: "Projects Completed", icon: "briefcase" },
          ].map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-3 rounded-full border border-white/25 bg-white/5 px-4 py-2.5 min-w-[180px]"
            >
              <span className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-sky shrink-0">
                <StatIcon type={s.icon} />
              </span>
              <div>
                <p className="text-white font-extrabold text-sm leading-none">{s.value}</p>
                <p className="text-white/70 text-[11px] mt-0.5">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatIcon({ type }: { type: string }) {
  if (type === "book") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5V5.5z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }
  if (type === "briefcase") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
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
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M3 19c1.2-3 3.5-4.5 6-4.5S13.8 16 15 19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LearnPracticeEarn() {
  return (
    <Reveal className="text-center">
      <div className="flex items-center justify-center gap-4 mb-6">
        <span className="h-px w-10 sm:w-16 bg-navy/20" />
        <span className="inline-flex items-center rounded-full bg-navy text-white text-[11px] font-bold tracking-[0.2em] px-4 py-2">
          ALL POPULAR COURSES
        </span>
        <span className="h-px w-10 sm:w-16 bg-navy/20" />
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy tracking-tight mb-6">
        LEARN <span className="text-[#FCA311]">•</span> PRACTICE{" "}
        <span className="text-[#FCA311]">•</span> EARN
      </h2>
      <div className="mx-auto max-w-3xl rounded-full bg-[#FCA311] text-navy font-bold text-[11px] sm:text-sm tracking-wide py-3.5 px-4">
        PRACTICAL TRAINING | EXPERT TRAINERS | CAREER BOOST
      </div>
      <div className="mt-8">
        <Link href="/courses" className="btn-navy">
          View Courses
        </Link>
      </div>
    </Reveal>
  );
}

export function AllCoursesIncludeCard() {
  return (
    <article className="bg-[#0B1E3F] rounded-2xl p-5 sm:p-6 text-white flex flex-col min-h-[320px] card-lift h-full">
      <h3 className="text-[#FCA311] font-bold text-lg mb-4">All Courses Include</h3>
      <ul className="space-y-2.5 text-sm flex-1">
        {[
          "100% Practical Training",
          "Expert Instructors",
          "Industry Recognized Certificate",
          "Career Guidance & Support",
          "Freelancing & Earning Guidance",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="text-[#FCA311] font-bold shrink-0">✔</span>
            {item}
          </li>
        ))}
      </ul>
      <Link
        href="/registration"
        className="mt-5 inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl bg-[#FCA311] text-[#0B1E3F] font-bold text-sm py-3 px-6 hover:brightness-105 transition"
      >
        Enroll Now →
      </Link>
    </article>
  );
}

export function SpecialOfferCard() {
  return (
    <article className="bg-white rounded-2xl card-shadow border border-border/60 p-5 flex flex-col relative overflow-hidden min-h-[320px] card-lift">
      <span className="absolute top-0 left-0 bg-[#E31E24] text-white text-[10px] font-bold tracking-wider px-3 py-1.5 rounded-br-lg">
        SPECIAL OFFER
      </span>
      <div className="mt-8 flex-1">
        <h3 className="text-navy font-extrabold text-2xl leading-tight mb-3">
          Save More
          <br />
          Learn More!
        </h3>
        <p className="text-muted text-sm leading-relaxed mb-4">
          Enroll in multiple courses and get exclusive discounts. Ask our advisors for current
          bundle offers.
        </p>
        <div className="relative h-16 w-20 opacity-90">
          <Image
            src="/images/grad-cap-diploma.png"
            alt=""
            fill
            className="object-contain object-left"
            sizes="80px"
          />
        </div>
      </div>
      <Link href="/registration" className="btn-navy w-full mt-3">
        Claim Offer
      </Link>
    </article>
  );
}

export function ConsultationBanner() {
  return (
    <div className="relative rounded-2xl overflow-hidden bg-[#0B1E3F] px-5 py-8 sm:px-8 sm:py-10 md:px-12">
      {/* CSS geometric doodle background — no image */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        aria-hidden
        style={{
          backgroundImage: `
            radial-gradient(circle at 12% 28%, rgba(58,190,249,0.45) 0, transparent 28%),
            radial-gradient(circle at 88% 72%, rgba(252,163,17,0.2) 0, transparent 32%),
            linear-gradient(125deg, transparent 40%, rgba(58,190,249,0.08) 40%, rgba(58,190,249,0.08) 41%, transparent 41%),
            linear-gradient(55deg, transparent 60%, rgba(255,255,255,0.06) 60%, rgba(255,255,255,0.06) 61%, transparent 61%)
          `,
        }}
      />
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.14]"
        aria-hidden
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="consult-doodle" width="120" height="120" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="24" r="10" fill="none" stroke="#3ABEF9" strokeWidth="1.2" />
            <path d="M14 24h12M20 18v12" stroke="#3ABEF9" strokeWidth="1.2" strokeLinecap="round" />
            <rect x="70" y="18" width="28" height="18" rx="2" fill="none" stroke="#fff" strokeWidth="1.1" />
            <path d="M76 36v4h16v-4" stroke="#fff" strokeWidth="1.1" />
            <path
              d="M30 78l12-8 12 8v14H30V78z"
              fill="none"
              stroke="#FCA311"
              strokeWidth="1.1"
            />
            <circle cx="95" cy="90" r="8" fill="none" stroke="#3ABEF9" strokeWidth="1.1" />
            <path d="M95 86v5l3 2" stroke="#3ABEF9" strokeWidth="1.1" strokeLinecap="round" />
            <path
              d="M55 55c8-10 22-10 30 0"
              fill="none"
              stroke="#fff"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#consult-doodle)" />
      </svg>

      <div className="relative grid md:grid-cols-[200px_1fr] gap-6 items-center">
        <div className="relative h-36 sm:h-44 anim-float-slow hidden sm:block">
          <Image
            src="/images/consultation-illustration.png"
            alt=""
            fill
            className="object-contain"
            sizes="200px"
          />
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-2">
            Not Sure Which Course is Right for You?
          </h2>
          <p className="text-white/70 text-sm mb-5">
            Contact our advisors and get free career guidance.
          </p>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#FCA311] text-[#0B1E3F] font-bold text-sm px-5 py-3 hover:brightness-105 transition"
            >
              Get Free Consultation →
            </Link>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center gap-2 rounded-lg border border-white/40 text-white text-sm font-semibold px-5 py-3 hover:bg-white/10 transition"
            >
              📞 {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
