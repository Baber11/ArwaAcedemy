import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export function JourneyCTA() {
  return (
    <section className="bg-navy overflow-hidden">
      <div className="container-site py-12 md:py-14 grid md:grid-cols-[1fr_1.2fr_1fr] gap-8 items-center">
        <Reveal className="relative h-52 md:h-60 hidden md:block">
          <div className="relative h-full w-full anim-float-slow">
            <Image
              src="/images/student-pointing.png"
              alt="Student"
              fill
              className="object-contain object-bottom"
              sizes="300px"
            />
          </div>
        </Reveal>
        <Reveal delay={100} className="text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Start Your Journey With Us!</h2>
          <p className="text-white/70 text-sm mb-5">
            Join hundreds of students building real skills for real careers.
          </p>
          <Link href="/registration" className="btn-yellow">
            Enroll Now →
          </Link>
        </Reveal>
        <div className="space-y-3 text-white text-sm">
          {[
            ["500+", "Students Trained"],
            ["50+", "Courses Available"],
            ["100+", "Projects Completed"],
          ].map(([v, l], i) => (
            <Reveal key={l} delay={150 + i * 80}>
              <div className="flex items-center gap-3 border border-white/25 rounded-full px-4 py-2.5 card-lift">
                <span className="font-extrabold text-yellow">{v}</span>
                <span className="text-white/80">{l}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
