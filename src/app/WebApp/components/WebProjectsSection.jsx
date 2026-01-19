"use client";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

const WebProjectsSection = ({ projects = [], loading }) => {
  return (
    <section
      id="webprojects"
      className="bg-[#eff3f7] py-14 md:px-12"
    >
      {/* Section Title */}
      <div className="flex justify-center items-center mb-12 text-4xl font-bebas tracking-custom">
        <span>WEB</span>
        <span className="text-custom-blue">&nbsp;APPLICATIONS</span>
      </div>

      {/* Loading State */}
      {loading ? (
        Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center gap-10 px-6 md:px-12 mb-12 p-8 rounded-lg"
            style={{
              backgroundColor:
                index % 2 === 0
                  ? "rgb(164, 189, 247)"
                  : "rgb(244, 163, 178)",
            }}
          >
            <div
              className={`w-full md:w-[55%] ${
                index % 2 === 1 ? "md:order-2" : ""
              }`}
            >
              <Skeleton height={400} borderRadius={12} />
            </div>

            <div
              className={`flex flex-col gap-5 text-center md:text-left md:w-[45%] ${
                index % 2 === 1 ? "md:order-1" : ""
              }`}
            >
              <Skeleton width={150} height={25} />
              <Skeleton width={250} height={25} />
              <Skeleton width={400} count={4} />
              <Skeleton width={150} height={40} borderRadius={6} />
            </div>
          </div>
        ))
      ) : projects.length > 0 ? (
        projects.map((project, index) => (
          <div
            key={project.id || project._id || index}
            className="flex flex-col lg:flex-row items-center gap-10 px-6 md:px-12 mb-12 p-8 rounded-lg"
            style={{
              backgroundColor:
                index % 2 === 0
                  ? "rgb(164, 189, 247)"
                  : "rgb(244, 163, 178)",
            }}
          >
            <div
              className={`w-full lg:w-[700px] ${
                index % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              <Image
                src={project.Image || "/backgrounds/app2.png"}
                alt={project.ProjectName || "Project Image"}
                width={700}
                height={400}
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>

            <div
              className={`flex flex-col gap-5 text-center lg:text-left lg:flex-1 ${
                index % 2 === 1 ? "lg:order-1" : ""
              }`}
            >
              <div className="text-2xl font-bold text-paraClr">
                <span className="border-b-4 border-white">
                  {project.ProjectCategory || "Web App"}
                </span>
              </div>

              <div className="text-4xl text-white font-bebas tracking-custom">
                {project.ProjectName}
              </div>

              <p className="text-paraClr line-clamp-3">
                {project.ProjectDescription}
              </p>

              <Link
                href={`/Case_Study?project=${project.id || project._id}`}
                className="inline-flex items-center justify-center w-44 h-11 border-2 border-white text-white font-bold rounded-md hover:bg-white hover:text-paraClr transition"
              >
                READ CASE STUDY
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div className="flex flex-col md:flex-row items-center gap-10 px-6 md:px-12 p-8 rounded-lg bg-[rgb(164,189,247)]">
          <Image
            src="/backgrounds/app2.png"
            alt="No projects"
            width={400}
            height={400}
            className="rounded-lg"
          />

          <div className="flex flex-col gap-5 text-center md:text-left">
            <h3 className="text-4xl text-white font-bebas">
              NO PROJECTS AVAILABLE
            </h3>
            <p className="text-paraClr">
              Please check back later for web application projects.
            </p>
          </div>
        </div>
      )}

      {/* View All */}
      <div className="flex justify-center mt-10">
        <Link href="/Projects">
          <button className="w-36 h-10 font-semibold rounded-md bg-custom-blue text-white hover:bg-white hover:text-custom-blue hover:border-2 hover:border-custom-blue transition">
            View All Projects
          </button>
        </Link>
      </div>
    </section>
  );
};

export default WebProjectsSection;
