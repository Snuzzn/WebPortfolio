import React from "react";
import { ArrowDownIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { Link as ScrollLink } from "react-scroll";

function Hero() {
  return (
    <div className="flex flex-col h-screen justify-center items-center transition-all">
      <div className="mb-2 md:mb-6 dark:text-white ">
        <span className="font-semibold text-5xl filter drop-shadow-xl sm:text-7xl lg:text-9xl">
          Hi, I'm&nbsp;
        </span>
        <span className="inline-block relative">
          <span className=" text-indigo-500 dark:text-indigo-400 absolute top-0 left-0 filter blur-xs  animate-pulse duration-300 font-semibold   text-5xl sm:text-7xl lg:text-9xl">
            Sanojan
          </span>
          <span className=" text-indigo-500 dark:text-indigo-400 font-semibold    text-5xl sm:text-7xl lg:text-9xl">
            Sanojan
          </span>
        </span>
      </div>
      <div className="text-[1.2rem] md:text-[1.5rem] lg:text-3xl text-center font-light tracking-wider dark:text-gray-400">
        Software Developer
      </div>
      
      <ScrollLink to="projects" smooth={true} duration={1000} offset={-85}>
      <div className="bg-gray-700 text-white  rounded-xl flex items-center gap-2 mt-4 py-2 px-4 md:py-4 md:px-8 md:mt-6  text-sm md:text-[1.1rem]  cursor-pointer drop-shadow-xl	 ">
        See my projects
        <ArrowDownIcon className="  h-4 w-4  animate-bounce " />
        
      </div>
      </ScrollLink>

    </div>
  );
}

export default Hero;
