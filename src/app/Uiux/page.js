"use client";

import React, { useState, useEffect } from "react";
import Top from "./../Utils/Top";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import UXProcessSection from "./components/UXProcessSection";
import ToolsSection from "./components/ToolsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import { ProjectsCount } from "./../AdminDashboard/components/ShowApidatas/ShowUserAPiDatas";

const UiuxPage = () => {
  const [Projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProjects = async () => {
    try {
      setLoading(true);
      const { admins } = await ProjectsCount();
      const uiuxProjects = admins.filter((p) => p.ProjectCategory === "UIUX");
      setProjects(uiuxProjects);
    } catch (error) {
      console.log(`Failed to fetch projects: ${error}`);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="bg-white">
      <Top />
      <HeroSection />
      <IntroSection />
      <UXProcessSection />
      <ToolsSection />
      <ProjectsSection Projects={Projects} loading={loading} />
      <ContactSection />
    </div>
  );
};

export default UiuxPage;
