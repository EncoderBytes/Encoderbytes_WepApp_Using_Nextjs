import Image from "next/image";
import Link from "next/link";

const IntroSection = () => (
  <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-12 mt-10 md:mt-14 md:gap-x-8 mb-14">
    {/* Text Content */}
    <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%]">
      
      {/* Small heading */}
      <div className="font-bold text-paraClr text-lg">
        <span className="border-b-4 border-custom-blue">W e b</span>
        <span>&nbsp;a p p &nbsp;d e v e l o p m e n t.</span>
      </div>

      {/* Main heading */}
      <div className="text-4xl font-bebas tracking-custom">
        <span className="text-paraClr">WE HELP BUSINESSES</span>
        <span className="text-custom-blue"> BY WEB APPLICATIONS.</span>
      </div>

      {/* Description */}
      <p className="text-sm md:text-base text-paraClr leading-tight">
        Encoderbyte&apos;s delivers web based applications at every stage
        of the growth from tailored to specific needs of the company.
      </p>

      {/* CTA */}
      <Link
        href="#form"
        className="text-customFull transition-all w-36 h-10 font-semibold mt-4 rounded-md bg-custom-blue mb-6 hover:bg-white hover:border-2 hover:border-custom-blue hover:text-custom-blue flex items-center justify-center"
      >
        Let’s Discuss
      </Link>
    </div>

    {/* Image */}
    <div className="bg-yellow w-full md:w-[50%] h-auto md:h-full relative">
      <Image
        src="/backgrounds/Rectangle29.png"
        alt="Web App Development"
        className="object-cover w-full h-full"
        width={400}
        height={400}
      />
    </div>
  </div>
);

export default IntroSection;
