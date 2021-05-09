import React from "react";
import { FiGithub } from "react-icons/fi";
import { GlobeAltIcon } from "@heroicons/react/outline";
import ReactPlayer from "react-player";

function ProjectCard({ title, description, liveLink, techStack }) {
  return (
    <>
      <div className="relative mb-10  flex flex-col  w-5/6 md:w-4/6 max-w-screen-lg">
        <div className="mt-4 mb-2  flex space-x-2 items-center ">
          <div className="font-light tracking-wide text-teal text-xl md:text-2xl mr-1">
            {title}
          </div>
          <FiGithub
            size="1.5em"
            className="cursor-pointer transform hover:-translate-y-2 transition-all duration-150"
          />
          <a href={liveLink} target="_blank" rel="noreferrer">
            <GlobeAltIcon className="w-7 cursor-pointer transform hover:-translate-y-2 transition-all duration-150" />
          </a>
        </div>
        <div className="flex flex-row mb-4 space-x-2 md:space-x-3">
          {techStack.map((item) => (
            <div
              key={item[0]}
              className="p-0.5 px-3 text-xs font-light md:text-sm  border border-teal rounded-xl shadow-lg cursor-pointer hover:text-teal hover:name"
            >
              <a href={item[1]} target="_blank" rel="noreferrer">
                {item[0]}
              </a>
            </div>
          ))}
        </div>
        <div style={{ position: "relative", paddingTop: "56.25%" }}>
          <ReactPlayer
            controls={true}
            width="100%"
            height="100%"
            url="https://teammongoose2seng2021.wistia.com/medias/13jgog1ept"
            style={{ position: "absolute", top: 0, left: 0 }}
            fallback="../public/tripCollabSS.png"
            loop={true}
          />
        </div>
        <div className="mt-3 p-5 md:text-lg rounded-md  bg-valhalla-light shadow-2xl">
          {description}
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
