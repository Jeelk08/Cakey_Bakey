import { Cake, ArrowRight } from 'lucide-react';
import { menuCategories } from '../data/menuData';

interface MenuPageProps {
  onCategorySelect: (categoryId: string) => void;
}

export default function MenuPage({ onCategorySelect }: MenuPageProps) {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Our Cake Menu
          </h1>
          <p className="text-xl text-gray-600">
            Explore our delicious varieties of freshly baked, 100% eggless cakes
          </p>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6 mb-12 border-l-4 border-pink-500">
          <h3 className="text-lg font-bold text-gray-800 mb-2">Important Notes:</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-pink-600 font-bold">•</span>
              <span>All cakes are 100% eggless</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-600 font-bold">•</span>
              <span>Freshly baked at home with premium ingredients</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-600 font-bold">•</span>
              <span>No artificial flavors used</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-pink-600 font-bold">•</span>
              <span>
                Order at least 24 hours in advance for customized cakes
              </span>
            </li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuCategories.map((category) => (
            <div
              key={category.id}
              onClick={() => onCategorySelect(category.id)}
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl group"
            >
              <div className="bg-gradient-to-br from-pink-400 to-purple-400 h-48 flex items-center justify-center">
                <Cake className="text-white" size={80} />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-pink-600 transition-colors">
                  {category.name}
                </h2>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center text-pink-600 font-semibold group-hover:gap-2 transition-all">
                  <span>View Menu</span>
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  {category.items.length} items available
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Ready to Place Your Order?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Contact us via WhatsApp, call, or Instagram to customize your perfect cake
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919427217205?text=Hi!%20I%20would%20like%20to%20order%20a%20cake%20from%20Cakey%20Bakey."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
            >
              Order on WhatsApp
            </a>
            <a
              href="tel:+919427217205"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
