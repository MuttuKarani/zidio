// AboutSection.js
import React from "react";
import "../styles/Aboutsection.css";

const AboutSection = () => {
  return (
    <div className="about-area style-two">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side - Image and Counter */}
          <div className="col-lg-6">
            <div className="about-left">
              <div className="about-thumb">
                <img src="images/about-thumb.png" alt="" />
              </div>
              <div className="about-shape">
                <img src="images/about-shape.png" alt="" />
              </div>
              <div className="about-counter-box">
                <div className="about-counter-title">
                  <h4>3</h4>
                  <span>+</span>
                  <p>
                    Years Of <br />
                    Experiences
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text and Icons */}
          <div className="col-lg-6">
            <div className="about-right">
              <div className="section-title left style-two">
                <h4 className="text-primary">
                  Software Development & Services
                </h4>
                <h1>Your Reliable Partner for IT Services</h1>
                <h1>Dedicated to Your Success</h1>
                <p>
                  At Zidio, we're your trusted IT services partner, ensuring
                  your success with reliable solutions tailored to your business
                  needs. Count on us for robust software development,
                  comprehensive IT support, and cutting-edge technology
                  solutions that empower your business to thrive.
                </p>
              </div>

              {/* Icon Boxes */}
              <div className="row">
                {[
                  {
                    icon: "images/about-icon1.png",
                    title: "Cost Effective Solutions",
                  },
                  {
                    icon: "images/about-icon2.png",
                    title: "Expert & Dedicated Team Members",
                  },
                  {
                    icon: "images/about-icon3.png",
                    title: "24/7 Free Technical Supports",
                  },
                  {
                    icon: "images/about-icon4.png",
                    title: "100% Customer Satisfaction",
                  },
                ].map((item, index) => (
                  <div className="col-lg-6 col-md-6" key={index}>
                    <div className="single-about-icon-box">
                      <div className="about-icon">
                        <img src={item.icon} alt={item.title} />
                      </div>
                      <div className="about-icon-box-content">
                        <h4>{item.title}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Button */}
              <div className="toptech-button style-one">
                <a href="about-1.html">
                  About More<i className="bi bi-arrow-right-circle-fill"></i>
                </a>
              </div>

              {/* Additional Shape */}
              <div className="about-shape-two">
                <img src="images/about-shape2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
