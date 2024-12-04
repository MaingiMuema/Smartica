import React from "react";
import {
  FaRobot,
  FaChartLine,
  FaCode,
  FaMobileAlt,
  FaDatabase,
  FaCloud,
} from "react-icons/fa";
import "./services.css";
import Navbar from "@/components/Navbar/Navbar";
import BackgroundAnimation from "@/components/BackgroundAnimation/BackgroundAnimation";
import Link from "next/link";
import { useRouter } from "next/navigation";

const services = [
  {
    icon: <FaRobot />,
    title: "Automation Solutions",
    description:
      "Streamline your business processes with our cutting-edge automation solutions.",
    details: [
      "Custom workflow automation",
      "Robotic Process Automation (RPA)",
      "AI-powered task management",
      "Integration with existing systems",
    ],
  },
  {
    icon: <FaChartLine />,
    title: "Data Analytics",
    description:
      "Transform your data into actionable insights with our advanced analytics services.",
    details: [
      "Big data processing",
      "Predictive analytics",
      "Business intelligence dashboards",
      "Machine learning models",
    ],
  },
  {
    icon: <FaCode />,
    title: "Web Development",
    description:
      "Create powerful, responsive web applications tailored to your business needs.",
    details: [
      "Full-stack development",
      "E-commerce solutions",
      "Content Management Systems (CMS)",
      "Progressive Web Apps (PWA)",
    ],
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description:
      "Engage your customers with intuitive, feature-rich mobile applications.",
    details: [
      "iOS and Android development",
      "Cross-platform solutions",
      "App Store optimization",
      "Mobile app maintenance and support",
    ],
  },
  {
    icon: <FaDatabase />,
    title: "Database Management",
    description:
      "Optimize your data storage and retrieval with our database management services.",
    details: [
      "Database design and optimization",
      "Data migration and integration",
      "Database security and compliance",
      "Performance tuning and monitoring",
    ],
  },
  {
    icon: <FaCloud />,
    title: "Cloud Solutions",
    description:
      "Harness the power of cloud computing to scale your business efficiently.",
    details: [
      "Cloud migration strategies",
      "Multi-cloud and hybrid cloud solutions",
      "Cloud-native application development",
      "Serverless architecture implementation",
    ],
  },
];

const ServicesPage = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <BackgroundAnimation />
      <div className="services-page">
        <div className="services-hero mt-10">
          <h1 style={{ color: "white" }}>Our Services</h1>
          <p style={{ color: "white" }}>Empowering your business with innovative technology solutions</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <ul>
                {service.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
              <Link
                href={`/services/${service.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                className="learn-more-btn"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
        <div className="cta-section">
          <h2>Ready to transform your business?</h2>
          <p className="z-2">
            Let&apos;s discuss how our services can help you achieve your goals.
          </p>
          <button
            className="cta-button z-2"
            onClick={() => router.push("/contact")}
          >
            Get in Touch
          </button>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
