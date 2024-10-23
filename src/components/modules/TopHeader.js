import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdAccessTime } from "react-icons/md";
import "../styles/TopHeader.css"; // We'll keep custom CSS for the ::before element

const Topheader = () => {
  const workingHours = "9.00 am - 5.30 pm";

  return (
    <div className="top-header-area relative bg-[#00194c] py-3">
      <div className="top-header relative z-10 flex justify-between items-center px-5 text-white">
        {/* Left Section - Location and Email */}
        <div className="flex gap-5">
          <span className="flex items-center font-medium">
            <MdLocationOn className="mr-1 text-lg" /> Bengaluru, Karnataka,
            India
          </span>
          <span className="flex items-center font-medium">
            <MdEmail className="mr-1 text-lg" /> support@zidio.in
          </span>
        </div>

        {/* Right Section - Working Hours and Social Media Icons */}
        <div className="flex items-center gap-5">
          <span className="flex items-center font-medium">
            <MdAccessTime className="mr-1 text-lg" /> {workingHours}
          </span>
          <span className="flex gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=61556709391417"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#eef1f3] hover:text-[#0056b3] transition-colors"
            >
              <FaFacebook className="text-lg" />
            </a>
            <a
              href="https://x.com/zidioDev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#eef1f3] hover:text-[#0056b3] transition-colors"
            >
              <FaTwitter className="text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/company/zidio-development/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#eef1f3] hover:text-[#0056b3] transition-colors"
            >
              <FaLinkedin className="text-lg" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCvxJRddqZowVyN6AXjylnMg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#eef1f3] hover:text-[#0056b3] transition-colors"
            >
              <FaYoutube className="text-lg" />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Topheader;
