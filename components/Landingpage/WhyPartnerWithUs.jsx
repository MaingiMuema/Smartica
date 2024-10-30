import React from "react";
import {
  FaUserCog,
  FaMobileAlt,
  FaChartLine,
  FaHandshake,
} from "react-icons/fa";

const WhyPartnerWithUs = () => {
  const reasons = [
    {
      icon: FaUserCog,
      title: "Tailored Solutions",
      description: "We adapt our services to fit your business needs.",
    },
    {
      icon: FaMobileAlt,
      title: "User-Friendly Technology",
      description: "Our apps and tools are designed with end-users in mind.",
    },
    {
      icon: FaChartLine,
      title: "Continuous Improvement",
      description: "We incorporate feedback to ensure ongoing optimization.",
    },
    {
      icon: FaHandshake,
      title: "Reliable Support",
      description:
        "From planning to implementation, we support you every step of the way.",
    },
  ];

  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-[#20b6d9] text-center mb-16 tracking-tight relative z-10">
          Why Partner with <span className="text-[#f1d755]">SMATICA</span>{" "}
          Limited?
        </h2>
        <p className="text-2xl text-gray-700 text-center mb-16 max-w-3xl mx-auto relative z-10">
          At SMATICA, we believe in collaborative partnerships and user-centered
          solutions. Here&apos;s why businesses choose us:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 relative z-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-[#20b6d9] group"
            >
              <div className="flex items-center mb-6">
                <div className="bg-[#f1d755] p-4 rounded-full mr-4 group-hover:bg-[#20b6d9] transition-colors duration-300">
                  <reason.icon className="text-4xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#20b6d9] group-hover:text-[#f1d755] transition-colors duration-300">
                  {reason.title}
                </h3>
              </div>
              <p className="text-lg text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center relative z-10">
          <p className="text-2xl font-bold text-[#20b6d9] mb-8">
            Partner with us to analyze, automate, and innovate—taking your
            business to the next level.
          </p>
          <a
            href="#contact"
            className="bg-[#f1d755] text-white text-xl font-bold py-4 px-8 rounded-full inline-block shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:bg-[#20b6d9]"
          >
            Let&apos;s Collaborate
          </a>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="w-96 h-96 bg-[#20b6d9] rounded-full absolute -top-48 -left-48 transform rotate-45"></div>
        <div className="w-96 h-96 bg-[#f1d755] rounded-full absolute -bottom-48 -right-48 transform rotate-45"></div>
      </div>
    </section>
  );
};

export default WhyPartnerWithUs;
