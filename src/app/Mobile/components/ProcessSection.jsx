import Image from "next/image";
import { MobileAp } from "../../components/carts";

export default function ProcessSection() {
  return (
    <section className="relative pt-16">
      {/* Full-width Top Banner Image */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src="/backgrounds/Rectangle-68.png"
          alt="Mobile App Development"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 text-white bg-black/30">
          <h2 className="text-2xl md:text-4xl font-bebas tracking-custom">
            MOBILE APP DEVELOPMENT PROCESS
          </h2>
          <p className="mt-2 md:mt-4 max-w-3xl text-xs md:text-base leading-tight">
            While developing a user-centric mobile application, we use up-to-date
            agile methodology of the software development cycle (SDLC) to ensure
            your satisfaction with expeditious development and delivery.
          </p>
        </div>
      </div>

      {/* White container with overlapping cards */}
      <div className="max-w-7xl mx-auto -mt-20 md:-mt-32 bg-white rounded-xl shadow-lg py-10 px-5 md:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-8">
          {MobileAp.map((item) => (
            <div
              key={item.no}
              className="relative bg-custom-blue text-white rounded-lg p-8 mt-5 overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Step Number */}
              <span className="absolute top-4 right-4 text-6xl  font-bold opacity-20 pointer-events-none select-none">
                {item.no.toString().padStart(2, "0")}
              </span>

              {/* Title */}
              <h3 className="uppercase font-bebas border-b-4 border-dashed border-white w-3/6 mb-4 text-lg md:text-xl">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base leading-snug">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
