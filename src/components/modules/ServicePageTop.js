import { ChevronRight } from "lucide-react"



export default function ServicePageTop() {
  return (
    <div className=" relative h-screen">
      <div className="absolute inset-0 w-full h-screen">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('../../images/service-bg.png')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      </div>
      {/* <div className="absolute bottom-0 left-0 w-1/3 h-1/4">
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="w-full h-full"
          fill="none"
        >
          <path d="M0 100 Q 50 50 100 100 L 0 100" fill="#3b82f6" />
        </svg>
      </div> */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-5xl font-bold text-white mb-4">Our Services</h1>
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href="#" className="text-sm font-medium text-gray-300 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="w-5 h-5 text-gray-400" />
                <span className="ml-1 text-sm font-medium text-gray-300 md:ml-2">Services</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  )
}