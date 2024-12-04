import React from "react";
import { FaMobileAlt, FaCode, FaRocket, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";
import Head from "next/head";
import "./automation.css"; // We can reuse the same CSS
import BackgroundAnimation from "@/components/BackgroundAnimation/BackgroundAnimation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Landingpage/Footer";

const MobileDevelopmentPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <>
      <Navbar />
      <BackgroundAnimation />
      <Head>
        <title>Mobile App Development Services | iOS & Android Solutions</title>
        <meta
          name="description"
          content="Transform your business with custom mobile applications. We offer iOS, Android, and cross-platform development services with cutting-edge technology. Get started today!"
        />
      </Head>

      <div className="automation-page">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Mobile App Development</h1>
            <h2>Build Your Digital Presence</h2>
            <p style={{ color: "#fff" }}>
              Create powerful, user-friendly mobile applications that engage
              your audience
            </p>
            <div className="hero-ctas">
              <motion.button
                className="cta-button primary z-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.location.href = "/demo";
                }}
              >
                Start Your Project
              </motion.button>
              <motion.button
                className="cta-button secondary z-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Portfolio
              </motion.button>
            </div>
          </div>
        </section>

        <section className="benefits-section">
          <div className="section-header">
            <span className="section-label">Benefits</span>
            <h2 style={{ color: "#fff" }}>Why Choose Our Mobile Solutions</h2>
          </div>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card"
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h3 style={{ color: "#38bdf8" }}>{benefit.title}</h3>
                <p style={{ color: "#fff" }}>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="process-section">
          <div className="section-header">
            <span className="section-label">Process</span>
            <h2 style={{ color: "#fff" }}>Development Process</h2>
          </div>
          <div className="process-steps">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="process-step"
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <div className="step-number">{`0${index + 1}`}</div>
                <h3 style={{ color: "#38bdf8" }}>{step.title}</h3>
                <p style={{ color: "#fff" }}>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="case-studies">
          <div className="section-header">
            <span className="section-label">Portfolio</span>
            <h2 style={{ color: "#fff" }}>Success Stories</h2>
          </div>
          <div className="case-studies-grid">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                className="case-study-card"
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                <h3 style={{ color: "#38bdf8" }}>{study.title}</h3>
                <p style={{ color: "#fff" }}>{study.description}</p>
                <div className="metrics">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="metric">
                      {result}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <h2>Ready to Build Your Mobile App?</h2>
            <p>
              Let&apos;s bring your app idea to life with our expert development
              team
            </p>
            <motion.button
              className="cta-button primary z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.location.href = "/demo";
              }}
            >
              Schedule Consultation
            </motion.button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

const benefits = [
  {
    icon: <FaMobileAlt />,
    title: "Cross-Platform Development",
    description:
      "Build once, deploy everywhere with React Native and Flutter solutions.",
  },
  {
    icon: <FaCode />,
    title: "Native Performance",
    description:
      "Optimized applications that deliver seamless user experiences.",
  },
  {
    icon: <FaRocket />,
    title: "Scalable Solutions",
    description:
      "Future-proof applications that grow with your business needs.",
  },
  {
    icon: <FaTools />,
    title: "Ongoing Support",
    description:
      "Continuous maintenance and updates to ensure optimal performance.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Offline Functionality",
    description:
      "Apps that work seamlessly even without internet connectivity.",
  },
  {
    icon: <FaCode />,
    title: "Integration Capabilities",
    description:
      "Seamless integration with existing systems and third-party services.",
  },
];

const process = [
  {
    title: "Discovery & Planning",
    description: "Define your app requirements, features, and target audience.",
  },
  {
    title: "UI/UX Design",
    description:
      "Create intuitive and engaging user interfaces and experiences.",
  },
  {
    title: "Development",
    description:
      "Build your app using the latest mobile development technologies.",
  },
  {
    title: "Testing & QA",
    description: "Rigorous testing to ensure quality and performance.",
  },
  {
    title: "Deployment",
    description: "Launch your app on the App Store and Google Play Store.",
  },
  {
    title: "Maintenance",
    description:
      "Ongoing support and updates to keep your app running smoothly.",
  },
];

const caseStudies = [
  {
    title: "E-commerce App",
    description: "Custom shopping application with AR product visualization",
    results: [
      "300% increase in engagement",
      "50% higher conversion rate",
      "4.8/5 user rating",
    ],
  },
  {
    title: "Healthcare Platform",
    description:
      "Telemedicine app connecting patients with healthcare providers",
    results: [
      "100,000+ active users",
      "95% patient satisfaction",
      "30% cost reduction",
    ],
  },
  {
    title: "Fitness Tracking App",
    description: "AI-powered workout and nutrition tracking application",
    results: ["1M+ downloads", "85% user retention", "4.9/5 App Store rating"],
  },
];

export default MobileDevelopmentPage;
