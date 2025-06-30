import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        services: 'Services',
        about: 'About',
        contact: 'Contact'
      },
      hero: {
        title: 'Professional IT Solutions',
        subtitle: 'with 15+ Years of Expertise',
        description: 'Empowering startups and small businesses with cutting-edge technology solutions. From full-stack development to AI integration, we deliver results that drive growth.',
        cta: 'Get Free Consultation',
        experience: '15+ Years Experience',
        clients: 'Trusted by SMBs',
        solutions: 'Custom Solutions'
      },
      services: {
        title: 'Our Services',
        subtitle: 'Comprehensive IT solutions tailored for your business needs',
        fullstack: {
          title: 'Full Stack Development',
          description: 'End-to-end web and mobile application development using modern technologies and best practices.'
        },
        cloud: {
          title: 'Cloud Solutions',
          description: 'Scalable cloud infrastructure, migration services, and optimization for maximum efficiency and cost savings.'
        },
        cybersecurity: {
          title: 'Cybersecurity',
          description: 'Comprehensive security audits, implementation, and monitoring to protect your business assets.'
        },
        consulting: {
          title: 'IT Consulting',
          description: 'Strategic technology planning and digital transformation guidance for sustainable business growth.'
        },
        automation: {
          title: 'Automation & Data Scraping',
          description: 'Process automation and intelligent data extraction solutions to streamline your operations.'
        },
        ai: {
          title: 'AI Integration',
          description: 'Custom AI solutions and machine learning implementations to give your business a competitive edge.'
        },
        iot: {
          title: 'IoT Devices',
          description: 'Smart device integration and IoT ecosystem development for connected business solutions.'
        }
      },
      about: {
        title: 'About Lizzard Solutions',
        subtitle: 'Solo expertise with enterprise-level results',
        description: 'With over 15 years in the IT industry, Lizzard Solutions specializes in delivering high-quality technology solutions for startups and small businesses. Our solo-run consultancy model ensures personalized attention, direct communication, and cost-effective solutions without the overhead of large agencies.',
        experience: 'Years of Experience',
        focus: 'Startup & SMB Focus',
        approach: 'Personal Approach'
      },
      whyChoose: {
        title: 'Why Choose Lizzard Solutions',
        subtitle: 'The advantages of working with an experienced solo consultant',
        expertise: {
          title: 'Deep Technical Expertise',
          description: '15+ years of hands-on experience across multiple technologies and industries.'
        },
        personal: {
          title: 'Personal Attention',
          description: 'Direct communication with the expert handling your project, no middlemen.'
        },
        cost: {
          title: 'Cost-Effective',
          description: 'Premium quality solutions without the overhead costs of large agencies.'
        },
        agile: {
          title: 'Agile & Flexible',
          description: 'Quick adaptation to changing requirements and rapid project delivery.'
        },
        reliable: {
          title: 'Proven Reliability',
          description: 'Consistent track record of delivering projects on time and within budget.'
        },
        support: {
          title: 'Ongoing Support',
          description: 'Long-term partnership with continuous support and maintenance services.'
        }
      },
      contact: {
        title: 'Ready to Transform Your Business?',
        subtitle: 'Get in touch for a free consultation and discover how we can help your business grow.',
        form: {
          name: 'Full Name',
          email: 'Email Address',
          company: 'Company Name',
          service: 'Service Interest',
          serviceOptions: {
            fullstack: 'Full Stack Development',
            cloud: 'Cloud Solutions',
            cybersecurity: 'Cybersecurity',
            consulting: 'IT Consulting',
            automation: 'Automation & Data Scraping',
            ai: 'AI Integration',
            iot: 'IoT Devices',
            other: 'Other'
          },
          project: 'Project Description',
          submit: 'Send Message',
          success: 'Thank you! Your message has been sent successfully.',
          error: 'Please fill in all required fields.'
        },
        info: {
          title: 'Contact Information',
          email: 'nemanja@lizzardsolutions.com',
          phone: '+381 (0)69 677304',
          location: '7. Juli 36/14, Bor, Serbia'
        }
      },
      footer: {
        description: 'Professional IT consultancy specializing in startup and small business technology solutions.',
        services: 'Services',
        company: 'Company',
        contact: 'Contact',
        rights: 'All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service'
      }
    }
  },
  sr: {
    translation: {
      nav: {
        home: 'Početna',
        services: 'Usluge',
        about: 'O nama',
        contact: 'Kontakt'
      },
      hero: {
        title: 'Profesionalna IT Rešenja',
        subtitle: 'sa 15+ Godina Iskustva',
        description: 'Osnažujemo startape i mala preduzeća najsavremenijim tehnološkim rešenjima. Od full-stack razvoja do AI integracije, pružamo rezultate koji pokreću rast.',
        cta: 'Besplatna Konsultacija',
        experience: '15+ Godina Iskustva',
        clients: 'Poverenje MSP',
        solutions: 'Prilagođena Rešenja'
      },
      services: {
        title: 'Naše Usluge',
        subtitle: 'Sveobuhvatna IT rešenja prilagođena potrebama vašeg poslovanja',
        fullstack: {
          title: 'Full Stack Razvoj',
          description: 'Kompletan razvoj web i mobilnih aplikacija koristeći moderne tehnologije i najbolje prakse.'
        },
        cloud: {
          title: 'Cloud Rešenja',
          description: 'Skalabilna cloud infrastruktura, usluge migracije i optimizacija za maksimalnu efikasnost.'
        },
        cybersecurity: {
          title: 'Kiberbezbednost',
          description: 'Sveobuhvatni bezbednosni auditi, implementacija i monitoring za zaštitu poslovnih resursa.'
        },
        consulting: {
          title: 'IT Konsalting',
          description: 'Strateško tehnološko planiranje i vodstvo digitalne transformacije za održivi rast.'
        },
        automation: {
          title: 'Automatizacija i Scraping',
          description: 'Automatizacija procesa i inteligentna rešenja za ekstrakciju podataka.'
        },
        ai: {
          title: 'AI Integracija',
          description: 'Prilagođena AI rešenja i implementacije mašinskog učenja za konkurentsku prednost.'
        },
        iot: {
          title: 'IoT Uređaji',
          description: 'Integracija pametnih uređaja i razvoj IoT ekosistema za povezana poslovna rešenja.'
        }
      },
      about: {
        title: 'O Lizzard Solutions',
        subtitle: 'Solo ekspertiza sa rezultatima na nivou preduzeća',
        description: 'Sa preko 15 godina u IT industriji, Lizzard Solutions se specijalizuje za pružanje visokokvalitetnih tehnoloških rešenja za startape i mala preduzeća. Naš solo konsultantski model obezbeđuje personalizovanu pažnju, direktnu komunikaciju i isplativa rešenja bez troškova velikih agencija.',
        experience: 'Godina Iskustva',
        focus: 'Fokus na Startape i MSP',
        approach: 'Personalni Pristup'
      },
      whyChoose: {
        title: 'Zašto Izabrati Lizzard Solutions',
        subtitle: 'Prednosti rada sa iskusnim solo konsultantom',
        expertise: {
          title: 'Duboka Tehnička Ekspertiza',
          description: '15+ godina praktičnog iskustva kroz različite tehnologije i industrije.'
        },
        personal: {
          title: 'Personalna Pažnja',
          description: 'Direktna komunikacija sa ekspertom koji radi na vašem projektu, bez posrednika.'
        },
        cost: {
          title: 'Isplativo',
          description: 'Premium kvalitet rešenja bez troškova velikih agencija.'
        },
        agile: {
          title: 'Agilno i Fleksibilno',
          description: 'Brza adaptacija na promene zahteva i brzа isporuka projekata.'
        },
        reliable: {
          title: 'Dokazana Pouzdanost',
          description: 'Konzistentan rekord isporuke projekata na vreme i u okviru budžeta.'
        },
        support: {
          title: 'Kontinuirana Podrška',
          description: 'Dugoročno partnerstvo sa kontinuiranom podrškom i uslugama održavanja.'
        }
      },
      contact: {
        title: 'Spremni da Transformišete Vaše Poslovanje?',
        subtitle: 'Kontaktirajte nas za besplatnu konsultaciju i otkrijte kako možemo pomoći vašem poslovanju da raste.',
        form: {
          name: 'Ime i Prezime',
          email: 'Email Adresa',
          company: 'Naziv Kompanije',
          service: 'Interesovanje za Uslugu',
          serviceOptions: {
            fullstack: 'Full Stack Razvoj',
            cloud: 'Cloud Rešenja',
            cybersecurity: 'Kiberbezbednost',
            consulting: 'IT Konsalting',
            automation: 'Automatizacija i Scraping',
            ai: 'AI Integracija',
            iot: 'IoT Uređaji',
            other: 'Ostalo'
          },
          project: 'Opis Projekta',
          submit: 'Pošalji Poruku',
          success: 'Hvala! Vaša poruka je uspešno poslata.',
          error: 'Molimo popunite sva obavezna polja.'
        },
        info: {
          title: 'Kontakt Informacije',
          email: 'nemanja@lizzardsolutions.com',
          phone: '+381 (0)69 677304',
          location: '7. Juli 36/14, Bor, Srbija'
        }
      },
      footer: {
        description: 'Profesionalni IT konsalting specijalizovan za tehnološka rešenja za startape i mala preduzeća.',
        services: 'Usluge',
        company: 'Kompanija',
        contact: 'Kontakt',
        rights: 'Sva prava zadržana.',
        privacy: 'Politika Privatnosti',
        terms: 'Uslovi Korišćenja'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
