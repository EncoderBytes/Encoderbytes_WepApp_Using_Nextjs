import React from "react";

const ApplyContactForm = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center"
      id="Apply"
    >
      <div class="flex flex-col bg-black md:flex-row md:w-5/6 items-center justify-center mt-10 md:mt-20 rounded-md py-20 mb-28">
        <div class="w-4/5 md:w-2/5">
          <div class="flex flex-col justify-center items-start text-start m-6 md:m-16">
            <span class="text-2xl md:text-3xl text-custom-blue  font-bold">
              DO YOU WANT
            </span>
            <span class="text-2xl md:text-3xl text-white  md:mb-4 font-bold">
              TO JOIN OUR TEAM?
            </span>
            <div class="text-sm md:text-md text-white w-full md:w-4/6">
              Send us your CV to explore more professional opportunities and
              build a strong career
            </div>
          </div>
        </div>

        <div class="w-4/5 md:w-3/5">
          <div class="w-full py-6 px-4 md:px-10">
            <input
              type="text"
              name="name"
              placeholder="Name"
              class="w-full border-b mb-4 px-2 md:px-4 py-2 focus:outline-none bg-transparent"
            />
            <div class="flex items-center justify-center text-center mb-3 gap-3 py-7">
              <input
                type="email"
                name="email"
                placeholder="Email"
                class="w-full border-b px-2 md:px-4 py-2 focus:outline-none bg-transparent"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                class="w-full border-b px-2 md:px-4 py-2 focus:outline-none bg-transparent"
              />
            </div>

            <div class="flex items-center justify-center text-center mb-3 gap-3">
              <input
                type="text"
                name="experience"
                placeholder="Experience"
                class="w-full border-b px-2 md:px-4 focus:outline-none bg-transparent "
              />
              <input
                type="text"
                name="expected_salary"
                placeholder="Expected Salary"
                class="w-full border-b px-2 md:px-4  focus:outline-none bg-transparent"
              />
            </div>
            <input
              type="text"
              name="position"
              placeholder="Position"
              class="w-full border-b mb-4 px-2 md:px-4 py-2 focus:outline-none bg-transparent mt-6"
            />
            <textarea
              name="message"
              placeholder="Drag OR Select Your Resume"
              rows="6"
              class="w-full border-4 border-dotted rounded-md mb-4 px-2 md:px-4 py-6 focus:outline-none bg-transparent mt-10"
            ></textarea>
            <button
              type="submit"
              class="w-f4/6 bg-custom-blue text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyContactForm;
