import React, {useEffect} from 'react';
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
import { initializeClarity, trackPageView, setCustomTag } from './utils/clarity';


type ViewType = 'home' | 'privacy' | 'terms';

function App() {
  const { i18n } = useTranslation();
  const [currentView, setCurrentView] = React.useState<ViewType>('home');

  useEffect(() => {
    const clarityProjectId = import.meta.env.VITE_CLARITY_PROJECT_ID ||  "t9wqky2pnf"
    
    if (clarityProjectId) {
      try {
        initializeClarity(clarityProjectId);
        console.log('Clarity initialized successfully');
      } catch (error) {
        console.error('Failed to initialize Clarity:', error);
      }
    } else {
      console.warn('Clarity Project ID not found. Please add VITE_CLARITY_PROJECT_ID to your .env file');
    }
  }, []);
  // Track language changes
  React.useEffect(() => {
    document.documentElement.lang = i18n.language;
    
    // Track language preference in Clarity
    if (i18n.language) {
      setCustomTag('language', i18n.language);
      trackPageView(`${currentView}_${i18n.language}`);
    }
  }, [i18n.language, currentView]);

  // Track view changes
  React.useEffect(() => {
    // Track page views when the current view changes
    trackPageView(currentView);
    
    // Set custom tags for better segmentation
    setCustomTag('current_page', currentView);
    
    // Update page title for better tracking
    const titles = {
      home: 'Lizzard Solutions - IT Consultancy',
      privacy: 'Privacy Policy - Lizzard Solutions',
      terms: 'Terms of Service - Lizzard Solutions'
    };
    
    document.title = titles[currentView] || titles.home;
  }, [currentView]);

  const handleNavigateToPrivacy = () => {
    setCurrentView('privacy');
    // Track navigation to privacy policy
    trackPageView('privacy_policy_navigation');
  };

  const handleNavigateToTerms = () => {
    setCurrentView('terms');
    // Track navigation to terms of service
    trackPageView('terms_of_service_navigation');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    // Track navigation back to home
    trackPageView('back_to_home');
  };

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
      <Footer 
        onNavigateToPrivacy={handleNavigateToPrivacy} 
        onNavigateToTerms={handleNavigateToTerms} 
      />
    </div>
  );
}

export default App;