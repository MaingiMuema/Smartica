import React from "react";
import {
  FaDatabase,
  FaShieldAlt,
  FaSync,
  FaSearch,
  FaServer,
  FaChartBar,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Head from "next/head";
import "./automation.css"; // We can reuse the automation styles
import BackgroundAnimation from "@/components/BackgroundAnimation/BackgroundAnimation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Landingpage/Footer";

const DatabaseManagementPage = () => {
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
        <title>
          Database Management Solutions & Services | Enterprise Data Management
        </title>
        <meta
          name="description"
          content="Expert database management services including design, optimization, security, and maintenance. Transform your data infrastructure with our enterprise solutions."
        />
      </Head>

      <div className="automation-page">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Database Management</h1>
            <h2>Optimize Your Data Infrastructure</h2>
            <p style={{ color: "#fff" }}>
              Secure, scalable, and efficient database solutions for modern
              enterprises
            </p>
            <div className="hero-ctas">
              <motion.button
                className="cta-button primary z-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.location.href = "/contact";
                }}
              >
                Get Started
              </motion.button>
              <motion.button
                className="cta-button secondary z-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </section>

        <section className="benefits-section">
          <div className="section-header">
            <span className="section-label">Benefits</span>
            <h2 style={{ color: "#fff" }}>Why Choose Our Solutions</h2>
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
            <h2 style={{ color: "#fff" }}>Our Approach</h2>
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
            <span className="section-label">Success Stories</span>
            <h2 style={{ color: "#fff" }}>Client Results</h2>
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
            <h2>Ready to Optimize Your Database?</h2>
            <p>
              Let&apos;s discuss how we can enhance your data management
              strategy
            </p>
            <motion.button
              className="cta-button primary z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.location.href = "/contact";
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
    icon: <FaDatabase />,
    title: "Optimized Performance",
    description:
      "Fine-tuned database operations for maximum speed and efficiency.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Enhanced Security",
    description:
      "Advanced security measures to protect your valuable data assets.",
  },
  {
    icon: <FaSync />,
    title: "Seamless Migration",
    description:
      "Smooth transition and integration of your existing databases.",
  },
  {
    icon: <FaSearch />,
    title: "Advanced Monitoring",
    description: "Real-time monitoring and proactive issue resolution.",
  },
  {
    icon: <FaServer />,
    title: "Scalable Solutions",
    description: "Flexible infrastructure that grows with your business needs.",
  },
  {
    icon: <FaChartBar />,
    title: "Performance Analytics",
    description: "Comprehensive insights into your database performance.",
  },
];

const process = [
  {
    title: "Assessment",
    description: "Thorough analysis of your current database infrastructure.",
  },
  {
    title: "Strategy Development",
    description: "Custom solution design based on your specific requirements.",
  },
  {
    title: "Implementation",
    description:
      "Careful execution of database optimization and security measures.",
  },
  {
    title: "Migration & Testing",
    description:
      "Seamless data migration with comprehensive testing protocols.",
  },
];

const caseStudies = [
  {
    title: "E-commerce Platform",
    description: "Database optimization and scaling solution",
    results: [
      "99.99% uptime achieved",
      "70% faster query response",
      "50% reduction in storage costs",
    ],
  },
  {
    title: "Financial Institution",
    description: "Security enhancement and performance optimization",
    results: [
      "Zero security breaches",
      "85% faster transactions",
      "45% improved efficiency",
    ],
  },
  {
    title: "Healthcare Provider",
    description: "Database consolidation and modernization",
    results: [
      "60% reduced maintenance time",
      "100% HIPAA compliance",
      "40% cost savings",
    ],
  },
];

export default DatabaseManagementPage;
