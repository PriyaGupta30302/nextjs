'use client';

import { AnimatedTooltip } from "./ui/animated-tooltip"
import { WavyBackground } from "./ui/wavy-background"

const instructors =[
  {
    id: 1,
    name: 'John Doe',
    designation: 'Vocal Coach',
    image: '/assets/user1.jpg'
  },
  {
    id: 2,
    name: 'James Smith',
    designation: 'Student',
    image: '/assets/user5.jpg'
  },
  {
    id: 3,
    name: 'Henry ',
    designation: 'Cricketer',
    image: '/assets/user3.jpg'
  },
  {
    id: 4,
    name: 'George',
    designation: 'Actor',
    image: '/assets/user4.jpg'
  },
  {
    id: 5,
    name: 'Kiara Advani',
    designation: 'Singer',
    image: '/assets/user6.jpg'
  }
]

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
         <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet our Instructors</h2>
         <p className="text-base md:text-lg tetx-white text-center mb-4">Discover the talented professionals who will guide your musical journey</p>
         <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={instructors} />
         </div>
      </WavyBackground>
    </div>
  )
}

export default Instructors