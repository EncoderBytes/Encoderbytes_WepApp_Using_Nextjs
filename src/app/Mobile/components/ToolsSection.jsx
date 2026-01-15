import { Mobileappslogo } from "../../components/Mobileapps";

export default function ToolsSection() {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center flex-col mt-2 md:mt-5">
        <div className="text-[40px] text-center font-bebas tracking-custom">
          <span>TOOLS & </span>
          <span className="text-custom-blue">TECHNOLOGIES</span>
        </div>

        <p className="w-4/5 md:w-3/5 mt-3 text-center text-paraClr leading-tight">
          We have a rich background in native iOS and Android mobile
          applications as well as cross-platform apps. One of our developed
          mobile applications, Pharmapedia, is ranked 5th around the globe.
          For developing a mobile application, we use the latest methodology
          and up-to-date technologies as mentioned:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 my-10 w-5/6">
          {Mobileappslogo.map((item) => (
            <div
              key={item.image}
              className="border-2 border-gray-200 w-47 h-47 text-center flex flex-col gap-6 justify-center items-center rounded-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16"
              />
              <span className="font-semibold text-lg">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
