import { ArrowLeft, ShoppingCart } from "lucide-react";
import { menuCategories } from "../data/menuData";

interface CategoryPageProps {
  category: string;
  onBack: () => void;
}

export default function CategoryPage({ category, onBack }: CategoryPageProps) {

  const categoryData = menuCategories.find(cat => cat.id === category);
  if (!categoryData) return <div className="min-h-screen flex items-center justify-center">Category not found</div>;

  const handleOrder = (itemName: string) => {
    const url = `https://wa.me/919427217205?text=${encodeURIComponent(`Hi! I would like to order ${itemName} from Cakey Bakey.`)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <button onClick={onBack} className="flex items-center gap-2 text-pink-600 font-semibold mb-6">
          <ArrowLeft size={20} /> Back to Menu
        </button>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            {categoryData.name}
          </h1>
          <p className="text-gray-600 mt-2">{categoryData.description}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryData.items.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden group">
              <div className="aspect-square bg-white">
                {item.image ? (
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
                ) : (
                  <div className="flex items-center justify-center h-full bg-gradient-to-br from-pink-300 to-purple-300 text-6xl">🎂</div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">{item.name}</h3>

                <div className="mt-3 space-y-1">
                  {item.price500gm && <div className="flex justify-between"><span>500gm</span><span className="text-pink-600 font-bold">{item.price500gm}</span></div>}
                  {item.price1kg && <div className="flex justify-between"><span>1kg</span><span className="text-pink-600 font-bold">{item.price1kg}</span></div>}
                  {item.pricePerPiece && <div className="flex justify-between"><span>Per Piece</span><span className="text-pink-600 font-bold">{item.pricePerPiece}</span></div>}
                </div>

                <button
                  onClick={() => handleOrder(item.name)}
                  className="mt-4 w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:scale-105 transition"
                >
                  <ShoppingCart size={20} /> Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
