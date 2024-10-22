import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdAccessTime } from "react-icons/md";
import "../styles/Topheader.css";

const Topheader = () => {
  const workingHours = "9.00 am - 5.30 pm";

  return (
    <div className="top-header-area">
      <div className="top-header">
        {/* Left Section - Location and Email */}
        <div className="left-section">
          <span className="location">
            <MdLocationOn className="icon" /> Bengaluru, Karnataka, India
          </span>
          <span className="email">
            <MdEmail className="icon" /> support@zidio.in
          </span>
        </div>

        {/* Right Section - Working Hours and Social Media Icons */}
        <div className="right-section">
          <span className="time">
            <MdAccessTime className="icon" /> {workingHours}
          </span>
          <span className="icons">
            <a
              href="https://www.facebook.com/profile.php?id=61556709391417"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="icon" />
            </a>
            <a
              href="https://x.com/zidioDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/zidio-development/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCvxJRddqZowVyN6AXjylnMg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="icon" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Topheader;
