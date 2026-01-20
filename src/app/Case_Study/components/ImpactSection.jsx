"use client";
import Skeleton from "react-loading-skeleton";
import DynamicChart from "../../Utils/DynamicChart";

const ImpactSection = ({ loading, project, errorsResolved, userIncreased }) => {
  return (
    <div className="px-10 md:px-20 mt-14">
      <div className="flex justify-center items-center flex-col gap-y-3">
        
        {/* Category */}
        <span className="font-bold text-paraClr text-lg border-b-4 border-custom-blue inline-block">
          {loading ? (
            <Skeleton width={150} height={20} />
          ) : (
            project ? project.ProjectCategory : "Statusaver"
          )}
        </span>

        {/* Heading */}
        <div className="text-custom-blue text-4xl font-bebas tracking-custom flex justify-center items-center gap-2">
          <span className="text-custom-blue">Impact</span>
        </div>

        {/* Description */}
        <div className="text-center md:w-5/6 text-paraClr leading-tight mb-14">
          {loading ? (
            <Skeleton count={5} width={280} />
          ) : (
            project ? project.ProjectImpact : 
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id quis et cursus integer tincidunt cras velit quisque. Non at duis neque, ut elementum, sit integer sociis ac. Fringilla faucibus fermentum, lacus tellus. Urna nisl sagittis et ut at sit auctor. Aliquet ultrices interdum convallis augue. Blandit semper ipsum dignissim quisque molestie tempor neque ac. Nibh aliquet facilisi purus interdum amet varius pellentesque mauris sollicitudin. Diam turpis at lacus proin sit est et. Tempor eget pretium massa mattis."
          )}
        </div>

        {/* Charts */}
        {loading ? (
          <div className="flex justify-center gap-8">
            <Skeleton circle width={250} height={250} />
            <Skeleton circle width={250} height={250} />
          </div>
        ) : (
          <DynamicChart
            errorsResolved={errorsResolved}
            userIncreased={userIncreased}
            size={260}
            strokeWidth={45}
          />
        )}
      </div>
    </div>
  );
};

export default ImpactSection;
