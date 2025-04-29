'use client';
import Link from "next/link";
import courseData from "../data/music_courses.json";
import { BackgroundGradient } from "./ui/backgound-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}

function FeaturedCourses() {
  const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured);

  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <h2 className="uppercase text-base text-teal-600 font-semibold tracking-wide">
          Featured Courses
        </h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
          Learn With the Best
        </p>
      </div>

      <div className="mt-10 px-4 sm:px-6 lg:px-20 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
          {featuredCourses.map((course: Course) => (
            <BackgroundGradient
              key={course.id}
              className="flex flex-col rounded-[22px] bg-zinc-900 overflow-hidden h-full max-w-full md:max-w-[320px] lg:max-w-[400px] mx-auto"
            >
              <div className="p-4 sm:p-6 flex flex-col items-center text-center space-y-4">
                <p className="text-lg sm:text-xl text-white font-semibold">{course.title}</p>
                <p className="text-sm text-gray-400">{course.description}</p>
                <Link href={`/courses/${course.slug}`} className="text-indigo-400 hover:underline">
                  Learn More
                </Link>
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <Link
          href="/courses"
          className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
