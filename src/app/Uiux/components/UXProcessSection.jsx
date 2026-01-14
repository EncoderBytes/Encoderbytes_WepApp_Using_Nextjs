import React from "react";

const steps = [
  { title: "STRATEGY WORKSHOP", description: "Our AI development services help you by avoiding biases and human error and also helps you by saving your money and time through automating and optimizing everyday processes and daily routine operations." },
  { title: "DEFINING USER PERSONA", description: "As a leading UX and UI design Company, it is an utmost crucial responsibility for us to understand your requirements in a better way,for that reason we create user personas to explain your audiences/customers . After that ,we frame the outcome to do more qualitative and quantitative research and analytics." },
  { title: "EMPATHY MAPPING", description: "The benefits of doing empathy mapping are manifold. We believe it removes bias from our designs and aligns the team on a single, shared understanding of the user’s empathy like what they head, see, do, or listen. We then discover weaknesses in our research, uncovers user needs that the user themselves may not even be aware of, understand what drives users’ behaviors which finally guide us towards what user is feeling or thinking." },
  { title: "ANALYZING COMPETITOR LANDSCAPE", description: "To identify the defensive or offensive strategic context or to know about the opportunities and threats you must be aware of with whom you are competing.So that way we recognize potential competitors and their targeted customer,identify key matrices or competencies and set each one a score.In the UI and UX design planning ,we rate them on the basis of their defined matrices and a plan what we need to implement and what to extract." },
  { title: "MIND MAPPING AND CARD SORTING", description: "In this step all the data we have collected on the wall we represent by engaging the product owners,developer,manager and designers.After that we group the collected data on the sticky notes/cards.The arranged map have identical and related components of an application in chunks to give us a whole structure from high ranking view. No wonder why we call ourselves master in user experience design.The result !! A flawless UX design which is approved by everyone." },
  { title: "ARCHITECTURE INFORMATION", description: "Prevention from finality and usability disaster -directing to costly redesigns we take architectural information in creating a plan.That is why in our UX and UI design services incorporate information Architecture plays a huge role.it helps us to focus on organizing ,structuring and effectively labeling content so that complete information and intended task is available for users." },
  { title: "LOW FIDELITY SKETCHES", description: "We have an equitable understanding of how to compose a screen, after a detailed architectural information is out .For each user requirement we start to create fast and cheap on-paper prototypes ,incorporating navigation, content and action.To get an early feedback from our stakeholders ,rectifying mistakes and iterating to reduce rework at later stages this activity help us a lot." },
  { title: "HIGH FIDELITY WIREFRAMING", description: "To detailing out the screens in its exact shape and style we further transform the paper prototype into high fidelity wireframes. For our visual design expert the sole reference is to build the click through prototype to define the flow.To manifest the possible outcome this is the integral step of our web." },
  { title: "DEFINING UI GUIDELINES", description: "We carefully design your web and mobile applications by setting up different components like color palette,typography,the call-to-action buttons, notifications and alerts,icons and possibly every component of a user interface.in order to reduce frequent follow ups with designer we draft a customized UI guide that helps our Ux and UI developers to work independently." },
];

const UXProcessSection = () => {
  return (
    <div className="bg-white mx-4 md:mx-0 lg:px-0 pt-12 pb-14">
      <div className="flex justify-center items-center flex-col mt-4">
        <div className="text-4xl text-center font-bebas tracking-custom">
          <span>USER EXPERIENCE </span>
          <span className="text-custom-blue">DESIGNING PROCESS</span>
        </div>
        <p className="md:w-3/5 mt-3 text-center text-paraClr leading-tight">
          We follow a complete user experience designing process from start like
          user research to designing high fidelity designs. Each phase involves
          users of the product to get better result.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16 md:mx-16">
        {steps.map((step, i) => (
          <div key={i} className="rounded-xl bg-custom-blue p-8">
            <div className="flex justify-between font-bebas items-center tracking-custom">
              <span className="text-xl md:text-4xl text-white border-[#ffffff4e] border-b-4 border-dashed w-4/6 pb-3">
                {step.title}
              </span>
              <span className="text-6xl text-white opacity-20">{i + 1 < 10 ? `0${i + 1}` : i + 1}</span>
            </div>
            <p className="flex flex-col md:w-full ml-2 mt-6 text-white leading-tight">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UXProcessSection;
