// src/utils/combinedAnalytics.ts
import { 
    initializeClarity, 
    trackPageView as clarityTrackPageView, 
    trackFormSubmission as clarityTrackFormSubmission,
    trackButtonClick as clarityTrackButtonClick,
    trackServiceInterest as clarityTrackServiceInterest,
    trackContactMethod as clarityTrackContactMethod,
    setCustomTag as claritySetCustomTag
  } from './clarity';
  import { 
    initializeGoogleAnalytics, 
    trackGAEvent, 
    trackGAPageView 
  } from './analytics';
  
  // Combined initialization
  export const initializeAllAnalytics = () => {
    const clarityProjectId = import.meta.env.VITE_CLARITY_PROJECT_ID || "t9wqky2pnf";
    const gaTrackingId = import.meta.env.VITE_GA_TRACKING_ID || 'G-L5RWENJEFW';
  
    // Initialize Clarity
    if (clarityProjectId) {
      initializeClarity(clarityProjectId);
    } else {
      console.warn('Clarity Project ID not found. Add VITE_CLARITY_PROJECT_ID to your .env file');
    }
  
    // Initialize Google Analytics
    if (gaTrackingId) {
      initializeGoogleAnalytics(gaTrackingId);
    } else {
      console.warn('GA Tracking ID not found. Add VITE_GA_TRACKING_ID to your .env file');
    }
  };
  
  // Combined tracking functions
  export const trackPageView = (pageName: string, pageUrl?: string) => {
    // Track in both Clarity and GA
    clarityTrackPageView(pageName);
    trackGAPageView(pageName, pageUrl);
  };
  
  export const trackFormSubmission = (formName: string, success: boolean = true) => {
    // Track in Clarity
    clarityTrackFormSubmission(formName);
    
    // Track in Google Analytics
    trackGAEvent('form_submit', {
      form_name: formName,
      success: success,
      engagement_time_msec: 1000
    });
  };
  
  export const trackButtonClick = (buttonName: string, buttonLocation?: string) => {
    // Track in Clarity
    clarityTrackButtonClick(buttonName);
    
    // Track in Google Analytics
    trackGAEvent('button_click', {
      button_name: buttonName,
      button_location: buttonLocation || 'unknown',
      engagement_time_msec: 100
    });
  };
  
  export const trackServiceInterest = (serviceName: string) => {
    // Track in Clarity
    clarityTrackServiceInterest(serviceName);
    
    // Track in Google Analytics
    trackGAEvent('service_interest', {
      service_name: serviceName,
      event_category: 'engagement',
      event_label: serviceName
    });
  };
  
  export const trackContactAttempt = (method: 'email' | 'phone' | 'form') => {
    // Track in Clarity
    clarityTrackContactMethod(method);
    
    // Track in Google Analytics
    trackGAEvent('contact_attempt', {
      contact_method: method,
      event_category: 'lead_generation',
      event_label: method
    });
  };
  
  export const trackLanguageChange = (fromLanguage: string, toLanguage: string) => {
    // Track in Clarity
    claritySetCustomTag('language_preference', toLanguage);
    
    // Track in Google Analytics
    trackGAEvent('language_change', {
      previous_language: fromLanguage,
      new_language: toLanguage,
      event_category: 'user_preference'
    });
  };
  
  // Business-specific tracking for Lizzard Solutions
  export const trackQuoteRequest = (serviceType: string, estimatedValue?: number) => {
    trackGAEvent('quote_request', {
      service_type: serviceType,
      estimated_value: estimatedValue,
      event_category: 'lead_generation',
      event_label: serviceType
    });
    
    claritySetCustomTag('quote_interest', serviceType);
    if (estimatedValue) {
      claritySetCustomTag('estimated_project_value', estimatedValue.toString());
    }
  };
  
  export const trackProjectInquiry = (projectType: string, urgency?: 'low' | 'medium' | 'high') => {
    trackGAEvent('project_inquiry', {
      project_type: projectType,
      urgency: urgency || 'medium',
      event_category: 'business_inquiry',
      event_label: projectType
    });
    
    claritySetCustomTag('project_type_interest', projectType);
    if (urgency) {
      claritySetCustomTag('project_urgency', urgency);
    }
  };