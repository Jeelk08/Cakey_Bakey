import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const phoneNumber = '919427217205';
  const message = 'Hi! I would like to order a cake from Cakey Bakey.';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110 z-50 flex items-center gap-2 group"
      aria-label="Order on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="hidden group-hover:inline-block text-sm font-medium pr-2 whitespace-nowrap">
        Order on WhatsApp
      </span>
    </button>
  );
}
