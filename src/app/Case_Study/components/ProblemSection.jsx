"use client";
import Skeleton from "react-loading-skeleton";

const ProblemSection = ({ loading, project }) => {
  return (
    <div className="p-4 md:px-20" id="mobilesection3">
      <div className="flex justify-center items-center flex-col gap-y-3 my-8">
        <span className="font-bold text-paraClr text-lg border-b-4 border-custom-blue inline-block">
          {loading ? <Skeleton width={150} /> : project?.ProjectCategory}
        </span>

        <div className="text-custom-blue text-4xl font-bebas tracking-custom">
          THE PROBLEM
        </div>

        {loading ? (
          <div className="text-center w-5/6 text-paraClr leading-tight">
            <Skeleton count={5} />
          </div>
        ) : (
          <div className="text-center w-5/6 text-paraClr leading-tight">
            {project?.ProjectProblem}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProblemSection;
 