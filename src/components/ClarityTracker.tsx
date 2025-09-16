// src/components/ClarityTracker.tsx
import React from 'react';
import { trackButtonClick, trackServiceInterest, setCustomTag } from '../utils/clarity';

interface ClarityTrackerProps {
  children: React.ReactNode;
  eventType?: 'click' | 'hover' | 'focus';
  trackingName?: string;
  serviceInterest?: string;
  customTags?: Record<string, string>;
  className?: string;
}

/**
 * Wrapper component that adds Clarity tracking to any child element
 * Usage:
 * <ClarityTracker trackingName="hero_cta_button" eventType="click">
 *   <button>Contact Us</button>
 * </ClarityTracker>
 */
const ClarityTracker: React.FC<ClarityTrackerProps> = ({
  children,
  eventType = 'click',
  trackingName,
  serviceInterest,
  customTags,
  className,
}) => {
  const handleEvent = () => {
    if (trackingName) {
      if (eventType === 'click') {
        trackButtonClick(trackingName);
      }
    }
    
    if (serviceInterest) {
      trackServiceInterest(serviceInterest);
    }
    
    if (customTags) {
      Object.entries(customTags).forEach(([key, value]) => {
        setCustomTag(key, value);
      });
    }
  };

  const eventProps = {
    onClick: eventType === 'click' ? handleEvent : undefined,
    onMouseEnter: eventType === 'hover' ? handleEvent : undefined,
    onFocus: eventType === 'focus' ? handleEvent : undefined,
  };

  return (
    <div className={className} {...eventProps}>
      {children}
    </div>
  );
};

export default ClarityTracker;