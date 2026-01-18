import { Heart, Clock, Sparkles, DollarSign } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          About Cakey Bakey
        </h1>

        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-8">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 w-20 h-20 rounded-full flex items-center justify-center">
              <Heart className="text-pink-600" size={40} />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Our Story
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Welcome to Cakey Bakey, your trusted home-based cake bakery in Ahmedabad! We
            specialize in creating freshly baked, 100% eggless cakes that bring joy to every
            celebration.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Every cake is prepared with love in our hygienic home kitchen using the finest
            ingredients. We take pride in our attention to detail and commitment to quality,
            ensuring that each cake not only looks beautiful but tastes absolutely delicious.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Whether it's a birthday, anniversary, or any special celebration, we create
            customizable theme cakes that make your moments memorable. From classic flavors to
            premium options, our diverse menu caters to every taste preference.
          </p>

          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 border-l-4 border-pink-500">
            <div className="flex items-start gap-3">
              <Clock className="text-pink-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Important: Order in Advance
                </h3>
                <p className="text-gray-700 text-lg">
                  Please place your order at least <strong>24 hours before</strong> your desired
                  delivery or pickup time to ensure we can prepare your perfect cake.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-pink-100 w-12 h-12 rounded-full flex items-center justify-center">
                <Sparkles className="text-pink-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                Customization Options
              </h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-pink-500 font-bold">•</span>
                <span>Choose from a wide variety of flavors and designs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-500 font-bold">•</span>
                <span>Personalized messages and decorations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-500 font-bold">•</span>
                <span>Custom theme cakes for any occasion</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-pink-500 font-bold">•</span>
                <span>Photo cakes with sugar prints available</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center">
                <DollarSign className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                Additional Charges
              </h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Semi-fondant theme</span>
                <span className="font-bold text-pink-600">+ ₹150</span>
              </li>
              <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Customisation charges</span>
                <span className="font-bold text-pink-600">₹50 - ₹100</span>
              </li>
              <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Sugar-print photo cake</span>
                <span className="font-bold text-pink-600">+ ₹200</span>
              </li>
            </ul>
            <p className="text-sm text-gray-500 mt-3 italic">
              *Customization charges depend on the complexity of the theme
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-8 text-white text-center shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Why Choose Cakey Bakey?</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg">Eggless</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5.0★</div>
              <div className="text-lg">Customer Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24hr</div>
              <div className="text-lg">Fresh Preparation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
