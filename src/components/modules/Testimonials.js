import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

import andyImg from '../../images/Andy.jpg'
import davidImg from '../../images/David.jpg'
import ranjanImg from '../../images/Ranjan.jpeg'
import surajImg from '../../images/Suraj.jpg'

const testimonials = [
  {
    id: 1,
    name: 'Mr. Ranjan Kumar Senapati',
    image: ranjanImg,
    text: "Zidio exceeded our expectations. Their team was professional, responsive, and delivered a high-quality solution that perfectly aligned with our needs. We couldn't be happier with the results.",
  },
  {
    id: 2,
    name: 'Mr. Suraj Adhikari',
    image: surajImg,
    text: "Working with Zidio was a game-changer for our project. Their expertise and dedication ensured we got exactly what we needed.",
  },
  {
    id: 3,
    name: 'David',
    image: davidImg,
    text: "I was impressed by Zidio's attention to detail and their ability to translate our vision into reality. Highly recommended!",
  },
  {
    id: 4,
    name: 'Andy Tessa',
    image: andyImg,
    text: "Zidio's services were top-notch. They were always available to answer questions and provided innovative solutions to our challenges.",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="bg-gray-50  px-4 sm:px-6 lg:px-8 w-full h-[80vh] flex justify-center items-center">
      <div className="">
        <h2 className="text-center text-blue-600 text-sm font-semibold tracking-wide uppercase mb-2">Testimonial</h2>
        <h3 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl mb-12">
          Customer's Awesome Feedback About Our Services
        </h3>
        <div className="relative px-12">
          <div className="flex justify-center space-x-4 mb-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`relative rounded-full overflow-hidden w-20 h-20 ${
                  index === currentIndex ? 'ring-4 ring-blue-500 ring-offset-4' : ''
                }`}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="text-center mb-6">
            <p className="text-lg text-gray-700">{testimonials[currentIndex].text}</p>
          </div>
          <div className="flex flex-col items-center mb-8">
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <div className="w-12 h-1 bg-blue-500 mb-2"></div>
            <p className="text-lg font-semibold text-gray-900">{testimonials[currentIndex].name}</p>
          </div>
          <button
            onClick={prevTestimonial}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  )
}