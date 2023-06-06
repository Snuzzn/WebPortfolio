import React from "react";
import ProjectCard from "./ProjectCard";
import Fade from "react-reveal/Fade";

function Projects() {
  const [isPersonal, setIsPersonal] = React.useState(true);

  const handleToggle = () => {
    setIsPersonal(!isPersonal);
  };

  return (
    <div className="flex flex-col items-center transition-all" id="projects">
      <Fade>
        <div className="flex justify-between items-center w-5/6 md:w-4/6 max-w-screen-lg mt-3 mb-3 md:mb-6  filter drop-shadow-xl pb-3 border-b-2 border-valhalla-light ">
          <div className="text-3xl md:text-4xl lg:text-5xl font-semibold">
            Projects
          </div>
          <div className="flex flex-col md:flex-row gap-3 p-2 md:gap-4 border-valhalla-light md:border-2 rounded-md ">
            <button
              className={`transition ease-in p-2 rounded-md w-24 text-center md:block  ${
                isPersonal ? "bg-blue-600" : "hidden"
              }`}
              onClick={handleToggle}
            >
              Personal
            </button>
            <button
              className={`${
                !isPersonal ? "bg-blue-600" : "hidden"
              } transition ease-in p-2 rounded-md w-32 text-center md:block `}
              onClick={handleToggle}
            >
              Collaborative
            </button>
          </div>
        </div>
      </Fade>
      {isPersonal ? (
        <>
          <ProjectCard
            title="Orderly"
            projectType="Full Stack"
            description="A table ordering system that helps streamline restaurant operations for workers and improve  the dining experience for customers."
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
            title="Resonance"
            projectType="Full Stack"
            description="An intuitive bookmark manager that helps users organise and log content consumed on the web for easy access in the future."
            liveLink="https://resonance-bookmarks.vercel.app/"
            techStack={[
              ["React", "https://reactjs.org/"],
              ["Next.js", "https://nextjs.org/"],
              ["MongoDB", "https://www.mongodb.com/"],
            ]}
            demoVidLink="https://sanojan99.wistia.com/medias/rhnyvk1olq"
            githubLink="https://github.com/Snuzzn/Resonance"
          />
          <ProjectCard
            title="Explore React"
            projectType="Frontend"
            description="An educational resource aimed at exploring the fundamentals of React using interactive examples and practical applications in mini-projects."
            techStack={[
              ["React", "https://reactjs.org/"],
              ["Next.js", "https://nextjs.org/"],
            ]}
            demoVidLink="https://sanojan99-1.wistia.com/medias/31x03rh4sk"
            liveLink="https://explore-react.vercel.app/"
            githubLink="https://github.com/Snuzzn/explore-react"
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
        </>
      ) : (
        <>
          <ProjectCard
            title="Circles"
            projectType="Full Stack"
            description="An interactive degree planner and UNSW Handbook alternative to help students browse and organise courses more effectively."
            techStack={[
              ["React", "https://reactjs.org/"],
              ["Ant Design", "https://ant.design/"],
              ["Python", "https://www.python.org/"],
              ["FastAPI", "https://fastapi.tiangolo.com/lo/"],
              ["MongoDB", "https://www.mongodb.com/"],
            ]}
            demoVidLink="https://sanojan99-1.wistia.com/medias/aja131vepz"
            githubLink="https://github.com/csesoc/Circles"
            liveLink="https://circles.csesoc.app/"
          />
          <ProjectCard
            title="UNSW Illuminate"
            projectType="Frontend"
            description="A student society website featuring a hover-panning project gallery, showcasing the diverse, multidisciplinary light projects created at UNSW Illuminate."
            techStack={[
              ["React", "https://reactjs.org/"],
              ["Gatsby", "https://www.gatsbyjs.com/"],
              ["Sanity", "https://www.sanity.io/"],
            ]}
            demoVidLink="https://sanojan99-1.wistia.com/medias/kjsdubj81v"
            liveLink="https://www.unswilluminate.com/"
          />
          <ProjectCard
            title="Illuminate AR Gallery"
            projectType="Frontend"
            description="An AR web app that lets users visualise light projects built by UNSW Illuminate for Sydney's Vivid festivals, on their mobile device."
            techStack={[
              [
                "HTML / CSS",
                "https://developer.mozilla.org/en-US/docs/Learn/HTML",
              ],
              [
                "JavaScript",
                "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
              ],
              ["WebXR", "https://immersive-web.github.io/"],
              ["Three.js", "https://threejs.org/"],
            ]}
            demoVidLink="https://unswilluminate.wistia.com/medias/9bi8qf89lz"
            liveLink="https://illuminate-ar-gallery.netlify.app/"
          />
        </>
      )}
    </div>
  );
}

export default Projects;
