import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectsSkeleton from "./ProjectsSkeleton";

const ProjectsGrid = ({ projects, loading, error, visibleCount, onLoadMore, onShowLess, selectedCategory }) => {
  if (loading) {
    return Array.from({ length: 4 }).map((_, idx) => <ProjectsSkeleton key={idx} />);
  }

  if (error) {
    return <div className="col-span-full text-center text-red-500 font-bold py-8">{error}</div>;
  }

  if (!loading && projects.length === 0 && selectedCategory && selectedCategory !== "All") {
    return (
      <div className="col-span-full text-center py-16">
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-xl font-bold text-gray-600 mb-2">No Projects Found</h3>
          <p className="text-gray-500 text-sm mb-4">
            No projects available for <span className="font-semibold text-custom-blue">{selectedCategory}</span>.
          </p>
          <button
            onClick={() => onLoadMore("All")}
            className="bg-custom-blue text-white px-6 py-2 rounded hover:bg-blue-700 transition text-sm"
          >
            View All Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mt-16 w-11/12 md:w-full md:px-12 m-auto">
        {projects.slice(0, visibleCount).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {projects.length > 4 && visibleCount < projects.length && (
        <div className="col-span-full text-center mt-8">
          <button onClick={onLoadMore} className="bg-custom-blue text-white px-6 py-2 rounded hover:bg-blue-700 transition">
            Load More
          </button>
        </div>
      )}

      {projects.length > 4 && visibleCount > 4 && (
        <div className="col-span-full text-center mt-4">
          <button onClick={onShowLess} className="text-custom-blue text-sm px-6 py-2 rounded border-2 border-custom-blue hover:text-gray-700">
            Show Less
          </button>
        </div>
      )}
    </>
  );
};

export default ProjectsGrid;
