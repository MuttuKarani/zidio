import { Cloud, Settings, RefreshCw, Brain, Megaphone, Globe, Shield, BarChart2, ArrowRight } from 'lucide-react'

const services = [
  { 
    icon: Cloud, 
    title: 'Cloud Services', 
    description: "Deliver scalable cloud solutions to enhance your business's flexibility and operational efficiency." 
  },
  { 
    icon: Settings, 
    title: 'IT Management', 
    description: 'Provide comprehensive IT infrastructure management to ensure smooth and uninterrupted business operations.' 
  },
  { 
    icon: RefreshCw, 
    title: 'Software Renew', 
    description: 'Manage and streamline software renewals, ensuring your systems are always up-to-date and secure.' 
  },
  { 
    icon: Brain, 
    title: 'Machine Learning', 
    description: 'Develop and implement machine learning models to automate processes and drive intelligent decision-making.' 
  },
  { 
    icon: Megaphone, 
    title: 'Digital Marketing', 
    description: 'Boost your online presence with tailored digital marketing strategies that drive engagement and growth.' 
  },
  { 
    icon: Globe, 
    title: 'Web Development', 
    description: 'Design and build responsive, high-performance websites using the latest web technologies.' 
  },
  { 
    icon: Shield, 
    title: 'Cyber Security', 
    description: 'Safeguard your digital assets with robust cybersecurity solutions tailored to protect against emerging threats.' 
  },
  { 
    icon: BarChart2, 
    title: 'Data Analytic', 
    description: 'Transform raw data into valuable insights, enabling informed and strategic business decisions.' 
  },
]

export default function ServicesAll() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h4 className="text-blue-600 font-semibold mb-2">What We Provides?</h4>
          <h2 className="text-3xl font-bold mb-2">Provide Interactive IT Solution &</h2>
          <h2 className="text-3xl font-bold">Business Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4 relative w-16 h-16">
        <div className="absolute inset-0 bg-blue-100 rounded-full transition-all duration-300 group-hover:scale-110"></div>
        <Icon className="w-16 h-16 text-blue-600 relative z-10 p-3" />
      </div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center justify-center transition-colors duration-300 hover:bg-white hover:text-blue-600 group">
        <span>Learn More</span>
        <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  )
}