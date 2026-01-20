"use client";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";

const ProcessSection = ({ loading, project }) => {
  return (
    <div className="px-10 md:px-20">
      <div className="flex justify-center items-center flex-col gap-y-3">
        <span className="font-bold text-paraClr text-lg border-b-4 border-custom-blue">
          {loading ? <Skeleton width={150} /> : project?.ProjectCategory}
        </span>

        <div className="text-custom-blue text-4xl font-bebas">THE PROCESS</div>

        <div className="text-center md:w-5/6 text-paraClr leading-tight mb-10">
          {loading ? <Skeleton count={5} /> : project?.ProjectProccess}
        </div>

        <Image
          src="/backgrounds/process1.svg"
          alt="Logo"
          width={1197}
          height={174}
          className="hidden md:block"
        />
      </div>
    </div>
  );
};

export default ProcessSection;
