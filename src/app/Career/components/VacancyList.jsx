"use client";
import React from "react";
import VacancyCard from "./VacancyCard";

const VacancyList = ({ vacancies }) => {
  return (
    <div className="bg-custom pb-14">
      <div className="flex flex-col justify-center items-center w-full m-auto">
        {/* Section Title */}
        <p className="text-3xl text-center md:text-left mt-10 uppercase font-bebas tracking-custom">
          Currently Available <span className="text-custom-blue">positions</span>
        </p>

        {/* Check if vacancies exist */}
        {vacancies && vacancies.length > 0 ? (
          vacancies.map((vac, index) => (
            <VacancyCard key={index} vac={vac} />
          ))
        ) : (
          <p className="text-center py-10 text-paraClr">
            No vacancies available at the moment.
          </p>
        )}
      </div>
    </div>
  );
};

export default VacancyList;
