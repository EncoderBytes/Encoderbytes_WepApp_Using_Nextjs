"use client";

import { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection.jsx";
import IntroSection from "./components/IntroSection.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import IndustriesSection from "./components/IndustriesSection.jsx";
import ProcessSection from "./components/ProcessSection.jsx";
import CostSection from "./components/CostSection.jsx";
import ToolsSection from "./components/ToolsSection.jsx";
import ProjectsSection from "./components/ProjectSection.jsx";
import Contactform from "../Utils/Contactform";
import { ProjectsCount } from "../AdminDashboard/components/ShowApidatas/ShowUserAPiDatas";

export default function MobilePage() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { admins } = await ProjectsCount();
        const mobileProjects = admins.filter(
          (p) => p.ProjectCategory === "Mobile App"
        );
        setProjects(mobileProjects);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  return (
    <div className="bg-white">
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <IndustriesSection />
      <ProcessSection />
      <CostSection />
      <ToolsSection />
      <ProjectsSection projects={projects} loading={loading} />
      <Contactform />
    </div>
  );
}
