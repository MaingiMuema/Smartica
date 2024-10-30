import React from "react";
import { FaEnvelope } from "react-icons/fa";
import "./style.css";

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2>Get in Touch with SMATICA</h2>
        <p>
          We&apos;re excited to hear from you! Whether you need automation
          solutions, web apps, or data insights, our team is ready to help.
        </p>
        <div className="contact-info">
          <FaEnvelope className="contact-icon" />
          <a href="mailto:pawadd01@gmail.com">pawadd01@gmail.com</a>
        </div>
        <p className="contact-cta">
          Let&apos;s revolutionize your business operations through innovative
          technology solutions.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
