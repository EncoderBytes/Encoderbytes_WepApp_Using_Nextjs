import Image from "next/image";
import { AboutCarts } from "../../components/carts";

const AboutWhyChooseUs = () => {
  return (
    <>
      {/* Heading */}
      <div className="w-full min-h-full flex justify-center items-center mt-12">
        <div className="flex flex-col justify-center items-center mt-4">
          <h2 className="text-4xl font-bebas tracking-custom text-center">
            <span>WHY CHOOSE </span>
            <span className="text-custom-blue">US?</span>
          </h2>
          <p className="w-5/6 mt-2 text-center text-paraClr leading-tight">
            Have the peace of mind that you are working with one of the best
            bespoke software development companies in Khyber Pakhtunkhwa.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mb-20 w-full px-4 md:px-12 m-auto">
        {AboutCarts.map((cart) => (
          <div
            key={cart.no}
            className="rounded-xl bg-custom p-5 mb-4 md:mb-0 h-[240px]"
          >
            <div className="flex justify-between">
              <span className="text-5xl md:text-6xl text-paraClr font-bebas opacity-20">
                {cart.no}
              </span>
              <Image
                src={cart.image1}
                alt="Card Image"
                width={70}
                height={70}
              />
            </div>

            <div className="text-3xl mt-3">
              <span className="font-bebas">{cart.text1} &nbsp;</span>
              <span className="font-bebas text-custom-blue">
                {cart.text2}
              </span>
            </div>

            <p className="flex justify-center mt-3 text-paraClr opacity-50 leading-tight">
              {cart.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutWhyChooseUs;
