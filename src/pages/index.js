import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import favicon from "../images/favicon3.ico";
import { ToastContainer } from "react-toastify";
import "../styles/global.css";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";
import ThemeContextProvider from "../components/ThemeContext";
import ThemeSwitch from "../components/ThemeSwitch";

// markup
const IndexPage = () => {
  return (
    <ThemeContextProvider>
      <main className="dark:bg-gray-800">
        <div className="bg-[#c8e6f5] absolute top-[-6rem] -z-20 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full filter blur-[10rem] sm:w-[68.75rem] dark:bg-[#346078]" />
        <div className="bg-[#d6cbe9] absolute top-[-1rem] -z-20 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full filter blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
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
        {/* <ParticlesBg /> */}
        <ToastContainer />
        <ThemeSwitch />
      </main>
    </ThemeContextProvider>
  );
};

export default IndexPage;
