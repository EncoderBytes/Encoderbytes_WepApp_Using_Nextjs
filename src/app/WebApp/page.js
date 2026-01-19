"use client";

import { useEffect, useState } from "react";
import Top from "../Utils/Top";
import Contactform from "../Utils/Contactform";

import HeroBanner from "./components/HeroBanner";
import IntroSection from "./components/IntroSection";
import ServicesSection from "./components/ServicesSection";
import ImportanceSection from "./components/ImportanceSection";
import IPProtectionSection from "./components/IPProtectionSection";
import IndustriesSection from "./components/IndustriesSection";
import ToolsTechSection from "./components/ToolsTechSection";
import WebProjectsSection from "./components/WebProjectsSection";

import { ProjectsCount } from "../AdminDashboard/components/ShowApidatas/ShowUserAPiDatas";

export default function WebAPP() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProjects = async () => {
    try {
      setLoading(true);
      const { admins } = await ProjectsCount();
      setProjects(admins.filter(p => p.ProjectCategory === "Web App"));
    } catch (err) {
      console.error(err);
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
      <HeroBanner />
      <IntroSection />
      <ServicesSection />
      <ImportanceSection />
      <IPProtectionSection />
      <IndustriesSection />
      <ToolsTechSection />
      <WebProjectsSection projects={projects} loading={loading} />
      <Contactform />
    </div>
  );
}
