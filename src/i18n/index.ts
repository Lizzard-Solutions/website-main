import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        services: 'Services',
        products: 'Products',
        about: 'About',
        contact: 'Contact'
      },
      hero: {
        title: 'Professional IT Solutions',
        subtitle: 'with 11+ Years of Expertise',
        description: 'Empowering startups and small businesses with cutting-edge technology solutions. From full-stack development to AI integration, we deliver results that drive growth.',
        cta: 'Get Free Consultation',
        fiverr: 'Find me on Fiverr',
        experience: 'Years Experience',
        clients: 'Trusted by SMBs',
        solutions: 'Custom Solutions'
      },
      products: {
        konverter: 'Konverter'
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
        description: 'With over 1 years in the IT industry, Lizzard Solutions specializes in delivering high-quality technology solutions for startups and small businesses. Our solo-run consultancy model ensures personalized attention, direct communication, and cost-effective solutions without the overhead of large agencies.',
        experience: 'Years of Experience',
        focus: 'Startup & SMB Focus',
        approach: 'Personal Approach'
      },
      whyChoose: {
        title: 'Why Choose Lizzard Solutions',
        subtitle: 'The advantages of working with an experienced solo consultant',
        expertise: {
          title: 'Deep Technical Expertise',
          description: '11+ years of hands-on experience across multiple technologies and industries.'
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
        terms: 'Terms of Service',
        companyInfo: {
          title: 'Company Information',
          pib: 'PIB: 113481311',
          mb: 'MB: 66855392',
          founded: 'Founded: January 18, 2023'
        }
      },
      legal: {
        backToHome: 'Back to Home',
        privacyPolicy: {
          title: 'Privacy Policy',
          lastUpdated: 'Last updated',
          date: 'July 18, 2025',
          section1: {
            title: '1. Introduction',
            content: 'Lizzard Solutions ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.'
          },
          section2: {
            title: '2. Information We Collect',
            content: 'We may collect information about you in a variety of ways. The information we may collect includes:',
            item1: 'Personal Data: Name, email address, phone number, company name, and other contact information you provide.',
            item2: 'Project Information: Details about your project requirements, technical specifications, and business needs.',
            item3: 'Usage Data: Information about how you use our website, including IP address, browser type, and pages visited.',
            item4: 'Communication Data: Records of our communications, including emails, phone calls, and meeting notes.'
          },
          section3: {
            title: '3. How We Use Your Information',
            content: 'We use the information we collect to:',
            item1: 'Provide, operate, and maintain our IT consulting services',
            item2: 'Communicate with you about your projects and our services',
            item3: 'Improve our website and services based on your feedback',
            item4: 'Send you relevant updates, newsletters, and marketing communications (with your consent)'
          },
          section4: {
            title: '4. Information Sharing and Disclosure',
            content: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this Privacy Policy. We may share your information with trusted partners who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.'
          },
          section5: {
            title: '5. Data Security',
            content: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.'
          },
          section6: {
            title: '6. Data Retention',
            content: 'We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.'
          },
          section7: {
            title: '7. Your Rights',
            content: 'You have the right to access, update, or delete your personal information. You may also opt out of receiving marketing communications from us at any time. To exercise these rights, please contact us using the information provided below.'
          },
          section8: {
            title: '8. Contact Information',
            content: 'If you have any questions about this Privacy Policy, please contact us:',
            phone: 'Phone',
            address: 'Address'
          }
        },
        termsOfService: {
          title: 'Terms of Service',
          lastUpdated: 'Last updated',
          date: 'July 18, 2025',
          section1: {
            title: '1. Acceptance of Terms',
            content: 'By accessing and using the services provided by Lizzard Solutions, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
          },
          section2: {
            title: '2. Services Provided',
            content: 'Lizzard Solutions provides IT consulting services including but not limited to:',
            item1: 'Full stack web and mobile application development',
            item2: 'Cloud solutions and infrastructure management',
            item3: 'Cybersecurity consulting and implementation',
            item4: 'AI integration and automation solutions'
          },
          section3: {
            title: '3. Client Responsibilities',
            content: 'Clients are responsible for providing accurate project requirements, timely feedback, necessary access to systems and resources, and payment according to agreed terms. Clients must also ensure they have the right to use any materials, data, or content provided to us.'
          },
          section4: {
            title: '4. Intellectual Property',
            content: 'All custom-developed solutions, code, and documentation created specifically for the client become the property of the client upon full payment. However, Lizzard Solutions retains ownership of pre-existing intellectual property, general methodologies, and tools used in the development process.'
          },
          section5: {
            title: '5. Confidentiality',
            content: 'We maintain strict confidentiality regarding all client information, project details, and business data. We will not disclose confidential information to third parties without written consent, except as required by law.'
          },
          section6: {
            title: '6. Limitation of Liability',
            content: 'Lizzard Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.'
          },
          section7: {
            title: '7. Payment Terms',
            content: 'Payment terms are specified in individual project agreements. Generally, payments are due within 30 days of invoice date. Late payments may incur additional charges as specified in the project agreement.'
          },
          section8: {
            title: '8. Termination',
            content: 'Either party may terminate services with written notice. Upon termination, the client remains responsible for payment of all services rendered up to the termination date.'
          },
          section9: {
            title: '9. Governing Law',
            content: 'These terms shall be governed by and construed in accordance with the laws of the Republic of Serbia. Any disputes arising from these terms shall be subject to the jurisdiction of Serbian courts.'
          },
          section10: {
            title: '10. Contact Information',
            content: 'For questions regarding these Terms of Service, please contact us:',
            phone: 'Phone',
            address: 'Address'
          }
        }
      }
    }
  },
  sr: {
    translation: {
      nav: {
        home: 'Početna',
        services: 'Usluge',
        products: 'Proizvodi',
        about: 'O nama',
        contact: 'Kontakt'
      },
      hero: {
        title: 'Profesionalna IT Rešenja',
        subtitle: 'sa 11+ Godina Iskustva',
        description: 'Osnažujemo startape i mala preduzeća najsavremenijim tehnološkim rešenjima. Od full-stack razvoja do AI integracije, pružamo rezultate koji pokreću rast.',
        cta: 'Besplatna Konsultacija',
        fiverr: 'Pronađi me na Fiverr-u',
        experience: 'Godina Iskustva',
        clients: 'Poverenje MSP',
        solutions: 'Prilagođena Rešenja'
      },
      products: {
        konverter: 'Konverter'
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
        description: 'Sa preko 11 godina u IT industriji, Lizzard Solutions se specijalizuje za pružanje visokokvalitetnih tehnoloških rešenja za startape i mala preduzeća. Naš solo konsultantski model obezbeđuje personalizovanu pažnju, direktnu komunikaciju i isplativa rešenja bez troškova velikih agencija.',
        experience: 'Godina Iskustva',
        focus: 'Fokus na Startape i MSP',
        approach: 'Personalni Pristup'
      },
      whyChoose: {
        title: 'Zašto Izabrati Lizzard Solutions',
        subtitle: 'Prednosti rada sa iskusnim solo konsultantom',
        expertise: {
          title: 'Duboka Tehnička Ekspertiza',
          description: '11+ godina praktičnog iskustva kroz različite tehnologije i industrije.'
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
        terms: 'Uslovi Korišćenja',
        companyInfo: {
          title: 'Informacije o kompaniji',
          pib: 'PIB: 113481311',
          mb: 'MB: 66855392',
          founded: 'Datum osnivanja: 18. januar 2023.'
        }
      },
      legal: {
        backToHome: 'Nazad na početnu',
        privacyPolicy: {
          title: 'Politika Privatnosti',
          lastUpdated: 'Poslednje ažuriranje',
          date: '18. jul 2025.',
          section1: {
            title: '1. Uvod',
            content: 'Lizzard Solutions ("mi", "naše" ili "nas") je posvećen zaštiti vaše privatnosti. Ova Politika privatnosti objašnjava kako prikupljamo, koristimo, otkrivamo i štitimo vaše informacije kada posetite našu veb stranicu ili koristite naše usluge.'
          },
          section2: {
            title: '2. Informacije koje prikupljamo',
            content: 'Možemo prikupljati informacije o vama na različite načine. Informacije koje možemo prikupiti uključuju:',
            item1: 'Lični podaci: Ime, adresa e-pošte, broj telefona, naziv kompanije i ostale kontakt informacije koje pružate.',
            item2: 'Informacije o projektu: Detalji o vašim zahtevima za projekat, tehničke specifikacije i poslovne potrebe.',
            item3: 'Podaci o korišćenju: Informacije o tome kako koristite našu veb stranicu, uključujući IP adresu, tip pregledača i posećene stranice.',
            item4: 'Komunikacijski podaci: Zapisi naše komunikacije, uključujući e-mailove, telefonske pozive i beleške sa sastanaka.'
          },
          section3: {
            title: '3. Kako koristimo vaše informacije',
            content: 'Koristimo informacije koje prikupljamo da:',
            item1: 'Pružimo, upravljamo i održavamo naše IT konsultantske usluge',
            item2: 'Komuniciramo sa vama o vašim projektima i našim uslugama',
            item3: 'Poboljšamo našu veb stranicu i usluge na osnovu vaših povratnih informacija',
            item4: 'Šaljemo vam relevantne ažuriranja, biltene i marketinške komunikacije (uz vašu saglasnost)'
          },
          section4: {
            title: '4. Deljenje i otkrivanje informacija',
            content: 'Ne prodajemo, ne razmenjujemo niti na drugi način ne prenosimo vaše lične informacije trećim stranama bez vaše saglasnosti, osim kako je opisano u ovoj Politici privatnosti. Možemo deliti vaše informacije sa poverljivim partnerima koji nam pomažu u upravljanju našom veb stranicom i vođenju naše delatnosti, pod uslovom da se slože da ove informacije čuvaju poverljivo.'
          },
          section5: {
            title: '5. Bezbednost podataka',
            content: 'Primenjujemo odgovarajuće bezbednosne mere za zaštitu vaših ličnih informacija od neovlašćenog pristupa, izmene, otkrivanja ili uništavanja. Međutim, nijedan metod prenosa preko interneta ili elektronskog čuvanja nije 100% bezbedan.'
          },
          section6: {
            title: '6. Čuvanje podataka',
            content: 'Čuvamo vaše lične informacije samo onoliko dugo koliko je potrebno za ispunjavanje svrha navedenih u ovoj Politici privatnosti, osim ako duži period čuvanja nije zahtevan ili dozvoljen zakonom.'
          },
          section7: {
            title: '7. Vaša prava',
            content: 'Imate pravo da pristupite, ažurirate ili obrišete svoje lične informacije. Takođe možete u bilo kom trenutku da se odjavite od primanja marketinških komunikacija od nas. Da biste ostvarili ova prava, molimo kontaktirajte nas koristeći informacije navedene u nastavku.'
          },
          section8: {
            title: '8. Kontakt informacije',
            content: 'Ako imate bilo kakva pitanja o ovoj Politici privatnosti, molimo kontaktirajte nas:',
            phone: 'Telefon',
            address: 'Adresa'
          }
        },
        termsOfService: {
          title: 'Uslovi Korišćenja',
          lastUpdated: 'Poslednje ažuriranje',
          date: '18. jul 2025.',
          section1: {
            title: '1. Prihvatanje uslova',
            content: 'Pristupanjem i korišćenjem usluga koje pruža Lizzard Solutions, prihvatate i slažete se da budete vezani odredbama ovog sporazuma. Ako se ne slažete sa navedenim, molimo ne koristite ovu uslugu.'
          },
          section2: {
            title: '2. Pružene usluge',
            content: 'Lizzard Solutions pruža IT konsultantske usluge uključujući ali ne ograničavajući se na:',
            item1: 'Full stack razvoj veb i mobilnih aplikacija',
            item2: 'Cloud rešenja i upravljanje infrastrukturom',
            item3: 'Kiberbezbedonosno savetovanje i implementacija',
            item4: 'AI integracija i automatizovana rešenja'
          },
          section3: {
            title: '3. Odgovornosti klijenta',
            content: 'Klijenti su odgovorni za pružanje tačnih zahteva za projekat, blagovremene povratne informacije, potreban pristup sistemima i resursima, kao i plaćanje prema dogovorenim uslovima. Klijenti takođe moraju obezbediti da imaju pravo korišćenja svih materijala, podataka ili sadržaja koji nam pružaju.'
          },
          section4: {
            title: '4. Intelektualna svojina',
            content: 'Sva prilagođena rešenja, kod i dokumentacija kreirani specifično za klijenta postaju vlasništvo klijenta nakon potpunog plaćanja. Međutim, Lizzard Solutions zadržava vlasništvo nad postojećom intelektualnom svojinom, opštim metodologijama i alatima korišćenim u procesu razvoja.'
          },
          section5: {
            title: '5. Poverljivost',
            content: 'Održavamo strogu poverljivost u vezi sa svim informacijama klijenta, detaljima projekta i poslovnim podacima. Nećemo otkriti poverljive informacije trećim stranama bez pisane saglasnosti, osim ako to zakon ne zahteva.'
          },
          section6: {
            title: '6. Ograničenje odgovornosti',
            content: 'Lizzard Solutions neće biti odgovoran za bilo kakvu indirektnu, slučajnu, specijalnu, posledičnu ili kazněnu štetu, uključujući bez ograničenja, gubitak profita, podataka, korišćenja, ugleda ili drugih nematerijalnih gubitaka.'
          },
          section7: {
            title: '7. Uslovi plaćanja',
            content: 'Uslovi plaćanja su specificirani u pojedinačnim sporazumima o projektu. Generalno, plaćanja dospevaju u roku od 30 dana od datuma fakture. Kašnjenja u plaćanju mogu povlačiti dodatne naknade kako je specificirano u sporazumu o projektu.'
          },
          section8: {
            title: '8. Prekid ugovora',
            content: 'Bilo koja strana može prekinuti usluge uz pisano obaveštenje. Nakon prekida, klijent ostaje odgovoran za plaćanje svih usluga pruženih do datuma prekida.'
          },
          section9: {
            title: '9. Merodavno pravo',
            content: 'Ovi uslovi će biti regulisani i tumačeni u skladu sa zakonima Republike Srbije. Svi sporovi koji proizađu iz ovih uslova biće predmet nadležnosti srpskih sudova.'
          },
          section10: {
            title: '10. Kontakt informacije',
            content: 'Za pitanja u vezi sa ovim Uslovima korišćenja, molimo kontaktirajte nas:',
            phone: 'Telefon',
            address: 'Adresa'
          }
        }
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
