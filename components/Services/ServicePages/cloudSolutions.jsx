import React from "react";
import { FaCloud, FaServer, FaShieldAlt, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";
import Head from "next/head";
import "./automation.css"; // We can reuse the automation styles
import BackgroundAnimation from "@/components/BackgroundAnimation/BackgroundAnimation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Landingpage/Footer";

const CloudSolutionsPage = () => {
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
          Enterprise Cloud Solutions & Services | Cloud Migration Experts
        </title>
        <meta
          name="description"
          content="Transform your business with our enterprise cloud solutions. We offer cloud migration, multi-cloud architecture, and cloud-native development services. Get started today!"
        />
      </Head>

      <div className="automation-page">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Cloud Solutions</h1>
            <h2>Scale Your Business With Confidence</h2>
            <p style={{ color: "#fff" }}>
              Harness the power of cloud computing for unlimited possibilities
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
                Start Migration
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
            <h2 style={{ color: "#fff" }}>Cloud Advantages</h2>
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
            <h2 style={{ color: "#fff" }}>Migration Journey</h2>
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
            <h2>Ready to Move to the Cloud?</h2>
            <p>Let&apos;s create your perfect cloud strategy together</p>
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
    icon: <FaRocket />,
    title: "Scalability",
    description:
      "Scale resources up or down based on demand with instant flexibility.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Enhanced Security",
    description: "Enterprise-grade security with advanced threat protection.",
  },
  {
    icon: <FaCloud />,
    title: "Cost Optimization",
    description: "Pay only for what you use with transparent pricing models.",
  },
  {
    icon: <FaServer />,
    title: "High Availability",
    description: "Ensure business continuity with redundant infrastructure.",
  },
  {
    icon: <FaCloud />,
    title: "Disaster Recovery",
    description: "Robust backup and recovery solutions for business continuity.",
  },
  {
    icon: <FaServer />,
    title: "Performance Monitoring",
    description: "Real-time monitoring and optimization of cloud resources.",
  },
];

const process = [
  {
    title: "Assessment",
    description:
      "Comprehensive evaluation of your current infrastructure and needs.",
    details: [
      "Infrastructure audit",
      "Workload analysis",
      "Security assessment",
      "Cost modeling",
    ],
  },
  {
    title: "Strategy",
    description:
      "Develop a tailored cloud migration and optimization strategy.",
    details: [
      "Cloud provider selection",
      "Architecture design",
      "Migration roadmap",
      "Risk mitigation plan",
    ],
  },
  {
    title: "Migration",
    description: "Seamless transition of applications and data to the cloud.",
    details: [
      "Data migration",
      "Application refactoring",
      "Testing and validation",
      "Cutover planning",
    ],
  },
  {
    title: "Optimization",
    description: "Continuous monitoring and optimization of cloud resources.",
    details: [
      "Performance monitoring",
      "Cost optimization",
      "Security hardening",
      "Automated scaling",
    ],
  },
  {
    title: "Support & Maintenance",
    description: "Ongoing support to ensure optimal cloud operations.",
    details: [
      "24/7 monitoring",
      "Incident response",
      "Regular updates",
      "Performance tuning",
    ],
  },
  {
    title: "Innovation",
    description: "Leverage new cloud capabilities for business advantage.",
    details: [
      "Cloud-native development",
      "Serverless architecture",
      "AI/ML integration",
      "DevOps enablement",
    ],
  },
];

const caseStudies = [
  {
    title: "E-commerce Platform",
    description: "Complete migration to cloud infrastructure",
    results: [
      "99.99% uptime achieved",
      "60% cost reduction",
      "3x faster deployment",
    ],
  },
  {
    title: "Financial Institution",
    description: "Hybrid cloud implementation",
    results: [
      "100% compliance maintained",
      "45% improved performance",
      "70% faster disaster recovery",
    ],
  },
  {
    title: "Healthcare Provider",
    description: "Multi-cloud infrastructure setup",
    results: [
      "50% reduced IT overhead",
      "99.9% data availability",
      "80% faster scaling",
    ],
  },
];

export default CloudSolutionsPage;
