"use client";
import React from "react";
import Top from "../Utils/Top";
import Contactform from "../Utils/Contactform";

import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import CtaSection from "./Components/CtaSection";
import ToolsSection from "./components/ToolsSection";
import ProjectsSection from "./components/ProjectsSection";

const Ai = () => {
  return (
    <div className=" bg-white">
      <Top />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CtaSection />
      <ToolsSection />
      <ProjectsSection />
      <Contactform />
    </div>
  );
};

export default Ai;
