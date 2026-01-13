import Link from "next/link";

const AboutDiscussCTA = () => {
  return (
    <div
      className="
        flex
        flex-col
        md:flex-row
        md:h-80
        bg-gradient-to-b
        from-black
        via-black
        to-transparent
        bg-no-repeat
        bg-cover
        w-full
      "
      style={{
        backgroundImage: "url('/backgrounds/Rectangle2.png')",
      }}
    >
      <div className="my-10 flex flex-col md:flex-row justify-between items-center md:px-16 w-11/12 md:w-9/12 m-auto">
        
        {/* Text */}
        <div>
          <div className="mb-4 md:mb-0 text-custom-blue font-bebas text-[40px] tracking-custom">
            <h1 className="text-white -mb-6">
              Let’s discuss. <span className="text-custom-blue">How much</span>
            </h1>
            <h2>Your App Costs?</h2>
          </div>

          <div className="text-[#e5e5e5] md:flex md:justify-start mb-4">
            Send us the features you are looking to build, and we shall advise on
            the next steps.
          </div>
        </div>

        {/* Button */}
        <div>
          <Link
            href="#form"
            className="
              text-white
              font-semibold
              transition-all
              w-[142px]
              h-11
              border-2
              bg-custom-blue
              border-custom-blue
              rounded-md
              hover:bg-transparent
              hover:text-custom-blue
              flex
              items-center
              justify-center
            "
          >
            Let&apos;s Discuss
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutDiscussCTA;
