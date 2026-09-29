import Image from "next/image";
import Link from "next/link";

export function JourneyCTA() {
  return (
    <section className="section-pad pt-0">
      <div className="container-site">
        <div className="relative overflow-hidden rounded-2xl bg-[#0B1E3F] px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12">
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 90% 10%, rgba(58,190,249,0.35), transparent 40%), radial-gradient(circle at 5% 90%, rgba(255,193,7,0.15), transparent 35%)",
            }}
          />
          <div className="relative grid lg:grid-cols-[180px_1fr_auto] gap-8 items-center">
            <div className="relative h-40 sm:h-48 hidden lg:block anim-float-slow">
              <Image
                src="/images/grad-cap-diploma.png"
                alt=""
                fill
                className="object-contain"
                sizes="180px"
              />
            </div>

            <div className="text-center lg:text-left text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Start Your Journey With Us!</h2>
              <p className="text-white/70 text-sm mb-5 max-w-md mx-auto lg:mx-0">
                Join hundreds of students building real skills for real careers.
              </p>
              <Link
                href="/registration"
                className="inline-flex items-center gap-2 rounded-lg bg-[#FCA311] text-[#0B1E3F] font-bold text-sm px-6 py-3 hover:brightness-105 transition"
              >
                Enroll Now →
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              {[
                { value: "500+", label: "Students Trained" },
                { value: "50+", label: "Courses Available" },
                { value: "100+", label: "Projects Completed" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-3 rounded-full border border-white/25 bg-white/5 px-4 py-2.5 min-w-[190px]"
                >
                  <span className="text-[#FCA311] font-extrabold text-base">{s.value}</span>
                  <span className="text-white/80 text-xs">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
