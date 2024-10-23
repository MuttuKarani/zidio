import React from 'react'
import { ArrowRight } from 'lucide-react'
import smilingMan from '../../images/hero-thumb.png'
import heroShape from '../../images/hero-shape.png'

//
export default function Hero() {
  return (
    <div className="   min-h-screen flex items-center relative overflow-hidden" 
    style={{
      backgroundImage: "url('../../images/service-bg.png')",
    }}>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-purple-700 opacity-20 transform -skew-x-12"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-blue-400 opacity-20 transform skew-x-12"></div>
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-2/3 text-white">
            <h4 className="text-sm md:text-base font-semibold mb-4">SOFTWARE DEVELOPMENT & CONSULTANCY</h4>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              BUSINESS INNOVATION<br />THROUGH TECHNOLOGY
            </h1>
            <p className="mb-8 text-lg">
              Leading Business Evolution with Tailored and Innovative Software Solutions for Sustainable Growth
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold relative overflow-hidden group">
                <span className="relative z-10">Lets Talk</span>
                <ArrowRight className="inline-block ml-2 relative z-10" />
                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <span className="absolute inset-0 flex items-center justify-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Lets Talk</span>
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
                Read More <ArrowRight className="inline-block ml-2" />
              </button>
            </div>
          </div>
          <div className="lg:w-1/3 mt-8 lg:mt-0">
            <img src= {smilingMan} alt="Smiling man" className="mx-auto" />
          </div>
        </div>
      </div>
      <div className="absolute top-14 right-14">
        <div className="bg-white rounded-full p-2">
          <img src={heroShape} alt="Logo" className="w-24 h-24" />
        </div>
      </div>
    </div>
  )
}