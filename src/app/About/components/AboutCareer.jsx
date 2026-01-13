const AboutCareer = () => {
  const roles = [
    {
      title: "PROJECT MANAGEMENT",
      desc: "For team members who enjoy client interaction and bringing discipline to complex situations and projects.",
    },
    {
      title: "TECHNICAL/ENGINEERING",
      desc: "For the engineers who thrive on solving technical puzzles and have a passion for engineering ambitious software systems.",
    },
    {
      title: "QUALITY ASSURANCE",
      desc: "For people with a strong focus on quality who keep our software systems robust and reliable.",
    },
    {
      title: "MARKETING",
      desc: "For those passionate about communicating solutions to the world that resonate with our clients.",
    },
  ];

  return (
    <div className="bg-gray-50 py-14 px-4 md:px-12">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bebas tracking-wide">
          CAREER AT <span className="text-[#5D88C6]">ENCODERBYTES.</span>
        </h2>

        <p className="text-sm text-gray-500 mt-4 leading-relaxed">
          We strive to hire the absolute best people. As a services organisation,
          we firmly believe that it is the single most important reason for all
          the success the company has achieved to-date. And this is really the
          only way to move forward.
        </p>

        <p className="text-sm text-[#5D88C6] mt-2 font-medium">
          THE COMPANY ENCOURAGES CAREER GROWTH ALONG MULTIPLE TRACKS.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
        {roles.map((role) => (
          <div
            key={role.title}
            className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition"
          >
            <h3 className="text-sm font-bold text-[#5D88C6] mb-3">
              {role.title}
            </h3>

            <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
              {role.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-[#5D88C6] text-white text-sm px-6 py-2 rounded-md hover:opacity-90 transition">
          Explore Career
        </button>
      </div>
    </div>
  );
};

export default AboutCareer;
