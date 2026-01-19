import { Webeappslogo } from "../../components/Mobileapps";

export default function ToolsTechSection() {
  return (
    <section id="section7" className="w-full py-14 px-4 md:px-16 bg-custom">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="font-bebas text-3xl md:text-[40px] tracking-custom">
          TOOLS & <span className="text-custom-blue">TECHNOLOGIES</span>
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base text-paraClr leading-relaxed">
          To launch and grow a successful digital business, we cover every major
          technology and help you choose the right platform that perfectly
          serves your requirements.
        </p>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {Webeappslogo.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center justify-center gap-4 h-[150px] rounded-lg border border-gray-200 bg-[#E5E5E5] hover:shadow-md transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 object-contain"
              />
              <span className="text-sm font-medium capitalize text-gray-700">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
