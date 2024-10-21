import React from 'react'
import { Share2 } from 'lucide-react'

const teamMembers = [
  {
    name: 'Animesh Singh',
    role: 'Full Stack Web Developer',
    image: '/placeholder.svg?height=400&width=300'
  },
  {
    name: 'Salma Husna Salsabila',
    role: 'UI/UX Designer',
    image: '/placeholder.svg?height=400&width=300'
  },
  {
    name: 'Chandan Mishra',
    role: 'Data Scientist',
    image: '/placeholder.svg?height=400&width=300'
  },
  {
    name: 'Harsa Dash',
    role: 'Developer Team Lead',
    image: '/placeholder.svg?height=400&width=300'
  }
]

export default function DedicatedTeam() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h4 className="text-blue-600 font-semibold mb-2">Dedicated Team</h4>
          <h2 className="text-3xl font-bold mb-2">Meet Our Dedicated Member</h2>
          <h2 className="text-3xl font-bold">For Any Enquery</h2>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
          ALL MEMBER
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
            <div className="border-t border-gray-200 p-4">
              <button className="text-blue-600 hover:text-blue-800">
                <Share2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}