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
        <nav className="w-5/6 flex justify-center	z-10 fixed md:w-screen ">
          <div className="bg-white filter bg-opacity-80 backdrop-filter backdrop-blur-2xl filter drop-shadow-lg	border-[1px] border-gray-300  border-opacity-40  mt-6 gap-2 md:ml-6 space-x-5 flex flex-row  px-10 rounded-[30px] pt-6 dark:bg-gray-800 dark:border-gray-700 dark:bg-opacity-75">
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
