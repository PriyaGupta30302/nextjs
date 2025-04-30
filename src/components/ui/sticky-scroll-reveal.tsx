"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/utils/cn";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef<any>(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const breakpoints = content.map((_, index) => index / cardLength);
    const closest = breakpoints.reduce((acc, point, index) => {
      const distance = Math.abs(latest - point);
      return distance < Math.abs(latest - breakpoints[acc]) ? index : acc;
    }, 0);
    setActiveCard(closest);
  });

  const backgroundColors = ["#0f172a", "#000000", "#171717"];
  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{ backgroundColor: backgroundColors[activeCard % backgroundColors.length] }}
      className="relative flex h-[30rem] justify-center md:space-x-10 overflow-y-auto rounded-md p-10"
      ref={ref}
    >
      <div className="relative flex items-start px-2 md:px-4">
        <div className="xl:w-[800px] lg:w-[550px]">
          {content.map((item, index) => (
            <div key={item.title + index} className="mb-10 md:mb-36 md:mt-8 lg:mt-12">
              <motion.h2
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  y: activeCard === index ? 0 : 20,
                }}
                transition={{ duration: 0.6 }}
                className="text-[28px] lg:text-4xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                key={item.description}
                initial={{ opacity: 0, y: 40 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                  y: activeCard === index ? 0 : 20,
                }}
                transition={{ duration: 0.6 }}
                className="text-[16px] w-[300px] lg:w-[500px] xl:w-[600px] text-justify mt-6 text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-10" />
        </div>
      </div>

      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md bg-white md:block",
          contentClassName
        )}
      >
        {content[activeCard]?.content ?? null}
      </div>
    </motion.div>
  );
};
