import Image from "next/image";

export default function ServicesSection() {
  const services = [
    {
      no: "01",
      titleBlack: "ANDROID APP",
      titleBlue: " DEVELOPMENT",
      icon: "/icons/android.png",
      description:
        "To meet your business requirements and the needs of end users, Encoderbytes provides a full range of Android app development services.",
    },
    {
      no: "02",
      titleBlack: "IOS APP",
      titleBlue: " DEVELOPMENT",
      icon: "/icons/apple.png",
      description:
        "Our iOS app development services ensure secure, scalable, and high-performance applications for Apple devices.",
    },
  ];

  return (
    <section id="mobilesection3" className="bg-custom py-10">
      {/* Section Heading */}
      <div className="flex flex-col items-center mt-4">
        <h2 className="font-bebas tracking-custom flex gap-2">
          <span className="text-black text-3xl">MOBILE APP</span>
          <span className="text-custom-blue text-3xl">
            DEVELOPMENT SERVICES
          </span>
        </h2>

        <p className="text-center w-5/6 md:w-4/6 text-paraClr leading-tight mt-2">
          Encoderbytes is a leading mobile app development company delivering
          feature-rich, scalable, and innovative mobile solutions for businesses
          worldwide.
        </p>
      </div>

      {/* Services Cards */}
      <div className="grid md:grid-cols-2 gap-8 px-6 md:px-16 mt-10 mb-8">
        {services.map((item) => (
          <div
            key={item.no}
            className="bg-white p-8 rounded-lg"
          >
            <div className="flex justify-between items-start">
              <span className="text-4xl md:text-7xl font-bold font-bebas text-paraClr opacity-20">
                {item.no}
              </span>

              <Image
                src={item.icon}
                alt={item.titleBlack}
                width={70}
                height={60}
              />
            </div>

            <h3 className="text-3xl font-bebas tracking-custom mt-4">
              <span className="text-black">{item.titleBlack}</span>
              <span className="text-custom-blue">{item.titleBlue}</span>
            </h3>

            <p className="mt-2 text-paraClr opacity-50 leading-tight">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
