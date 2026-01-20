import React from "react";

const ProjectsSkeleton = () => (
  <div className="rounded-lg overflow-hidden shadow-md w-full bg-blue-100 border border-gray-200 p-3 sm:p-4 md:p-5 animate-pulse">
    <div className="w-full h-40 bg-gray-300 rounded-md mb-4" />
    <div className="px-2 py-3">
      <div className="h-6 bg-gray-300 rounded w-1/2 mb-2" />
      <div className="h-5 bg-gray-300 rounded w-2/3 mb-1" />
      <div className="mt-5 h-8 bg-gray-300 rounded w-1/3" />
    </div>
  </div>
);

export default ProjectsSkeleton;
