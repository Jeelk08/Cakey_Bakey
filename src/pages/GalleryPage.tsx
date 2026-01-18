import { Camera } from 'lucide-react';

export default function GalleryPage() {
  const placeholderImages = [
    {
      url: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Chocolate Birthday Cake',
    },
    {
      url: 'https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Strawberry Delight',
    },
    {
      url: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Vanilla Celebration Cake',
    },
    {
      url: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Cupcake Collection',
    },
    {
      url: 'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Chocolate Truffle',
    },
    {
      url: 'https://images.pexels.com/photos/827513/pexels-photo-827513.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Wedding Cake',
    },
    {
      url: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Fruit Cake',
    },
    {
      url: 'https://images.pexels.com/photos/1998634/pexels-photo-1998634.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Blueberry Cake',
    },
    {
      url: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Red Velvet',
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-600">
            Explore our beautiful cake creations
          </p>
        </div>

        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6 mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Camera className="text-pink-600" size={28} />
            <h3 className="text-xl font-bold text-gray-800">
              Placeholder Images
            </h3>
          </div>
          <p className="text-gray-700">
            These are sample images to showcase our gallery layout. Replace these with
            your actual cake photos to display your real creations!
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Simply update the image URLs in the code to add your own photos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="aspect-square overflow-hidden bg-gray-200">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                <div className="p-6 text-white w-full">
                  <h3 className="text-xl font-bold mb-1">{image.title}</h3>
                  <p className="text-sm text-gray-200">
                    Click to view full image
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Want a Custom Cake Like These?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            All our cakes can be customized with your preferred flavors, designs, and themes
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919427217205?text=Hi!%20I%20saw%20your%20gallery%20and%20would%20like%20to%20order%20a%20custom%20cake."
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
              Call Now
            </a>
            <a
              href="https://instagram.com/cakey_bakey15"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
