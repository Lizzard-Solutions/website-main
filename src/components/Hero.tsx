import React from 'react';
import { ArrowRight, Award, Users, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-black leading-tight">
                {t('hero.title')}
                <span className="block text-gray-600 text-3xl lg:text-5xl mt-2">
                  {t('hero.subtitle')}
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                {t('hero.description')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-2 font-semibold text-lg group"
              >
                <span>{t('hero.cta')}</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-black" />
                </div>
                <div className="text-2xl font-bold text-black">15+</div>
                <div className="text-sm text-gray-600">{t('hero.experience')}</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-black" />
                </div>
                <div className="text-2xl font-bold text-black">100+</div>
                <div className="text-sm text-gray-600">{t('hero.clients')}</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Zap className="h-8 w-8 text-black" />
                </div>
                <div className="text-2xl font-bold text-black">24/7</div>
                <div className="text-sm text-gray-600">{t('hero.solutions')}</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <img 
                src="/Lizzard Solutions-06.png" 
                alt="Lizzard Solutions Logo" 
                className="w-32 h-32 mx-auto mb-6"
              />
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-black">Lizzard Solutions</h3>
                <p className="text-gray-600">Professional IT Consultancy</p>
                <div className="flex justify-center space-x-4 text-sm text-gray-500">
                  <span>• Full Stack Development</span>
                  <span>• Cloud Solutions</span>
                  <span>• AI Integration</span>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-gray-600/5 rounded-2xl transform rotate-3"></div>
            <div className="absolute inset-0 bg-gradient-to-l from-black/5 to-gray-600/5 rounded-2xl transform -rotate-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;