"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function StatsSection({ stats = {}, loading }) {
  // Build labels and values from stats
  const labels = [
    "Projects Delivered",
    "Happy Clients",
    "Global Office",
    "Years in Business",
    "Expert Team",
  ];

  const values = [
    stats.projectsDelivered || "0",
    stats.happyClients || "0",
    stats.globalOffice || "0",
    stats.yearsInBusiness || "0",
    stats.expertTeam || "0",
  ];

  return (
    <div
      className="flex justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/backgrounds/Group32.png')" }}
    >
      <div className="flex flex-col items-center w-full md:w-11/12 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-7">
          {loading
            ? labels.map((_, index) => (
                <div
                  key={index}
                  className="py-5 md:py-24 w-60 flex flex-col items-center mt-3"
                >
                  <Skeleton width={80} height={60} />
                  <Skeleton width={140} height={20} className="mt-4" />
                </div>
              ))
            : labels.map((label, index) => (
                <div
                  key={index}
                  className={`py-5 md:py-24 w-60 flex flex-col items-center text-white mt-3 ${
                    index !== labels.length - 1
                      ? "md:border-r border-white md:border-r-0.5"
                      : ""
                  }`}
                >
                  <span className="text-5xl md:text-6xl font-bold font-bebas tracking-custom">
                    {/* Only add + to Projects Delivered */}
                    {values[index]}{index === 0 ? " +" : ""}
                  </span>
                  <p className="text-xl mt-4">{label}</p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
