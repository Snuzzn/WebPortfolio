import React from "react";
import emailjs from "emailjs-com";
import { ImSpinner2 } from "react-icons/im";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm({ setOpen }) {
  const [send, setSend] = React.useState(false);
  function closeModal() {
    setOpen(false);
  }
  console.log(process.env.GATSBY_EMAILJS_USERID);
  function sendEmail(e) {
    e.preventDefault();
    setSend(true);

    emailjs
      .sendForm(
        process.env.GATSBY_EMAILJS_SERVICEID,
        "template_3mvuhra",
        e.target,
        process.env.GATSBY_EMAILJS_USERID
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("🚀 Success! I'll get back to you soon!", {
            position: "top-center",
            autoClose: "autoClose: 5000",
          });
          closeModal();
        },
        (error) => {
          console.log(error.text);
          toast.error("Something went wrong! Please email me manually.", {
            position: "top-center",
            autoClose: "autoClose: 5000",
          });
          setSend(false);
        }
      );
  }
  return (
    <form className="flex flex-col mt-5 " onSubmit={sendEmail}>
      <label for="user_name">Your Name:</label>
      <input
        className="rounded-lg p-2 mt-1 mb-5 bg-clay border-gray-100 focus:outline-none focus:ring-1 focus:ring-teal focus:border-transparent shadow-md"
        type="text"
        name="user_name"
        required
      />
      <label for="user_email">Your Email:</label>
      <input
        type="email"
        name="user_email"
        required
        className="rounded-lg p-2 mt-1 mb-5 bg-clay border-gray-100 focus:outline-none focus:ring-1 focus:ring-teal focus:border-transparent shadow-md"
      />
      <label>Message:</label>
      <textarea
        name="message"
        required
        className="rounded-lg p-2 mt-1 mb-5 bg-clay border-gray-100 focus:outline-none focus:ring-1 focus:ring-teal focus:border-transparent shadow-md"
      />
      {!send ? (
        <button className="rounded-lg p-2 mb-5 bg-teal-dark hover:bg-teal-lightDark cursor-pointer focus:outline-none focus:ring focus:ring-teal-light focus:ring-offset-2 focus:border-transparent shadow-md">
          <input
            type="submit"
            value="Send"
            className="text-white bg-teal-dark"
          />
        </button>
      ) : (
        <button className="flex items-center justify-center space-x-2 p-2 mb-5  rounded-lg bg-teal-dark cursor-pointer">
          <ImSpinner2 className="animate-spin" />
          <div className="text-center">Sending</div>
        </button>
      )}
    </form>
  );
}

export default ContactForm;
