import Image from "next/image";
import { Webapps } from "../../components/Mobileapps";

const ImportanceSection = () => (
  <>
    {/* section 4 */}
    <div id="section4"></div>

    <div className="bg-red w-full">
      <div className="flex justify-center items-center flex-col mt-10 md:mt-14 mb-14">
        <div className="text-4xl text-center font-bebas tracking-custom">
          <span>WE UNDERSTAND </span>
          <span className="text-custom-blue">WHAT'S IMPORTANT</span>
        </div>

        <p className="w-4/5 md:w-3/5 text-center text-paraClr leading-tight">
          Apart from top-end software engineering, a whole lot more goes into
          developing and launching successful web applications.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-5 w-5/6 mt-10">
          {Webapps.map((item) => (
            <div
              key={item.image}
              className="bg-[#F5F5F6] rounded-lg p-4 flex flex-col justify-center items-center text-center gap-2"
            >
              <Image src={item.image} alt={item.name} width={60} height={60} />
              <span className="text-sm">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
);

export default ImportanceSection;
