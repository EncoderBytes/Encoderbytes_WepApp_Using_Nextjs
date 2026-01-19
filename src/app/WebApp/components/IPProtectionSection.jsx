import Link from "next/link";

export default function IPProtectionSection() {
  return (
    <section
      id="section5"
      className="relative w-full py-24 px-4 md:px-16 text-white"
      style={{
        backgroundImage: "url('/backgrounds/webdevcst.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-blue-900/80" /> */}

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="font-bebas text-2xl md:text-[40px] tracking-wider uppercase">
          Intellectual Property [IP] Protection
        </h2>

        <p className="mt-6 max-w-5xl mx-auto text-sm md:text-base leading-relaxed">
          The devil is in the detail, and we ensure that our mobile application
          development services capture that by breaking down your project into
          different phases. Each phase is critical in the overall success of the
          mobile app development lifecycle.
        </p>

        <p className="mt-4 max-w-4xl mx-auto text-sm md:text-base leading-relaxed">
          We are a Peshawar based web app development agency serving an impressive
          client in Pakistan and worldwide. We take pride in the fact that our
          clients continue to say positive things about our work.
        </p>

        <Link
          href="#form"
          className="inline-flex items-center justify-center mt-10 h-10 px-6 text-sm font-semibold rounded-md bg-white text-custom-blue hover:bg-custom-blue hover:text-white transition-all"
        >
          Tell Us Your Idea
        </Link>
      </div>
    </section>
  );
}
