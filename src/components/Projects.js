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
        description="An intuitive bookmark manager that helps users organise and log content consumed on the web for easy access in the future."
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
      <ProjectCard
        title="Orderly"
        projectType="Full Stack"
        description="A table ordering system that helps streamline restaurant operations for workers and improves the dining experience for customers."
        techStack={[
          ["TypeScript", "https://www.typescriptlang.org/"],
          ["React", "https://reactjs.org/"],
          ["Socket.IO", "https://socket.io/"],
          ["PropelAuth", "https://www.propelauth.com/"],
        ]}
        demoVidLink="https://z5207855.wistia.com/medias/zdhn5hx3nk"
        githubLink="https://github.com/Snuzzn/Orderly"
      />

      <ProjectCard
        title="Illuminate AR Gallery"
        projectType="Frontend"
        description="An AR web app that lets users visualise light projects built by UNSW Illuminate for Sydney's Vivid festivals, on their mobile device."
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
        description="A lodging marketplace, inspired by Airbnb, to help people host and book accommodation."
        techStack={[
          [
            "JavaScript",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
          ],
          ["React", "https://reactjs.org/"],
        ]}
        demoVidLink="https://sanojan99.wistia.com/medias/k6l3kts83n"
        githubLink="https://github.com/Snuzzn/AirBrB"
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
