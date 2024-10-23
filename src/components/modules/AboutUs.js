import React from 'react'
import { Check, ArrowRight } from 'lucide-react'
import aboutThumb2 from '../../images/about-thumb2.png'

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-16"
     >
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0 relative">
          <img src={aboutThumb2} alt="Team working" className="rounded-lg" />
          {/* <img src="/placeholder.svg?height=300&width=400" alt="Person working" className="absolute bottom-0 right-0 w-2/3 rounded-lg" /> */}
          <div className="absolute bottom-0 left-0 bg-blue-600 text-white p-6 rounded-full w-48 h-48 flex flex-col items-center justify-center">
            <div className="text-4xl font-bold">1000+</div>
            <div className="text-sm text-center">Completed Projects</div>
          </div>
          <div className="absolute top-0 right-0 bg-navy-900 text-white p-4 rounded-lg">
            <div className="flex items-center">
              {/* <img src="/placeholder.svg?height=24&width=24" alt="Award icon" className="mr-2" /> */}
              <div>
                <div className="font-semibold">Award Wining</div>
                <div className="text-sm">Best Services</div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 lg:pl-12">
          <h4 className="text-blue-600 font-semibold mb-2">Software Development & Consultancy</h4>
          <h2 className="text-3xl font-bold mb-4">Who we are and<br />What we do ?</h2>
          <p className="text-gray-600 mb-6">
            Welcome to Zidio Development Pvt. Ltd. We are a trailblazing software development company where innovation meets expertise. Our team of skilled developers and creative thinkers specializes in turning complex ideas into user-friendly digital solutions. From custom software to cutting-edge mobile apps, we're dedicated to engineering excellence and pushing the boundaries of technology.
          </p>
          <div className="flex flex-wrap mb-6">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <div className="flex items-center mb-2">
                <Check className="text-blue-600 mr-2" />
                <span>Company and Research</span>
              </div>
              <div className="flex items-center">
                <Check className="text-blue-600 mr-2" />
                <span>Business and research</span>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center">
              <div className="text-4xl font-bold text-blue-600 mr-4">100%</div>
              <div>
                <div className="font-semibold">Business Solution</div>
                <div className="text-sm text-gray-600">Level is high</div>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="italic text-gray-700">
              "The true sign of intelligence is not knowledge but imagination —Albert Einstein"
            </p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-blue-600 border border-blue-600 transition duration-300 flex items-center">
            More About
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}