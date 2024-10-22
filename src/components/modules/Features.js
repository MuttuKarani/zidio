import React from 'react'
import { Briefcase, Users, Headphones } from 'lucide-react'

const features = [
  {
    icon: <Briefcase className="w-8 h-8 text-blue-600" />,
    title: "3+ Year Experience",
    description: "Over 3 years of expertise delivering unparalleled solutions and insights for your success",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Dedicated Members",
    description: "Passionate team members dedicated to exceeding expectations and achieving mutual success",
  },
  {
    icon: <Headphones className="w-8 h-8 text-blue-600" />,
    title: "Valuable Supports",
    description: "Tailored support and guidance ensuring reliability and innovation every step of the way",
  },
]

export default function Features() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-blue-600 transform translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"></div>
              <div className="relative z-10 transition-colors duration-300 group-hover:text-white">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4 group-hover:text-white">{feature.description}</p>
                <div className="w-8 h-0.5 bg-blue-600 group-hover:bg-white"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}