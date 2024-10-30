import React from "react";
import { FaRobot, FaCode, FaChartBar, FaArrowRight } from "react-icons/fa";
import "./coreServices.css";

const CoreServices = () => {
  const services = [
    {
      title: "Process Automation",
      icon: <FaRobot />,
      description:
        "Streamline operations with our cutting-edge automation solutions. Minimize errors, reduce manual labor, and skyrocket productivity.",
      benefits: [
        "Cut operational costs",
        "Boost workflow efficiency",
        "Eliminate human errors",
      ],
    },
    {
      title: "Custom Web Apps",
      icon: <FaCode />,
      description:
        "Elevate your digital presence with our bespoke web applications. From sleek UIs to robust functionality, we craft digital experiences that captivate and convert.",
      benefits: [
        "Tailored to your unique needs",
        "Lightning-fast performance",
        "Continuous optimization",
      ],
    },
    {
      title: "Data Analysis",
      icon: <FaChartBar />,
      description:
        "Unlock the power of your data with our advanced analytics tools. Transform raw information into actionable insights that drive growth and optimize performance.",
      benefits: [
        "Real-time data visualization",
        "Identify key business trends",
        "Data-driven decision making",
      ],
    },
  ];

  return (
    <section className="core-services">
      <div className="services-container">
        <h2>Core Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
              <button className="learn-more-btn">
                Explore <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
