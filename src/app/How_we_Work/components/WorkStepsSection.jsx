import React from "react";
import Image from "next/image";
import { Howwework } from "../../components/Howwework";

const WorkStepsSection = () => {
  return (
    <div className="w-2/3 px-4 md:px-12">
      {Howwework.map((item, index) => (
        <section
          key={index}
          id={item.id}
          className="work-step flex flex-col justify-center items-center px-6 mt-10 md:gap-x-8 mb-10"
        >
          <div className="w-full md:w-full h-auto md:h-full relative mt-5">
            <Image
              src={item.image}
              alt={`Image for ${item.heading}`}
              width={400}
              height={400}
              className="object-cover"
            />

            <div className="font-bold mt-14 text-paraClr text-lg">
              <span className="border-b-4 border-custom-blue">
                {item.underlinetitile}
              </span>
              <span>{item.simpletitle}</span>
            </div>

            <h2 className="text-4xl mt-5 font-bebas tracking-custom">
              <span className="text-custom-blue">{item.heading}</span>
            </h2>

            <ul className="list-disc ml-8 text-paraClr mt-2">
              {item.objectivekeys1?.map((obj, i) => (
                <li key={i}>{obj}</li>
              ))}
            </ul>

            <h2 className="text-4xl mt-10 font-bebas tracking-custom">
              <span className="text-custom-blue">{item.heading2}</span>
            </h2>

            <ul className="list-disc ml-8 text-paraClr mt-2">
              {item.deliverablekeys?.map((del, i) => (
                <li key={i}>{del}</li>
              ))}
            </ul>

            <h2 className="text-4xl mt-10 font-bebas tracking-custom">
              <span className="text-custom-blue">{item.heading3}</span>
            </h2>

            <ul className="list-disc ml-8 text-paraClr mt-2">
              {item.memberkeys?.map((mem, i) => (
                <li key={i}>{mem}</li>
              ))}
            </ul>

            <h2 className="md:text-4xl text-center md:text-left mt-10 font-bebas tracking-custom">
              <span className="text-custom-blue">{item.heading4}</span>
            </h2>

            <ul className="list-disc ml-8 text-paraClr mt-2">
              {item.toolskeys?.map((tool, i) => (
                <li key={i}>{tool}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </div>
  );
};

export default WorkStepsSection;
