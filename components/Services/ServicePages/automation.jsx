import React from "react";
import { FaRobot, FaCogs, FaChartLine, FaBrain } from "react-icons/fa";
import { motion } from "framer-motion";
import Head from "next/head";
import "./automation.css";
import BackgroundAnimation from "@/components/BackgroundAnimation/BackgroundAnimation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Landingpage/Footer";

const AutomationPage = () => {
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
          Business Automation Solutions & Services | Custom Workflow Automation
        </title>
        <meta
          name="description"
          content="Transform your business with our cutting-edge automation solutions. We offer custom workflow automation, RPA, AI-powered systems, and seamless integrations. Get started today!"
        />
      </Head>

      <div className="automation-page">
        <section
          className="hero-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="hero-content">
            <h1>Intelligent Automation</h1>
            <h2>For The Modern Enterprise</h2>
            <p style={{ color: "#fff" }}>
              Transform your business operations with AI-powered automation
              solutions
            </p>
            <div className="hero-ctas bg-black">
              <motion.button
                className="cta-button primary z-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.location.href = "/demo";
                }}
              >
                Get Started
              </motion.button>
              <motion.button
                className="cta-button secondary z-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Demo
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
                custom={index}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <div className="benefit-content">
                  <h3 style={{ color: "#38bdf8" }}>{benefit.title}</h3>
                  <p style={{ color: "#fff" }}>{benefit.description}</p>
                </div>
                <div className="benefit-metrics">
                  {benefit.metrics &&
                    benefit.metrics.map((metric, idx) => (
                      <div key={idx} className="metric">
                        <span className="metric-value">{metric.value}</span>
                        <span className="metric-label">{metric.label}</span>
                      </div>
                    ))}
                </div>
                {benefit.features && (
                  <ul className="benefit-features">
                    {benefit.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                )}
                {benefit.cta && (
                  <motion.button
                    className="benefit-cta"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={benefit.cta.action}
                  >
                    {benefit.cta.text}
                  </motion.button>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="process-section">
          <div className="section-header">
            <span className="section-label">Process</span>
            <h2 style={{ color: "#fff" }}>How We Work</h2>
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
                <div className="step-content">
                  <h3 style={{ color: "#38bdf8" }}>{step.title}</h3>
                  <p style={{ color: "#fff" }}>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="case-studies">
          <div className="section-header">
            <span className="section-label">Results</span>
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
            <h2>Ready to Transform Your Business?</h2>
            <p>
              Let&apos;s discuss how automation can revolutionize your
              operations
            </p>
            <button
              className="cta-button primary z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.location.href = "/demo";
              }}
            >
              Schedule Consultation
            </button>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

const benefits = [
  {
    icon: <FaRobot />,
    title: "Custom Workflow Automation",
    description:
      "Tailor-made solutions that automate your specific business processes and workflows.",
  },
  {
    icon: <FaCogs />,
    title: "Seamless Integration",
    description:
      "Connect and automate your existing systems and applications effortlessly.",
  },
  {
    icon: <FaChartLine />,
    title: "Increased Efficiency",
    description:
      "Reduce manual tasks and errors while improving operational efficiency.",
  },
  {
    icon: <FaBrain />,
    title: "AI-Powered Solutions",
    description:
      "Leverage artificial intelligence to make smarter business decisions.",
  },
  {
    icon: <FaChartLine />,
    title: "Predictive Analytics",
    description:
      "Harness data-driven insights to anticipate trends and optimize business decisions.",
    metrics: [
      { value: "85%", label: "Forecast Accuracy" },
      { value: "3x", label: "ROI" },
    ],
  },
  {
    icon: <FaCogs />,
    title: "Process Mining",
    description:
      "Discover and analyze your actual business processes to identify optimization opportunities.",
    features: [
      "Real-time process visualization",
      "Bottleneck identification",
      "Compliance monitoring",
    ],
  },
];

const process = [
  {
    title: "Discovery & Analysis",
    description:
      "We analyze your current processes and identify automation opportunities.",
  },
  {
    title: "Solution Design",
    description:
      "Our experts design a custom automation solution tailored to your needs.",
  },
  {
    title: "Implementation",
    description:
      "We implement the solution with minimal disruption to your operations.",
  },
  {
    title: "Training & Support",
    description:
      "Comprehensive training and ongoing support to ensure success.",
  },
  {
    title: "Process Mining & Analysis",
    description:
      "Advanced analysis of your existing workflows using process mining technology.",
  },
  {
    title: "Continuous Improvement",
    description:
      "Regular optimization and updates based on performance metrics and feedback.",
  },
];

const caseStudies = [
  {
    title: "Insurance Company",
    description: "Automated claims processing and risk assessment system",
    results: [
      "65% reduction in claims processing time",
      "95% accuracy in risk assessment",
      "40% operational cost savings",
    ],
  },
  {
    title: "Financial Services Firm",
    description: "Implemented automated document processing and workflow",
    results: [
      "75% faster document processing",
      "100% compliance adherence",
      "40% increase in productivity",
    ],
  },
  {
    title: "Healthcare Provider",
    description: "Automated patient scheduling and record management system",
    results: [
      "60% reduction in scheduling time",
      "95% patient satisfaction rate",
      "45% decrease in no-shows",
    ],
  },
];

export default AutomationPage;
