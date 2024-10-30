import React from "react";
import { FaLightbulb, FaUsers, FaCogs } from "react-icons/fa";

const WhyChooseSmatica = () => {
  return (
    <section className="why-choose-smatica">
      <div className="container">
        <h2>Why Choose SMATICA?</h2>
        <p className="main-description">
          At SMATICA Limited, we analyze, automate, and create with our users in
          mind. Our approach is collaborative and user-centric, ensuring that
          our solutions truly resonate with the needs of our clients.
        </p>
        <div className="features">
          <div className="feature">
            <FaLightbulb className="feature-icon" />
            <h3>Innovative Solutions</h3>
            <p>We transform businesses through cutting-edge technology.</p>
          </div>
          <div className="feature">
            <FaUsers className="feature-icon" />
            <h3>User-Centric Approach</h3>
            <p>
              Our solutions are tailored to meet the specific needs of our
              clients.
            </p>
          </div>
          <div className="feature">
            <FaCogs className="feature-icon" />
            <h3>Collaborative Process</h3>
            <p>We work closely with our clients to ensure optimal results.</p>
          </div>
        </div>
        <p className="cta-text">
          Join us in transforming the way businesses operate through technology.
        </p>
      </div>
    </section>
  );
};

export default WhyChooseSmatica;
