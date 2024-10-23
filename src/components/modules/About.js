import React from 'react'
import { ArrowRight, DollarSign, Users, Headphones, ThumbsUp } from 'lucide-react'
import aboutThumb from '../../images/about-thumb.png'
import image from '../../images/image.png'
export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <div className="relative">
            <img src={aboutThumb} alt="Team working" className="rounded-lg" />
            <div className="absolute top-0 left-0 bg-blue-600 text-white p-4 rounded-lg">
              <div className="text-4xl font-bold">3+</div>
              <div className="text-sm">Years Of<br />Experiences</div>
            </div>
            
            <div className="absolute -bottom-2 -right-4 w-44 h-44 bg-blue-100 rounded-full">
            <img src={image} alt="Team working" className="rounded-lg" />
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-12">
          <h4 className="text-blue-600 font-semibold mb-2">Software Development & Services</h4>
          <h2 className="text-3xl font-bold mb-4">Your Reliable Partner for IT Services<br />Dedicated to Your Success</h2>
          <p className="text-gray-600 mb-8">
            At Zidio, we're your trusted IT services partner, ensuring your success with reliable solutions tailored to your business needs. Count on us for robust software development, comprehensive IT support, and cutting-edge technology solutions that empower your business to thrive.
          </p>
          <div className="grid grid-cols-2 gap-6 mb-8">
            {[
              { icon: <DollarSign className="w-8 h-8 text-blue-600" />, text: "Cost Effective Solutions" },
              { icon: <Users className="w-8 h-8 text-blue-600" />, text: "Expert & Dedicated Team Members" },
              { icon: <Headphones className="w-8 h-8 text-blue-600" />, text: "24/7 Free Technical Supports" },
              { icon: <ThumbsUp className="w-8 h-8 text-blue-600" />, text: "100% Customers Satisfaction" },
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                {item.icon}
                <span className="ml-2 text-sm font-semibold">{item.text}</span>
              </div>
            ))}
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-blue-600 border border-blue-600 transition duration-300 flex items-center">
            ABOUT MORE
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}