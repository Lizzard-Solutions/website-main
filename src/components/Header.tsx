import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      setIsProductsOpen(false);
    };

    if (isProductsOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isProductsOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'sr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img 
              src="/Lizzard Solutions-06.png" 
              alt="Lizzard Solutions" 
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-black">Lizzard Solutions</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-black transition-colors font-medium"
            >
              {t('nav.home')}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-black transition-colors font-medium"
            >
              {t('nav.services')}
            </button>
            
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsProductsOpen(!isProductsOpen);
                }}
                className="flex items-center space-x-1 text-gray-700 hover:text-black transition-colors font-medium"
              >
                <span>{t('nav.products')}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
                  <div className="py-2">
                    <button
                      onClick={() => {
                        window.open('https://konverter.lizzardsolutions.com', '_blank');
                        setIsProductsOpen(false);
                      }}
                      className="flex items-center space-x-3 w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors"
                    >
                      <i className="fas fa-exchange-alt text-blue-600"></i>
                      <span>{t('products.konverter')}</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-black transition-colors font-medium"
            >
              {t('nav.about')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              {t('nav.contact')}
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700 hover:text-black transition-colors"
              title="Switch Language"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">{i18n.language.toUpperCase()}</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700 hover:text-black transition-colors p-2"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">{i18n.language.toUpperCase()}</span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-black transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-black transition-colors font-medium"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-black transition-colors font-medium"
              >
                {t('nav.services')}
              </button>
              
              {/* Products Section for Mobile */}
              <div className="px-3 py-2">
                <div className="text-gray-700 font-medium mb-2">{t('nav.products')}</div>
                <button
                  onClick={() => {
                    window.open('https://konverter.lizzardsolutions.com', '_blank');
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-3 w-full text-left px-4 py-2 text-gray-600 hover:text-black transition-colors bg-gray-50 rounded-lg"
                >
                  <i className="fas fa-exchange-alt text-blue-600"></i>
                  <span>{t('products.konverter')}</span>
                </button>
              </div>
              
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-black transition-colors font-medium"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium mt-2"
              >
                {t('nav.contact')}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;