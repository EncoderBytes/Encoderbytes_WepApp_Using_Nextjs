import React from "react";
import dynamic from "next/dynamic";
import Top from "../Utils/Top";
import HeroSection from "./components/HeroSection";
import HowWeDoItSection from "./components/HowWeDoItSection";
import ServicesProvidedSection from "./components/ServicesProvidedSection";
import ServiceDetailSection from "./components/ServiceDetailSection";
import CostOfSoftwareSection from "./components/CostOfSoftwareSection";

const ContactformDynamic = dynamic(() => import("../Utils/Contactform"), { ssr: false });

const Services = () => {
  return (
    <div className="bg-white">
      <Top />
      <HeroSection />
      <HowWeDoItSection />
      <ServicesProvidedSection />
      <ServiceDetailSection />
      <CostOfSoftwareSection />
      <ContactformDynamic />
    </div>
  );
};

export default Services;
