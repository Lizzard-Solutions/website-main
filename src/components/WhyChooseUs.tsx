import React from 'react';
import { 
  Star, 
  MessageCircle, 
  DollarSign, 
  Zap, 
  CheckCircle, 
  Headphones 
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhyChooseUs: React.FC = () => {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: Star,
      key: 'expertise',
      color: 'text-yellow-600'
    },
    {
      icon: MessageCircle,
      key: 'personal',
      color: 'text-blue-600'
    },
    {
      icon: DollarSign,
      key: 'cost',
      color: 'text-green-600'
    },
    {
      icon: Zap,
      key: 'agile',
      color: 'text-purple-600'
    },
    {
      icon: CheckCircle,
      key: 'reliable',
      color: 'text-red-600'
    },
    {
      icon: Headphones,
      key: 'support',
      color: 'text-indigo-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            {t('whyChoose.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('whyChoose.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={reason.key}
                className="text-center group hover:bg-gray-50 p-6 rounded-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-white group-hover:shadow-lg transition-all duration-300">
                    <IconComponent className={`h-8 w-8 ${reason.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  {t(`whyChoose.${reason.key}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`whyChoose.${reason.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;