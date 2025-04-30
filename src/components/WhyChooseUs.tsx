"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
  {
    title: "Learn at Your Own Pace",
    description:
      "Whether you're a beginner or advanced musician, our courses are designed to fit your schedule. Practice anytime, anywhere, and track your progress at your own speed.Whether you're a beginner or advanced musician, our courses are designed to fit your schedule. Practice anytime, anywhere, and track your progress at your own speed.",
  },
  {
    title: "Expert Instructors",
    description:
      "Gain insights from professional musicians with years of experience. Our instructors guide you through techniques, theory, and performance with real-world tips.Whether you're a beginner or advanced musician, our courses are designed to fit your schedule. Practice anytime, anywhere, and track your progress at your own speed.",
  },
  {
    title: "Interactive Lessons",
    description:
      "Experience music education like never before. Play along with tracks, take quizzes, and receive instant feedback to improve your skills in real time.Whether you're a beginner or advanced musician, our courses are designed to fit your schedule. Practice anytime, anywhere, and track your progress at your own speed.",
  },
  {
    title: "Diverse Instruments & Styles",
    description:
      "From guitar and piano to vocals and music production, explore a wide variety of instruments and genres including classical, rock, jazz, and electronic.Whether you're a beginner or advanced musician, our courses are designed to fit your schedule. Practice anytime, anywhere, and track your progress at your own speed.",
  },
];


function WhyChooseUs() {
  return (
    <div>
      
      <StickyScroll content={musicSchoolContent} />
      
    </div>
  )
}

export default WhyChooseUs