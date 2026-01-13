"use client";

import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function RecentProjectsSection({ projects, loading }) {
  const latestProject = projects[0] ? projects[0] : null;

  return (
    <section className="bg-white pt-10 -mb-16">
      {/* Section Header */}
      <div className="md:px-10 w-full">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="px-4 md:px-3 font-bebas tracking-custom leading-tight text-4xl">
            <p className="-mb-2 m-0">RECENT PROJECTS</p>
            <p className="text-custom-blue m-0">
              FROM OUR PORTFOLIO<span className="text-black">.</span>
            </p>
          </div>

          <div className="mt-4 md:mt-0 mr-10">
            <Link href="/Projects">
              <button className="text-custom-blue font-semibold transition-all w-[171px] h-11 border-2 border-custom-blue rounded-md hover:text-white hover:bg-custom-blue">
                View All Projects
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-4 ml-4 md:ml-3 md:w-8/12">
          <p className="text-paraClr leading-tight m-0">
            As we have delivered many web, mobile, and AI projects recently, the
            most recent project we have completed is given below.
          </p>
        </div>
      </div>

      {/* Latest Project */}
      <div className="flex flex-col lg:flex-row justify-center items-center px-6 md:px-12 mt-6 gap-y-8 md:gap-x-8">
        <div
          className="bg-yellow w-full md:w-[70%] relative 
          h-[300px] md:h-[400px] 
          lg:w-[746px] lg:h-[469px] 
          rounded-lg overflow-hidden"
        >
          {loading ? (
            <Skeleton height={400} width="100%" borderRadius={12} />
          ) : latestProject ? (
            <Image
              src={latestProject.image || latestProject.Image}
              alt={latestProject.title || latestProject.ProjectName}
              fill
              className="object-cover"
            />
          ) : (
            <Image
              src="/backgrounds/induz-a-industrial-category-wordpress-theme.webp"
              alt="Project"
              fill
              className="object-cover"
            />
          )}
        </div>

        <div className="flex flex-col justify-center items-center lg:items-start gap-y-4 text-center lg:text-left lg:w-[50%]">
          <div className="text-2xl font-bold text-paraClr border-b-4 border-custom-blue">
            {loading ? (
              <Skeleton width={150} />
            ) : (
              <h1 className="m-0">
                {latestProject?.category || latestProject?.ProjectCategory}
              </h1>
            )}
          </div>

          <div className="flex flex-col items-center md:items-start font-bebas tracking-custom">
            {loading ? (
              <Skeleton width={200} count={2} />
            ) : (
              <div className="text-4xl text-custom-blue">
                {latestProject?.title || latestProject?.ProjectName}
              </div>
            )}
          </div>

          {loading ? (
            <Skeleton width={400} count={3} />
          ) : (
            <p className="leading-tight line-clamp-3 m-0">
              {latestProject?.description ||
                latestProject?.ProjectDescription}
            </p>
          )}

          <div className="flex gap-3 mt-2">
            <a
              href={`/Case_Study?project=${
                latestProject?.id || latestProject?._id || ""
              }`}
            >
              <button className="bg-custom-blue hover:bg-transparent hover:border-2 hover:border-custom-blue hover:text-custom-blue text-white font-bold px-4 py-2 rounded text-xs sm:text-sm">
                READ CASE STUDY
              </button>
            </a>

            <Link
              href="#form"
              className="text-custom-blue font-semibold transition-all w-[127px] border-2 border-custom-blue rounded-md hover:text-white hover:bg-custom-blue flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
