import React from 'react';
import { 
  Code, 
  Cloud, 
  Shield, 
  Users, 
  Bot, 
  Brain, 
  Wifi 
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Code,
      key: 'fullstack',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Cloud,
      key: 'cloud',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      key: 'cybersecurity',
      gradient: 'from-red-500 to-red-600'
    },
    {
      icon: Users,
      key: 'consulting',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Bot,
      key: 'automation',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      icon: Brain,
      key: 'ai',
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      icon: Wifi,
      key: 'iot',
      gradient: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.key}
                className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">
                  {t(`services.${service.key}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`services.${service.key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;