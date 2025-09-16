import React from 'react';
import { X } from 'lucide-react';

interface CalendarPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendarPopup: React.FC<CalendarPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">
            Schedule an Appointment
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close calendar"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        
        {/* Calendar Content */}
        <div className="p-4">
          <iframe 
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0PzNctjsuWbJIDXMcKSXIeBZH22DqGfwmOOh0IbuiqfF8r7TGfZncy65hDLSQixK6xg_CSWyPq?gv=true" 
            style={{ border: 0 }} 
            width="100%" 
            height="600" 
            frameBorder="0"
            title="Google Calendar Appointment Scheduling"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarPopup;
