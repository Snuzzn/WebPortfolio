import React from "react";
import ProjectCard from "./ProjectCard";
import Fade from "react-reveal/Fade";
import { projects } from "../lib/projects";
function Projects() {
  const [isPersonal, setIsPersonal] = React.useState(true);

  const handleToggle = () => {
    setIsPersonal(!isPersonal);
  };

  return (
    <div className="flex flex-col items-center transition-all" id="projects">
      <Fade>
        <div className="flex justify-between items-center w-5/6 md:w-4/6 max-w-screen-lg mt-3 mb-3 md:mb-6   pb-3 border-b-2 dark:border-gray-500 ">
          <div className=" text-3xl md:text-4xl lg:text-5xl font-semibold dark:text-white">
            Projects
          </div>
          <div className=" flex flex-col md:flex-row gap-3 p-2 md:gap-4  md:border-2 rounded-lg dark:border-gray-500">
            <button
              className={`w-full transition ease-in p-2 rounded-md md:w-24 text-center md:block w-full dark:text-gray-300  ${
                isPersonal && "bg-blue-600 text-white"
              }`}
              onClick={handleToggle}
            >
              Personal
            </button>
            <button
              className={`${
                !isPersonal && "bg-blue-600 text-white"
              } transition ease-in p-2 rounded-md w-32 text-center md:block dark:text-gray-300 `}
              onClick={handleToggle}
            >
              Collaborative
            </button>
          </div>
        </div>
      </Fade>
      <>
        {projects[isPersonal ? "personal" : "collaborative"].map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            projectType={project.projectType}
            description={project.description}
            techStack={project.techStack}
            demoVidLink={project.demoVidLink}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </>
    </div>
  );
}

export default Projects;
