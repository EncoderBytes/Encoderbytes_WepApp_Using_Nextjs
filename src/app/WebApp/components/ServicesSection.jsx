// app/WebApp/components/ServicesSection.jsx
import Image from "next/image";

export default function ServicesSection() {
  return (
    <>
      {/* anchor */}
      <div id="section3"></div>

      <div className="bg-custom pt-10 pb-8">
        <div className="flex justify-center items-center flex-col mt-4">
          <div className="text-custom-blue text-4xl font-bebas text-center tracking-custom">
            <span className="text-black">WEB APP</span>
            <span className="text-custom-blue"> DEVELOPMENT SERVICES</span>
          </div>

          <div className="text-center w-5/6 md:w-4/6 text-paraClr leading-tight">
            The carefully designed web application is needed for the product idea
            of your startup that helps you innovate and solve real business
            problems to disrupt established markets and gain sustainability.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 mt-14 mx-16 mb-8">
          {/* Card 1 */}
          <div className="rounded-lg bg-white p-9">
            <div className="flex justify-between">
              <span className="text-4xl md:text-7xl font-bold font-bebas text-paraClr opacity-20">
                01
              </span>
              <Image
                src="/icons/startup.png"
                alt="Startup"
                width={70}
                height={60}
              />
            </div>

            <div className="flex flex-col md:w-full ml-2 mt-6">
              <div className="text-3xl font-bebas tracking-custom">
                <span className="text-black">NEW</span>
                <span className="text-custom-blue"> STARTUPS</span>
              </div>
              <p className="mt-2 text-paraClr opacity-50 leading-tight">
                To meet your business requirement and need of the end user we
                develop IOS apps .To create the superior quality we use the
                latest tools,technology and user friendly mobile apps.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-lg bg-white p-9">
            <div className="flex justify-between">
              <span className="text-4xl md:text-7xl font-bold font-bebas text-paraClr opacity-20">
                02
              </span>
              <Image
                src="/icons/factory.png"
                alt="Business"
                width={70}
                height={60}
              />
            </div>

            <div className="flex flex-col md:w-full ml-2 mt-6">
              <div className="text-3xl font-bebas tracking-custom">
                <span className="text-black">ESTABLISHED</span>
                <span className="text-custom-blue"> BUSINESSES</span>
              </div>
              <p className="mt-2 text-paraClr opacity-50 leading-tight">
                The bespoke web application greatly help you to streamline the
                operational workflows of your organization when off-the-shelf
                solutions are too generic or rigid .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
