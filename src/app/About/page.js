"use client";

import Top from "../Utils/Top";
import Contactform from "../Utils/Contactform";

import AboutHero from "./components/AboutHero";
import AboutWhoWeAre from "./components/AboutWhoWeAre";
import AboutValues from "./components/AboutValues";
import AboutWhyChooseUs from "./components/AboutWhyChooseUs";
import AboutDiscussCTA from "./components/AboutDiscussCTA";
import AboutLife from "./components/AboutLife";
import AboutTeam from "./components/AboutTeam";
import AboutCareer from "./components/AboutCareer";

const Page = () => {
  return (
    <div className="bg-white">
      <Top />

      <AboutHero />
      <AboutWhoWeAre />
      <AboutValues />
      <AboutWhyChooseUs />
      <AboutDiscussCTA />
      <AboutLife />
      <AboutTeam />
      <AboutCareer />

      <Contactform />
    </div>
  );
};

export default Page;
