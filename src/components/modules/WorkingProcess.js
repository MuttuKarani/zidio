

export default function WorkingProcess() {
  const steps = [
    {
      number: '01',
      title: 'Start A Project',
      description: 'Kick off your project with a clear understanding of your goals and requirements, setting the foundation for success.',
      image: '/placeholder.svg?height=200&width=200'
    },
    {
      number: '02',
      title: 'Project Analysis',
      description: 'Conduct a thorough analysis to create a tailored strategy, ensuring all aspects align with your business objectives.',
      image: '/placeholder.svg?height=200&width=200'
    },
    {
      number: '03',
      title: 'Deliver to Success',
      description: 'Execute and deliver the project with precision, ensuring it meets your expectations and drives your success.',
      image: '/placeholder.svg?height=200&width=200'
    }
  ]

  return (
    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h4 className="text-blue-500 text-lg font-semibold mb-2">Working Process</h4>
          <h1 className="text-white text-4xl font-bold">We Follow the Easy Working Steps</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center space-y-12 md:space-y-0 md:space-x-8">
          {steps.map((step, index) => (
            <div key={step.number} className="flex flex-col items-center w-full md:w-1/3">
              <div className="relative">
                <img
                  src={step.image}
                  alt={step.title}
                  width={200}
                  height={200}
                  className="rounded-full border-4 border-blue-500"
                />
                <div className="absolute top-0 left-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center -translate-x-1/2 -translate-y-1/2">
                  <span className="text-white font-bold">{step.number}</span>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-2/3 w-1/3 h-0.5 bg-blue-500 transform -translate-y-1/2"></div>
              )}
              <h4 className="text-white text-xl font-semibold mt-6 mb-2">{step.title}</h4>
              <p className="text-gray-400 text-center max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}