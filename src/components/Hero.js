import React from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <div className="flex flex-col h-screen justify-center items-center transition-all">
      <div className="mb-2 md:mb-6  ">
        <span className="font-semibold text-5xl filter drop-shadow-xl sm:text-7xl lg:text-9xl">
          Hi, I'm&nbsp;
        </span>
        <span className="inline-block relative">
          <span className="absolute top-0 left-0 filter blur-xs  animate-pulse duration-300 font-semibold name text-teal  text-5xl sm:text-7xl lg:text-9xl">
            Sano
          </span>
          <span className="font-semibold name text-teal  text-5xl sm:text-7xl lg:text-9xl">
            Sano
          </span>
        </span>
      </div>
      <div className="text-sm md:text-xl lg:text-3xl text-center font-light tracking-wider">
        UNSW Computer Science Student
      </div>

      <ScrollLink to="projects" smooth={true} duration={1000} offset={-85}>
        <ChevronDownIcon className="z-20 mt-4 h-7 w-7 animate-bounce hover:animate-none cursor-pointer" />
      </ScrollLink>
    </div>
  );
}

export default Hero;
