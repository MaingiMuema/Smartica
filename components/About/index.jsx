import React, { useEffect } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";
import Navbar from "@/components/Navbar/Navbar";
import "./about.css";
import Footer from "../Landingpage/Footer";
import BackgroundAnimation from "../BackgroundAnimation/BackgroundAnimation";

const teamMembers = [
  {
    name: "John Lodenyo",
    role: "Co-founder, Director & Data Analyst",
    image: "/path/to/john-lodenyo.jpg",
    bio: "Expert in transforming complex data into actionable insights.",
  },
  {
    name: "Agnes Nyareso",
    role: "Director & Web App Developer",
    image: "/path/to/agnes-nyareso.jpg",
    bio: "Passionate about creating intuitive and powerful web applications.",
  },
  {
    name: "Rawelyn Pili",
    role: "Co-founder, Director & Technical Lead",
    image: "/path/to/rawelyn-pili.jpg",
    bio: "Drives innovation and ensures technical excellence in all projects.",
  },
  {
    name: "Dodman Mwaura",
    role: "Co-founder, Director & Process Automation Specialist",
    image: "/path/to/dodman-mwaura.jpg",
    bio: "Streamlines business processes through cutting-edge automation solutions.",
  },
];

const AboutUsPage = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("particles.js");
      particlesJS("vision-particles", {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: false },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  return (
    <div className="about-us-page">
      <Navbar />
      <section className="hero-section">
        <div className="hero-content z-2">
          <h1 className="hero-title z-2">Meet the SMATICA Team</h1>
          <p className="hero-subtitle z-2">
            Passionate professionals committed to delivering exceptional results
          </p>
        </div>
      </section>

      <section className="team-section">
        <div className="z-2 team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member z-2">
              <div className="member-image">
                <img src={member.image} alt={member.name} />
                <div className="member-overlay z-2">
                  <h2>{member.name}</h2>
                  <h3>{member.role}</h3>
                </div>
              </div>
              <div className="member-info z-2">
                <p>{member.bio}</p>
                <div className="social-links">
                  <a href="#" aria-label="LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href="#" aria-label="GitHub">
                    <FaGithub />
                  </a>
                  <a href="#" aria-label="Email">
                    <FaEnvelope />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="company-vision">
        <div id="vision-particles" className="vision-particles z-2"></div>
        <div className="vision-content z-2">
          <FaLightbulb className="vision-icon" />
          <h2>Our Vision</h2>
          <p>
            At SMATICA Limited, we leverage our expertise in automation,
            development, and data analysis to create solutions that meet and
            exceed our clients' expectations. Our strength lies in our talented
            team of professionals who are passionate about technology and
            committed to delivering exceptional results.
          </p>
          <div className="cta-content">
            <FaRocket className="cta-icon" />
            <h2 className="z-2">Ready to Launch Your Project?</h2>
            <p className="z-2">
              Let's discuss how SMATICA can help transform your business.
            </p>
            <button className="cta-button">
              Get in Touch
              <span className="button-effect"></span>
            </button>
          </div>
        </div>
      </section>
      <Footer />
      <BackgroundAnimation />
    </div>
  );
};

export default AboutUsPage;
