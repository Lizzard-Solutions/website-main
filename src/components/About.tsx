import React from 'react';
import { Award, Target, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
                {t('about.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                {t('about.subtitle')}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {t('about.description')}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">15+</div>
                <div className="text-sm text-gray-600">{t('about.experience')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">100%</div>
                <div className="text-sm text-gray-600">{t('about.focus')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">1:1</div>
                <div className="text-sm text-gray-600">{t('about.approach')}</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Proven Expertise</h4>
                    <p className="text-gray-600 text-sm">15+ years of delivering successful IT solutions across various industries and technologies.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Startup Focused</h4>
                    <p className="text-gray-600 text-sm">Specialized understanding of startup needs, constraints, and growth requirements.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-2">Personal Touch</h4>
                    <p className="text-gray-600 text-sm">Direct communication and personalized solutions tailored to your specific business needs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;