import Link from "next/link";

const AboutHero = () => {
  return (
    <div
      className="
        w-full
        min-h-[260px]
        sm:min-h-[300px]
        lg:h-[350px]
        flex
        justify-center
        items-center
        mt-[69px]
        bg-center
        bg-no-repeat
        bg-cover
        lg:bg-contain
        bg-[#f5f7fa]
      "
      style={{
        backgroundImage: "url('/backgrounds/banner_Facebook Cover copy.png')",
      }}
    >
      {/* Content */}
      <div
        className="
          max-w-[1200px]
          mx-auto
          flex
          flex-col
          justify-center
          items-center
          text-center
          px-4
          py-10
          sm:py-16
          lg:py-24
        "
      >
        <h1
          className="
            text-custom-blue
            font-bebas
            tracking-custom
            text-2xl
            sm:text-3xl
            lg:text-4xl
          "
        >
          ALL ABOUT ENCODERBYTES
        </h1>

        <p
          className="
            text-paraClr
            leading-snug
            my-3
            text-sm
            sm:text-base
          "
        >
          A lot goes on behind the scenes when we are building software.
          Excitement. Teamwork.
          <br className="hidden sm:block" />
          Labour of love. A bit of craziness. This is what makes EncoderBytes – Good to the Core!
        </p>

        <Link
          href="/"
          className="
            text-paraClr
            font-semibold
            text-xs
            sm:text-sm
            pt-6
            sm:pt-10
          "
        >
          Home &nbsp;- <span className="text-custom-blue">About Us</span>
        </Link>
      </div>
    </div>
  );
};

export default AboutHero;
