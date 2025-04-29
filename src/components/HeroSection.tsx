import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";



function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className=" mt-32 md:mt-10 text-5xl md:text-6xl lg:text-7xl xl:text-[85px] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Master the art of music</h1>
        <p className="mt-8 font-normal text-base md:tetx-lg text-neutral-300 max-w-lg mx-auto">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit adipisci deserunt, delectus saepe molestiae vel alias culpa, praesentium a, neque commodi animi explicabo. Sed minima accusantium quae, quidem cupiditate pariatur!</p>
        <div className="mt-4">
          <Link href={"/courses"}>
          <Button className="cursor-pointer" borderRadius="1.75rem">Explore courses</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection