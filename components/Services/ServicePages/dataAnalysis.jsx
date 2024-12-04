import React from "react";
import { FaChartLine, FaBrain, FaDatabase, FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";
import Head from "next/head";
import "./dataAnalysis.css";
import BackgroundAnimation from "@/components/BackgroundAnimation/BackgroundAnimation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Landingpage/Footer";

const DataAnalysisPage = () => {
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
        <title style={{ color: "white" }}>
          Data Analytics & Business Intelligence Solutions | Advanced Analytics
          Services
        </title>
        <meta
          name="description"
          content="Transform your data into actionable insights with our advanced analytics services. We offer predictive analytics, business intelligence, and machine learning solutions."
        />
      </Head>

      <div className="automation-page">
        <section className="hero-section">
          <div className="hero-content">
            <h1 >Data Analytics Solutions</h1>
            <h2>Turn Data into Decisions</h2>
            <p>Unlock the power of your data with advanced analytics and AI</p>
            <div className="hero-ctas">
              <motion.button
                className="cta-button primary z-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.location.href = "/demo";
                }}
              >
                Start Analysis
              </motion.button>
              <motion.button
                className="cta-button secondary z-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Demo
              </motion.button>
            </div>
          </div>
        </section>

        <section className="benefits-section">
          <div className="section-header">
            <span className="section-label">Benefits</span>
            <h2 style={{ color: "white" }}>Why Choose Our Analytics</h2>
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
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="process-section">
          <div className="section-header">
            <span className="section-label">Process</span>
            <h2 style={{ color: "white" }}>Our Analytics Approach</h2>
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
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="case-studies">
          <div className="section-header">
            <span className="section-label" >Results</span>
            <h2 style={{ color: "white" }}>Success Stories</h2>
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
                <h3>{study.title}</h3>
                <p>{study.description}</p>
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
            <h2>Ready to Unlock Your Data&apos;s Potential?</h2>
            <p>Let&apos;s discover the insights hidden in your data</p>
            <motion.button
              className="cta-button primary z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.location.href = "/demo";
              }}
            >
              Schedule Analysis
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
    icon: <FaChartLine />,
    title: "Predictive Analytics",
    description:
      "Forecast trends and make data-driven decisions with advanced statistical models.",
  },
  {
    icon: <FaBrain />,
    title: "Machine Learning",
    description:
      "Leverage AI algorithms to uncover patterns and automate decision-making.",
  },
  {
    icon: <FaDatabase />,
    title: "Big Data Processing",
    description:
      "Handle large-scale data processing with cutting-edge technologies.",
  },
  {
    icon: <FaSearch />,
    title: "Business Intelligence",
    description:
      "Transform raw data into actionable insights through interactive dashboards.",
  },
  {
    icon: <FaChartLine />,
    title: "Real-time Analytics",
    description:
      "Monitor and analyze data streams in real-time for immediate insights.",
  },
  {
    icon: <FaDatabase />,
    title: "Data Visualization",
    description:
      "Create compelling visual representations of complex data patterns.",
  },
];

const process = [
  {
    title: "Data Assessment",
    description: "Evaluate your data sources and define analytical objectives.",
  },
  {
    title: "Data Preparation",
    description: "Clean, transform, and structure your data for analysis.",
  },
  {
    title: "Model Development",
    description: "Build and validate analytical models tailored to your needs.",
  },
  {
    title: "Implementation",
    description: "Deploy solutions and integrate with your existing systems.",
  },
];

const caseStudies = [
  {
    title: "E-commerce Platform",
    description: "Implemented predictive analytics for customer behavior",
    results: [
      "45% increase in sales",
      "30% better retention",
      "60% more accurate forecasting",
    ],
  },
  {
    title: "Healthcare Provider",
    description: "Developed patient outcome prediction models",
    results: [
      "85% prediction accuracy",
      "40% reduced readmissions",
      "50% cost savings",
    ],
  },
  {
    title: "Financial Institution",
    description: "Created risk assessment analytics system",
    results: [
      "90% fraud detection rate",
      "65% faster processing",
      "35% risk reduction",
    ],
  },
];

export default DataAnalysisPage;
