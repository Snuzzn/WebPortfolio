import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef } from "react";
import ContactForm from "./ContactForm";
import { BiMailSend } from "react-icons/bi";
import { MdClose } from "react-icons/md";

function Modal({ setOpen, open }) {
  function closeModal() {
    setOpen(false);
  }
  const cancelButtonRef = useRef();

  return (
    <div>
      <Transition show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto "
          initialFocus={cancelButtonRef}
          static
          open={open}
          onClose={closeModal}
        >
       
          <div className=" min-h-screen px-4 text-center ">
          
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 " />
            </Transition.Child>

            <Dialog.Overlay className="fixed inset-0 bg-black opacity-50 " />

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div
                className="relative bg-white inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl dark:bg-gray-900"
              >
                <button className="absolute top-4 right-4 text-white" tabindex="-1" onClick={closeModal}>
                  <MdClose size="1.3em"/>
                </button>
                <div className="flex items-center space-x-2">
                  <BiMailSend size="1.5em" />
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 dark:text-white"
                  >
                    Get in Touch!
                  </Dialog.Title>
                </div>

                <ContactForm setOpen={setOpen} />
                <p className="text-sm text-gray-500">
                  You can also email me at &nbsp;
                  <a href="mailto: sanojan99@gmail.com" className="text-indigo-500">sanojan99@gmail.com</a>.
                </p>
                {/* <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div> */}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}

export default Modal;
