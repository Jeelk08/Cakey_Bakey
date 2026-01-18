import { useState } from 'react';
import Navigation from './components/Navigation';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import CategoryPage from './pages/CategoryPage';
import ReviewsPage from './pages/ReviewsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'menu':
        return <MenuPage onCategorySelect={(category) => {
          setSelectedCategory(category);
          setCurrentPage('category');
        }} />;
      case 'category':
        return <CategoryPage category={selectedCategory} onBack={() => setCurrentPage('menu')} />;
      case 'reviews':
        return <ReviewsPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
