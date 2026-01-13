import Image from "next/image";

const AboutWhoWeAre = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center px-6 md:px-12 mt-14 gap-x-8 mb-14">
      
      {/* LEFT CONTENT */}
      <div className="flex flex-col justify-center items-center md:items-start gap-y-5 text-center md:text-left md:w-[50%] mb-5">
        
        <div className="text-lg font-bold">
          <span className="border-b-4 border-custom-blue">E n c o</span>
          <span>d e r b y t e s .</span>
        </div>

        <div className="text-4xl font-bebas tracking-custom">
          <span>WHO WE</span>
          <span className="text-custom-blue"> ARE?</span>
        </div>

        <p className="text-sm md:text-base text-paraClr">
          EncoderBytes is one of the leading software development companies in PK,
          serving an impressive local and overseas clients. Our team works in an
          agile manner and engages well with our clients across different stages
          of their software app development projects.
          <br />
          <br />
          Our multiple geographical offices allow us to offer a highly efficient
          hybrid onshore-offshore model to our clients. This model ensures local
          liaison in Pakistan for project management, requirements analysis, and
          high-level technical design while providing exceptional value for money
          and access to incredible tech talent.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="bg-yellow w-full md:w-[50%] h-auto md:h-full relative">
        <Image
          src="/backgrounds/Group 96.png"
          alt="Company Representation"
          className="object-cover w-full h-full"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default AboutWhoWeAre;
