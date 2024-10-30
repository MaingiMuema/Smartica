import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Landingpage/Footer";
import BackgroundAnimation from "../BackgroundAnimation/BackgroundAnimation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Navbar />
      <BackgroundAnimation />
      <div className="contact-container my-5s0">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              We'd love to hear from you. Reach out to us for any inquiries or
              collaborations.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>info@smartica.com</span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send us a Message</h2>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
        <div className="contact-decoration">
          <div className="decoration-circle"></div>
          <div className="decoration-line"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
