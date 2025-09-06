import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft } from 'lucide-react';

interface TermsOfServiceProps {
  onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>{t('legal.backToHome')}</span>
        </button>

        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-black mb-8">{t('legal.termsOfService.title')}</h1>
          <p className="text-gray-600 mb-8">{t('legal.termsOfService.lastUpdated')}: {t('legal.termsOfService.date')}</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">{t('legal.termsOfService.section1.title')}</h2>
              <p className="text-gray-700 leading-relaxed">{t('legal.termsOfService.section1.content')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">{t('legal.termsOfService.section2.title')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('legal.termsOfService.section2.content')}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>{t('legal.termsOfService.section2.item1')}</li>
                <li>{t('legal.termsOfService.section2.item2')}</li>
                <li>{t('legal.termsOfService.section2.item3')}</li>
                <li>{t('legal.termsOfService.section2.item4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">{t('legal.termsOfService.section3.title')}</h2>
              <p className="text-gray-700 leading-relaxed">{t('legal.termsOfService.section3.content')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">{t('legal.termsOfService.section4.title')}</h2>
              <p className="text-gray-700 leading-relaxed">{t('legal.termsOfService.section4.content')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">{t('legal.termsOfService.section5.title')}</h2>
              <p className="text-gray-700 leading-relaxed">{t('legal.termsOfService.section5.content')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">{t('legal.termsOfService.section6.title')}</h2>
              <p className="text-gray-700 leading-relaxed">{t('legal.termsOfService.section6.content')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">{t('legal.termsOfService.section7.title')}</h2>
              <p className="text-gray-700 leading-relaxed">{t('legal.termsOfService.section7.content')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">{t('legal.termsOfService.section8.title')}</h2>
              <p className="text-gray-700 leading-relaxed">{t('legal.termsOfService.section8.content')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">{t('legal.termsOfService.section9.title')}</h2>
              <p className="text-gray-700 leading-relaxed">{t('legal.termsOfService.section9.content')}</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">{t('legal.termsOfService.section10.title')}</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{t('legal.termsOfService.section10.content')}</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> nemanja@lizzardsolutions.com<br />
                  <strong>{t('legal.termsOfService.section10.phone')}:</strong> +381 (0)69 677304<br />
                  <strong>{t('legal.termsOfService.section10.address')}:</strong> 7. Juli 36/14, Bor, Serbia
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
