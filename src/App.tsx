import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

type ViewType = 'home' | 'privacy' | 'terms';

function App() {
  const { i18n } = useTranslation();
  const [currentView, setCurrentView] = React.useState<ViewType>('home');

  React.useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const handleNavigateToPrivacy = () => setCurrentView('privacy');
  const handleNavigateToTerms = () => setCurrentView('terms');
  const handleBackToHome = () => setCurrentView('home');

  if (currentView === 'privacy') {
    return <PrivacyPolicy onBack={handleBackToHome} />;
  }

  if (currentView === 'terms') {
    return <TermsOfService onBack={handleBackToHome} />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Contact />
      <Footer onNavigateToPrivacy={handleNavigateToPrivacy} onNavigateToTerms={handleNavigateToTerms} />
    </div>
  );
}

export default App;