import { useEffect } from 'react';
import socialImage from '../assets/contact-cosmic-hero.png';

const SITE_NAME = 'Best Astrologer in London';
const PHONE = '+447722131999';
const EMAIL = 'thebestastrologerlondon@gmail.com';

const serviceSeo = {
  love: {
    name: 'Reuniting With an Ex-Partner Guidance',
    description: 'Confidential psychic astrology and relationship guidance in London for people seeking clarity, healing and a positive path after separation.'
  },
  negativity: {
    name: 'Negative Energy Clearing',
    description: 'Explore private spiritual cleansing and negative energy guidance in London, approached with care, respect and personalised psychic insight.'
  },
  'love-spell-caster': {
    name: 'Love Ritual & Devotion Work',
    description: 'Receive confidential spiritual and psychic guidance in London for love, emotional connection and relationship concerns.'
  },
  'husband-wife-problems': {
    name: 'Husband & Wife Relationship Counseling',
    description: 'Private psychic astrology consultations for marriage communication, emotional distance, trust and relationship harmony.'
  },
  'marriage-problems': {
    name: 'Marriage Relationship Guidance',
    description: 'Personalised marriage astrology and spiritual guidance in London for compatibility, family concerns and a clearer way forward.'
  },
  'black-magic-removal': {
    name: 'Spiritual Cleansing',
    description: 'Confidential spiritual protection, energy cleansing and psychic guidance in London for concerns about harmful or negative influences.'
  },
  'evil-spirit-removal': {
    name: 'Spiritual Protection',
    description: 'Private spiritual cleansing and protection consultations in London, with a respectful and personalised approach to your concerns.'
  },
  'evil-eye-removal': {
    name: 'Evil Eye Protection',
    description: 'Personalised evil eye cleansing, spiritual protection and psychic guidance for clients in London and worldwide.'
  },
  'spiritual-healing': {
    name: 'Spiritual Healing',
    description: 'Restore calm and balance through personalised spiritual healing, energy guidance, meditation and psychic astrology in London.'
  },
  'psychic-reading': {
    name: 'Psychic & Tarot Reading',
    description: 'Book a confidential psychic reading in London for intuitive insight into love, relationships, life direction and personal wellbeing.'
  },
  'love-marriage-solution': {
    name: 'Love Marriage Guidance',
    description: 'Confidential psychic astrology guidance for love marriage, compatibility, family concerns and emotional clarity.'
  },
  'breakup-solution': {
    name: 'Overcoming Breakups & Emotional Healing',
    description: 'Compassionate psychic and spiritual guidance in London for breakup recovery, relationship clarity and emotional healing.'
  }
};

const pageSeo = {
  home: {
    title: 'Psychic Astrology & Healing in London | Guruji',
    description: 'Discover confidential psychic astrology and spiritual healing in London for love, relationships, protection and personal clarity.',
    keywords: 'psychic astrology London, spiritual healing London, psychic astrologer, relationship astrology, spiritual guidance'
  },
  about: {
    title: 'About Guruji | Psychic Astrologer & Spiritual Healer',
    description: 'Learn about Guruji's approach to psychic astrology, spiritual healing and confidential guidance for clients in London and worldwide.',
    keywords: 'psychic astrologer London, spiritual healer London, about Guruji, astrology guidance'
  },
  services: {
    title: 'Psychic Astrology & Spiritual Healing Services | London',
    description: 'Explore psychic readings, relationship astrology, spiritual healing, energy cleansing and personalised guidance in London.',
    keywords: 'astrology services London, psychic reading, spiritual healing, relationship guidance, energy cleansing'
  },
  contact: {
    title: 'Book a Psychic Astrology Consultation in London | Guruji',
    description: 'Book a private psychic astrology or spiritual healing consultation by phone, WhatsApp or online. Available daily in London.',
    keywords: 'book psychic London, astrology consultation London, spiritual healer contact, psychic reading appointment'
  }
};

const homeFaqs = [
  {
    question: 'Are all consultations completely confidential?',
    answer: 'Yes. Your privacy is our highest priority. Every consultation and all personal information shared with us are kept strictly confidential and handled with complete professionalism.'
  },
  {
    question: 'Do I need my date, time, and place of birth for a reading?',
    answer: 'Providing your date, time, and place of birth allows for a more detailed birth chart analysis. If you don\'t know your exact birth time, we can still offer guidance using the information available.'
  },
  {
    question: 'How can I book an appointment?',
    answer: 'Booking is simple. Contact us by phone, WhatsApp, email, or through our website\'s appointment form. We\'ll help you choose a convenient consultation time and guide you through the next steps.'
  },
  {
    question: 'Can I consult you online or over the phone?',
    answer: 'Absolutely. We provide online, phone, and video consultations, allowing clients from anywhere in the world to receive professional astrology guidance without visiting in person.'
  },
  {
    question: 'How does an astrology consultation work?',
    answer: 'Our consultation begins with understanding your concerns and, where relevant, analyzing your birth details. Based on your unique situation, we provide personalized guidance, practical insights, and suitable spiritual remedies to help you make informed decisions about your future.'
  },
  {
    question: 'Do you offer career, business, and financial guidance?',
    answer: 'Yes. We offer guidance on career growth, business opportunities, job changes, financial planning, and professional success through detailed astrological analysis to help you make confident decisions.'
  },
  {
    question: 'How long does it take to see results from spiritual remedies?',
    answer: 'The timeframe varies depending on each individual\'s circumstances and the nature of their concerns. Some people notice positive changes sooner, while others may require more time. Consistency and following the recommended guidance are important.'
  }
];

function upsertMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function upsertCanonical(url) {
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', url);
}

export default function SeoManager({ currentPage, serviceSlug }) {
  useEffect(() => {
    const isService = currentPage === 'service-detail';
    const service = serviceSeo[serviceSlug] || serviceSeo.love;
    const seo = isService
      ? {
          title: `${service.name} | ${SITE_NAME}`,
          description: service.description,
          keywords: `${service.name.toLowerCase()}, psychic astrology London, spiritual guidance London`
        }
      : pageSeo[currentPage] || pageSeo.home;

    const route = isService ? `services/${serviceSlug || 'love'}` : currentPage;
    const baseUrl = `${window.location.origin}${window.location.pathname}`;
    const pageUrl = currentPage === 'home' ? baseUrl : `${baseUrl}#${route}`;
    const imageUrl = new URL(socialImage, window.location.origin).href;

    document.title = seo.title;
    upsertMeta('name', 'description', seo.description);
    upsertMeta('name', 'keywords', seo.keywords);
    upsertMeta('name', 'robots', 'index, follow, max-image-preview:large');
    upsertMeta('name', 'author', SITE_NAME);
    upsertMeta('property', 'og:type', isService ? 'article' : 'website');
    upsertMeta('property', 'og:locale', 'en_GB');
    upsertMeta('property', 'og:site_name', SITE_NAME);
    upsertMeta('property', 'og:title', seo.title);
    upsertMeta('property', 'og:description', seo.description);
    upsertMeta('property', 'og:url', pageUrl);
    upsertMeta('property', 'og:image', imageUrl);
    upsertMeta('property', 'og:image:alt', 'Psychic astrology and spiritual healing in London');
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', seo.title);
    upsertMeta('name', 'twitter:description', seo.description);
    upsertMeta('name', 'twitter:image', imageUrl);
    upsertCanonical(pageUrl);

    const organisationSchema = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': `${baseUrl}#business`,
      name: SITE_NAME,
      description: pageSeo.home.description,
      url: baseUrl,
      image: imageUrl,
      telephone: PHONE,
      email: EMAIL,
      priceRange: '££',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '241 High Street',
        addressLocality: 'Walthamstow',
        addressRegion: 'London',
        postalCode: 'E17 7BH',
        addressCountry: 'GB'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 51.584,
        longitude: -0.0206
      },
      areaServed: [
        { '@type': 'City', name: 'London' },
        { '@type': 'Country', name: 'United Kingdom' }
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        opens: '08:00',
        closes: '20:00'
      },
      knowsAbout: [
        'Psychic astrology',
        'Spiritual healing',
        'Relationship guidance',
        'Psychic readings',
        'Energy cleansing'
      ]
    };

    const pageSchema = isService
      ? {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.name,
          description: service.description,
          url: pageUrl,
          provider: { '@id': `${baseUrl}#business` },
          areaServed: 'London and worldwide'
        }
      : {
          '@context': 'https://schema.org',
          '@type': currentPage === 'contact' ? 'ContactPage' : currentPage === 'about' ? 'AboutPage' : 'WebPage',
          name: seo.title,
          description: seo.description,
          url: pageUrl,
          isPartOf: {
            '@type': 'WebSite',
            name: SITE_NAME,
            url: baseUrl
          }
        };

    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: baseUrl
        },
        ...(currentPage === 'home'
          ? []
          : [{
              '@type': 'ListItem',
              position: 2,
              name: isService ? service.name : currentPage.charAt(0).toUpperCase() + currentPage.slice(1),
              item: pageUrl
            }])
      ]
    };

    const graph = [organisationSchema, pageSchema, breadcrumbSchema];
    if (currentPage === 'home') {
      graph.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: homeFaqs.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer
          }
        }))
      });
    }

    let script = document.head.querySelector('#site-structured-data');
    if (!script) {
      script = document.createElement('script');
      script.id = 'site-structured-data';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(graph);
  }, [currentPage, serviceSlug]);

  return null;
}
