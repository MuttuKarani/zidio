import React from "react";
import "../styles/AboutPage.css"; // Ensure the CSS file is included

const AboutHead = () => {
  return (
    <div>
      {/* Breadcumb Area */}
      <div className="breadcumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcumb-content">
                <h4>About Us</h4>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>&gt;</li>
                  <li>About</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Images Area */}
      <div className="images-area inner-style-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="images-thumb">
                <img src="images/about-images.png" alt="About Us" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="row margin-top">
            <div className="col-lg-3 col-md-6">
              <div className="single-feature-box">
                <div className="feature-icon">
                  <img src="images/feature-icon-1.png" alt="Business Growth" />
                </div>
                <div className="feature-content">
                  <h4>Business Growth</h4>
                  <p>
                    Boost your business with strategies to reach new markets,
                    optimize operations, and increase profits.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-feature-box">
                <div className="feature-icon">
                  <img src="images/feature-icon-2.png" alt="eCommerce" />
                </div>
                <div className="feature-content">
                  <h4>eCommerce</h4>
                  <p>
                    Enhance your online presence with user-friendly eCommerce
                    solutions and secure payment gateways.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-feature-box">
                <div className="feature-icon">
                  <img src="images/feature-icon-3.png" alt="Secure Database" />
                </div>
                <div className="feature-content">
                  <h4>Secure Database</h4>
                  <p>
                    Safeguard your data with robust security measures and
                    industry-standard compliance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-feature-box">
                <div className="feature-icon">
                  <img src="images/feature-icon-4.png" alt="Audience Growth" />
                </div>
                <div className="feature-content">
                  <h4>Audience Growth</h4>
                  <p>
                    Expand your reach by connecting with your target audience to
                    drive visibility and growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section (Added at last) */}
      <div className="about-area inner-style-one">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-left">
                <div className="about-thumb">
                  <img src="images/about-thumb.png" alt="" />
                </div>
                <div className="abour-award-box">
                  <div className="about-award-icon">
                    <img src="images/about-award-icon.png" alt="" />
                  </div>
                  <div className="about-award-content">
                    <h4>Award Wining</h4>
                    <p>Best Services</p>
                  </div>
                </div>
                <div className="about-conuter-box">
                  <div className="about-counter-icon">
                    <img src="images/about-counter-icon.png" alt="" />
                  </div>
                  <div
                    className="about-counter-content odometer-wrapper"
                    data-count="283"
                  >
                    <h4>1000</h4>
                    <span>+</span>
                    <p>Completed Projects</p>
                  </div>
                </div>
                <div className="about-shape">
                  <img src="images/about-shape.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="abour-right">
                <div className="section-title left inner-style">
                  <h4>Software Development &amp; Consultancy</h4>
                  <h1>Who we are and</h1>
                  <h1>What we do ?</h1>
                  <p className="section-desc">
                    Welcome to Zidio Development Pvt. Ltd. We are a trailblazing
                    software development company where innovation meets
                    expertise. Our team of skilled developers and creative
                    thinkers specializes in turning complex ideas into
                    user-friendly digital solutions. From custom software to
                    cutting-edge mobile apps, we're dedicated to engineering
                    excellence and pushing the boundaries of technology.
                    <br />
                    <br />
                    At Zidio, we believe in the power of collaboration,
                    continuous learning, and adapting to the ever-evolving
                    digital landscape. We're not just developers; we're
                    visionaries committed to delivering impactful software
                    solutions that drive success for businesses globally.
                    <br />
                    <br />
                    Stay connected with us for insights into our groundbreaking
                    projects, tech trends, career opportunities, and our journey
                    in shaping the future of technology.
                  </p>
                </div>
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6">
                    <div className="about-list-item">
                      <ul>
                        <li>
                          <i className="bi bi-check"></i>Company and Research
                        </li>
                        <li>
                          <i className="bi bi-check"></i>Business and research
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="about-text">
                      <div className="about-number">
                        <h4>100%</h4>
                      </div>
                      <div className="about-text-content">
                        <h4>Business Solution</h4>
                        <p>Level is high</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="about-company">
                  <div className="about-company-icon">
                    <i className="bi bi-quote"></i>
                  </div>
                  <div className="about-company-desc">
                    <p>
                      The true sign of intelligence is not knowledge but
                      imagination —Albert Einstein
                    </p>
                  </div>
                </div>
                <div className="toptech-button inner-style">
                  <a href="#">
                    More About<i className="bi bi-arrow-right-short"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHead;
