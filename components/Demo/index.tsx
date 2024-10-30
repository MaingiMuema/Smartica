import { useState } from "react";
import "./demo.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Landingpage/Footer";
import BackgroundAnimation from "../BackgroundAnimation/BackgroundAnimation";

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <Navbar />
      <BackgroundAnimation />
      <div>
        <div className="demo-container">
          <div className="hero-section">
            <div className="hero-content">
              <span className="badge">Interactive Demo</span>
              <h1>
                Experience the Power of
                <span className="gradient-text"> AI-Driven Analytics</span>
              </h1>
              <p className="hero-subtitle">
                See how leading companies are transforming their decision-making
                with our enterprise AI platform. Book a personalized demo with
                our solution experts.
              </p>

              <div className="trust-banner">
                <p>Trusted by innovative companies worldwide</p>
                <div className="logo-strip">
                  {/* Add company logos here */}
                  <div className="company-logo">Safaricom</div>
                  <div className="company-logo">Sanlam</div>
                  <div className="company-logo">Aminiblock</div>
                </div>
              </div>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-number">93%</span>
                <span className="stat-label">Faster Insights</span>
                <p className="stat-description">
                  Compared to traditional analytics
                </p>
              </div>
              <div className="stat-card">
                <span className="stat-number">60%</span>
                <span className="stat-label">Cost Reduction</span>
                <p className="stat-description">
                  In data processing operations
                </p>
              </div>
              <div className="stat-card">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Real-time Analysis</span>
                <p className="stat-description">
                  Continuous monitoring & alerts
                </p>
              </div>
            </div>
          </div>

          <div className="demo-content">
            <div className="form-section">
              <div className="form-card">
                <div className="form-header">
                  <h2>Book Your Personalized Demo</h2>
                  <p>See our platform in action with your own data</p>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="input-group">
                    <label>Full Name</label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="input-group">
                    <label>Work Email</label>
                    <input
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="input-group">
                    <label>Company</label>
                    <input
                      type="text"
                      placeholder="Your Company Name"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="input-group">
                    <label>What are your main challenges?</label>
                    <textarea
                      placeholder="Tell us about your specific needs..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                    />
                  </div>
                  <button type="submit" className="submit-button">
                    Schedule Demo
                    <span className="button-icon">→</span>
                  </button>
                </form>
              </div>

              <div className="benefits-section">
                <h3>What to Expect</h3>
                <div className="benefits-grid">
                  <div className="benefit-card">
                    <div className="benefit-icon">🎯</div>
                    <h4>Tailored Walkthrough</h4>
                    <p>
                      Custom demo focused on your industry and specific use
                      cases
                    </p>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">💡</div>
                    <h4>Solution Design</h4>
                    <p>Technical architecture and implementation planning</p>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">📊</div>
                    <h4>ROI Analysis</h4>
                    <p>Detailed breakdown of expected returns and timeline</p>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">🤝</div>
                    <h4>Next Steps</h4>
                    <p>
                      Clear action plan for moving forward with implementation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}