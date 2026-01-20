"use client";
import React, { useEffect, useState } from "react";
import Top from "../Utils/Top";
import { VacancyCount } from "../AdminDashboard/components/ShowApidatas/ShowUserAPiDatas";
import HeroSection from "./components/HeroSection";
import IntroSection from "./components/IntroSection";
import VacancyList from "./components/VacancyList";
import ApplyFormSection from "./components/ApplyFormSection";

const Page = () => {
  const [vacancy, setVacancy] = useState([]);

  const getVacancy = async () => {
    try {
      const response = await VacancyCount();
      setVacancy(response.admins || []);
    } catch (error) {
      console.error(`Failed to fetch vacancies: ${error}`);
    }
  };

  useEffect(() => {
    getVacancy();
  }, []);

  return (
    <div className="bg-white">
      <Top />
      <HeroSection />
      <IntroSection />
      <VacancyList vacancies={vacancy} />
      <ApplyFormSection />
    </div>
  );
};

export default Page;
