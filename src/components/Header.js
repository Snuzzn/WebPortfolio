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
      <nav className="fixed z-10 w-screen bg-valhalla-blue bg-opacity-95 ">
        <div className="md:w-lg flex flex-row m-4 space-x-5">
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
          {/* <HeaderItem title="Resume" Icon={RiFileList2Fill} link="" /> */}

          <HiMailOpen
            className="z-12 cursor-pointer transform hover:-translate-y-2 transition-all duration-150"
            size="3em"
            onClick={openModal}
          />
        </div>
        <Modal setOpen={setOpen} open={open} />
      </nav>
    </>
  );
}

export default Header;
