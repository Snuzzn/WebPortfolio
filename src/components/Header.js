import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";
import Modal from "./Modal";
import { useState } from "react";

import HeaderItem from "./HeaderItem";

function Header() {
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }
  return (
    <>
      <div className="flex flex-col items-center">
        <nav className="w-5/6 md:w-screen fixed z-10  bg-valhalla-blue bg-opacity-95  ">
          <div className="mt-3 mb-3 md:ml-6 space-x-5 flex flex-row  ">
            <HeaderItem
              title="GitHub"
              Icon={FaGithub}
              link="https://github.com/Snuzzn"
            />
            <HeaderItem
              title="LinkedIn"
              Icon={FaLinkedin}
              link="https://www.linkedin.com/in/sanojan-thiyagaraja-13b05015b/"
            />

            <HiMailOpen
              className="z-12 cursor-pointer transform hover:-translate-y-2 transition-all duration-150"
              size="3em"
              onClick={openModal}
            />
          </div>
        </nav>
      </div>
      <Modal setOpen={setOpen} open={open} />
    </>
  );
}

export default Header;
