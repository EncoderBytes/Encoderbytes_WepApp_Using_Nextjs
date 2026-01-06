import React from 'react';

const DynamicChart = ({ 
  errorsResolved, 
  userIncreased, 
  size = 200, 
  strokeWidth = 40 
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  
  const createChartData = (percentage) => {
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;
    return { strokeDasharray, strokeDashoffset };
  };

  const errorsData = createChartData(errorsResolved);
  const usersData = createChartData(userIncreased);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 my-10">
      {/* Errors Resolved Chart */}
      <div className="flex flex-col items-center">
        <div className="relative" style={{ width: size, height: size }}>
          <svg
            width={size}
            height={size}
            className="transform -rotate-90"
          >
            {/* Background Circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#A8A8A8"
              strokeWidth={strokeWidth}
              fill="transparent"
            />
            {/* Progress Circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#6B93D6"
              strokeWidth={strokeWidth}
              fill="transparent"
              strokeDasharray={errorsData.strokeDasharray}
              strokeDashoffset={errorsData.strokeDashoffset}
              strokeLinecap="butt"
              className="transition-all duration-1500 ease-out"
            />
          </svg>
          {/* Center Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl md:text-5xl font-bold text-paraClr">
              {errorsResolved}%
            </span>
          </div>
        </div>
        <div className="mt-6 text-center">
          <h3 className="text-xs md:text-sm font-bold tracking-[0.2em] text-paraClr uppercase">
            ERRORS RESOLVED
          </h3>
        </div>
      </div>

      {/* User Increased Chart */}
      <div className="flex flex-col items-center">
        <div className="relative" style={{ width: size, height: size }}>
          <svg
            width={size}
            height={size}
            className="transform -rotate-90"
          >
            {/* Background Circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#A8A8A8"
              strokeWidth={strokeWidth}
              fill="transparent"
            />
            {/* Progress Circle */}
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="#6B93D6"
              strokeWidth={strokeWidth}
              fill="transparent"
              strokeDasharray={usersData.strokeDasharray}
              strokeDashoffset={usersData.strokeDashoffset}
              strokeLinecap="butt"
              className="transition-all duration-1500 ease-out"
            />
          </svg>
          {/* Center Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl md:text-5xl font-bold text-paraClr">
              {userIncreased}%
            </span>
          </div>
        </div>
        <div className="mt-6 text-center">
          <h3 className="text-xs md:text-sm font-bold tracking-[0.2em] text-paraClr uppercase">
            USER INCREASED
          </h3>
        </div>
      </div>
    </div>
  );
};

export default DynamicChart;
