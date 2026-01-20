"use client";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";

const HeroSection = ({ loading, project }) => {
  return (
    <div className="max-w-full flex flex-col gap-10 justify-center items-center mt-20 text-white bg-[#f9a4a4]">
      <div className="flex flex-col justify-center items-center mt-12">
        <div className="flex m-auto py-3">
          {loading ? (
            <Skeleton width={130} height={25} />
          ) : (
            <p className="flex m-auto justify-center items-center text-center font-bold tracking-widest text-2xl underline">
              {project ? project.ProjectCategory : "Statusaver"}
            </p>
          )}
        </div>

        <div className="text-4xl md:text-6xl text-center flex justify-center items-center font-bebas tracking-custom">
          {loading ? (
            <Skeleton width={200} height={20} />
          ) : (
            project ? project.ProjectName : "Social media Apps Status Downloader"
          )}
        </div>
      </div>

      <div className="pb-14">
        {loading ? (
          <Skeleton width={280} height={200} />
        ) : project ? (
          <img
            src={project.Image}
            alt="Logo"
            className="object-cover rounded-lg border-4 shadow-2xl w-100 h-65 mx-auto md:w-full md:h-full lg:w-[800px] lg:h-[400px]"
          />
        ) : (
          <Image src="/backgrounds/app3a.png" alt="Logo" width={588} height={314} />
        )}
      </div>
    </div>
  );
};

export default HeroSection;
