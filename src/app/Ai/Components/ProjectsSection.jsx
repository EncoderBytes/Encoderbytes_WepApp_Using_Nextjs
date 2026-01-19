"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProjectsSection = ({ loading, Projects }) => {
  return (
    <section className="bg-gray-100 pb-10 mt-14 md:px-12" id="aiprojects">
      <div className="flex pt-14 justify-center items-center text-4xl font-bebas tracking-custom">
        <span>ARTIFICIAL</span>
        <span className="text-custom-blue">&nbsp; INTELLIGENCE</span>
      </div>

      {loading ? (
        // Show skeleton loaders while loading
        Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-start items-center px-6 md:px-12 mt-20 md:mt-8 gap-y-8 md:gap-x-16 md:w-6/6 m-auto p-8 rounded-lg"
            style={{ backgroundColor: "rgb(164, 189, 247)" }}
          >
            <div
              className={`w-full md:w-[55%] h-auto md:h-[400px] relative my-10 ${
                index % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <Skeleton height={400} width={"100%"} borderRadius={12} />
            </div>
            <div
              className={`flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[45%] ${
                index % 2 === 1 ? "md:order-1" : ""
              }`}
            >
              <Skeleton width={150} height={25} />
              <Skeleton width={250} height={25} />
              <Skeleton width={400} count={5} />
              <Skeleton width={150} height={40} borderRadius={6} />
            </div>
          </div>
        ))
      ) : Projects && Projects.length > 0 ? (
        // Show all projects dynamically
        Projects.map((project, index) => (
          <div
            key={project.id || project._id || index}
            className="flex flex-col lg:flex-row justify-start md:justify-center items-center px-6 md:px-12 mt-20 md:mt-8 gap-y-4 md:gap-x-16 md:w-6/6 m-auto p-8 rounded-lg"
            style={{
              backgroundColor:
                index % 2 === 0
                  ? "rgb(164, 189, 247)" // blue
                  : "rgb(244, 163, 178)", // pink
            }}
          >
            <div
              className={`w-full h-auto md:h-full relative my-10 ${
                index % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <div className="relative w-full h-full lg:w-[700px] lg:h-[420px]">
                <Image
                  src={project.Image || "/backgrounds/app2.png"}
                  alt={project.ProjectName || "Project Image"}
                  className="object-cover rounded-lg w-full h-full lg:w-[700px] lg:h-[400px]"
                  width={400}
                  height={250}
                  onError={(e) => {
                    e.target.src = "/backgrounds/app2.png";
                  }}
                />
              </div>
            </div>

            <div
              className={`flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-full md:px-2 ${
                index % 2 === 1 ? "md:order-1" : ""
              }`}
            >
              <div className="text-2xl font-bold text-paraClr">
                <span className="border-b-4 border-white">
                  {project.ProjectCategory || "Mobile App"}
                </span>
              </div>

              <div className="text-4xl text-white font-bebas tracking-custom">
                {project.ProjectName || "Project Name"}
              </div>

              <p className="text-paraClr leading-tight line-clamp-3">
                {project.ProjectDescription ||
                  "Project description not available."}
              </p>

              <div className="text-white px-2 rounded-md w-42 h-11 border-2 hover:bg-white hover:text-paraClr border-white text-center justify-center cursor-pointer flex items-center font-bold">
                <a
                  href={`/Case_Study?project=${
                    project.id || project._id || ""
                  }`}
                  rel="noopener noreferrer"
                >
                  <button>READ CASE STUDY</button>
                </a>
              </div>
            </div>
          </div>
        ))
      ) : (
        // Show fallback content when no projects are available
        <div
          className="flex flex-col md:flex-row justify-start items-center px-6 md:px-12 mt-20 md:mt-8 gap-y-8 md:gap-x-16 md:w-6/6 m-auto p-8 rounded-lg"
          style={{ backgroundColor: "rgb(164, 189, 247)" }}
        >
          <div className="w-full md:w-[50%] h-auto md:h-full relative my-10">
            <Image
              src="/backgrounds/app2.png"
              alt="Default Mobile App"
              className="object-cover w-full h-full"
              width={350}
              height={350}
            />
          </div>

          <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
            <div className="text-2xl font-bold text-paraClr">
              <span className="border-b-4 border-white">Ai</span>
            </div>

            <div className="text-4xl text-white font-bebas tracking-custom">
              NO PROJECTS AVAILABLE
            </div>

            <p className="text-paraClr leading-tight">
              Currently, there are no Ai projects available to display. Please
              check back later or contact us for more information.
            </p>

            <div className="text-white rounded-md w-40 h-11 border-2 hover:bg-custom-blue border-white text-center justify-center cursor-pointer flex items-center font-bold">
              <button>COMING SOON</button>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-center items-center mt-10">
        <Link href="/Projects">
          <button className="text-customFull transition-all w-36 h-10 font-semibold mt-4 rounded-md bg-custom-blue mb-3 hover:bg-gray-100 hover:border-2 hover:border-custom-blue hover:text-custom-blue">
            View All Projects
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
