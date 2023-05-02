import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import ParticlesBg from "../components/ParticlesBg";
import favicon from "../images/favicon3.ico";
import { ToastContainer } from "react-toastify";
import "../styles/global.css";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

// markup
const IndexPage = () => {
  return (
    <main>
      <Helmet>
        <title>Sanojan Thiyagaraja</title>
        <link rel="icon" href={favicon} />
        <meta
          name="description"
          content="Sanojan Thiyagaraja | UNSW Computer Science Graduate"
        />
      </Helmet>
      <Header />
      <Hero />
      <Projects />
      <Footer />
      <ParticlesBg />
      <ToastContainer />
    </main>
  );
};

export default IndexPage;
