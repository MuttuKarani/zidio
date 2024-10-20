import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin, Youtube, ArrowRight, CircleArrowRightIcon} from 'lucide-react';
import zidioLogo from '../../images/zidioLogo.png'; 
export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#000033] text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <img src={zidioLogo} alt="ZIDIO DEVELOPMENT" className="h-12 bg-white" />
          <p className="text-sm">
            At Zidio Development, we specialize in innovative software solutions. Our team is dedicated to delivering high-quality projects, fostering professional growth, and driving technological advancement.
          </p>
          <button className="bg-[#0066ff] hover:bg-white hover:text-[#0066ff] transition-colors duration-300 text-white font-bold py-2 px-4 rounded flex items-center">
            Discover More
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>

        <div className=" list-none">
          <h3 className="text-xl font-bold mb-4">Company</h3>
          <ul className="space-y-2 !list-none">
            {['About', 'Our Team', 'Contact', 'Careers'].map((item) => (
              <li key={item} >
                <a href="#" className="hover:text-[#0066ff] transition-colors duration-300 flex items-center">
                <CircleArrowRightIcon className="ml-2 h-4 w-4" />
                <div className="w-1 h-1 bg-[#0066ff] rounded-full mr-2"></div>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 ">Our Services</h3>
          <ul className="space-y-2">
            {['IT Solutions', 'Cyber Security', 'Digital Marketing', 'Machine Learning', 'Cloud Services'].map((item) => (
              <li key={item}>
                
                <a href="#" className="hover:text-[#0066ff] transition-colors duration-300 flex items-center">
                <CircleArrowRightIcon className="ml-2 h-4 w-4" /> <div className="w-1 h-1 bg-[#0066ff] rounded-full mr-2"></div>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Newsletter</h3>
          <p className="mb-4">Subscribe to Latest Newsletter</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Enter Your E-Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 bg-[#000044] rounded"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#0066ff] hover:bg-white hover:text-[#0066ff] transition-colors duration-300 text-white font-bold py-2 px-4 rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm mb-4 md:mb-0">© 2024 @ Zidio Development. Designed by Team ZIDIO.</p>
        <div className="flex space-x-4">
          {[Facebook, Twitter, Linkedin, Youtube].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="bg-[#000044] hover:bg-[#0066ff] transition-colors duration-300 p-2 rounded-full"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}