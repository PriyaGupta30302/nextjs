'use client';
import React, { useState, useRef } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle mouse enter on the container
  const handleMouseEnter = () => {
    // Clear any existing timeout to prevent the dropdown from closing
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setDropdownOpen(true);
  };

  // Handle mouse leave with a delay
  const handleMouseLeave = () => {
    // Set a timeout to close the dropdown after a delay
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 300); // 300ms delay gives time to move to and click on dropdown items
  };

  // Handle click on dropdown items
  const handleItemClick = (href: string) => {
    // Navigate to the href
    window.location.href = href;
    // Optionally close the dropdown after clicking
    setDropdownOpen(false);
  };

  return (
    <div className={cn("fixed top-10 inset-x-0 z-50", className)}>
      <div className="flex justify-center mt-8 bg-black w-full max-w-[350px] md:max-w-[700px] md:w-[700px] mx-auto py-5 rounded-[100px]">
        <Menu>
          <Link href={"/"}>
            <MenuItem item="Home" />
          </Link>
          
          {/* Our Courses */}
          <div 
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div>
              <MenuItem item="Our Courses" />
            </div>
            {dropdownOpen && (
              <div 
                className="absolute top-full left-1/2 -translate-x-1/2 mt-7 flex flex-col space-y-3 text-[16px] border border-gray-500 bg-black p-3 rounded-2xl w-[200px] z-50 transition-all duration-300 ease-in-out transform opacity-100 scale-100"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="cursor-pointer" onClick={() => handleItemClick("/courses")}>
                  <HoveredLink href="#">All Courses</HoveredLink>
                </div>
                <div className="cursor-pointer" onClick={() => handleItemClick("/courses")}>
                  <HoveredLink href="#">Basic Music Theory</HoveredLink>
                </div>
                <div className="cursor-pointer" onClick={() => handleItemClick("/courses")}>
                  <HoveredLink href="#">Advanced Composition</HoveredLink>
                </div>
                <div className="cursor-pointer" onClick={() => handleItemClick("/courses")}>
                  <HoveredLink href="#">Songwriting</HoveredLink>
                </div>
                <div className="cursor-pointer" onClick={() => handleItemClick("/courses")}>
                  <HoveredLink href="#">Music Production</HoveredLink>
                </div>
              </div>
            )}
          </div>
          
          <Link href={"/contact"}>
            <MenuItem item="Contact" />
          </Link>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;