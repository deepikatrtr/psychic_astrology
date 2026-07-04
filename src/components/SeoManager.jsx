import { useEffect } from 'react';
import socialImage from '../assets/contact-cosmic-hero.png';

const SITE_NAME = 'Best Astrologer in London';
const PHONE = '+447722131999';
const EMAIL = 'thebestastrologerlondon@gmail.com';

const serviceSeo = {
  love: {
    name: 'Get Ex-Love Back Guidance',
    description: 'Confidential psychic astrology and relationship guidance in London for people seeking clarity, healing and a positive path after separation.'
  },
  negativity: {
    name: 'Negative Entity Removal',
    description: 'Explore private spiritual cleansing and negative energy guidance in London, approached with care, respect and personalised psychic insight.'
  },
  'love-spell-caster': {
    name: 'Love Spell & Relationship Guidance',
    description: 'Receive confidential spiritual and psychic guidance in London for love, emotional connection and relationship concerns.'
  },
  'husband-wife-problems': {
    name: 'Husband & Wife Problem Guidance',
    description: 'Private psychic astrology consultations for marriage communication, emotional distance, trust and relationship harmony.'
  },
  'marriage-problems': {
    name: 'Marriage Problem Astrology',
    description: 'Personalised marriage astrology and spiritual guidance in London for compatibility, family concerns and a clearer way forward.'
  },
  'black-magic-removal': {
    name: 'Black Magic Removal Guidance',
    description: 'Confidential spiritual protection, energy cleansing and psychic guidance in London for concerns about harmful or negative influences.'
  },
  'evil-spirit-removal': {
    name: 'Evil Spirit Removal Guidance',
    description: 'Private spiritual cleansing and protection consultations in London, with a respectful and personalised approach to your concerns.'
  },
  'evil-eye-removal': {
    name: 'Evil Eye Removal & Protection',
    description: 'Personalised evil eye cleansing, spiritual protection and psychic guidance for clients in London and worldwide.'
  },
  'spiritual-healing': {
    name: 'Spiritual Healing in London',
    description: 'Restore calm and balance through personalised spiritual healing, energy guidance, meditation and psychic astrology in London.'
  },
  'psychic-reading': {
    name: 'Psychic Reading in London',
    description: 'Book a confidential psychic reading in London for intuitive insight into love, relationships, life direction and personal wellbeing.'
  },
  'love-marriage-solution': {
    name: 'Love Marriage Astrology Guidance',
    description: 'Confidential psychic astrology guidance for love marriage, compatibility, family concerns and emotional clarity.'
  },
  'breakup-solution': {
    name: 'Breakup & Relationship Healing',
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
    question: 'What is psychic astrology?',
    answer: 'Psychic astrology combines intuitive insight with astrological guidance to help you understand patterns, choices and concerns in your life.'
  },
  {
    question: 'Can I book a remote consultation?',
    answer: 'Yes. Private consultations are available by phone and WhatsApp for clients in London, across the UK and worldwide.'
  },
  {
    question: 'Are consultations confidential?',
    answer: 'Yes. Personal concerns and consultation details are handled privately and respectfully.'
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
