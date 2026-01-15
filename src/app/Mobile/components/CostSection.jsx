import Link from "next/link";

export default function CostSection() {
  return (
    <section className="mt-[1%]">
      <div className="w-full py-10">
        <div
          className="m-4 md:mx-16 flex flex-col justify-center items-center h-full rounded-lg md:h-auto md:p-20 text-white"
          style={{
            backgroundImage: "url('/backgrounds/developing-cost.png')",
            backgroundSize: "100% 100%",
            backgroundPosition: "center",
          }}
        >
          <div className="text-3xl mt-16 font-bold">
            COST TO
          </div>

          <div className="pb-3 pt-1 text-4xl md:text-8xl font-bebas tracking-custom">
            DEVELOP MOBILE APPS
          </div>

          <p className="mx-4 md:mx-36 text-center text-customFull leading-tight mb-5 text-sm md:text-base">
            In our 16+ years of experience as a mobile app development company
            in the UK, we have delivered many Android and iOS app development
            projects that range from £10,000 to £500,000. As you can well
            imagine, mobile apps come in all shapes and sizes for different
            mobile devices. Features and functionality, scalability,
            usability, performance – all these factors greatly affect the
            scope of building a mobile app. This makes budgeting for a mobile
            app development project a tricky exercise. But with our experience
            in developing mobile apps, EncoderBytes can help with highly
            accurate estimations of your project cost.
          </p>

          <Link
            href="#form"
            className="text-custom-blue hover:text-white font-medium w-36 h-10 outline-none transition-all mt-6 rounded-md bg-white hover:bg-custom-blue mb-6 transform hover:scale-105 flex justify-center items-center"
          >
            Let&apos;s Discuss
          </Link>
        </div>
      </div>
    </section>
  );
}
