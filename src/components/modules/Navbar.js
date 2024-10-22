import React, { useState } from 'react'
import { Search, X } from 'lucide-react'
import ZidioLogo from '../../images/zidioLogo.png'

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full h-[15vh] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex-shrink-0 flex items-center">
            <img className="h-8 w-auto" src= {ZidioLogo} alt="ZIDIO Development" />
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <a
                key={item}
                href="#"
                className="border-transparent text-gray-500 hover:border-blue-500 hover:text-blue-500 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              onClick={toggleSearch}
              className="p-1 rounded-full text-gray-400 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Search className="h-6 w-6" />
            </button>
            <a
              href="#"
              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-white hover:text-blue-600 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Get A Quote
            </a>
          </div>
          <div className="flex items-center sm:hidden">
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isSearchOpen && (
        <div className="absolute top-full left-0 w-full bg-white z-50 p-4 shadow-md">
          <div className="max-w-7xl mx-auto flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={toggleSearch}
              className="ml-2 p-2 text-gray-400 hover:text-blue-500 focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}