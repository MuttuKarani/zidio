import { Phone, Mail, Clock } from "lucide-react"

export default function Component() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContactBox
            icon={<Phone className="w-8 h-8 text-blue-500" />}
            title="Call us Any time"
            content="+918455807965"
          />
          <ContactBox
            icon={<Mail className="w-8 h-8 text-blue-500" />}
            title="Send E-Mail"
            content="support@zidio.in"
          />
          <ContactBox
            icon={<Clock className="w-8 h-8 text-blue-500" />}
            title="Opening Hours"
            content="Mon - Fri (9.00 - 5.30)"
          />
        </div>
      </div>
    </div>
  )
}

function ContactBox({ icon, title, content }) {
  return (
    <div className="bg-white border border-blue-200 rounded-lg p-6 transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 group">
      <div className="flex items-center mb-4">
        <div className="mr-4 transition-colors duration-300 group-hover:text-white">{icon}</div>
        <div>
          <h4 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover:text-white">{title}</h4>
          <p className="text-blue-500 font-medium transition-colors duration-300 group-hover:text-white">{content}</p>
        </div>
      </div>
    </div>
  )
}