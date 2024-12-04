import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "./contact.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Landingpage/Footer";
import BackgroundAnimation from "../BackgroundAnimation/BackgroundAnimation";

const Contact = ({ onSubmit, status }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await onSubmit(formData);
    if (status.type === 'success') {
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <>
      <Navbar />
      <BackgroundAnimation />
      <div className="contact-container">
        <div className="contact-wrapper">
          <div className="contact-header">
            <h1>Get In Touch</h1>
            <p>Have a question or want to work together? Let&apos;s connect!</p>
          </div>
          
          <div className="contact-content">
            <div className="contact-info">
              <div className="info-section">
                <h2>Contact Information</h2>
                <p className="info-text">
                  Ready to transform your digital presence? Reach out to us and let&apos;s create something amazing together.
                </p>
                
                <div className="contact-details">
                  <div className="contact-item">
                    <div className="icon-wrapper">
                      <FaEnvelope className="contact-icon" />
                    </div>
                    <div className="contact-text">
                      <h3>Email</h3>
                      <a href="mailto:info@smartica.com">info@smartica.com</a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="icon-wrapper">
                      <FaPhone className="contact-icon" />
                    </div>
                    <div className="contact-text">
                      <h3>Phone</h3>
                      <a href="tel:+1234567890">+1 (123) 456-7890</a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="icon-wrapper">
                      <FaMapMarkerAlt className="contact-icon" />
                    </div>
                    <div className="contact-text">
                      <h3>Location</h3>
                      <p>Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>

                <div className="contact-stats">
                  <div className="stat-item">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Projects Completed</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">Support Available</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <h2>Send us a Message</h2>
                {status.message && (
                  <div className={`status-message ${status.type}`}>
                    {status.message}
                  </div>
                )}
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group message-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
