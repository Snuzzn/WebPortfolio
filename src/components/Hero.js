import React from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <div className="flex flex-col h-screen justify-center items-center transition-all">
      <div className="mb-2 md:mb-6">
        <span className="font-semibold text-5xl filter drop-shadow-xl sm:text-7xl lg:text-9xl">
          Hi, I'm&nbsp;
        </span>
        <span className="font-semibold name text-teal  text-5xl sm:text-7xl lg:text-9xl">
          Sano
        </span>
      </div>

      <div className="text-sm md:text-xl lg:text-3xl text-center font-light tracking-wider">
        UNSW Software Engineering Student
      </div>
      <ScrollLink to="projects" smooth={true} duration={1000} offset={-85}>
        <ChevronDownIcon className="z-20 mt-4 h-7 w-7 animate-bounce hover:animate-none cursor-pointer" />
      </ScrollLink>

      {/* <div className="flex space-x-2 items-center mt-4 p-2 px-4 md:mt-6 md:py-2.5 md:px-6 rounded-3xl  cursor-pointer bg-gradient-to-b from-teal-light to-teal-xdark transform hover:-translate-y-0.5 transition-all duration-150 hover:shadow-lg">
        <ChevronDownIcon className="h-5 w-5" />
        <div className="text-sm md:text-lg text-gray-100">See my work</div>
      </div> */}
    </div>
  );
}

export default Hero;
