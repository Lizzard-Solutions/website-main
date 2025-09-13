// src/utils/analytics.ts
declare global {
    interface Window {
      gtag: (...args: any[]) => void;
      dataLayer: any[];
    }
  }
  
  // Google Analytics setup
  export const initializeGoogleAnalytics = (measurementId: string) => {
    try {
      // Create script element for gtag
      const gtagScript = document.createElement('script');
      gtagScript.async = true;
      gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(gtagScript);
  
      // Initialize dataLayer and gtag function
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
  
      // Configure Google Analytics
      window.gtag('js', new Date());
      window.gtag('config', measurementId, {
        // Optional: Add additional configuration
        page_title: document.title,
        page_location: window.location.href,
      });
  
      console.log('Google Analytics initialized with ID:', measurementId);
    } catch (error) {
      console.error('Failed to initialize Google Analytics:', error);
    }
  };
  
  // Google Analytics tracking functions
  export const trackGAEvent = (eventName: string, parameters?: Record<string, any>) => {
    try {
      if (typeof window.gtag === 'function') {
        window.gtag('event', eventName, parameters);
      }
    } catch (error) {
      console.error('GA tracking error:', error);
    }
  };
  
  export const trackGAPageView = (pageName: string, pageUrl?: string) => {
    try {
      if (typeof window.gtag === 'function') {
        window.gtag('config', 'G-L5RWENJEFW', {
          page_title: pageName,
          page_location: pageUrl || window.location.href,
        });
      }
    } catch (error) {
      console.error('GA page view tracking error:', error);
    }
  };
  
  export const trackGAConversion = (conversionId: string, value?: number, currency: string = 'USD') => {
    try {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'conversion', {
          send_to: conversionId,
          value: value,
          currency: currency,
        });
      }
    } catch (error) {
      console.error('GA conversion tracking error:', error);
    }
  };