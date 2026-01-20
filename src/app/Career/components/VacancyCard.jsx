"use client";
import React from "react";
import Link from "next/link";

const VacancyCard = ({ vac }) => {
  return (
    <>
      <div className="gap-4 md:gap-0 mt-14 md:w-full px-4 md:px-12">
        <div className="flex flex-col md:flex-row">
          {/* Vacancy Info */}
          <div className="w-full md:w-3/4">
            <div className="pl-2">
              <div className="text-4xl text-paraClr font-bebas">{vac.VacancyTitle}</div>
              <div className="font-bold text-custom-blue mb-2">DESIRED SKILLS</div>
              <ul className="pl-4 mt-4 text-paraClr list-disc space-y-1">
                {vac.Requireds.split("\n")
                  .filter((item) => item.trim() !== "")
                  .map((requirement, index) => (
                    <li key={index} className="leading-relaxed">
                      {requirement.trim()}
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          {/* Vacancy Stats */}
          <div className="w-full md:w-1/4 flex justify-center mt-5 md:mt-0">
            <div className="flex flex-col justify-center items-center border-2 rounded-[10px] bg-custom-blue text-white h-[244px] w-64 md:w-[196px]">
              <p className="font-bold text-[12px] tracking-widest leading-3 mb-0">VACANCIES</p>
              <p className="font-bold text-2xl text-paraClr border-b border-white w-5/6 text-center pb-2 mt-2">
                {vac.totalVacancies}
              </p>
              <p className="font-bold text-[12px] tracking-widest mt-4">EXPERIENCE</p>
              <p className="font-bold text-2xl text-paraClr">{vac.Experience}</p>
              <Link href="#Apply">
                <button className="rounded-md bg-paraClr w-[134px] h-11 text-[#E5E5E5] hover:bg-custom-blue font-bold hover:border-white hover:border-2 mt-4">
                  APPLY NOW
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex justify-start font-bold w-full md:w-4/6 text-sm mt-10 border-b-2 border-dashed border-custom-blue"></div>

        {/* What We Offer */}
        <div className="flex flex-col px-2 mt-5">
          <span className="text-custom-blue leading-loose font-bold">WHAT WE OFFER</span>
          <ul className="mt-4 text-paraClr list-disc">
            <li> Basic salary</li>
            <li> Health allowance</li>
            <li> Paid holidays</li>
          </ul>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="flex justify-center border-black border-b-[3px] w-11/12 my-4 mt-14"></div>
    </>
  );
};

export default VacancyCard;
