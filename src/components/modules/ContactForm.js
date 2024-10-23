import { Phone, Mail, Clock } from "lucide-react"

export default function ContactForm() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/3 p-8">
              <h2 className="text-3xl font-bold mb-6">Write to Us Anytime</h2>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Enter E-Mail"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Subject</option>
                    <option value="web">Web Development</option>
                    <option value="app">App Development</option>
                    <option value="uiux">UIUX</option>
                    <option value="data">Data Science</option>
                  </select>
                </div>
                <textarea
                  placeholder="Write Message"
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 border border-blue-600"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="lg:w-1/3 bg-blue-600 p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Don't Forget to Contact Us</h3>
              <div className="space-y-6">
                <ContactInfo icon={Phone} title="Call Us" content="+918455807965" />
                <ContactInfo icon={Mail} title="Send E-Mail" content="support@zidio.in" />
                <ContactInfo icon={Clock} title="Office Hours" content="9.00 AM to 5.00 PM" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ContactInfo({ icon: Icon, title, content }) {
  return (
    <div className="flex items-center">
      <div className="bg-blue-500 p-3 rounded-full mr-4">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-blue-200">{title}</p>
        <p className="font-semibold">{content}</p>
      </div>
    </div>
  )
}