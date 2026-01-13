import Link from "next/link";

const AboutLife = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div
        className="m-4 md:mx-12 flex flex-col justify-center items-center rounded-xl h-full md:h-auto md:p-32 text-white"
        style={{
          backgroundImage: "url('/backgrounds/developing-cost.png')",
          backgroundSize: "100% 100%",
          backgroundBlendMode: "overlay",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Heading */}
        <div className="text-center py-5">
          <div className="text-[32px] font-bold -mb-8">HOW IS</div>
          <div className="py-7 text-3xl md:text-8xl font-bebas tracking-custom">
            LIFE AT ENCODERBYTES.
          </div>

          {/* Paragraph */}
          <p className="w-5/6 md:w-5/6 m-auto text-base md:text-xl text-customFull text-center leading-tight">
            Since 2019, we have been in the business, and over the past few years, we have
            grown our team with the best in the industry. Our expert team is working across
            various areas of technology.
          </p>

          {/* Button */}
          <Link
            href="/Lifeateb"
            className="text-custom-blue font-semibold transition-all w-[142px] h-11 border-2 bg-white rounded-md hover:bg-transparent hover:text-custom-blue flex items-center justify-center m-auto mt-16"
          >
            Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutLife;
