import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    project: ''
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.project) {
      setStatus('error');
      return;
    }

    // Simulate form submission
    setStatus('success');
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setStatus('idle');
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        project: ''
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.name')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.service')}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a service</option>
                    <option value="fullstack">{t('contact.form.serviceOptions.fullstack')}</option>
                    <option value="cloud">{t('contact.form.serviceOptions.cloud')}</option>
                    <option value="cybersecurity">{t('contact.form.serviceOptions.cybersecurity')}</option>
                    <option value="consulting">{t('contact.form.serviceOptions.consulting')}</option>
                    <option value="automation">{t('contact.form.serviceOptions.automation')}</option>
                    <option value="ai">{t('contact.form.serviceOptions.ai')}</option>
                    <option value="iot">{t('contact.form.serviceOptions.iot')}</option>
                    <option value="other">{t('contact.form.serviceOptions.other')}</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.project')} *
                </label>
                <textarea
                  id="project"
                  name="project"
                  rows={5}
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 resize-none"
                  required
                ></textarea>
              </div>

              {status === 'success' && (
                <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg">
                  <CheckCircle className="h-5 w-5" />
                  <span>{t('contact.form.success')}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                  <AlertCircle className="h-5 w-5" />
                  <span>{t('contact.form.error')}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'success'}
                className="w-full bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-2 font-semibold disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                <span>{t('contact.form.submit')}</span>
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-black mb-6">
                {t('contact.info.title')}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Email</h4>
                    <a 
                      href="mailto:hello@lizzardsolutions.com" 
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      {t('contact.info.email')}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Phone</h4>
                    <a 
                      href="tel:+15551234567" 
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      {t('contact.info.phone')}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black mb-1">Location</h4>
                    <p className="text-gray-600">{t('contact.info.location')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-gray-300 mb-6">
                Let's discuss your project and explore how we can help your business grow with the right technology solutions.
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Free initial consultation</span>
              </div>
              <div className="flex items-center space-x-2 text-sm mt-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>No obligation project assessment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;