import React from "react";
import Fade from "react-reveal/Fade";

function Footer() {
  return (
    <Fade>
      <hr className="m-auto w-20 mt-5 border-indigo-500 " />
      <div className="flex justify-center mt-3 dark:text-gray-300 pb-4">
        <span className="text-sm">Built using </span>
        &nbsp;
        <a
          className="text-sm hover:text-indigo-500"
          href="https://www.gatsbyjs.com/"
          target="_blank"
          rel="noreferrer"
        >
          Gatsby ·
        </a>
        &nbsp;
        <a
          className="text-sm hover:text-indigo-500"
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noreferrer"
        >
          Tailwind CSS ·
        </a>
        &nbsp;
        <a
          className="text-sm hover:text-indigo-500"
          href="https://particles.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          Particles.js ·
        </a>
        &nbsp;
        <a
          className="text-sm hover:text-indigo-500"
          href="https://www.emailjs.com/"
          target="_blank"
          rel="noreferrer"
        >
          Email.js
        </a>
      </div>
    </Fade>
  );
}

export default Footer;
