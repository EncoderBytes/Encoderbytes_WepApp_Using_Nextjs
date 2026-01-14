"use client";
import React, { useState, useEffect } from "react";
import Top from "../Utils/Top";
import Contactform from "../Utils/Contactform";
import HeroSection from "./components/HeroSection";
import SideNavigation from "./components/SideNavigation";
import WorkStepsSection from "./components/WorkStepsSection";
import CommunicationSection from "./components/CommunicationSection";

const How_we_work = () => {
  const [activeLink, setActiveLink] = useState("#01");

  useEffect(() => {
    // ✅ Observe ONLY work step sections
    const sections = document.querySelectorAll(".work-step");

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(`#${entry.target.id}`);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="bg-white">
      <Top />
      <HeroSection />

      <section className="flex items-start justify-center">
        <SideNavigation
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
        <WorkStepsSection />
      </section>

      <CommunicationSection />
      <Contactform />
    </div>
  );
};

export default How_we_work;
