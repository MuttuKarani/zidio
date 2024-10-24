import React from "react";
import "../styles/AboutUs.css";

const AboutUs = () => {
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

      {/* About Us Section */}
      <section className="about-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Who We Are</h2>
              <p>
                Welcome to [Your Company Name], a leading innovator in [your
                industry]. Our passion lies in delivering top-quality
                [products/services] that help individuals and businesses alike.
                We have built our reputation on the foundation of trust,
                innovation, and customer satisfaction.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h3>Our Mission</h3>
              <p>
                Our mission is to [mission statement], ensuring that our
                solutions bring value to every client we serve. We are committed
                to [core value 1], [core value 2], and [core value 3].
              </p>
            </div>
            <div className="col-lg-6">
              <h3>Our Vision</h3>
              <p>
                Our vision is to [vision statement], and we strive to be a
                global leader in [your industry]. We continuously push the
                boundaries of innovation to meet the evolving needs of our
                clients.
              </p>
            </div>
          </div>

          {/* Company History */}
          <div className="row">
            <div className="col-lg-12">
              <h3>Our Story</h3>
              <p>
                Founded in [year], [Your Company Name] started with a simple
                idea: [how/why your company started]. Over the years, we have
                grown into a trusted name, expanding our operations and
                developing new technologies that push the industry forward.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="row">
            <div className="col-lg-12">
              <h3>Meet the Team</h3>
              <div className="team-members">
                <div className="team-member">
                  <img src="images/team-member1.jpg" alt="Team Member 1" />
                  <h4>Jane Doe</h4>
                  <p>CEO & Founder</p>
                </div>
                <div className="team-member">
                  <img src="images/team-member2.jpg" alt="Team Member 2" />
                  <h4>John Smith</h4>
                  <p>Chief Operating Officer</p>
                </div>
                {/* Add more team members as needed */}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="row">
            <div className="col-lg-12">
              <div className="cta">
                <h3>Want to learn more?</h3>
                <p>
                  Reach out to us today and discover how we can help you achieve
                  your goals.
                  <a href="/contact">Contact Us</a> for more information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
