import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import ParticlesBg from "../components/ParticlesBg";
import favicon from "../images/favicon.ico";
import { ToastContainer } from "react-toastify";
import "../styles/global.css";
import Fade from "react-reveal/Fade";
// markup
const IndexPage = () => {
  return (
    <main>
      <head>
        <title>Sanojan Thiyagaraja</title>
        <link rel="icon" href={favicon} />
      </head>
      <Header />
      <Fade>
        <Hero className="flex justify-center" />
      </Fade>

      <div id="projects">
        <Projects />
      </div>

      <ParticlesBg />

      <ToastContainer />
    </main>
  );
};

export default IndexPage;
