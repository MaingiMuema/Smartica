import React from "react";
import {
  FaCheckCircle,
  FaChartLine,
  FaRocket,
  FaUserFriends,
  FaClipboardCheck,
  FaLightbulb,
} from "react-icons/fa";

const CurrentProject = () => {
  const features = [
    {
      icon: FaCheckCircle,
      text: "Intuitive Data Collection",
      description: "Custom web forms for efficient client data gathering",
      color: "#20b6d9",
    },
    {
      icon: FaChartLine,
      text: "Interactive Dashboard",
      description: "User-friendly presentation of collected data",
      color: "#f1d755",
    },
    {
      icon: FaRocket,
      text: "Rapid Verification",
      description: "Streamlined process for faster decision-making",
      color: "#20b6d9",
    },
    {
      icon: FaUserFriends,
      text: "Enhanced Customer Interactions",
      description: "Improved experience for insurance clients",
      color: "#f1d755",
    },
    {
      icon: FaClipboardCheck,
      text: "Simplified Issuance",
      description: "Effortless creation of annuity verification certificates",
      color: "#20b6d9",
    },
    {
      icon: FaLightbulb,
      text: "Improved Back-Office Experience",
      description: "Optimized workflows for insurance companies",
      color: "#f1d755",
    },
  ];

  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto z-2">
        <h2 className="text-6xl font-extrabold z-2 text-center mb-16 tracking-tight">
          Current <span className="text-[#20b6d9]">Project</span>
        </h2>
        <div className="z-2 bg-gradient-to-br from-[#20b6d9] to-[#f1d755] rounded-3xl p-1 shadow-2xl">
          <div className="bg-white rounded-3xl p-8">
            <h3 className="z-2 text-4xl font-bold mb-8 text-[#20b6d9] leading-tight text-center">
              Certificate Verification Web App for Insurance Companies
            </h3>
            <p className="z-2 text-2xl mb-12 leading-relaxed text-gray-600 text-center">
              We are developing a cutting-edge verification certificate web
              application specifically for the insurance industry. This app
              simplifies the process of issuing annuity verification
              certificates.
            </p>
            <div className="z-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="bg-white z-2 rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl border-2 border-[#20b6d9] group"
                >
                  <div
                    className={`text-6xl z-2 mb-6 flex justify-center text-[${item.color}] group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon />
                  </div>
                  <h4 className="z-2 text-xl font-bold text-gray-800 text-center group-hover:text-[#20b6d9] transition-colors duration-300 mb-4">
                    {item.text}
                  </h4>
                  <p className="z-2 text-gray-600 text-center">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="text-center mt-16">
              <p className="z-2 text-3xl font-bold text-white bg-gradient-to-r from-[#20b6d9] to-[#f1d755] py-6 px-8 rounded-full inline-block shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                Elevating Experiences, Supercharging Efficiency
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentProject;
