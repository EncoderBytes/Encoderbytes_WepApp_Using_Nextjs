"use client";
import Skeleton from "react-loading-skeleton";

const SolutionSection = ({ loading, project }) => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-12 gap-y-10 md:gap-x-16 mb-14 bg-[#f9a4a4] py-10 text-white">
      
      <div className="flex flex-col justify-center items-center md:items-start gap-y-3 text-center md:text-left w-full md:w-1/2">
        <span className="border-b-4 border-white font-bold">
          {loading ? <Skeleton width={150} /> : project?.ProjectCategory}
        </span>

        <div className="text-4xl font-bebas tracking-custom">Solution</div>

        <p className="text-sm md:text-base leading-tight">
          {loading ? <Skeleton count={10} /> : project?.ProjectSolution}
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        {loading ? (
          <Skeleton height={170} width={170} />
        ) : project ? (
          <img
            src={project.Image}
            alt="Logo"
            className="object-cover rounded-lg border-4 shadow-2xl w-[400px] lg:w-[550px]"
          />
        ) : null}
      </div>
    </div>
  );
};

export default SolutionSection;
