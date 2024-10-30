"use client";
import React, { useState, useEffect } from "react";
import { FaRobot, FaCode, FaChartBar } from "react-icons/fa";
import "./style.css";
import Image from "next/image";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const services = [
    { name: "Process Automation", icon: <FaRobot /> },
    { name: "Web Development", icon: <FaCode /> },
    { name: "Data Analysis", icon: <FaChartBar /> },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [services.length]);

  return (
    <section className="hero-section">
      <div className="hero-content mt-10">
        <h1>
          Welcome to <span className="highlight">SMATICA</span>
        </h1>
        <div className="innovative-solutions">
          <h2>Innovative Solutions in</h2>
          <div className="service-carousel">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service ${
                  index === activeIndex ? "active" : "inactive"
                }`}
              >
                <span className="service-icon">{service.icon}</span>
                <span className="service-name">{service.name}</span>
              </div>
            ))}
          </div>
        </div>
        <p>
          Founded in June 2024, SMATICA Limited is a dynamic tech startup
          headquartered in Westlands, Nairobi, Kenya. We are committed to
          transforming the way businesses operate by delivering cutting-edge
          technology solutions.
        </p>
        <button className="cta-button">Learn More</button>
      </div>
      <div className="hero-image">
        <Image src="/hero-img.jpg" alt="Hero Image" width={500} height={500} />
      </div>
    </section>
  );
};

export default HeroSection;
