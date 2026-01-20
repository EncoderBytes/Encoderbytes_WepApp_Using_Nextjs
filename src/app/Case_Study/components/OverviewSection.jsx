"use client";
import Skeleton from "react-loading-skeleton";

const OverviewSection = ({ loading, project }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 mt-14 md:mt-14 md:gap-x-16 mb-14">
      <div className="flex flex-col justify-center items-center md:items-start gap-y-3 text-center md:text-left md:w-[70%]">
        <div className="font-bold text-paraClr text-lg border-b-4 border-custom-blue inline-block">
          {loading ? <Skeleton width={150} /> : project?.ProjectCategory}
        </div>

        <div className="text-4xl font-bebas tracking-custom">
          <span className="text-custom-blue">OVERVIEW</span>
        </div>

        <p className="text-sm md:text-base text-paraClr leading-tight">
          {loading ? <Skeleton count={5} /> : project?.ProjectDescription}
        </p>
      </div>

      <div className="w-full md:w-[30%] mt-5 md:mt-0">
        <div className="bg-custom-blue-light w-[250px] h-[139px] rounded-[10px] m-auto">
          <div className="bg-custom-blue rounded-t-[10px] h-10 flex items-center justify-center">
            <h2 className="font-bold text-white">Project Timeline</h2>
          </div>

          <div className="bg-[#b2cef54d] rounded-b-[10px] flex items-center justify-center h-[99px]">
            {loading ? <Skeleton width={120} /> : project?.ProjectTimeline}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
