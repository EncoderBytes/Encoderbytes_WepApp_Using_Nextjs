import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ProjectCard({ project, index }) {
  const [img, setImg] = useState(
    project.Image || "/backgrounds/app2.png"
  );

  return (
    <div
      className="flex flex-col lg:flex-row justify-start md:justify-center items-center px-6 md:px-12 mt-20 md:mt-8 gap-y-4 md:gap-x-16 w-full m-auto p-8 rounded-lg"
      style={{
        backgroundColor:
          index % 2 === 0
            ? "rgb(164, 189, 247)"
            : "rgb(244, 163, 178)",
      }}
    >
      {/* Image */}
      <div
        className={`w-full h-auto md:h-full relative my-10 ${
          index % 2 === 1 ? "md:order-2" : ""
        }`}
      >
        <div className="relative w-full md:w-[700px] md:h-[420px]">
          <Image
            src={img}
            alt={project.ProjectName || "Project Image"}
            width={700}
            height={400}
            className="object-cover rounded-lg w-full h-full"
            onError={() => setImg("/backgrounds/app2.png")}
          />
        </div>
      </div>

      {/* Content */}
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

        <Link
          href={`/Case_Study?project=${project._id}`}
          className="text-white px-2 rounded-md w-42 h-11 border-2 hover:bg-white hover:text-paraClr border-white text-center justify-center cursor-pointer flex items-center font-bold"
        >
          READ CASE STUDY
        </Link>
      </div>
    </div>
  );
}
