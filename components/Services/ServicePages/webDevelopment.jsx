import React from "react";
import {
  FaCode,
  FaDesktop,
  FaMobile,
  FaRocket,
  FaTools,
  FaShieldAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Head from "next/head";
import "./webDevelopment.css";
import BackgroundAnimation from "@/components/BackgroundAnimation/BackgroundAnimation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Landingpage/Footer";

const WebDevelopmentPage = () => {
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
          Professional Web Development Services | Custom Web Solutions
        </title>
        <meta
          name="description"
          content="Transform your online presence with our professional web development services. We create responsive, scalable, and modern web applications tailored to your needs."
        />
      </Head>

      <div className="automation-page">
        <section className="hero-section">
          <div className="hero-content">
            <h1>Web Development</h1>
            <h2>Building Digital Excellence</h2>
            <p>
              Create powerful, responsive web applications that drive results
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
            <span className="section-label">Services</span>
            <h2>Our Web Development Solutions</h2>
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
            <h2>Our Development Approach</h2>
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
            <span className="section-label">Portfolio</span>
            <h2>Success Stories</h2>
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
            <h2>Ready to Build Your Web Presence?</h2>
            <p>Let&apos;s create something amazing together</p>
            <motion.button
              className="cta-button primary z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
              Start Your Project
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
    icon: <FaCode />,
    title: "Custom Web Development",
    description: "Tailored web solutions built with cutting-edge technologies.",
  },
  {
    icon: <FaDesktop />,
    title: "Responsive Design",
    description: "Beautiful, functional websites that work on all devices.",
  },
  {
    icon: <FaMobile />,
    title: "Progressive Web Apps",
    description: "Modern web apps with native-like functionality.",
  },
  {
    icon: <FaRocket />,
    title: "Performance Optimization",
    description: "Lightning-fast loading speeds and optimal user experience.",
  },
  {
    icon: <FaTools />,
    title: "Maintenance & Support",
    description: "Ongoing support to keep your website running smoothly.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Security & Compliance",
    description: "Robust security measures and compliance with standards.",
  },
];

const process = [
  {
    title: "Discovery",
    description: "Understanding your goals, requirements, and target audience.",
  },
  {
    title: "Planning & Design",
    description: "Creating wireframes and visual designs for your approval.",
  },
  {
    title: "Development",
    description: "Building your website with clean, efficient code.",
  },
  {
    title: "Testing",
    description: "Rigorous testing across devices and browsers.",
  },
  {
    title: "Deployment",
    description: "Launching your website with optimal configuration.",
  },
  {
    title: "Maintenance",
    description:
      "Ongoing support and regular updates to ensure peak performance.",
  },
];

const caseStudies = [
  {
    title: "E-commerce Platform",
    description: "Custom online store with advanced features",
    results: ["150% increase in sales", "3s page load time", "99.9% uptime"],
  },
  {
    title: "SaaS Application",
    description: "Cloud-based business management platform",
    results: [
      "10,000+ active users",
      "95% user satisfaction",
      "50% reduced costs",
    ],
  },
  {
    title: "Corporate Website",
    description: "Modern website with CMS integration",
    results: [
      "200% more leads",
      "40% bounce rate reduction",
      "Mobile traffic up 80%",
    ],
  },
];

export default WebDevelopmentPage;
