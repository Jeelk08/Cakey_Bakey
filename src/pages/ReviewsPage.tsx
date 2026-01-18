import { Star, Quote } from 'lucide-react';

export default function ReviewsPage() {
  const reviews = [
    {
      name: 'Priya Shah',
      rating: 5,
      date: 'December 2024',
      comment:
        'Super yummy taste and wonderful designs! Ordered a Black Forest cake for my daughter\'s birthday and everyone loved it. The cake was so fresh and delicious. Highly recommend Cakey Bakey!',
    },
    {
      name: 'Amit Patel',
      rating: 5,
      date: 'November 2024',
      comment:
        'Authentic cake taste with amazing customization. Got a KitKat theme cake and it was exactly what I wanted. The baker is very cooperative and delivers on time.',
    },
    {
      name: 'Neha Desai',
      rating: 5,
      date: 'November 2024',
      comment:
        'Perfect place to order and celebrate achievements! The Nutella cake was absolutely divine. Best home baker in Ahmedabad. Will definitely order again.',
    },
    {
      name: 'Raj Mehta',
      rating: 5,
      date: 'October 2024',
      comment:
        'Ordered a Biscoff cake for my wife\'s birthday and she was so happy! The taste was amazing and the presentation was beautiful. Great service!',
    },
    {
      name: 'Diya Kumar',
      rating: 5,
      date: 'October 2024',
      comment:
        'The Ras Malai cake was out of this world! Never tasted such an authentic flavor in a cake before. Loved the eggless option. Definitely ordering again.',
    },
    {
      name: 'Karan Sharma',
      rating: 5,
      date: 'September 2024',
      comment:
        'Excellent quality and taste! Ordered jar cakes for a party and everyone was asking where I got them from. Very fresh and well packaged.',
    },
    {
      name: 'Riya Gandhi',
      rating: 5,
      date: 'September 2024',
      comment:
        'Best eggless cakes in Ahmedabad! The Butterscotch cake was so soft and flavorful. Very hygienic preparation and timely delivery.',
    },
    {
      name: 'Vivek Joshi',
      rating: 5,
      date: 'August 2024',
      comment:
        'Loved the customization options! Got a photo cake with sugar print and it came out perfect. Great communication and reasonable prices.',
    },
    {
      name: 'Anjali Thakkar',
      rating: 5,
      date: 'August 2024',
      comment:
        'The cupcakes were absolutely delicious! Ordered Nutella and Biscoff cupcakes for my office party. Everyone loved them. Freshly baked and tasty.',
    },
    {
      name: 'Harsh Parikh',
      rating: 5,
      date: 'July 2024',
      comment:
        'Amazing cakes at affordable prices! The Truffle cake was rich and moist. Very responsive on WhatsApp and delivered exactly when promised. Highly satisfied!',
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Customer Reviews
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            What our happy customers say about us
          </p>

          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-5xl font-bold text-pink-600 mb-2">5.0</div>
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="fill-yellow-400 text-yellow-400"
                    size={24}
                  />
                ))}
              </div>
              <div className="text-gray-600">Average Rating</div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-2">10</div>
              <div className="text-gray-600">Total Reviews</div>
            </div>

            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow relative"
            >
              <Quote
                className="absolute top-4 right-4 text-pink-200"
                size={40}
              />

              <div className="flex mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="fill-yellow-400 text-yellow-400"
                    size={20}
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                "{review.comment}"
              </p>

              <div className="border-t pt-4">
                <p className="font-bold text-gray-800">{review.name}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl p-8 md:p-12 text-white text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to Be Our Next Happy Customer?
          </h2>
          <p className="text-xl mb-8">
            Order your delicious cake today and experience the magic yourself!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919427217205?text=Hi!%20I%20would%20like%20to%20order%20a%20cake%20from%20Cakey%20Bakey."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg"
            >
              Order on WhatsApp
            </a>
            <a
              href="tel:+919427217205"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
