import React from "react";
import ProjectCard from "./ProjectCard";
import Fade from "react-reveal/Fade";

function Projects() {
  return (
    <div className="flex flex-col items-center transition-all" id="projects">
      <Fade>
        <div className=" w-5/6 md:w-4/6 max-w-screen-lg mt-3 mb-3 md:mb-6 text-3xl md:text-4xl lg:text-5xl font-semibold filter drop-shadow-xl pb-3 border-b-2 border-valhalla-light ">
          Projects
        </div>
      </Fade>
      <ProjectCard
        title="Resonance"
        description="An elegant bookmark manager that helps users keep track of content they consume on the web."
        liveLink="https://resonance-bookmarks.vercel.app/"
        techStack={[
          ["Next.js", "https://nextjs.org/"],
          ["Material UI", "https://material-ui.com/"],
          ["MongoDB", "https://www.mongodb.com/"],
        ]}
        demoVidLink="https://sanojan99.wistia.com/medias/rhnyvk1olq"
        githubLink="https://github.com/Snuzzn/Resonance"
      />
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
        demoVidLink="https://teammongoose2seng2021.wistia.com/medias/13jgog1ept"
        githubLink="https://github.com/Snuzzn/TripCollabFrontend"
      />
      <ProjectCard
        title="Coordinate"
        description="A university study planner that helps students stay organised throughout the term."
        liveLink="https://coordinate-planner.herokuapp.com"
        techStack={[
          ["HTML / CSS", "https://developer.mozilla.org/en-US/docs/Learn/HTML"],
          ["Django", "https://www.djangoproject.com/"],
        ]}
        demoVidLink="https://sanojan99.wistia.com/medias/zeq00a7fs8"
        githubLink="https://github.com/Snuzzn/Coordinate-Uni-Planner"
      />
    </div>
  );
}

export default Projects;
