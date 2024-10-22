import React from 'react';

const CounterArea = () => {
  return (
    <div className="bg-blue-900 py-16">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-center">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="text-center">
              <h4 className="text-white text-4xl font-bold">1000+</h4>
              {/* <span className="text-white text-xl">+</span> */}
              <p className="text-white mt-2">Happy Customers</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="text-center">
              <h4 className="text-white text-4xl font-bold">1200+</h4>
              {/* <span className="text-white text-xl inline">+</span> */}
              <p className="text-white mt-2">Works Completed</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="text-center">
              <h4 className="text-white text-4xl font-bold">99+</h4>
              {/* <span className="text-white text-xl">+</span> */}
              <p className="text-white mt-2">Expert Members</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="text-center">
              <h4 className="text-white text-4xl font-bold">100%</h4>
              {/* <span className="text-white text-xl">%</span> */}
              <p className="text-white mt-2">Satisfaction Rates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterArea;
