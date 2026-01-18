import { Phone, MessageCircle, Instagram, Star, Award, Heart } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const phoneNumber = '919427217205';
  const whatsappMessage = 'Hi! I would like to order a cake from Cakey Bakey.';
  const instagramHandle = 'cakey_bakey15';

  const handleCall = () => {
    window.location.href = `tel:+${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');
  };

  const handleInstagram = () => {
    window.open(`https://instagram.com/${instagramHandle}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/80 to-purple-900/80"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            Cakey Bakey
          </h1>
          <p className="text-2xl md:text-3xl mb-4 font-light">
            Home-Baked Fresh Cakes
          </p>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="fill-yellow-400 text-yellow-400" size={24} />
            <span className="text-xl font-semibold">5.0</span>
            <span className="text-lg">(10 reviews)</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3 text-lg mb-8">
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              100% Eggless
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              Custom Theme Cakes
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              Delivery & Pickup
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleWhatsApp}
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 transition-all hover:scale-105 shadow-lg"
            >
              <MessageCircle size={24} />
              WhatsApp Us
            </button>
            <button
              onClick={handleCall}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 transition-all hover:scale-105 shadow-lg"
            >
              <Phone size={24} />
              Call Now
            </button>
            <button
              onClick={handleInstagram}
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 transition-all hover:scale-105 shadow-lg"
            >
              <Instagram size={24} />
              Follow Us
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="text-pink-600" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Premium Quality
            </h3>
            <p className="text-gray-600">
              Fresh ingredients, hygienic preparation, and attention to detail in every cake
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-purple-600" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              100% Eggless
            </h3>
            <p className="text-gray-600">
              All our cakes are completely eggless without compromising on taste
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="text-green-600" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              Custom Designs
            </h3>
            <p className="text-gray-600">
              Personalized theme cakes for birthdays, anniversaries, and special celebrations
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="fill-yellow-400 text-yellow-400"
                    size={20}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                "Super yummy taste and wonderful designs. The cake was fresh and delicious!"
              </p>
              <p className="text-gray-500 font-semibold">- Happy Customer</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="fill-yellow-400 text-yellow-400"
                    size={20}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                "Authentic cake taste with amazing customization. Highly recommended!"
              </p>
              <p className="text-gray-500 font-semibold">- Satisfied Client</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="fill-yellow-400 text-yellow-400"
                    size={20}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-3">
                "Perfect place to order and celebrate achievements. Best home baker in Ahmedabad!"
              </p>
              <p className="text-gray-500 font-semibold">- Regular Customer</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            Ready to Order Your Dream Cake?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Explore our delicious varieties and place your order today
          </p>
          <button
            onClick={() => onNavigate('menu')}
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg"
          >
            View Our Menu
          </button>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg mb-2">Cakey Bakey - Home-Baked Fresh Cakes</p>
          <p className="text-gray-400 mb-4">
            Saumya Heights, Ghuma, Ahmedabad, Gujarat 380058
          </p>
          <p className="text-gray-400">Open Daily | Closes 10 PM</p>
          <p className="text-gray-400 mt-4">+91 9427217205</p>
        </div>
      </footer>
    </div>
  );
}
