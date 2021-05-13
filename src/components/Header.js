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
        <nav className="w-5/6 md:w-screen fixed z-10 bg-valhalla-blue bg-opacity-95  ">
          <div className="mt-6  md:ml-6 space-x-5 flex flex-row  ">
            <a
              href={"https://github.com/Snuzzn"}
              target="_blank"
              rel="noreferrer"
            >
              <HeaderItem title="GitHub" Icon={FaGithub} />
            </a>
            <a
              href={
                "https://www.linkedin.com/in/sanojan-thiyagaraja-13b05015b/"
              }
              target="_blank"
              rel="noreferrer"
            >
              <HeaderItem title="LinkedIn" Icon={FaLinkedin} />
            </a>
            <div onClick={openModal}>
              <HeaderItem title="Email" Icon={HiMailOpen} />
            </div>
          </div>
        </nav>
      </div>
      <Modal setOpen={setOpen} open={open} />
    </>
  );
}

export default Header;
