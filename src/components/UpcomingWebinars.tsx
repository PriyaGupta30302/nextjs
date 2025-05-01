'use client';

import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description: 'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'Mastering Guitar Techniques',
      description: 'Learn advanced guitar techniques from professional musicians.',
      slug: 'mastering-guitar-techniques',
      isFeatured: true,
    },
    {
      title: 'The Art of Songwriting',
      description: 'Explore how to write impactful and memorable songs.',
      slug: 'art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Music Production Basics',
      description: 'An introduction to DAWs, mixing, and digital music production.',
      slug: 'music-production-basics',
      isFeatured: true,
    },
    {
      title: 'Building a Career in Music',
      description: 'Learn how to navigate the industry and build your personal brand.',
      slug: 'career-in-music',
      isFeatured: true,
    },
    {
      title: 'Live Performance Tips',
      description: 'Boost your confidence and learn how to own the stage.',
      slug: 'live-performance-tips',
      isFeatured: true,
    }
  ];

  return (
    <div className="py-10 md:py-0 md:p-8 lg:p-12 bg-gray-900">
      <div className="max-w-[500px] md:max-w-7xl mx-auto px-2 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide">FEATURED WEBINARS</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl text-white">
            Enhance Your Musical Journey
          </p>
        </div>

        <div className="mt-10">
          <HoverEffect
            items={featuredWebinars.map((webinar, index) => ({
              title: webinar.title,
              description: webinar.description,
              link: `/webinar/${webinar.slug}`, // unique link
              key: `${webinar.slug}-${index}`, // unique key
            }))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link
            href={"/webinars"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
