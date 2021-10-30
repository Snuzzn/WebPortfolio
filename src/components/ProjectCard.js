import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaLaptopCode } from 'react-icons/fa';
import { RiStackFill } from 'react-icons/ri';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { GlobeAltIcon } from '@heroicons/react/outline';
import ReactPlayer from 'react-player';
import Fade from 'react-reveal/Fade';
import Tooltip, { useTooltip, TooltipPopup } from '@reach/tooltip';
import '@reach/tooltip/styles.css';

function ProjectCard({
  title,
  projectType,
  description,
  liveLink,
  techStack,
  demoVidLink,
  githubLink,
}) {
  return (
    <Fade>
      <div className="relative mb-10  flex flex-col w-5/6 md:w-4/6 max-w-screen-lg">
        <div className="mt-4 mb-2  flex space-x-2 items-center ">
          <Tooltip
            label={projectType}
            className="p-3 bg-gray-900 text-gray-100 border-none animate-fade "
          >
            <div>
              {projectType === 'Frontend' ? (
                <FaLaptopCode size="1.5em" className="text-gray-500 " />
              ) : (
                <RiStackFill size="1.5em" className="text-gray-500" />
              )}
            </div>
          </Tooltip>
          <div className="font-light tracking-wide text-teal text-xl md:text-2xl pr-1">
            {title}
          </div>
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noreferrer">
              <FiGithub
                size="1.4em"
                className="cursor-pointer transform hover:-translate-y-2 transition-all duration-150"
              />
            </a>
          )}
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noreferrer">
              <HiOutlineExternalLink
                size="1.5em"
                className=" cursor-pointer transform hover:-translate-y-2 transition-all duration-150"
              />
            </a>
          )}
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
        <div style={{ position: 'relative', paddingTop: '56.25%' }}>
          <ReactPlayer
            controls={true}
            width="100%"
            height="100%"
            url={demoVidLink}
            style={{ position: 'absolute', top: 0, left: 0 }}
            fallback="../public/tripCollabSS.png"
            loop={true}
          />
        </div>
        <div className="mt-3 p-5 md:text-lg rounded-md  bg-valhalla-light shadow-2xl">
          {description}
        </div>
      </div>
    </Fade>
  );
}

export default ProjectCard;
