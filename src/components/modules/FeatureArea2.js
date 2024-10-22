import React from 'react';
import { Globe, ShoppingBag, Database, Users } from 'lucide-react';

const FeatureArea2 = () => {
  const features = [
    {
      title: 'Business Growth',
      description: 'Boost your business with strategies to reach new markets, optimize operations, and increase profits.',
      icon: <Globe className="mx-auto w-12 h-12 transition-colors duration-300 text-blue-600 group-hover:text-white" />, // Icon for Business Growth
    },
    {
      title: 'eCommerce',
      description: 'Enhance your online presence with user-friendly eCommerce solutions and secure payment gateways.',
      icon: <ShoppingBag className="mx-auto w-12 h-12 transition-colors duration-300 text-blue-600 group-hover:text-white" />, // Icon for eCommerce
    },
    {
      title: 'Secure Database',
      description: 'Safeguard your data with robust security measures and industry-standard compliance.',
      icon: <Database className="mx-auto w-12 h-12 transition-colors duration-300 text-blue-600 group-hover:text-white" />, // Icon for Secure Database
    },
    {
      title: 'Audience Growth',
      description: 'Expand your reach by connecting with your target audience to drive visibility and growth.',
      icon: <Users className="mx-auto w-12 h-12 transition-colors duration-300 text-blue-600 group-hover:text-white" />, // Icon for Audience Growth
    }
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center">
          {features.map((feature, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-4">
              <div className="bg-white text-center p-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out group">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-white">{feature.title}</h4>
                <p className="text-gray-600 group-hover:text-white">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureArea2;
