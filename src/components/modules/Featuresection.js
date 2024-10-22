import React from "react";
import "../styles/Featuresection.css"; // Ensure this path is correct

const FeatureSection = () => {
  const features = [
    {
      icon: "images/feature-icon1.png",
      title: "3+ Year Experience",
      description:
        "Over 3 years of expertise delivering unparalleled solutions and insights for your success",
      link: "service.html",
    },
    {
      icon: "images/feature-icon2.png",
      title: "Dedicated Members",
      description:
        "Passionate team members dedicated to exceeding expectations and achieving mutual success",
      link: "service.html",
    },
    {
      icon: "images/feature-icon3.png",
      title: "Valuable Supports",
      description:
        "Tailored support and guidance ensuring reliability and innovation every step of the way",
      link: "service.html",
    },
  ];

  return (
    <div className="feature-area style-two">
      <div className="container">
        <div className="row add-marging">
          {features.map((feature, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="single-feature-box">
                <div className="feature-icon">
                  <img src={feature.icon} alt={feature.title} />
                </div>
                <div className="feature-content">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                  <a href={feature.link}>Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
