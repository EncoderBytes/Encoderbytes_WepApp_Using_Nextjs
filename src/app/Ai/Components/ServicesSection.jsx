"use client";
import React from "react";
import Image from "next/image";

const ServicesSection = () => {
  return (
    <section id="section3" className="bg-custom py-14 px-6 md:px-16">
      {/* Heading */}
      <div className="flex flex-col items-center text-center mb-12">
        <h2 className="text-4xl font-bebas tracking-custom text-black">
          ARTIFICIAL INTELLIGENCE <span className="text-custom-blue">SERVICES</span>
        </h2>
        <p className="text-paraClr leading-tight mt-4 max-w-4xl">
          We works with AI that are valuable assets for your business. For over 2 years, EncoderBytes has been providing software development and AI services to and garnering positive feedback from its clients. Our software is often is aimed at a widely diverse audience. Hence, we make sure that the software we develop is user-friendly, flexible, scalable, and secure. You can also count on us for cloud hosting and management instead of having to look for a different provider. By entrusting us with your app development project, you will be able to focus your time and resources on your core business functions.
        </p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 01 */}
        <div className="rounded-lg bg-white p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-4xl md:text-7xl font-bold text-paraClr opacity-20 font-bebas">
              01
            </span>
            <Image src="/icons/mvp-development.png" alt="Logo" width={70} height={60} />
          </div>
          <h3 className="text-2xl font-bebas mb-2">
            <span className="text-black">AUTOMATION </span>
            <span className="text-custom-blue">AT SCALE</span>
          </h3>
          <p className="text-paraClr opacity-50 leading-relaxed">
            Our AI development services help you avoid biases and human error, while
            saving time and money by automating and optimizing everyday processes.
          </p>
        </div>

        {/* Card 02 */}
        <div className="rounded-lg bg-white p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-4xl md:text-7xl font-bold text-paraClr opacity-20 font-bebas">
              02
            </span>
            <Image src="/icons/user-experience.png" alt="Logo" width={70} height={60} />
          </div>
          <h3 className="text-2xl font-bebas mb-2">
            <span className="text-black">INCREASED </span>
            <span className="text-custom-blue">PRODUCTIVITY</span>
          </h3>
          <p className="text-paraClr opacity-50 leading-relaxed">
            We convert your ideas into digitized, user-friendly apps that are enjoyable
            for the end user, delivering impactful solutions for mobile platforms.
          </p>
        </div>

        {/* Card 03 */}
        <div className="rounded-lg bg-white p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-4xl md:text-7xl font-bold text-paraClr opacity-20 font-bebas">
              03
            </span>
            <Image src="/icons/scalable.png" alt="Logo" width={70} height={60} />
          </div>
          <h3 className="text-2xl font-bebas mb-2">
            <span className="text-black">BETTER DECISION </span>
            <span className="text-custom-blue">MAKING</span>
          </h3>
          <p className="text-paraClr opacity-50 leading-relaxed">
            Grow your expertise and make faster business decisions by leveraging AI
            and cognitive technologies that provide intelligent insights.
          </p>
        </div>

        {/* Card 04 */}
        <div className="rounded-lg bg-white p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-4xl md:text-7xl font-bold text-paraClr opacity-20 font-bebas">
              04
            </span>
            <Image src="/icons/cyber-security.png" alt="Logo" width={70} height={60} />
          </div>
          <h3 className="text-2xl font-bebas mb-2">SECURITY</h3>
          <p className="text-paraClr opacity-50 leading-relaxed">
            Security and data privacy are essential from the start to ensure a
            successful SaaS platform. Our technical leads review and approve all
            software for compliance and security.
          </p>
        </div>

        {/* Card 05 */}
        <div className="rounded-lg bg-white p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-4xl md:text-7xl font-bold text-paraClr opacity-20 font-bebas">
              05
            </span>
            <Image src="/icons/cyber-security.png" alt="Logo" width={70} height={60} />
          </div>
          <h3 className="text-2xl font-bebas mb-2">
            CLOUD HOSTING <span className="text-custom-blue">& MANAGEMENT</span>
          </h3>
          <p className="text-paraClr opacity-50 leading-relaxed">
            We offer full cloud hosting and software management for your SaaS platform,
            eliminating the need for expensive server hardware or in-house skills.
          </p>
        </div>

        {/* Card 06 */}
        <div className="rounded-lg bg-white p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-4xl md:text-7xl font-bold text-paraClr opacity-20 font-bebas">
              06
            </span>
            <Image src="/icons/cyber-security.png" alt="Logo" width={70} height={60} />
          </div>
          <h3 className="text-2xl font-bebas mb-2">
            INTELLECTUAL PROPERTY <span className="text-custom-blue">[IP] RIGHTS</span>
          </h3>
          <p className="text-paraClr opacity-50 leading-relaxed">
            Our developers convert your ideas into secure, digitized apps for end users,
            delivering impactful solutions for business growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
