"use client";

import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FaArrowCircleRight } from "react-icons/fa";

export default function IndustriesSection({ latestProject = [], loading }) {
  return (
    <div className="flex flex-col">
      {/* Heading */}
      <div className="flex flex-col md:flex-row mt-20 md:px-10 md:justify-between items-center">
        <div className="px-4 font-bebas tracking-custom leading-tight text-4xl">
          <p className="-mb-2">
            INDUSTRIES &nbsp;
            <span className="text-custom-blue">WE ARE SERVING</span>
          </p>
        </div>

        <div className="mt-3 md:mt-0 mx-4 md:mx-8">
          <Link href="/Industries">
            <button className="text-custom-blue font-semibold transition-all w-[171px] h-11 border-2 border-custom-blue rounded-md hover:text-white hover:bg-custom-blue">
              Explore All
            </button>
          </Link>
        </div>
      </div>

      {/* Description */}
      <div className="mt-7 px-2 md:mt-3 md:px-10 ml-4 md:w-8/12 text-paraClr leading-tight">
        <p>
          We are working with several industries to improve their businesses
          and experiences through technology. We have built many web and
          mobile applications for them.
        </p>
      </div>

      {/* Industry Blocks */}
      {latestProject.map((project, idx) => {
        const isReverse = idx % 2 === 1; // alternate layout
        return (
          <div
            key={idx}
            className={`flex flex-col ${isReverse ? "md:flex-row-reverse" : "md:flex-row"} justify-center items-center px-6 md:px-12 mt-20 gap-y-8 md:gap-x-8`}
          >
            {/* Text */}
            <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
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
                  {project?.ProjectDescription ||
                    "We are helping and educating doctors and other people through our applications."}
                </p>
              )}

              {project ? (
                <a
                  href={`/Case_Study?project=${project?.id || project?._id || ""}`}
                  rel="noopener noreferrer"
                >
                  <button className="text-custom-blue font-semibold transition-all w-[157px] h-11 border-2 border-custom-blue rounded-md hover:text-white hover:bg-custom-blue flex items-center justify-center gap-3">
                    Read Details <FaArrowCircleRight />
                  </button>
                </a>
              ) : (
                <Link href="#">
                  <button className="text-custom-blue font-semibold transition-all w-[157px] h-11 border-2 border-custom-blue rounded-md hover:text-white hover:bg-custom-blue flex items-center justify-center gap-3">
                    Read Details <FaArrowCircleRight />
                  </button>
                </Link>
              )}
            </div>

            {/* Image */}
            <div
              className="bg-yellow w-full md:w-[70%] relative h-[300px] md:h-[400px] lg:w-[746px] lg:h-[469px] rounded-lg overflow-hidden"
            >
              {loading ? (
                <Skeleton height={300} width={"100%"} borderRadius={12} />
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
                  className="w-full h-full object-cover"
                  width={400}
                  height={400}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
