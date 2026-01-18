import { Phone, MessageCircle, Instagram, MapPin, Clock, Mail } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600">
            We'd love to hear from you! Reach out to place your order
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Contact Information
            </h2>

            <div className="space-y-6">
              <a
                href="tel:+919427217205"
                className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors group cursor-pointer"
              >
                <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                  <p className="text-blue-600 text-lg font-semibold">
                    +91 9427217205
                  </p>
                  <p className="text-sm text-gray-600">Tap to call</p>
                </div>
              </a>

              <a
                href="https://wa.me/919427217205?text=Hi!%20I%20would%20like%20to%20order%20a%20cake%20from%20Cakey%20Bakey."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors group cursor-pointer"
              >
                <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">WhatsApp</h3>
                  <p className="text-green-600 text-lg font-semibold">
                    +91 9427217205
                  </p>
                  <p className="text-sm text-gray-600">Chat with us instantly</p>
                </div>
              </a>

              <a
                href="https://instagram.com/_cakey_bakey15_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors group cursor-pointer"
              >
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Instagram className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Instagram</h3>
                  <p className="text-pink-600 text-lg font-semibold">
                    @_cakey_bakey15_
                  </p>
                  <p className="text-sm text-gray-600">Follow us for updates</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="bg-gray-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Address</h3>
                  <p className="text-gray-700">
                    Saumya Heights, Ghuma
                    <br />
                    Ahmedabad, Gujarat 380058
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Plus Code: 2CMR+F3 Ahmedabad
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-xl">
                <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">Open Hours</h3>
                  <p className="text-gray-700 font-semibold">Open Daily</p>
                  <p className="text-gray-600">Closes at 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Order Instructions
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">
                    Choose Your Cake
                  </h3>
                  <p className="text-gray-600">
                    Browse our menu and select your preferred flavor and size
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">
                    Contact Us
                  </h3>
                  <p className="text-gray-600">
                    Reach out via WhatsApp, call, or Instagram with your requirements
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">
                    Customize Your Order
                  </h3>
                  <p className="text-gray-600">
                    Share your theme, design preferences, and special messages
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-pink-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-1">
                    Schedule Delivery
                  </h3>
                  <p className="text-gray-600">
                    Confirm your delivery or pickup time (minimum 24 hours advance notice)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6 border-l-4 border-pink-500">
              <div className="flex items-start gap-3">
                <Clock className="text-pink-600 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    Important Reminder
                  </h3>
                  <p className="text-gray-700 text-lg">
                    Please book your order at least{' '}
                    <strong>24 hours before</strong> your desired delivery or
                    pickup time to ensure we can prepare your perfect cake with care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-6 text-white">
            <h2 className="text-3xl font-bold mb-2">Find Us on Google Maps</h2>
            <p className="text-lg">
              Saumya Heights, Ghuma, Ahmedabad, Gujarat 380058
            </p>
          </div>
          <div className="aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.234567890123!2d72.440123!3d23.041234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzI4LjQiTiA3MsKwMjYnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cakey Bakey Location"
            ></iframe>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-8 text-white text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Order Your Dream Cake?
          </h2>
          <p className="text-xl mb-8">Contact us now and let's make your celebration special!</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919427217205?text=Hi!%20I%20would%20like%20to%20order%20a%20cake%20from%20Cakey%20Bakey."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <MessageCircle size={24} />
              WhatsApp Now
            </a>
            <a
              href="tel:+919427217205"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg flex items-center gap-2"
            >
              <Phone size={24} />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
