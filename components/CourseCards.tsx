import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/lib/courses";

function headerGradient(course: Course) {
  if (course.id.includes("canva")) return "linear-gradient(145deg, #7ee8fa 0%, #00c4cc 100%)";
  if (course.id.includes("capcut")) return "linear-gradient(145deg, #5AD7F2 0%, #3CA6E4 100%)";
  if (course.id.includes("uiux") || course.id.includes("figma"))
    return "linear-gradient(145deg, #c4b5fd 0%, #a259ff 100%)";
  if (course.id.includes("marketing") || course.id.includes("media"))
    return "linear-gradient(145deg, #818cf8 0%, #312e81 100%)";
  if (course.id.includes("youtube")) return "linear-gradient(145deg, #fb923c 0%, #ef4444 100%)";
  if (course.id.includes("photoshop")) return "linear-gradient(145deg, #7dd3fc 0%, #31A8FF 100%)";
  if (course.id.includes("illustrator")) return "linear-gradient(145deg, #fdba74 0%, #FF9A00 100%)";
  if (course.id.includes("premiere") || course.id.includes("after"))
    return "linear-gradient(145deg, #c4b5fd 0%, #7c3aed 100%)";
  if (course.id.includes("ai")) return "linear-gradient(145deg, #6ee7b7 0%, #10A37F 100%)";
  return `linear-gradient(145deg, ${course.accent}99, ${course.accent})`;
}

export function HomeCourseCard({ course }: { course: Course }) {
  return (
    <article className="bg-white rounded-xl overflow-hidden card-shadow border border-border/50 flex flex-col h-full card-lift">
      {course.headerImage ? (
        <div className="relative h-[7.5rem] sm:h-32">
          <Image
            src={course.headerImage}
            alt=""
            fill
            className="object-cover"
            sizes="240px"
          />
        </div>
      ) : (
        <div
          className="relative h-[7.5rem] sm:h-32 flex items-center justify-center px-4"
          style={{ background: headerGradient(course) }}
        >
          <div className="bg-white rounded-xl px-3 py-2 shadow-sm flex items-center justify-center">
            <Image
              src={course.image}
              alt=""
              width={72}
              height={72}
              className="h-12 w-12 object-contain"
            />
          </div>
        </div>
      )}
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
      <div className="relative h-28 bg-[#f3f7fc] flex items-center justify-center p-4">
        <Image
          src={course.image}
          alt={course.title}
          width={80}
          height={80}
          className="h-16 w-16 object-contain"
        />
      </div>
      <div className="p-4 flex flex-col flex-1 gap-2.5">
        <h3 className="font-bold text-navy text-[15px]">{course.title}</h3>
        <p className="text-muted text-xs leading-relaxed flex-1">{course.description}</p>
        <div className="space-y-1 text-xs text-blue/90">
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
