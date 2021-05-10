import React from "react";
import ProjectCard from "./ProjectCard";
import Fade from "react-reveal/Fade";

function Projects() {
  return (
    <div className="flex flex-col items-center transition-all" id="projects">
      <Fade>
        <div className=" w-5/6 md:w-4/6 max-w-screen-lg mt-3 text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-6 font-semibold filter drop-shadow-xl pb-3 border-b border-gray-600 border-b-1">
          Projects
        </div>
      </Fade>
      {/* <hr className="divide-none border-pink-500 invisible w-5 mb-8 mt-1 md:w-20 md:mt-3 h-0 bg-gradient-to-r from-yellow-400  to-teal" /> */}
      <ProjectCard
        title="Trip Collab"
        description="A trip planner that lets groups decide on travel destinations and plan their schedules."
        liveLink="https://trip-collab.vercel.app"
        techStack={[
          ["Next.js", "https://nextjs.org/"],
          ["Chakra", "https://chakra-ui.com"],
          ["Flask", "https://flask.palletsprojects.com/en/1.1.x/"],
          [
            "Google Places API",
            "https://developers.google.com/maps/documentation/places/web-service/overview",
          ],
        ]}
      />
      <ProjectCard
        title="Coordinate"
        description="A university study planner that helps students stay organised throughout the term."
        liveLink="https://coordinate-planner.herokuapp.com"
        techStack={[
          ["HTML / CSS", "https://developer.mozilla.org/en-US/docs/Learn/HTML"],
          ["Django", "https://www.djangoproject.com/"],
        ]}
      />
    </div>
  );
}

export default Projects;
