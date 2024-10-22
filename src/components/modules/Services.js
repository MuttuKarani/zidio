import React from 'react'
import { ArrowRight, Palette, Cloud, Code, Megaphone, Layers, Server } from 'lucide-react'

const services = [
  {
    icon: <Palette className="w-8 h-8 text-blue-500 group-hover:text-white" />,
    number: '01',
    title: 'Graphic Design',
    description: 'Monotonectally synergize grants to business visualize strategic infomediaries'
  },
  {
    icon: <Cloud className="w-8 h-8 text-blue-500 group-hover:text-white" />,
    number: '02',
    title: 'Cloud Solutions',
    description: "Deliver scalable cloud solutions to enhance your business's flexibility and operational efficiency."
  },
  {
    icon: <Code className="w-8 h-8 text-blue-500 group-hover:text-white" />,
    number: '03',
    title: 'Web Development',
    description: 'Design and build responsive, high-performance websites using the latest web technologies.'
  },
  {
    icon: <Megaphone className="w-8 h-8 text-blue-500 group-hover:text-white" />,
    number: '04',
    title: 'Digital Marketing',
    description: 'Boost your online presence with tailored digital marketing strategies that drive engagement and growth.'
  },
  {
    icon: <Layers className="w-8 h-8 text-blue-500 group-hover:text-white" />,
    number: '05',
    title: '3D Vector Illustration',
    description: 'Monotonectally synergize grants to business visualize strategic infomediaries'
  },
  {
    icon: <Server className="w-8 h-8 text-blue-500 group-hover:text-white" />,
    number: '06',
    title: 'Hosting Services',
    description: 'Monotonectally synergize grants to business visualize strategic infomediaries'
  }
]

export default function Services() {
  return (
    <div className="bg-navy-900 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1/3 h-1/3">
        <div className="w-full h-full bg-blue-500 opacity-10 transform -skew-x-12"></div>
      </div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3">
        <div className="w-full h-full bg-blue-500 opacity-10 transform skew-x-12"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h4 className="text-blue-500 font-semibold mb-2">IT Support For Business</h4>
          <h2 className="text-3xl font-bold text-white">What we are Offering</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-6 transition-all duration-300 hover:bg-blue-500 group">
              <div className="flex justify-between items-start mb-4">
                {service.icon}
                <span className="text-lg font-semibold text-blue-200 group-hover:text-white">{service.number}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-white">{service.title}</h3>
              <p className="text-gray-600 mb-4 group-hover:text-white">{service.description}</p>
              <a href="#" className="inline-flex items-center text-blue-500 group-hover:text-white">
                Read More <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}