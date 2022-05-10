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
        projectType="Full Stack"
        description="An elegant bookmark manager that helps users keep track of content they consume on the web."
        liveLink="https://resonance-bookmarks.vercel.app/"
        techStack={[
          [
            "JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          ],
          ["Next.js", "https://nextjs.org/"],
          ["MongoDB", "https://www.mongodb.com/"],
        ]}
        demoVidLink="https://sanojan99.wistia.com/medias/rhnyvk1olq"
        githubLink="https://github.com/Snuzzn/Resonance"
      />

      {/* <ProjectCard
        title="Trip Collab"
        projectType="Frontend"
        description="A trip planner that lets groups decide on travel destinations and plan their schedules."
        liveLink="https://trip-collab.vercel.app"
        techStack={[
          ["Next.js", "https://nextjs.org/"],
          [
            "Google Places API",
            "https://developers.google.com/maps/documentation/places/web-service/overview",
          ],
        ]}
        demoVidLink="https://teammongoose2seng2021.wistia.com/medias/13jgog1ept"
        githubLink="https://github.com/Snuzzn/TripCollabFrontend"
      /> */}
      {/* <ProjectCard
        title="Coordinate"
        description="A university study planner that helps students stay organised throughout the term."
        liveLink="https://coordinate-planner.herokuapp.com"
        techStack={[
          ["HTML / CSS", "https://developer.mozilla.org/en-US/docs/Learn/HTML"],
          ["Django", "https://www.djangoproject.com/"],
        ]}
        demoVidLink="https://sanojan99.wistia.com/medias/zeq00a7fs8"
        githubLink="https://github.com/Snuzzn/Coordinate-Uni-Planner"
      /> */}
      <ProjectCard
        title="Orderly"
        projectType="Frontend"
        description="A contactless table ordering and wait management system that streamlines restaurant operations."
        techStack={[
          ["TypeScript", "https://www.typescriptlang.org/"],
          ["React", "https://reactjs.org/"],
          ["Socket.IO", "https://socket.io/"],
          ["PropelAuth", "https://www.propelauth.com/"],
        ]}
        demoVidLink="https://z5207855.wistia.com/medias/zdhn5hx3nk"
      />

      <ProjectCard
        title="AR Illuminate Gallery"
        projectType="Frontend"
        description="An AR gallery of past projects built by UNSW Illuminate (for Sydney's Vivid festivals), to give individuals a sense of how they would have looked like in real life."
        techStack={[
          [
            "JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          ],
          ["HTML / CSS", "https://developer.mozilla.org/en-US/docs/Learn/HTML"],
          ["WebXR", "https://immersive-web.github.io/"],
          ["Three.js", "https://threejs.org/"],
        ]}
        demoVidLink="https://unswilluminate.wistia.com/medias/9bi8qf89lz"
        liveLink="https://illuminate-ar-gallery.netlify.app/"
      />
      <ProjectCard
        title="AirBrB"
        projectType="Frontend"
        description="A lodging marketplace inspired by Airbnb, to help people host and book accomodation."
        techStack={[
          [
            "JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          ],
          ["React", "https://reactjs.org/"],
        ]}
        demoVidLink="https://sanojan99.wistia.com/medias/k6l3kts83n"
      />
      <ProjectCard
        title="Slackr"
        projectType="Frontend"
        description="A team messenging web app, inspired by Slack and Messenger, to help existing groups connect or find new ones. "
        techStack={[
          [
            "JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          ],
          ["HTML / CSS", "https://developer.mozilla.org/en-US/docs/Learn/HTML"],
        ]}
        demoVidLink="https://sanojan99.wistia.com/medias/mkfall54ff"
      />
    </div>
  );
}

export default Projects;
