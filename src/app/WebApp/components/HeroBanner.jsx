import Link from "next/link";

const HeroBanner = () => (
  <div
    className="max-w-full h-[350px] flex justify-center items-center mt-20"
    style={{
      backgroundImage:
        "linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0)),url('/backgrounds/banner_Facebook Cover copy.png')",
      backgroundSize: "100% 100%",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="text-center py-24">
      <h1 className="text-custom-blue text-4xl font-bebas tracking-custom">
        WEB APP DEVELOPMENT
      </h1>
      <p className="w-5/6 mx-auto text-paraClr my-3">
        We design and create innovative, engaging, and secure web applications that are built to last.
      </p>
      <Link href="/" className="text-xs font-semibold text-paraClr mt-20 block">
        Home - Services - <span className="text-custom-blue">Web App Development</span>
      </Link>
    </div>
  </div>
);

export default HeroBanner;
