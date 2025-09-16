// src/hooks/useAnalytics.ts
import { useCallback } from 'react';
import { 
  trackPageView,
  trackFormSubmission,
  trackButtonClick,
  trackServiceInterest,
  trackContactAttempt,
  trackLanguageChange,
  trackQuoteRequest,
  trackProjectInquiry
} from '../utils/combinedAnalytics';

export const useAnalytics = () => {
  const trackPage = useCallback((pageName: string, pageUrl?: string) => {
    trackPageView(pageName, pageUrl);
  }, []);

  const trackForm = useCallback((formName: string, success: boolean = true) => {
    trackFormSubmission(formName, success);
  }, []);

  const trackButton = useCallback((buttonName: string, buttonLocation?: string) => {
    trackButtonClick(buttonName, buttonLocation);
  }, []);

  const trackService = useCallback((serviceName: string) => {
    trackServiceInterest(serviceName);
  }, []);

  const trackContact = useCallback((method: 'email' | 'phone' | 'form') => {
    trackContactAttempt(method);
  }, []);

  const trackLanguage = useCallback((fromLanguage: string, toLanguage: string) => {
    trackLanguageChange(fromLanguage, toLanguage);
  }, []);

  const trackQuote = useCallback((serviceType: string, estimatedValue?: number) => {
    trackQuoteRequest(serviceType, estimatedValue);
  }, []);

  const trackProject = useCallback((projectType: string, urgency?: 'low' | 'medium' | 'high') => {
    trackProjectInquiry(projectType, urgency);
  }, []);

  // Lizzard Solutions specific tracking
  const trackServicePageView = useCallback((serviceName: string) => {
    trackPage(`service_${serviceName.toLowerCase().replace(/\s+/g, '_')}`);
    trackService(serviceName);
  }, [trackPage, trackService]);

  const trackCTAClick = useCallback((ctaType: 'primary' | 'secondary', location: string) => {
    trackButton(`cta_${ctaType}`, location);
  }, [trackButton]);

  const trackNewsletterSignup = useCallback((success: boolean) => {
    trackForm('newsletter_signup', success);
  }, [trackForm]);

  return {
    trackPage,
    trackForm,
    trackButton,
    trackService,
    trackContact,
    trackLanguage,
    trackQuote,
    trackProject,
    trackServicePageView,
    trackCTAClick,
    trackNewsletterSignup
  };
};