import Image from "next/image";
import { WebSecapps } from "../../components/Mobileapps";

export default function IndustriesSection() {
  return (
    <section id="section6" className="w-full py-14 px-4 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="font-bebas text-3xl md:text-4xl tracking-custom">
          WEB APPLICATION DEVELOPMENT{" "}
          <span className="text-custom-blue">
            FOR A WIDE VARIETY OF INDUSTRIES
          </span>
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-4xl mx-auto text-sm md:text-base text-paraClr leading-relaxed">
          Across the globe we have delivered a large number of web applications
          to clients across various industries. Before we initiate any
          programming work, we commit to understanding your industry and your
          project so we can deliver meaningful results. You can count on us as a
          trusted web application development company.
        </p>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {WebSecapps.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center justify-center gap-3 rounded-lg bg-[#F5F5F6] h-[140px] transition hover:shadow-md"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={44}
                height={44}
              />
              <span className="text-xs font-medium text-gray-700">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {/* Button (from Figma) */}
        <div className="mt-12">
          <button className="px-6 h-10 rounded-md bg-custom-blue text-white text-sm font-semibold hover:bg-blue-700 transition">
            View All Industries
          </button>
        </div>
      </div>
    </section>
  );
}
