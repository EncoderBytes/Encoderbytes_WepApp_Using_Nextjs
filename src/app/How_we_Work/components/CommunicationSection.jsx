import React from "react";

const CommunicationSection = () => {
  return (
    <section
      className="mt-20 md:h-[381px] py-10 md:py-0"
      style={{
        backgroundImage: "url('/backgrounds/project-communication.png')",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Heading */}
      <div className="text-3xl md:text-4xl text-center pt-6 md:pt-16 text-paraClr font-bebas">
        <span>PROJECT COMMUNICATION</span>
        <span className="text-white"> STRUCTURE.</span>
      </div>

      {/* Description */}
      <div className="text-white w-11/12 md:w-4/6 text-center m-auto mt-3 leading-tight text-sm md:text-base">
        We do daily discussion and communication between our team to check the
        progress and performance of our team. This is to ensure that our progress
        is going to meet the deadline.
      </div>

      {/* Layout */}
      <div className="flex flex-col md:flex-row w-11/12 md:w-5/6 m-auto gap-6 md:gap-10 mt-10 text-white">
        {/* Left group */}
        <div className="flex flex-col md:flex-row items-center justify-center md:w-1/2">
          <div className="w-full py-6 md:py-10 border border-white/30 md:border-0 md:border-r border-white flex flex-col justify-center items-center">
            <span className="font-bold mb-2 md:mb-3">
              DAILY SCRUM STANDUP
            </span>
            <p className="text-xs">monday - friday</p>
            <p className="text-xs mt-1">30 minutes</p>
          </div>

          <div className="w-full py-6 md:py-10 border border-white/30 md:border-0 md:border-r border-white flex flex-col justify-center items-center">
            <span className="font-bold mb-2 md:mb-3">WEEKLY REVIEW</span>
            <p className="text-xs">weekly</p>
            <p className="text-xs mt-1">40-60 minutes</p>
          </div>
        </div>

        {/* Right group */}
        <div className="flex flex-col md:flex-row items-center justify-center md:w-1/2">
          <div className="w-full py-6 md:py-10 border border-white/30 md:border-0 md:border-r border-white flex flex-col justify-center items-center">
            <span className="font-bold mb-2 md:mb-3">SPRINT DELIVERY</span>
            <p className="text-xs">2-3 - weeks</p>
            <p className="text-xs mt-1">1-2 hours</p>
          </div>

          <div className="w-full py-6 md:py-10 border border-white/30 md:border-0 border-white flex flex-col justify-center items-center">
            <span className="font-bold mb-2 md:mb-3">
              RETROSPECTIVE MEETING
            </span>
            <p className="text-xs">bi-weekly</p>
            <p className="text-xs mt-1">3-4 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunicationSection;
