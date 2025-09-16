// src/utils/clarity.ts
import Clarity from '@microsoft/clarity';

let isInitialized = false;

export const initializeClarity = (projectId: string) => {
  try {
    if (isInitialized) {
      console.warn('Clarity is already initialized');
      return;
    }

    if (!projectId || typeof projectId !== 'string') {
      throw new Error('Invalid project ID provided to Clarity');
    }

    // Initialize Clarity with your project ID
    Clarity.init(projectId);
    isInitialized = true;
    
    console.log('Microsoft Clarity initialized with project ID:', projectId);
    
    // Set initial tags
    setCustomTag('app_version', '1.0.0');
    setCustomTag('framework', 'vite');
    setCustomTag('company', 'Lizzard Solutions');
    
  } catch (error) {
    console.error('Failed to initialize Clarity:', error);
  }
};

export const identifyUser = (userId: string, sessionId?: string, pageUrl?: string, customTags?: string) => {
  try {
    if (!isInitialized) {
      console.warn('Clarity is not initialized. Call initializeClarity first.');
      return;
    }
    // Identify user for better tracking
    Clarity.identify(userId, sessionId, pageUrl, customTags);
  } catch (error) {
    console.error('Clarity identifyUser error:', error);
  }
};

export const setCustomTag = (key: string, value: string) => {
  try {
    if (!isInitialized) {
      console.warn('Clarity is not initialized. Call initializeClarity first.');
      return;
    }
    // Set custom tags for analytics
    Clarity.setTag(key, value);
  } catch (error) {
    console.error('Clarity setCustomTag error:', error);
  }
};

export const triggerCustomEvent = (eventName: string) => {
  try {
    if (!isInitialized) {
      console.warn('Clarity is not initialized. Call initializeClarity first.');
      return;
    }
    // Trigger custom events
    Clarity.event(eventName);
  } catch (error) {
    console.error('Clarity triggerCustomEvent error:', error);
  }
};

// Optional: Helper functions for common use cases
export const trackPageView = (pageName: string) => {
  if (!pageName) return;
  
  const sanitizedPageName = pageName.toLowerCase().replace(/\s+/g, '_');
  setCustomTag('current_page', pageName);
  setCustomTag('page_timestamp', new Date().toISOString());
  triggerCustomEvent(`page_view_${sanitizedPageName}`);
};

export const trackFormSubmission = (formName: string) => {
  if (!formName) return;
  
  const sanitizedFormName = formName.toLowerCase().replace(/\s+/g, '_');
  triggerCustomEvent(`form_submission_${sanitizedFormName}`);
  setCustomTag('last_form_interaction', formName);
};

export const trackButtonClick = (buttonName: string) => {
  if (!buttonName) return;
  
  const sanitizedButtonName = buttonName.toLowerCase().replace(/\s+/g, '_');
  triggerCustomEvent(`button_click_${sanitizedButtonName}`);
};

// Lizzard Solutions specific tracking functions
export const trackServiceInterest = (serviceName: string) => {
  if (!serviceName) return;
  
  const sanitizedServiceName = serviceName.toLowerCase().replace(/\s+/g, '_');
  setCustomTag('service_interest', serviceName);
  triggerCustomEvent(`service_interest_${sanitizedServiceName}`);
};

export const trackContactMethod = (method: 'email' | 'phone' | 'form') => {
  setCustomTag('preferred_contact_method', method);
  triggerCustomEvent(`contact_method_${method}`);
};

export const trackLanguageSwitch = (fromLanguage: string, toLanguage: string) => {
  setCustomTag('language_preference', toLanguage);
  triggerCustomEvent(`language_switch_${fromLanguage}_to_${toLanguage}`);
};