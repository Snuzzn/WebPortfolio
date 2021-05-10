import React from "react";

function Footer() {
  return (
    <div>
      <hr className="m-auto w-20 mt-5 border-teal" />
      <div className="flex justify-center mt-3 mb-4 ">
        <span className="text-sm">Built using: </span>
        &nbsp; &nbsp;
        <a
          className="text-sm hover:text-teal"
          href="https://www.gatsbyjs.com/"
          target="_blank"
          rel="noreferrer"
        >
          Gatsby
        </a>
        &nbsp; &middot; &nbsp;
        <a
          className="text-sm hover:text-teal"
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noreferrer"
        >
          Tailwind CSS
        </a>
        &nbsp; &middot; &nbsp;
        <a
          className="text-sm hover:text-teal"
          href="https://particles.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          Particles.js
        </a>
        &nbsp; &middot; &nbsp;
        <a
          className="text-sm hover:text-teal"
          href="https://www.emailjs.com/"
          target="_blank"
          rel="noreferrer"
        >
          Email.js
        </a>
      </div>
    </div>
  );
}

export default Footer;
