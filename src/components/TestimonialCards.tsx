'use client'


// import { GridBackgroundDemo } from "./ui/gridbackgrounddemo"
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"


const TestimonialData = [
  {
    quote: 'Joining the music school transformed my understanding of music and helped me truly discover my own sound. The instructors are wordl-calss!',
    name: 'Alex Johnson',
    title: 'Guitar-Student',
  },
  {
    quote: 'Joining the music school transformed my understanding of music and helped me truly discover my own sound. The instructors are wordl-calss!',
    name: 'Rohit Sharma',
    title: 'Guitar-Student',
  },
  {
    quote: 'Joining the music school transformed my understanding of music and helped me truly discover my own sound. The instructors are wordl-calss!',
    name: 'Neil Armstrong',
    title: 'Guitar-Student',
  },
  {
    quote: 'Joining the music school transformed my understanding of music and helped me truly discover my own sound. The instructors are wordl-calss!',
    name: 'Sunita Williams',
    title: 'Guitar-Student',
  },
  {
    quote: 'Joining the music school transformed my understanding of music and helped me truly discover my own sound. The instructors are wordl-calss!',
    name: 'Varun Dhawan',
    title: 'Guitar-Student',
  },
  {
    quote: 'Joining the music school transformed my understanding of music and helped me truly discover my own sound. The instructors are wordl-calss!',
    name: 'Amitabh Bachchan',
    title: 'Guitar-Student',
  },
  {
    quote: 'Joining the music school transformed my understanding of music and helped me truly discover my own sound. The instructors are wordl-calss!',
    name: 'Salman Khan',
    title: 'Guitar-Student',
  },
  {
    quote: 'Joining the music school transformed my understanding of music and helped me truly discover my own sound. The instructors are wordl-calss!',
    name: 'Boman Irani',
    title: 'Guitar-Student',
  },
  {
    quote: 'Joining the music school transformed my understanding of music and helped me truly discover my own sound. The instructors are wordl-calss!',
    name: 'Sonam Kappoor',
    title: 'Guitar-Student',
  },
  {
    quote: 'Joining the music school transformed my understanding of music and helped me truly discover my own sound. The instructors are wordl-calss!',
    name: 'Virat Kohli',
    title: 'Guitar-Student',
  }
]

function TestimonialCards() {
  return (
    <div className="h-[35rem] w-full dark:bg-black dark:bg-grid-white/[0.02] relative flex flex-col items-center justify-center overflow-hidden ">
      {/* <div className="absolute inset-0 -z-1 opacity-30 w-full h-screen">
      <GridBackgroundDemo/>
      </div> */}
      <h2 className="text-3xl font-bold text-center my-8 z-10 text-[#197f6c] px-2 md:px-0">Hear our Harmony: Voices of Success</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
        <InfiniteMovingCards
            items={TestimonialData}
            direction="right"
            speed="slow"
          /> 
        </div>
      </div>
      
    </div>
  )
}

export default TestimonialCards;