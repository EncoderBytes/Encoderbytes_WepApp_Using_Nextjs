import Image from "next/image";
import Link from "next/link";

export default function IntroSection() {
  return (
    <section className="flex flex-col md:flex-row px-6 md:px-16 py-14 gap-10">
      <div className="md:w-1/2 text-center md:text-left md:pt-4">
        <h2 className="font-bold text-lg text-paraClr">
          <span className="border-b-4  border-custom-blue">M o b i</span> l e app
          development.
        </h2>

        <div className="text-4xl font-bebas mt-4">
          <span className="text-paraClr">WE BUILD GOOD</span>
          <span className="text-custom-blue"> MOBILE USER EXPERIENCES.</span>
        </div>

        <p className="text-paraClr mt-4">
            Encoderbytes's mobile application development services enable you to realize your mobile app ideas into feature-rich user experiences. We provide bespoke mobile app development services for both iOS and Android platforms, irrespective of the device type (phone or tablet).
          <br />
          <br />
          We have the perfect blend of aesthetic and technical skills to deliver sophisticated and user-centric mobile apps.
        </p>

        <Link
          href="#form"
          className="inline-flex mt-6 bg-custom-blue text-white px-6 py-2 rounded-md hover:bg-white hover:text-custom-blue border-2 border-custom-blue transition"
        >
          Let’s Discuss
        </Link>
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center">
        <Image
          src="/Mobile.png"
          alt="Mobile App"
          width={500}
          height={400}
          className="rounded-lg w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
