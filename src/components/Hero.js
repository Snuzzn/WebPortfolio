import React from "react";
import { ArrowDownIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { Link as ScrollLink } from "react-scroll";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoCss3, IoLogoHtml5} from "react-icons/io5"
import { LiaReact } from "react-icons/lia";
import { IoLogoPython } from "react-icons/io5";


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


      <div className="mt-8 flex items-center gap-4">
        <IoLogoHtml5 color="#e15824" className="w-[2.8em] h-[2.8em] md:w-[4.47em] md:h-[4.47em]" />
        <IoLogoCss3 color="#3094c0" className="w-[2.8em] h-[2.8em] md:w-[4.47em] md:h-[4.47em]" />
        <RiJavascriptFill color="#f7e028" className="w-[3em] h-[3em] md:w-[5em] md:h-[5em]"/>
        <LiaReact color="#15bfd6" className="w-[3em] h-[3em] md:w-[5em] md:h-[5em]"/>
        <img alt="logo of python" src="/static/graphics/python-icon.svg" className="w-[40px] h-[40px] md:w-[70px] md:h-[70px]" height="70px"/>

      </div>

    </div>
  );
}

export default Hero;
