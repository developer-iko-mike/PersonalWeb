import React from "react";
import Landing from "./components/landing/Landing";
import AboutUs from "./components/aboutUs/AboutUs";
import Services from "./components/services/Services";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Pricing from "./components/pricing/Pricing";
import Contact from "./components/contact/Contact";

const Home = () => {
  return (
    <main>
      <Landing />
      <AboutUs />
      <Services />
      <Resume />
      <Portfolio />
      <Pricing />
      <Contact />
    </main>
  );
};

export default Home;
