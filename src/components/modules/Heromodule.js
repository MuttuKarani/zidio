import React from "react";
import "../styles/Heromodule.css";

const Heromodule = () => {
  return (
    <div className="hero-area style-two d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* Left side - Text */}
          <div className="col-lg-8">
            <div className="hero-content">
              <h4>Software Development & Consultancy</h4>
              <h1>Business Innovation</h1>
              <h1>Through Technology</h1>
              <p>
                Leading Business Evolution with Tailored and Innovative Software
                Solutions for Sustainable Growth
              </p>
            </div>
            {/* Wrapping buttons in a single div for horizontal alignment */}
            <div className="hero-button-group">
              <a href="#lets-talk" className="btn btn-primary btn-lg">
                Let's Talk &rarr;
              </a>
              <a href="#read-more" className="btn btn-primary btn-lg">
                Read More &rarr;
              </a>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="col-md-4">
            <div className="hero-right">
              <div className="hero-thumb">
                <img
                  src="./images/hero-thumb.png"
                  alt="Hero"
                  className="img-fluid"
                />
              </div>
              <div className="hero-shape">
                <img src="./images/hero-shape.png" alt="shape" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heromodule;
