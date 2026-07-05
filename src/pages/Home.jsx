import React, { useState, useEffect } from 'react';
import { 
  Phone, MessageSquare, ChevronLeft, ChevronRight, HelpCircle, 
  Award, Globe, Heart, Shield, Sparkles, Star, Zap, CheckCircle2,
  MapPin, Mail, Users
} from 'lucide-react';
import chakraWheel from '../assets/chakra.png';

// Service Images
import imgLove from '../assets/ex_love_back.webp';
import imgNegativity from '../assets/negativity_removal.webp';
import imgSpell from '../assets/love_spell_caster.webp';
import imgHusbandWife from '../assets/husband_wife_problems.webp';
import imgMarriage from '../assets/marriage_problems.webp';
import imgBlackMagic from '../assets/black_magic_removal.webp';
import imgEvilSpirit from '../assets/evil_spirit_removal.webp';
import imgEvilEye from '../assets/evil_eye_removal.webp';
import imgSpiritualHealing from '../assets/spiritual_healing.webp';
import imgPsychicReading from '../assets/psychic_reading.webp';
import imgLoveMarriage from '../assets/love_marriage_solution.webp';
import imgBreakup from '../assets/breakup_solution.webp';
import moonJourneyBg from '../assets/moon_journey_bg.png';

// Guruji & Testimonials
import astrologerImg from '../assets/astrologer.webp';

const serviceImages = {
  "love": imgLove,
  "negativity": imgNegativity,
  "love-spell-caster": imgSpell,
  "husband-wife-problems": imgHusbandWife,
  "marriage-problems": imgMarriage,
  "black-magic-removal": imgBlackMagic,
  "evil-spirit-removal": imgEvilSpirit,
  "evil-eye-removal": imgEvilEye,
  "spiritual-healing": imgSpiritualHealing,
  "psychic-reading": imgPsychicReading,
  "love-marriage-solution": imgLoveMarriage,
  "breakup-solution": imgBreakup
};
// Counter component for animated statistics
function Counter({ end, duration = 1800, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress * (2 - progress); // easeOutQuad
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  const formatNum = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return <span>{formatNum(count)}{suffix}</span>;
}

export default function Home({ navigateTo }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeReviewPage, setActiveReviewPage] = useState(0);
  const [reviewsPerPage, setReviewsPerPage] = useState(4);

  // Monitor screen size to change reviews per page dynamically
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setReviewsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setReviewsPerPage(2);
      } else {
        setReviewsPerPage(4);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(12 / reviewsPerPage);

  // Auto-slide every 4 seconds (4000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReviewPage((prev) => (prev + 1) % totalPages);
    }, 4000);
    return () => clearInterval(interval);
  }, [totalPages]);

  // Prevent out-of-bounds page indices on window resize
  useEffect(() => {
    if (activeReviewPage >= totalPages) {
      setActiveReviewPage(0);
    }
  }, [totalPages, activeReviewPage]);


  // Hero Slider Data
  const slides = [
    {
      title: "Reuniting With an Ex-Partner",
      tagline: "Reunite With Ex-Partner Through Powerful Astrology Remedies",
      slug: "love",
      description: "Powerful psychic guidance, ancient mantras and personalised rituals to bring back lost love and rekindle the bond.",
      image: imgLove
    },
    {
      title: "Negative Energy Clearing",
      tagline: "Cleanse Your Aura, Restore Your Inner Light",
      slug: "negativity",
      description: "Cleanse your aura, home and energy field through proven spiritual purification rituals and divine fire ceremonies.",
      image: imgNegativity
    },
    {
      title: "Spiritual Cleansing",
      tagline: "Break Every Curse - Reclaim Your Divine Protection",
      slug: "black-magic-removal",
      description: "Identify and dissolve black magic with powerful counter-rituals, divine protection and lifelong shielding.",
      image: imgBlackMagic
    },
    {
      title: "Husband & Wife Relationship Counseling",
      tagline: "Heal The Bond, Rekindle The Love",
      slug: "husband-wife-problems",
      description: "Restore harmony, trust and love within your marriage through psychic guidance, mantra and spiritual remedies.",
      image: imgHusbandWife
    },
    {
      title: "Overcoming Breakups & Emotional Healing",
      tagline: "End The Distance, Begin Again",
      slug: "breakup-solution",
      description: "Heal the wounds of breakup and reopen the path to reconciliation with proven psychic guidance.",
      image: imgBreakup
    }
  ];

  // Services List Data
  const services = [
    { slug: "love", title: "Reuniting With an Ex-Partner", short: "Reunite with lost love", icon: <Heart size={24} /> },
    { slug: "negativity", title: "Negative Energy Clearing", short: "Cleanse your aura & home", icon: <Shield size={24} /> },
    { slug: "love-spell-caster", title: "Love Ritual & Devotion Work", short: "Authentic divine love spells", icon: <Sparkles size={24} /> },
    { slug: "husband-wife-problems", title: "Husband & Wife Relationship Counseling", short: "Heal your marriage bond", icon: <CheckCircle2 size={24} /> },
    { slug: "marriage-problems", title: "Marriage Relationship Guidance", short: "Restore family harmony", icon: <Globe size={24} /> },
    { slug: "black-magic-removal", title: "Spiritual Cleansing", short: "Permanent counter-protection", icon: <Zap size={24} /> },
    { slug: "evil-spirit-removal", title: "Spiritual Protection", short: "Free yourself & your home", icon: <Shield size={24} /> },
    { slug: "evil-eye-removal", title: "Evil Eye Protection", short: "Nazar suraksha", icon: <Sparkles size={24} /> },
    { slug: "spiritual-healing", title: "Spiritual Healing", short: "Mind, body & soul alignment", icon: <Heart size={24} /> },
    { slug: "psychic-reading", title: "Psychic & Tarot Reading", short: "Divine intuitive clarity", icon: <HelpCircle size={24} /> },
    { slug: "love-marriage-solution", title: "Love Marriage Guidance", short: "Bless your union", icon: <Globe size={24} /> },
    { slug: "breakup-solution", title: "Overcoming Breakups & Emotional Healing", short: "Mend broken hearts", icon: <Heart size={24} /> }
  ];

  // Client Reviews Data (12 Symmetrical Testimonials)
  const reviews = [
    {
      name: "Priya Patel",
      loc: "Financial Analyst",
      text: "Guruji helped me reunite with my ex-partner after a 2-year painful separation. His love spells are incredibly powerful, and his guidance kept me strong. Truly life-changing!",
      initials: "PP"
    },
    {
      name: "Michael Smith",
      loc: "Business Owner",
      text: "My business was facing severe losses due to negative energies. Guruji cleansed my office and recommended powerful protection charms. Within weeks, sales doubled. Highly recommended!",
      initials: "MS"
    },
    {
      name: "Sandra Connor",
      loc: "HR Specialist",
      text: "I was suffering from chronic anxiety and negative thoughts. Guruji's spiritual aura healing was so soothing. I felt a weight lift off my chest instantly. He is a divine soul.",
      initials: "SC"
    },
    {
      name: "Amit Malhotra",
      loc: "Software Engineer",
      text: "The astrological chart analysis by Guruji solved all my marriage delays. He correctly identified a Manglik dosha and gave easy remedies. Now happily married. Thank you, Guruji!",
      initials: "AM"
    },
    {
      name: "Karan Singh",
      loc: "Marketing Director",
      text: "I was skeptical at first, but the Best Astrologer in London's predictions about my career timeline were spot-on. The remedies were practical and easy to follow. Guruji is the real deal.",
      initials: "KS"
    },
    {
      name: "Deepika Rao",
      loc: "Medical Professional",
      text: "The Best Astrologer in London's psychic reading was unbelievably accurate. He picked up on things nobody else could know. The health remedies aligned perfectly with my treatment. Five stars!",
      initials: "DR"
    },
    {
      name: "Jessica Taylor",
      loc: "Creative Director",
      text: "The Best Astrologer in London is a master of his craft. He predicted my relocation details down to the exact month. His honesty and confidentiality are what make him the best.",
      initials: "JT"
    },
    {
      name: "Rajeev Sharma",
      loc: "Real Estate Agent",
      text: "Guruji removed a long-standing court dispute blocker using powerful spiritual rituals. His predictions were accurate and his remedies gave immediate results. Absolutely blessed!",
      initials: "RS"
    },
    {
      name: "Sarah Jenkins",
      loc: "Teacher",
      text: "I was desperate to heal my marriage from constant disputes. Guruji's counseling and relationship mantras restored our love and peace. My home feels like heaven now.",
      initials: "SJ"
    },
    {
      name: "Vikram Rathore",
      loc: "Entrepreneur",
      text: "Guruji's black magic removal remedies freed my family from years of distress. The positive energy is back, and we feel shielded. Direct, honest, and extremely powerful guidance.",
      initials: "VR"
    },
    {
      name: "David Miller",
      loc: "Business Consultant",
      text: "The Best Astrologer in London's negative energy clearing havan brought immediate peace to my family. The bad dreams stopped, and positive vibes returned. Truly gifted spiritual healer.",
      initials: "DM"
    },
    {
      name: "Elena Rostova",
      loc: "Yoga Instructor",
      text: "The relationship healing energy sessions by Guruji completely mended our communication gaps. We feel more connected than ever. Excellent and gentle guidance.",
      initials: "ER"
    }
  ];

  // Accordion FAQ State
  const [openFaq, setOpenFaq] = useState(null);

  // Contact Form State & Handler
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'love',
    message: ''
  });
  const [successMsg, setSuccessMsg] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const serviceLabels = {
      love: "Reuniting With an Ex-Partner / Love Problems",
      negativity: "Negative Energy Clearing",
      "love-spell-caster": "Love Ritual & Devotion Work",
      "husband-wife-problems": "Husband & Wife Relationship Counseling",
      "marriage-problems": "Marriage Relationship Guidance",
      "black-magic-removal": "Spiritual Cleansing",
      "evil-spirit-removal": "Spiritual Protection",
      "evil-eye-removal": "Evil Eye Protection",
      "spiritual-healing": "Spiritual Healing",
      "psychic-reading": "Psychic & Tarot Reading",
      "love-marriage-solution": "Love Marriage Guidance",
      "breakup-solution": "Overcoming Breakups & Emotional Healing"
    };

    const selectedService = serviceLabels[contactForm.service] || contactForm.service;

    const formattedText = `Hello Guruji Best Astrologer in London,
I would like to book a confidential consultation.

*Name:* ${contactForm.name}
*Phone:* ${contactForm.phone}
*Email:* ${contactForm.email}
*Service Requested:* ${selectedService}
*Details of my problem:* ${contactForm.message}`;

    const waLink = `https://wa.me/447722131999?text=${encodeURIComponent(formattedText)}`;
    window.location.href = waLink;
    setSuccessMsg(true);
    window.dispatchEvent(new CustomEvent('show-toast', { detail: 'Connecting you to Guruji on WhatsApp...' }));
    // Reset form
    setContactForm({
      name: '',
      phone: '',
      email: '',
      service: 'love',
      message: ''
    });
  };

  const faqs = [
    { q: "Are all consultations completely confidential✦", a: "Yes. Your privacy is our highest priority. Every consultation and all personal information shared with us are kept strictly confidential and handled with complete professionalism." },
    { q: "Do I need my date, time, and place of birth for a reading✦", a: "Providing your date, time, and place of birth allows for a more detailed birth chart analysis. If you don't know your exact birth time, we can still offer guidance using the information available." },
    { q: "How can I book an appointment✦", a: "Booking is simple. Contact us by phone, WhatsApp, email, or through our website's appointment form. We'll help you choose a convenient consultation time and guide you through the next steps." },
    { q: "Can I consult you online or over the phone✦", a: "Absolutely. We provide online, phone, and video consultations, allowing clients from anywhere in the world to receive professional astrology guidance without visiting in person." },
    { q: "How does an astrology consultation work✦", a: "Our consultation begins with understanding your concerns and, where relevant, analyzing your birth details. Based on your unique situation, we provide personalized guidance, practical insights, and suitable spiritual remedies to help you make informed decisions about your future." },
    { q: "Do you offer career, business, and financial guidance✦", a: "Yes. We offer guidance on career growth, business opportunities, job changes, financial planning, and professional success through detailed astrological analysis to help you make confident decisions." },
    { q: "How long does it take to see results from spiritual remedies✦", a: "The timeframe varies depending on each individual's circumstances and the nature of their concerns. Some people notice positive changes sooner, while others may require more time. Consistency and following the recommended guidance are important." }
  ];

  // Auto Rotate Hero Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ paddingBottom: '60px' }}>
      
      {/* 1. HERO CAROUSEL SECTION */}
      <section style={{
        position: 'relative',
        minHeight: '650px',
        display: 'content',
        alignItems: 'center',
        padding: '10px 0',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
        background: 'rgba(20, 1, 8, 0.4)'
      }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px',
          alignItems: 'center',
        }} id="hero-grid">
          
          {/* Hero Left Content (Static Intro) */}
          <div style={{ textAlign: 'left', zIndex: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span className="ornament-star">✦</span>
              <span style={{
                fontSize: '11px',
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.25em',
                color: 'var(--gold)',
                fontWeight: '600'
              }}>
                DIVINE PSYCHIC ASTROLOGY
              </span>
            </div>
            
            <h1 className="font-display" style={{
              fontSize: '44px',
              fontWeight: '900',
              lineHeight: '1.2',
              marginBottom: '15px',
              color: '#fffdf6',
              letterSpacing: '-0.035em'
            }}>
              Trusted Astrological Guidance
              <span style={{
                display: 'block',
                marginTop: '5px',
                background: 'linear-gradient(180deg, #fff4bc 0%, #ffc451 52%, #e28c24 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
              }}>& Spiritual Healing</span>
            </h1>
            
            <p className="font-display" style={{
              fontSize: '18px',
              color: '#ffffff',
              fontWeight: '500',
              marginBottom: '15px',
              lineHeight: '1.4'
            }}>
              Every life has a story. Every challenge has a purpose.
            </p>
            
            <p style={{
              fontSize: '14px',
              color: 'var(--text-primary)',
              marginBottom: '15px',
              lineHeight: '1.7',
              maxWidth: '520px'
            }}>
              With over 35 years of mastery in Vedic Astrology, Psychic Astrology, and spiritual guidance, Guruji provides personalized consultations to help you navigate life's challenges and find your true path.
            </p>

            <p style={{
              fontSize: '13px',
              color: 'var(--gold-soft)',
              fontStyle: 'italic',
              marginBottom: '30px'
            }}>
              Available in London and worldwide by appointment.
            </p>

            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <button 
                onClick={() => navigateTo('services')}
                className="primary-button"
                style={{ boxShadow: '0 0 8px rgba(212, 175, 55, 0.25)' }}
              >
                Explore Services {"->"}
              </button>
              <button 
                onClick={() => navigateTo('book')}
                className="glass-button"
                style={{ boxShadow: 'none' }}
              >
                Book Session
              </button>
            </div>
          </div>

          {/* Hero Right - Dynamic Slide Image */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            zIndex: 10
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              width: 'min(450px, 100%)',
              aspectRatio: '1/1'
            }} className="hero-wheel-container">
              {/* Glowing Aura back */}
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.35) 0%, transparent 75%)',
                filter: 'blur(30px)',
                pointerEvents: 'none'
              }} />

              {/* #1 Astrologer Badge */}
              <div 
                className="hero-badge-mobile"
                style={{
                  position: 'absolute',
                  top: '15px',
                  left: '15px',
                  zIndex: 15,
                  background: 'var(--btn-gradient)',
                  boxShadow: 'var(--btn-glow-shadow)',
                  color: 'var(--bg-dark)',
                  padding: '6px 14px',
                  borderRadius: '30px',
                  fontFamily: 'var(--font-display)',
                  fontWeight: '800',
                  fontSize: '12px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  pointerEvents: 'none',
                  border: '1px solid var(--gold)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Star size={12} fill="currentColor" /> #1 ASTROLOGER
              </div>

              {/* Inner Slide Image - Zoom-reveal animations trigger on change */}
              <img 
                key={activeSlide}
                src={slides[activeSlide].image} 
                alt={slides[activeSlide].title} 
                className="text-popup-anim"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'absolute',
                  boxShadow: 'inset 0 0 35px rgba(0,0,0,0.9), 0 0 35px rgba(212, 175, 55, 0.45)',
                  border: '4px solid var(--gold)',
                  borderRadius: '24px'
                }}
              />

              {/* Active Service Title overlay */}
              <div 
                className="hero-overlay-card"
                style={{
                  position: 'absolute',
                  bottom: '15px',
                  left: '15px',
                  right: '15px',
                  background: 'rgba(4, 8, 23, 0.85)',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                  padding: '12px 18px',
                  borderRadius: '12px',
                  color: 'var(--cream)',
                  textAlign: 'center',
                  zIndex: 16,
                  cursor: 'pointer',
                  backdropFilter: 'blur(5px)',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => navigateTo('service-detail', slides[activeSlide].slug)}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--gold)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.25)'}
              >
                <h4 className="font-display" style={{ fontSize: '14px', fontWeight: 'bold', color: 'var(--gold-soft)', margin: '0 0 2px 0', letterSpacing: '0.05em' }}>
                  {slides[activeSlide].title}
                </h4>
                <p style={{ fontSize: '11px', color: 'var(--text-muted)', margin: 0 }}>
                  Click to explore service remedies {"->"}
                </p>
              </div>
            </div>

            {/* Slider Dots below image */}
            <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
              {slides.map((_, i) => (
                <div 
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  style={{
                    width: activeSlide === i ? '32px' : '8px',
                    height: '8px',
                    background: activeSlide === i ? 'var(--gold)' : 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section (After Hero Grid) */}
        <div className="container" style={{ marginTop: '40px', zIndex: 10 }}>
          <div style={{
            background: 'rgba(12, 6, 26, 0.8)',
            border: '1.5px solid rgba(212, 175, 55, 0.18)',
            borderRadius: '100px',
            padding: '24px 30px',
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.5), inset 0 0 15px rgba(212, 175, 55, 0.08)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            margin: '0 auto'
          }} id="stats-grid">
            {[
              { end: 20000, suffix: "+", label: "LIVES TRANSFORMED", icon: <Users size={18} /> },
              { end: 35, suffix: "+", label: "YEARS OF MASTERY", icon: <Award size={18} /> },
              { end: 65, suffix: "+", label: "COUNTRIES SERVED", icon: <Globe size={18} /> },
              { end: 98, suffix: "%", label: "SUCCESS RATE", icon: <Star size={18} /> }
            ].map((stat, i) => (
              <div 
                key={i} 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  borderRight: i < 3 ? '1px solid rgba(212, 175, 55, 0.15)' : 'none',
                  paddingRight: i < 3 ? '20px' : '0',
                  flex: 1,
                  justifyContent: 'center'
                }}
                className="stat-item-responsive"
              >
                {/* Gold Mini Icon */}
                <div style={{
                  color: 'var(--gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0.95
                }}>
                  {stat.icon}
                </div>

                {/* Text Content Inline/Compact */}
                <div style={{ textAlign: 'left' }}>
                  <h3 className="font-display text-gold-gradient" style={{ 
                    fontSize: '26px', 
                    fontWeight: '900', 
                    margin: 0,
                    lineHeight: '1',
                    letterSpacing: '0.02em'
                  }}>
                    <Counter end={stat.end} suffix={stat.suffix} />
                  </h3>
                  <p style={{ 
                    fontSize: '9.5px', 
                    color: 'var(--text-muted)', 
                    letterSpacing: '0.08em', 
                    fontWeight: '700', 
                    textTransform: 'uppercase',
                    margin: '4px 0 0 0',
                    lineHeight: '1'
                  }}>
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOON PHASES QUOTE CARD */}
      <div className="container" style={{ marginTop: '30px', marginBottom: '50px', zIndex: 10 }}>
        <div style={{
          backgroundImage: `linear-gradient(rgba(76, 53, 117, 0.45), rgba(20, 8, 38, 0.78)), url(${moonJourneyBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          border: '1.5px solid rgba(212, 175, 55, 0.25)',
          borderRadius: '24px',
          padding: '100px 30px 50px 30px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 30px rgba(212, 175, 55, 0.05)',
          minHeight: '360px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {/* Subtitle with high-contrast text shadow */}
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: '11px',
            color: 'var(--gold-soft)',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            marginBottom: '15px',
            fontWeight: '600',
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.95), 0 4px 15px rgba(0, 0, 0, 0.95)'
          }}>
            THE JOURNEY, PHASE BY PHASE
          </p>

          {/* Quote Heading with high-contrast text shadow */}
          <h2 className="quote-card-heading-mobile" style={{
            fontFamily: 'Georgia, serif',
            fontStyle: 'italic',
            fontSize: '28px',
            color: '#ffffff',
            lineHeight: '1.45',
            maxWidth: '750px',
            margin: '0 0 10px 0',
            fontWeight: 'normal',
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.95), 0 4px 20px rgba(0, 0, 0, 0.95)'
          }}>
            "Helping You Find Clarity Through Life's Uncertainties."
          </h2>
        </div>
      </div>

      {/* 4. GURUJI DETAILS & BIO */}
      <section className="section-padding" style={{
        background: 'rgba(4, 1, 8, 0.4)',
        borderY: '1px solid rgba(212, 175, 55, 0.15)'
      }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '50px',
          alignItems: 'center'
        }} id="stats-grid">
          
          {/* Left Col - Guruji Image with Aura Glow */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}>
            {/* Golden Aura Glow */}
            <div style={{
              position: 'absolute',
              width: '280px',
              height: '380px',
              background: 'radial-gradient(circle, rgba(212, 175, 55, 0.35) 0%, transparent 75%)',
              filter: 'blur(30px)',
              pointerEvents: 'none',
              zIndex: 1
            }} />
            <img 
              src={astrologerImg} 
              alt="Guruji Best Astrologer in London" 
              style={{
                width: '100%',
                maxWidth: '330px',
                height: '400px',
                borderRadius: '24px',
                border: '2px solid var(--gold)',
                boxShadow: '0 0 50px rgba(212, 175, 55, 0.4)',
                zIndex: 2,
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Right Col - Bio */}
          <div style={{ textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <span className="ornament-star">✦</span>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-display)', color: 'var(--gold)', letterSpacing: '0.2em' }}>ABOUT GURUJI</span>
            </div>
            <h2 className="font-display text-gold-gradient" style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>
              Trusted Astrology Guidance for Life's Important Decisions
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-primary)', marginBottom: '15px', lineHeight: '1.7' }}>
              Best Astrologer in London is dedicated to providing personalized astrology consultations to help individuals gain clarity, confidence, and direction. Drawing on traditional astrological knowledge, including Vedic Astrology, Lal Kitab, and Nadi Astrology, Guruji offers guidance for love, relationships, marriage, career, business, finance, and family matters.
            </p>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '30px', lineHeight: '1.7' }}>
              Every consultation is tailored to your unique birth chart, providing meaningful insights and practical guidance to help you make informed decisions and navigate life's challenges with confidence.
            </p>

            <blockquote className="glass-card" style={{
              padding: '20px',
              borderLeft: '4px solid var(--gold)',
              fontStyle: 'italic',
              fontSize: '14px',
              color: 'var(--gold-soft)',
              background: 'rgba(212, 175, 55, 0.03)'
            }}>
              "Every problem has a solution. Every soul deserves peace."
              <cite style={{ display: 'block', fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', marginTop: '10px', color: 'var(--gold)', fontStyle: 'normal' }}>
                - BEST ASTROLOGER IN LONDON
              </cite>
            </blockquote>
          </div>

        </div>
      </section>

      {/* 3. CORE SERVICES LIST */}
      <section className="section-padding" style={{ position: 'relative', background: 'rgba(20, 1, 8, 0.8)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div className="ornament-line">
              <span className="ornament-star">✦</span>
            </div>
            <h2 className="font-display text-gold-gradient" style={{ fontSize: '36px', fontWeight: 'bold' }}>
              Our Astrological Services
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '10px auto 0 auto', fontSize: '15px' }}>
              Authentic psychic insight, ancient mantras and personalised spiritual guidance to help dissolve obstacles in your path.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '25px',
          }}>
            {services.map(s => (
              <div 
                key={s.slug} 
                className="glass-card" 
                style={{
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  borderRadius: '16px'
                }}
                onClick={() => navigateTo('service-detail', s.slug)}
              >
                <div style={{
                  width: '100%',
                  height: '140px',
                  overflow: 'hidden',
                  position: 'relative',
                  borderBottom: '1px solid rgba(212, 175, 55, 0.15)'
                }}>
                  <img 
                    src={serviceImages[s.slug]} 
                    alt={s.title} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '10px',
                    width: '34px',
                    height: '34px',
                    borderRadius: '8px',
                    background: 'rgba(8, 2, 18, 0.85)',
                    border: '1px solid var(--gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-glow)',
                    backdropFilter: 'blur(4px)'
                  }}>
                    {s.icon}
                  </div>
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 className="font-display" style={{ fontSize: '17px', color: 'var(--cream)', marginBottom: '8px' }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '15px' }}>
                    {s.short}
                  </p>
                  <span className="font-display" style={{
                    fontSize: '11px',
                    letterSpacing: '0.05em',
                    color: 'var(--gold)',
                    fontWeight: '700'
                  }}>
                    LEARN DETAILS {"->"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: HOW IT WORKS SECTION */}
      <section className="section-padding" style={{ 
        position: 'relative', 
        borderTop: '1px solid rgba(212, 175, 55, 0.1)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
        background: 'rgba(8, 2, 18, 0.25)' 
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '12px' }}>
              <span className="ornament-star" style={{ color: 'var(--gold)' }}>✦</span>
              <span style={{
                fontSize: '11px',
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.25em',
                color: 'var(--gold)',
                fontWeight: '600'
              }}>
                SIMPLE PROCESS
              </span>
            </div>
            <h2 className="font-display text-gold-gradient" style={{ fontSize: '36px', fontWeight: 'bold', margin: '0 0 15px 0' }}>
              How Your Journey Works
            </h2>
            <div className="ornament-line" style={{ maxWidth: '180px', margin: '0 auto' }} />
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', maxWidth: '600px', margin: '15px auto 0 auto', lineHeight: '1.6' }}>
              We have designed a simple, secure, and personalized process to help you find clarity and solutions with absolute ease.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
            position: 'relative'
          }} id="how-it-works-grid">
            
            {/* Step 1 */}
            <div className="glass-card" style={{ 
              padding: '35px 25px', 
              textAlign: 'center',
              border: '1.5px solid rgba(212, 175, 55, 0.15)',
              borderRadius: '20px',
              background: 'rgba(10, 5, 24, 0.45)',
              position: 'relative'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--gold), var(--gold-soft))',
                color: 'var(--bg-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto',
                fontWeight: 'bold',
                fontSize: '18px',
                boxShadow: '0 0 15px rgba(212, 175, 55, 0.35)'
              }}>
                1
              </div>
              <h3 className="font-display" style={{ fontSize: '18px', color: 'var(--cream)', fontWeight: 'bold', marginBottom: '12px' }}>
                Connect With Us
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-primary)', lineHeight: '1.6', margin: 0 }}>
                Reach out via WhatsApp, phone, or our private inquiry form. Share your concerns in absolute confidentiality.
              </p>
            </div>

            {/* Step 2 */}
            <div className="glass-card" style={{ 
              padding: '35px 25px', 
              textAlign: 'center',
              border: '1.5px solid rgba(212, 175, 55, 0.15)',
              borderRadius: '20px',
              background: 'rgba(10, 5, 24, 0.45)',
              position: 'relative'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--gold), var(--gold-soft))',
                color: 'var(--bg-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto',
                fontWeight: 'bold',
                fontSize: '18px',
                boxShadow: '0 0 15px rgba(212, 175, 55, 0.35)'
              }}>
                2
              </div>
              <h3 className="font-display" style={{ fontSize: '18px', color: 'var(--cream)', fontWeight: 'bold', marginBottom: '12px' }}>
                Deep Chart Analysis
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-primary)', lineHeight: '1.6', margin: 0 }}>
                Guruji studies your birth details and scans your current planetary alignments to pinpoint the root cause of your obstacles.
              </p>
            </div>

            {/* Step 3 */}
            <div className="glass-card" style={{ 
              padding: '35px 25px', 
              textAlign: 'center',
              border: '1.5px solid rgba(212, 175, 55, 0.15)',
              borderRadius: '20px',
              background: 'rgba(10, 5, 24, 0.45)',
              position: 'relative'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--gold), var(--gold-soft))',
                color: 'var(--bg-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px auto',
                fontWeight: 'bold',
                fontSize: '18px',
                boxShadow: '0 0 15px rgba(212, 175, 55, 0.35)'
              }}>
                3
              </div>
              <h3 className="font-display" style={{ fontSize: '18px', color: 'var(--cream)', fontWeight: 'bold', marginBottom: '12px' }}>
                Personalized Remedies
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-primary)', lineHeight: '1.6', margin: 0 }}>
                Receive precise spiritual remedies (mantras, yantras, or prayers) tailored specifically to restore positive energies and love.
              </p>
            </div>

          </div>
        </div>
      </section>



      {/* 5. CLIENT TESTIMONIALS SLIDER */}
      <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="font-display text-gold-gradient text-popup-anim" style={{ fontSize: '34px', fontWeight: 'bold', marginBottom: '15px' }}>
              Stories of Transformation
            </h2>
            <p style={{ color: '#8e9bb0', maxWidth: '600px', margin: '10px auto 0 auto', fontSize: '15.5px', lineHeight: '1.6' }}>
              Trusted by thousands of individuals across the globe - hear their stories of transformation.
            </p>
          </div>

          {/* Testimonial cards wrapper */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '25px',
            marginBottom: '40px'
          }} id="stats-grid">
            {/* Show reviews slice matching current page index */}
            {reviews.slice(activeReviewPage * reviewsPerPage, (activeReviewPage * reviewsPerPage) + reviewsPerPage).map((rev, i) => (
              <div 
                key={i} 
                className="glass-card text-popup-anim" 
                style={{
                  padding: '30px 24px',
                  textAlign: 'left',
                  borderRadius: '20px',
                  border: '1.5px solid rgba(212, 175, 55, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '260px',
                  background: 'rgba(10, 17, 40, 0.45)',
                  boxShadow: 'var(--glass-shadow)',
                  transition: 'var(--transition-smooth)'
                }}
              >
                <div>
                  {/* Header: Quotes & Stars */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                    <span style={{ fontSize: '36px', color: 'rgba(212, 175, 55, 0.45)', fontWeight: 'bold', fontFamily: 'serif', lineHeight: '1' }}>"</span>
                    <div style={{ display: 'flex', gap: '2px' }}>
                      {[...Array(5)].map((_, idx) => (
                        <Star key={idx} size={13} fill="var(--gold)" stroke="none" />
                      ))}
                    </div>
                  </div>

                  {/* Quote text */}
                  <p style={{
                    fontSize: '13.5px',
                    color: 'var(--cream)',
                    lineHeight: '1.6',
                    margin: '0 0 20px 0',
                    fontStyle: 'italic'
                  }}>
                    "{rev.text}"
                  </p>
                </div>

                {/* Client Info Block */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {/* Initials Circle */}
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--bg-cosmic), var(--bg-deep))',
                    border: '1.5px solid var(--gold)',
                    color: 'var(--gold-soft)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '13px',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                    flexShrink: 0
                  }}>
                    {rev.initials}
                  </div>

                  <div>
                    <h4 style={{ fontSize: '13.5px', color: 'var(--cream)', fontWeight: 'bold', margin: '0' }}>
                      {rev.name}
                    </h4>
                    <p style={{ fontSize: '11px', color: 'var(--text-muted)', margin: '2px 0 0 0', fontWeight: '500' }}>
                      {rev.loc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Pagination controls */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
            {[...Array(totalPages)].map((_, pageIdx) => (
              <button
                key={pageIdx}
                onClick={() => {
                  setActiveReviewPage(pageIdx);
                  window.dispatchEvent(new CustomEvent('show-toast', { detail: `Viewing slide ${pageIdx + 1} of stories...` }));
                }}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: activeReviewPage === pageIdx ? 'var(--gold)' : 'rgba(255, 255, 255, 0.15)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.3s ease',
                  boxShadow: activeReviewPage === pageIdx ? '0 0 8px var(--gold)' : 'none'
                }}
                aria-label={`Go to slide ${pageIdx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>



      {/* 7. FAQs SECTION */}
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div className="ornament-line">
              <span className="ornament-star">✦</span>
            </div>
            <h2 className="font-display text-gold-gradient" style={{ fontSize: '36px', fontWeight: 'bold' }}>
              Everything You Need to Know
            </h2>
            <p style={{ color: 'var(--text-muted)', margin: '10px auto 0 auto', fontSize: '15px', maxWidth: '600px' }}>
              Find answers to common questions about astrology consultations, relationship guidance, career predictions, spiritual solutions, and online appointments to help you book with confidence.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {faqs.map((faq, i) => {
              const isSelected = openFaq === i;
              return (
                <div 
                  key={i} 
                  className="glass-card" 
                  style={{
                    padding: '20px 24px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    background: isSelected ? 'rgba(212, 175, 55, 0.05)' : 'var(--glass-bg)'
                  }}
                  onClick={() => setOpenFaq(isSelected ? null : i)}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontWeight: 'bold',
                    fontSize: '15px',
                    color: isSelected ? 'var(--gold-soft)' : 'var(--cream)'
                  }}>
                    <span>{faq.q}</span>
                    <span style={{ fontSize: '18px', color: 'var(--gold)' }}>
                      {isSelected ? '-' : '+'}
                    </span>
                  </div>
                  
                  {isSelected && (
                    <p style={{
                      marginTop: '15px',
                      fontSize: '13px',
                      color: 'var(--text-primary)',
                      lineHeight: '1.6',
                      borderTop: '1px solid rgba(212, 175, 55, 0.15)',
                      paddingTop: '12px'
                    }}>
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CONTACT US SECTION */}
      <section className="section-padding" style={{
        background: 'rgba(16, 7, 36, 0.45)',
        borderTop: '1px solid rgba(212, 175, 55, 0.15)',
        position: 'relative'
      }} id="contact">
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at bottom right, rgba(212, 175, 55, 0.05) 0%, transparent 60%)',
          pointerEvents: 'none'
        }} />
        
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div className="ornament-line">
              <span className="ornament-star">✦</span>
            </div>
            <h2 className="font-display text-gold-gradient" style={{ fontSize: '38px', fontWeight: 'bold' }}>
              Begin Your Spiritual Journey
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '10px auto 0 auto', fontSize: '15px' }}>
              Connect with the Best Astrologer in London today. Get immediate solutions for love, family, health, and negative entities.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '50px',
            alignItems: 'stretch'
          }} id="stats-grid">
            
            {/* Left Column: Contact details & cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'space-between' }}>
              
              {/* Phone Card */}
              <div className="glass-card" style={{
                padding: '25px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '15px',
                border: '1px solid rgba(212, 175, 55, 0.2)'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'rgba(212, 175, 55, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold)',
                  flexShrink: 0
                }}>
                  <Phone size={24} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <h3 className="font-display" style={{ fontSize: '16px', color: 'var(--cream)', marginBottom: '5px' }}>Call Direct Line</h3>
                  <a href="tel:+447722131999" style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--gold)', textDecoration: 'none' }} className="hover-gold">
                    +44 7722 131999
                  </a>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
                    Available daily from 8:00 AM to 8:00 PM.
                  </p>
                </div>
              </div>

              {/* WhatsApp Card */}
              <div className="glass-card" style={{
                padding: '25px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '15px',
                border: '1px solid rgba(212, 175, 55, 0.2)'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'rgba(37, 211, 102, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#25d366',
                  flexShrink: 0
                }}>
                  <MessageSquare size={24} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <h3 className="font-display" style={{ fontSize: '16px', color: 'var(--cream)', marginBottom: '5px' }}>WhatsApp Instant Chat</h3>
                  <a href="https://wa.me/447722131999" target="_blank" rel="noopener noreferrer" style={{ fontSize: '18px', fontWeight: 'bold', color: '#25d366', textDecoration: 'none' }}>
                    Chat with Guruji
                  </a>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
                    Average response time: 5 minutes. Secure & confidential.
                  </p>
                </div>
              </div>

              {/* Mail Card */}
              <div className="glass-card" style={{
                padding: '25px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '15px',
                border: '1px solid rgba(212, 175, 55, 0.2)'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'rgba(212, 175, 55, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold)',
                  flexShrink: 0
                }}>
                  <Mail size={24} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <h3 className="font-display" style={{ fontSize: '16px', color: 'var(--cream)', marginBottom: '5px' }}>Confidential Email</h3>
                  <a href="mailto:thebestastrologerlondon@gmail.com" style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--gold-soft)', textDecoration: 'none', overflowWrap: 'anywhere' }}>
                    thebestastrologerlondon@gmail.com
                  </a>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
                    Send detailed documents or birth information. Replies are handled during 8:00 AM-8:00 PM working hours.
                  </p>
                </div>
              </div>

              {/* Location Card */}
              <div className="glass-card" style={{
                padding: '25px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '15px',
                border: '1px solid rgba(212, 175, 55, 0.2)'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'rgba(212, 175, 55, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold)',
                  flexShrink: 0
                }}>
                  <MapPin size={24} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <h3 className="font-display" style={{ fontSize: '16px', color: 'var(--cream)', marginBottom: '5px' }}>Office Location</h3>
                  <p style={{ fontSize: '15px', fontWeight: 'bold', color: 'var(--cream)', margin: 0 }}>
                    241 High Street, Walthamstow, London E17 7BH
                  </p>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
                    Appointments available daily from 8:00 AM to 8:00 PM.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Confidential Form */}
            <div className="glass-card" style={{
              padding: '40px 30px',
              border: '1.5px solid var(--gold)',
              boxShadow: '0 0 35px rgba(212, 175, 55, 0.12)'
            }}>
              <h3 className="font-display text-gold-gradient" style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px', textAlign: 'left' }}>
                Confidential Inquiry
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '30px', textAlign: 'left' }}>
                Please provide your birth details and describe your challenges below. Your details will be routed directly to Guruji.
              </p>

              <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }} className="form-row-2">
                  <div style={{ textAlign: 'left' }}>
                    <label style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--gold)', letterSpacing: '0.05em', display: 'block', marginBottom: '8px' }}>
                      YOUR NAME
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g. John Doe"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1.5px solid rgba(212, 175, 55, 0.25)',
                        borderRadius: '8px',
                        color: 'white',
                        fontSize: '14px',
                        outline: 'none',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(212, 175, 55, 0.25)'}
                    />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <label style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--gold)', letterSpacing: '0.05em', display: 'block', marginBottom: '8px' }}>
                      PHONE NUMBER
                    </label>
                    <input 
                      type="tel" 
                      placeholder="e.g. +1 (123) 456-7890"
                      required
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1.5px solid rgba(212, 175, 55, 0.25)',
                        borderRadius: '8px',
                        color: 'white',
                        fontSize: '14px',
                        outline: 'none',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(212, 175, 55, 0.25)'}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }} className="form-row-2">
                  <div style={{ textAlign: 'left' }}>
                    <label style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--gold)', letterSpacing: '0.05em', display: 'block', marginBottom: '8px' }}>
                      EMAIL ADDRESS
                    </label>
                    <input 
                      type="email" 
                      placeholder="e.g. john@example.com"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1.5px solid rgba(212, 175, 55, 0.25)',
                        borderRadius: '8px',
                        color: 'white',
                        fontSize: '14px',
                        outline: 'none',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(212, 175, 55, 0.25)'}
                    />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <label style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--gold)', letterSpacing: '0.05em', display: 'block', marginBottom: '8px' }}>
                      SELECT SERVICE
                    </label>
                    <select 
                      value={contactForm.service}
                      onChange={(e) => setContactForm({...contactForm, service: e.target.value})}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        background: 'var(--bg-deep)',
                        border: '1.5px solid rgba(212, 175, 55, 0.25)',
                        borderRadius: '8px',
                        color: 'white',
                        fontSize: '14px',
                        outline: 'none',
                        cursor: 'pointer',
                        transition: 'border-color 0.3s ease'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(212, 175, 55, 0.25)'}
                    >
                      <option value="love">Reuniting With an Ex-Partner</option>
                      <option value="negativity">Negative Energy Clearing</option>
                      <option value="love-spell-caster">Love Ritual & Devotion Work</option>
                      <option value="husband-wife-problems">Husband & Wife Relationship Counseling</option>
                      <option value="marriage-problems">Marriage Relationship Guidance</option>
                      <option value="black-magic-removal">Spiritual Cleansing</option>
                      <option value="evil-spirit-removal">Spiritual Protection</option>
                      <option value="evil-eye-removal">Evil Eye Protection</option>
                      <option value="spiritual-healing">Spiritual Healing</option>
                      <option value="psychic-reading">Psychic & Tarot Reading</option>
                      <option value="love-marriage-solution">Love Marriage Guidance</option>
                      <option value="breakup-solution">Overcoming Breakups & Emotional Healing</option>
                    </select>
                  </div>
                </div>

                <div style={{ textAlign: 'left' }}>
                  <label style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--gold)', letterSpacing: '0.05em', display: 'block', marginBottom: '8px' }}>
                    DESCRIBE YOUR PROBLEM
                  </label>
                  <textarea 
                    rows="4"
                    placeholder="Provide details about your situation (e.g. date of birth, name of partner, problem details...)"
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1.5px solid rgba(212, 175, 55, 0.25)',
                      borderRadius: '8px',
                      color: 'white',
                      fontSize: '14px',
                      outline: 'none',
                      resize: 'none',
                      lineHeight: '1.5',
                      transition: 'border-color 0.3s ease'
                    }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(212, 175, 55, 0.25)'}
                  />
                </div>

                <button 
                  type="submit" 
                  className="primary-button"
                  style={{
                    width: '100%',
                    padding: '14px 20px',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px'
                  }}
                >
                  <MessageSquare size={18} />
                  SEND INQUIRY VIA WHATSAPP
                </button>

                {successMsg && (
                  <p style={{ fontSize: '13px', color: '#25d366', fontWeight: '600', margin: '5px 0 0 0', textAlign: 'left' }}>
                    âœ" Inquiry submitted! Connecting you to Guruji on WhatsApp...
                  </p>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

