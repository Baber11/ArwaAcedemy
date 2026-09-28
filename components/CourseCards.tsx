import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/lib/courses";

export function HomeCourseCard({ course }: { course: Course }) {
  return (
    <article className="bg-white rounded-xl overflow-hidden card-shadow border border-border/60 flex flex-col h-full card-lift">
      <div className="relative h-36 bg-bg-soft img-zoom">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
          sizes="240px"
        />
      </div>
      <div className="p-4 flex flex-col flex-1 gap-2">
        <h3 className="font-bold text-navy text-base">{course.title}</h3>
        <p className="text-muted text-xs leading-relaxed flex-1">{course.description}</p>
        <div className="flex items-center justify-between text-sm pt-1">
          <span className="text-muted font-medium">{course.duration}</span>
          <span className="text-blue font-bold">{course.price}</span>
        </div>
        <Link href="/courses" className="btn-navy w-full mt-2 text-sm py-2.5">
          Explore Course
        </Link>
      </div>
    </article>
  );
}

export function GridCourseCard({ course }: { course: Course }) {
  return (
    <article className="bg-white rounded-xl overflow-hidden card-shadow border border-border/60 flex flex-col h-full card-lift">
      <div className="relative h-32 bg-bg-soft img-zoom">
        <Image
          src={course.image}
          alt={course.title}
          fill
          className="object-cover"
          sizes="280px"
        />
      </div>
      <div className="p-4 flex flex-col flex-1 gap-2.5">
        <h3 className="font-bold text-navy text-[15px]">{course.title}</h3>
        <p className="text-muted text-xs leading-relaxed flex-1">{course.description}</p>
        <div className="space-y-1 text-xs text-muted">
          <p className="flex items-center gap-1.5">
            <ClockIcon /> Duration: {course.duration}
          </p>
          <p className="flex items-center gap-1.5">
            <UserIcon /> Level: {course.level}
          </p>
        </div>
        <Link href="/registration" className="btn-navy w-full mt-1 text-sm py-2.5">
          {course.price}
        </Link>
      </div>
    </article>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
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
