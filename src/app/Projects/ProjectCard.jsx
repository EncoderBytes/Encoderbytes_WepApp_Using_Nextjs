import React from "react";
import Image from "next/image";

const ProjectCard = ({ project }) => {
  const categoryParts = project.ProjectCategory.split(" ");
  const nameParts = project.ProjectName.split(" ");

  return (
    <div className="rounded-lg overflow-hidden shadow-md w-full bg-blue-100 border border-gray-200 p-3 sm:p-4 md:p-5 transition-transform hover:scale-105">
      <Image
        className="w-full h-40 object-cover rounded-md"
        src={project.Image?.startsWith("http") ? project.Image : `/uploads/${project.Image}`}
        alt={project.ProjectName}
        width={400}
        height={160}
        unoptimized={project.Image?.startsWith("http")}
      />
      <div className="px-2 py-3">
        <div className="font-semibold text-xs sm:text-sm text-gray-600 mb-2">
          <span className="text-lg sm:text-xl font-black border-b-2 border-custom-blue">
            {categoryParts[0]}
          </span>{" "}
          <span className="text-lg sm:text-xl font-black pl-1">
            {categoryParts[1] || ""}
          </span>
        </div>
        <div className="font-bold text-sm sm:text-md mb-1">
          <span className="text-lg sm:text-xl font-bold ">
            {nameParts[0]}
          </span>{" "}
          <span className="text-lg sm:text-xl font-bold text-custom-blue pl-1">
            {nameParts[1] || ""}
          </span>
        </div>
        <div className="mt-5">
          <a href={`../Case_Study?project=${project.id}`} rel="noopener noreferrer">
            <button className="bg-custom-blue hover:bg-transparent hover:border-2 hover:border-custom-blue hover:text-custom-blue text-white font-bold px-4 py-2 rounded text-xs sm:text-sm">
              READ CASE STUDY
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
