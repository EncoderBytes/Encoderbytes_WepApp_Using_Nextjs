const values = [
  {
    title: "CLIENT",
    content:
      "Our client-centric approach always prioritizes our clients and their needs. We make sure that every decision, process, and strategy we follow aligns with the goals of our client and delivers results that surpass their expectations.",
  },
  {
    title: "TEAM WORK",
    content:
      "With a healthy work environment that encourages open communication and opportunities for personal and professional growth, EncoderBytes strives to keep all team members content. Our team is what makes us good to the core!",
  },
  {
    title: "PROCESS",
    content:
      "EncoderBytes’s agile development process is designed to ensure efficiency and maximum value. Our flexible process allows us to swiftly adapt to changes in our client’s requirements so that projects are delivered rapidly and reliably.",
  },
];

const AboutValues = () => {
  return (
    <div className="bg-custom pt-10 pb-16 md:px-12">
      
      {/* Heading */}
      <div className="flex justify-center items-center flex-col mt-4">
        <div className="text-custom-blue text-4xl flex justify-center items-center gap-2 font-bebas">
          <span className="text-black">WHAT WE </span>
          <span className="text-custom-blue">VALUE?</span>
        </div>
      </div>

      {/* Cards */}
      <div className="flex md:flex-row flex-col items-center justify-center gap-7 mt-10">
        {values.map((item, index) => (
          <div
            key={index}
            className="
              h-48
              bg-white
              w-[360px]
              md:w-[500px]
              md:h-[230px]
              flex
              flex-col
              justify-center
              items-center
              rounded-lg
            "
          >
            <h1 className="text-4xl font-bebas">{item.title}</h1>
            <p className="text-wrap mt-3 text-custom-blue text-center text-sm px-5 leading-tight">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutValues;
