import Image from "next/image";
import { Mobileapps } from "../../components/Mobileapps";

export default function IndustriesSection() {
  return (
    <section className="w-full pt-14 -mb-2 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center px-4">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl text-center font-bebas tracking-wide">
          <span>MOBILE SERVICES </span>
          <span className="text-custom-blue">FOR DIFFERENT BUSINESSES</span>
        </h2>

        {/* Description */}
        <p className="mt-4 md:mt-6 text-center text-paraClr leading-tight max-w-3xl">
          We provide mobile application development services to various startups,
          SMEs, and large enterprises. Since 2019, we have successfully worked across
          multiple industries, including tech and healthcare, delivering quality
          mobile app services. No project is too big or too small for us.
        </p>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 mt-8 w-full">
          {Mobileapps.map((item) => (
            <div
              key={item.image}
              className="bg-[#F5F5F6] rounded-lg flex flex-col items-center justify-center gap-2 py-4 md:py-5 px-6 md:px-8"
            >
              <Image
                src={item.image}
                alt={`${item.name} Mobile App Icon`}
                width={60}
                height={60}
                className="object-contain"
              />
              <span className="text-sm md:text-base text-center">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
