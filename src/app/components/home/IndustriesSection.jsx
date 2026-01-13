"use client";

import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FaArrowCircleRight } from "react-icons/fa";

export default function IndustriesSection({ latestProject = [], loading }) {
  const projectsToShow = latestProject || [];

  return (
    <div className="flex flex-col pt-8 md:pt-10 lg:pt-12">
      
      {/* ================== HEADING ================== */}
      <div className="text-center px-4 md:px-12 mb-16 md:mb-20">
        <h2 className="text-2xl md:text-3xl font-bold tracking-wide">
          INDUSTRIES <span className="text-custom-blue">WE ARE SERVING</span>
        </h2>

        <p className="mt-4 max-w-4xl mx-auto text-sm md:text-base text-paraClr leading-relaxed">
          We are working with several industries to improve their businesses and
          experiences through technology. We have built many web and mobile
          applications for them.
        </p>
      </div>
      {/* ================================================= */}

      {/* ================== PROJECTS ================== */}
      {projectsToShow.map((project, idx) => {
        const isReverse = idx % 2 === 1;
        const isLast = idx === projectsToShow.length - 1;

        return (
          <div
            key={project.id || idx}
            className={`flex flex-col ${
              isReverse ? "md:flex-row-reverse" : "md:flex-row"
            } justify-center items-center px-4 sm:px-6 md:px-12 gap-8 ${
              !isLast ? "mb-16 md:mb-20 lg:mb-28" : "-mb-10 md:-mb-16"
            }`}
          >
            {/* -------- TEXT -------- */}
            <div className="flex flex-col justify-center items-center md:items-start gap-5 text-center md:text-left md:w-1/2">
              <div className="text-2xl font-bold">
                <span className="border-b-4 border-custom-blue">I n d u</span>
                <span>
                  s t r y <span className="text-custom-blue">.</span>
                </span>
              </div>

              {loading ? (
                <Skeleton width={150} height={30} />
              ) : (
                <div className="text-custom-blue text-4xl font-bebas tracking-custom">
                  {project?.ProjectCategory || "HEALTH"}
                </div>
              )}

              {loading ? (
                <Skeleton count={3} width={400} />
              ) : (
                <p className="text-paraClr leading-tight line-clamp-3">
                  {project?.ProjectDescription || "Description not available."}
                </p>
              )}

              <Link href={`/Case_Study?project=${project?.id || ""}`}>
                <button className="text-custom-blue font-semibold transition-all w-[157px] h-11 border-2 border-custom-blue rounded-md hover:text-white hover:bg-custom-blue flex items-center justify-center gap-3">
                  Read Details <FaArrowCircleRight />
                </button>
              </Link>
            </div>

            {/* -------- IMAGE -------- */}
            <div className="w-full md:w-[70%] lg:w-[746px] relative h-[300px] md:h-[400px] lg:h-[469px] rounded-lg overflow-hidden">
              {loading ? (
                <Skeleton height={300} width="100%" borderRadius={12} />
              ) : project?.Image ? (
                <Image
                  src={project.Image}
                  alt={project.ProjectCategory}
                  fill
                  className="object-cover"
                />
              ) : (
                <Image
                  src="/backgrounds/Mask-group1.webp"
                  alt="Industry Illustration"
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </div>
        );
      })}
      {/* ================================================= */}
    </div>
  );
}
