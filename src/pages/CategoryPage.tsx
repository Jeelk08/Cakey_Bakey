import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { menuCategories } from '../data/menuData';
import { useState } from 'react';

interface CategoryPageProps {
  category: string;
  onBack: () => void;
}

export default function CategoryPage({ category, onBack }: CategoryPageProps) {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const categoryData = menuCategories.find((cat) => cat.id === category);

  if (!categoryData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Category not found</p>
      </div>
    );
  }

  const handleOrder = (itemName: string) => {
    const message = `Hi! I would like to order ${itemName} from Cakey Bakey.`;
    const url = `https://wa.me/919427217205?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-pink-600 hover:text-pink-700 font-semibold mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Menu
        </button>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            {categoryData.name}
          </h1>
          <p className="text-xl text-gray-600">{categoryData.description}</p>
        </div>

        {categoryData.id === 'cupcakes' && (
          <div className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-4 mb-8">
            <p className="text-yellow-800 font-semibold">
              Minimum order: 4 pieces
            </p>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryData.items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group cursor-pointer"
              onClick={() =>
                setSelectedItem(selectedItem === item.name ? null : item.name)
              }
            >
              <div className="bg-gradient-to-br from-pink-300 to-purple-300 h-48 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">🎂</div>
                  <div className="text-white font-semibold text-lg px-4">
                    {item.name}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {item.name}
                </h3>

                <div className="mb-4">
                  {item.price500gm && (
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-600">500gm</span>
                      <span className="text-pink-600 font-bold text-lg">
                        {item.price500gm}
                      </span>
                    </div>
                  )}
                  {item.price1kg && (
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-600">1kg</span>
                      <span className="text-pink-600 font-bold text-lg">
                        {item.price1kg}
                      </span>
                    </div>
                  )}
                  {item.pricePerTub && (
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-600">Per Tub</span>
                      <span className="text-pink-600 font-bold text-lg">
                        {item.pricePerTub}
                      </span>
                    </div>
                  )}
                  {item.pricePerPiece && (
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-600">Per Piece</span>
                      <span className="text-pink-600 font-bold text-lg">
                        {item.pricePerPiece}
                      </span>
                    </div>
                  )}
                </div>

                {selectedItem === item.name && (
                  <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        Description:
                      </h4>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                    {item.ingredients && (
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">
                          Ingredients:
                        </h4>
                        <p className="text-gray-600 text-sm">{item.ingredients}</p>
                      </div>
                    )}
                  </div>
                )}

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleOrder(item.name);
                  }}
                  className="w-full mt-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  <ShoppingCart size={20} />
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            Need a Custom Design?
          </h3>
          <p className="text-gray-600 mb-6">
            We can customize any cake with your preferred theme, design, and message.
            Contact us to discuss your requirements!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919427217205?text=Hi!%20I%20need%20a%20custom%20cake%20design."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
            >
              WhatsApp Us
            </a>
            <a
              href="tel:+919427217205"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
