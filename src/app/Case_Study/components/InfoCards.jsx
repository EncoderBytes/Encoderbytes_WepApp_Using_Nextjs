"use client";
import Skeleton from "react-loading-skeleton";

const InfoCards = ({ loading, projectTeam, projectTechnology, project }) => {
  return (
    <div className="bg-custom px-4">
      <div className="py-14 flex flex-wrap justify-center items-center gap-7 text-white">

        {/* Team Section */}
        <div className="w-full sm:w-[90%] md:w-[45%] lg:w-80 h-[266px] bg-[#5C87C5B2] rounded-[10px] flex flex-col items-center justify-start">
          <h2 className="uppercase font-bebas text-3xl md:text-4xl tracking-custom my-8">
            our team
          </h2>
          <ul className="text-center tracking-custom leading-tight">
            {loading ? (
              <Skeleton count={3} width={90} />
            ) : projectTeam.length > 0 ? (
              projectTeam.map((member, index) => (
                <li key={index} className="mb-1">{member}</li>
              ))
            ) : (
              <li className="text-gray-300">No team members listed</li>
            )}
          </ul>
        </div>

        {/* Technologies Section */}
        <div className="w-full sm:w-[90%] md:w-[45%] lg:w-80 h-[266px] bg-[#5C87C5B2] rounded-[10px] flex flex-col items-center justify-start text-center">
          <h2 className="uppercase font-bebas text-3xl md:text-4xl tracking-custom my-8">
            technologies used
          </h2>
          <ul className="text-center tracking-custom leading-tight">
            {loading ? (
              <Skeleton count={3} width={90} />
            ) : projectTechnology.length > 0 ? (
              projectTechnology.map((tech, index) => (
                <li key={index} className="mb-1">{tech}</li>
              ))
            ) : (
              <li className="text-gray-300">No technologies listed</li>
            )}
          </ul>
        </div>

        {/* Category Section */}
        <div className="w-full sm:w-[90%] md:w-[45%] lg:w-80 h-[266px] bg-[#5C87C5B2] rounded-[10px] flex flex-col items-center justify-start">
          <h2 className="uppercase font-bebas text-3xl md:text-4xl tracking-custom my-8">
            category
          </h2>
          <ul className="text-center tracking-custom leading-tight">
            <li>
              {loading ? (
                <Skeleton width={90} />
              ) : (
                project ? project.ProjectCategory : "Statusaver"
              )}
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default InfoCards;
