import React from 'react';
import { Compass, HeartHandshake, ShieldCheck } from 'lucide-react';

const pageContent = {
  home: {
    eyebrow: 'PSYCHIC ASTROLOGY & HEALING',
    title: 'Clarity for Love, Life & Spiritual Wellbeing',
    lead: 'When life feels uncertain, a thoughtful consultation can help you understand the patterns around your relationships, emotions and personal direction.',
    body: 'Guruji brings psychic insight and astrology together with spiritual healing practices, creating guidance that is personal, confidential and grounded in your individual circumstances.',
    cards: [
      ['Psychic Astrology Readings', 'Explore recurring patterns, important choices and the energies influencing your present situation.'],
      ['Spiritual Healing & Balance', 'Support emotional calm and spiritual wellbeing through personalised healing and energy-focused guidance.'],
      ['Private London Consultations', 'Connect in person or remotely by phone and WhatsApp from London, the UK or anywhere worldwide.']
    ]
  },
  about: {
    eyebrow: 'A PERSONAL APPROACH',
    title: 'Psychic Insight Guided by Care and Experience',
    lead: 'Guruji's work centres on listening carefully, understanding the full concern and offering guidance that respects each person's beliefs and circumstances.',
    body: 'Psychic astrology is used as a reflective tool alongside spiritual practices, helping clients approach love, family, personal wellbeing and life decisions with greater awareness.',
    cards: [
      ['Listen First', 'Every consultation begins with your story, priorities and the outcome you hope to understand.'],
      ['Personalised Guidance', 'Insights and spiritual practices are selected for your situation rather than offered as one-size-fits-all advice.'],
      ['Respectful Support', 'Sessions remain private, compassionate and focused on helping you move forward with clarity.']
    ]
  },
  services: {
    eyebrow: 'GUIDANCE FOR YOUR JOURNEY',
    title: 'Choose Support for the Area of Life That Needs Attention',
    lead: 'The service collection brings relationship astrology, psychic readings, spiritual healing and protective practices into one confidential consultation experience.',
    body: 'You do not need to know which service is right before contacting Guruji. Share what you are experiencing and receive guidance on the most suitable starting point.',
    cards: [
      ['Love & Relationships', 'Explore compatibility, communication, separation, marriage and emotional connection with greater perspective.'],
      ['Healing & Wellbeing', 'Seek spiritual balance, calmer energy and supportive practices for your personal wellbeing.'],
      ['Protection & Cleansing', 'Discuss concerns about negative influences in a private, culturally respectful and non-judgemental setting.']
    ]
  },
  contact: {
    eyebrow: 'CONFIDENTIAL CONSULTATIONS',
    title: 'Speak Privately With a Psychic Astrologer in London',
    lead: 'A first conversation gives you space to explain your concern and understand how psychic astrology or spiritual healing may support your next step.',
    body: 'Consultations are available daily by phone, WhatsApp and online booking. Clients can connect from London, elsewhere in the UK or worldwide.',
    cards: [
      ['Easy to Begin', 'Call, message or choose a preferred consultation time using the booking form.'],
      ['Private & Respectful', 'Personal details and concerns are treated with discretion throughout your consultation.'],
      ['Clear Next Steps', 'Receive an explanation of the suggested approach before deciding how you wish to continue.']
    ]
  },
  service: {
    eyebrow: 'PERSONALISED PSYCHIC GUIDANCE',
    title: 'A Confidential Consultation Built Around Your Situation',
    lead: 'Every concern has its own emotional history, practical context and spiritual meaning. Your consultation begins by understanding all three.',
    body: 'Guruji combines psychic astrology, intuitive listening and spiritual practices to help you explore the concern with more clarity and choose a constructive way forward.',
    cards: [
      ['Understand the Concern', 'Discuss the patterns, timing and circumstances that may be influencing your experience.'],
      ['Receive Personalised Insight', 'Explore guidance and spiritual practices selected around your needs and comfort level.'],
      ['Move Forward Clearly', 'Leave with practical next steps and a clearer understanding of the options available to you.']
    ]
  }
};

const icons = [Compass, HeartHandshake, ShieldCheck];

export default function ContentEnhancement({ page, serviceName }) {
  const content = pageContent[page] || pageContent.home;
  const title = page === 'service' && serviceName
    ? `${serviceName}: Guidance With Clarity and Care`
    : content.title;

  return (
    <section className="seo-content-section" aria-labelledby={`seo-content-${page}`}>
      <div className="container">
        <div className="seo-content-intro">
          <span>{content.eyebrow}</span>
          <h2 id={`seo-content-${page}`} className="font-display text-gold-gradient">
            {title}
          </h2>
          <p>{content.lead}</p>
          <p>{content.body}</p>
        </div>

        <div className="seo-content-grid">
          {content.cards.map(([heading, description], index) => {
            const Icon = icons[index];
            return (
              <article className="glass-card seo-content-card" key={heading}>
                <span className="seo-content-card__icon"><Icon size={22} /></span>
                <h3 className="font-display">{heading}</h3>
                <p>{description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
