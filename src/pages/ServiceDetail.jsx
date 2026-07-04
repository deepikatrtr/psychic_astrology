import React from 'react';
import { 
  Heart, Shield, Sparkles, Check, Phone, ArrowRight, Zap, 
  HelpCircle, Globe, CheckCircle2, Award, Calendar, Star 
} from 'lucide-react';

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

export default function ServiceDetail({ slug, navigateTo }) {
  // 12 Services basic info
  const services = [
    { 
      slug: "love", 
      title: "Get Ex-Love Back", 
      icon: <Heart size={24} />,
      description: "Powerful psychic guidance, ancient mantras and personalised rituals to bring back lost love and rekindle the bond." 
    },
    { 
      slug: "negativity", 
      title: "Negative Entity Removal", 
      icon: <Shield size={24} />,
      description: "Cleanse your aura, home and energy field through proven spiritual purification rituals and divine fire ceremonies." 
    },
    { 
      slug: "love-spell-caster", 
      title: "Love Spell Caster", 
      icon: <Sparkles size={24} />,
      description: "Time-tested love spells crafted by a master spiritualist to attract, bind and deepen romantic love." 
    },
    { 
      slug: "husband-wife-problems", 
      title: "Husband & Wife Problems", 
      icon: <CheckCircle2 size={24} />,
      description: "Restore harmony, trust and love within your marriage through psychic guidance, mantras and spiritual remedies." 
    },
    { 
      slug: "marriage-problems", 
      title: "Marriage Problems", 
      icon: <Globe size={24} />,
      description: "Solve marriage roadblocks, family disputes, in-law tensions and astrological doshas blocking your union." 
    },
    { 
      slug: "black-magic-removal", 
      title: "Black Magic Removal", 
      icon: <Zap size={24} />,
      description: "Identify and dissolve black magic with powerful counter-rituals, divine protection and lifelong shielding." 
    },
    { 
      slug: "evil-spirit-removal", 
      title: "Evil Spirit Removal", 
      icon: <Shield size={24} />,
      description: "Free yourself, family or home from evil spirit attachments through powerful banishing rituals." 
    },
    { 
      slug: "evil-eye-removal", 
      title: "Evil Eye Removal", 
      icon: <Sparkles size={24} />,
      description: "Detect and dispel the effects of the evil eye with divine remedies, amulets and protective mantras." 
    },
    { 
      slug: "spiritual-healing", 
      title: "Spiritual Healing", 
      icon: <Heart size={24} />,
      description: "Holistic energy healing using mantras, meditation, chakra balancing and divine intervention." 
    },
    { 
      slug: "psychic-reading", 
      title: "Psychic Reading", 
      icon: <HelpCircle size={24} />,
      description: "Insight into your past, present and future through gifted psychic intuition and tarot wisdom." 
    },
    { 
      slug: "love-marriage-solution", 
      title: "Love Marriage Solution", 
      icon: <Globe size={24} />,
      description: "Overcome family resistance, social pressure and astrological doshas blocking your love marriage." 
    },
    { 
      slug: "breakup-solution", 
      title: "Breakup Problem Solution", 
      icon: <Heart size={24} />,
      description: "Heal the wounds of breakup and reopen the path to reconciliation with proven psychic guidance." 
    }
  ];

  const currentService = services.find(s => s.slug === slug) || services[0];

  // Custom Content: Ex-Love Back
  const exLoveContent = [
    {
      h: "Find Solution for How to Get Ex-Love Back with Guidance by the Best Astrologer in London",
      p: "Relationships can sometimes become difficult because of misunderstandings, emotional distance, or communication issues. During these challenging moments, many people look for guidance and emotional clarity to better understand their love life. The Best Astrologer in London offers spiritual and astrology-based consultations for individuals who wish to explore ways to Get Ex-Love Back and improve their relationship journey in a positive and supportive manner."
    },
    {
      h: "What Astrology Solutions the Best Astrologer in London Provides for Getting Ex-Love Back?",
      p: "Every relationship has its own story, and people often seek different ways to reconnect with their emotions after a breakup. The Best Astrologer in London provides personalized consultations focused on love, relationships, and emotional well-being. His approach is designed to help individuals gain a better understanding of their relationship concerns while exploring spiritual guidance and astrology insights. People searching online for ways to Get Back Together With Ex often look for experienced advisors who offer private and respectful consultations."
    },
    {
      h: "How the Best Astrologer in London Helps With Reuniting With an Ex-Partner",
      p: "Love problems can create stress and confusion in daily life. The Best Astrologer in London offers astrology consultations that focus on relationship compatibility, emotional understanding, and communication guidance. Whether you are facing trust issues, misunderstandings, or emotional distance, spiritual consultation may help you explore feelings with a calm and balanced perspective. Many individuals interested in topics related to Get Ex-Love Back choose astrology guidance as a way to seek emotional support and relationship direction."
    },
    {
      h: "What Love Problem Solutions Does the Best Astrologer in London Provide?",
      p: "The Best Astrologer in London provides confidential and personalized consultations for clients worldwide. His sessions are designed to help people discuss relationship concerns in a comfortable environment. Every consultation is based on individual situations and personal experiences. People looking to Get Back Together With Ex often prefer guidance that focuses on emotional awareness, positive communication, and self-reflection instead of unrealistic promises."
    },
    {
      h: "How to Book Consultation for Ex-Love Back?",
      p: "Booking a consultation with the Best Astrologer in London for relationship guidance is simple and convenient. You can connect by phone, WhatsApp, or online inquiry to discuss concerns related to love, breakup, or emotional connection. During the consultation, you can share your relationship situation privately and receive personalized spiritual and astrology-based guidance tailored to your needs. Whether you are looking for clarity about the relationship or exploring ways to Get Ex-Love Back and Get Back Together With Ex, the consultation process is designed to provide a comfortable and confidential experience."
    }
  ];

  // Custom Content: Negative Entity Removal
  const negativityContent = [
    {
      h: "Know How to Remove Negative Entity - (Evil Spirit, Evil Eye, Voodoo & Witchcraft)",
      p: "Many people across the UK experience an unexplained heaviness in their lives - persistent low energy, recurring bad luck, emotional blockages, or a feeling that something unseen is holding them back. In spiritual traditions, these experiences are sometimes associated with negative energetic influences or attachments. Negative entity removal is a dedicated spiritual practice focused on identifying, cleansing, and releasing these unwanted influences so that individuals can move forward with greater clarity and peace."
    },
    {
      h: "How the Best Astrologer in London Performs Spiritual Cleansing",
      p: "The Best Astrologer in London understands that every individual's spiritual journey is unique and offers a compassionate, personalised approach to negative entity removal, drawing on ancient spiritual knowledge and years of dedicated practice. Each session begins with a thorough spiritual assessment to understand the nature of the energetic disturbance, allowing for a targeted and respectful cleansing process tailored to your specific circumstances."
    },
    {
      h: "What are the Signs & Benefits of Negative Entity Removal?",
      p: "There are several experiences that may indicate the presence of unwanted energetic attachments. These can include sudden changes in mood or behaviour, recurring nightmares or disturbed sleep, difficulty maintaining positive relationships, or a persistent sense of being watched or followed. If you have been experiencing any of these without a clear explanation, exploring negative entity removal with the Best Astrologer in London may offer the insight and relief you have been searching for."
    },
    {
      h: "What to Expect During Evil Spirit, Evil Eye Cleansing Session?",
      p: "The Best Astrologer in London is committed to providing a safe, respectful, and confidential experience for every client. The negative entity removal process is approached with sensitivity, cultural awareness, and deep spiritual integrity. Whether you are new to spiritual practices or have explored them for years, you will be welcomed without judgement. Each session works to restore harmony and balance, helping clients feel grounded, protected, and spiritually renewed."
    },
    {
      h: "Take the First Step Towards Spiritual Freedom Today",
      p: "If you are ready to explore the possibility of negative entity removal and reclaim your sense of wellbeing, the Best Astrologer in London is here to guide you. Serving clients across the UK and worldwide, consultations are thoughtful, professional, and deeply rooted in spiritual tradition. Reach out today to schedule your personal session and begin your journey towards a lighter, more balanced life. Your path to clarity and inner peace starts with a single conversation."
    }
  ];

  return (
    <div style={{ paddingBottom: '60px' }}>
      
      {/* 1. HERO HEADER */}
      <section className="section-padding" style={{
        position: 'relative',
        borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
        background: 'rgba(8, 2, 18, 0.4)',
        textAlign: 'left'
      }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <span style={{
              fontSize: '11px',
              fontFamily: 'var(--font-display)',
              letterSpacing: '0.25em',
              color: 'var(--gold)',
              fontWeight: '600'
            }}>
              DIVINE SERVICE DETAILS
            </span>
          </div>

          <h1 className="font-display text-gold-gradient text-shadow-gold text-popup-anim" style={{ fontSize: '38px', fontWeight: '900', marginBottom: '20px' }}>
            {currentService.title}
          </h1>
          <div className="ornament-line" style={{ maxWidth: '180px', margin: '0 0 20px 0' }} />
          <p style={{
            fontSize: '16px',
            color: 'var(--text-primary)',
            maxWidth: '750px',
            lineHeight: '1.7'
          }}>
            {currentService.description}
          </p>
        </div>
      </section>

      {/* 2. PAGE CONTENT LAYOUT */}
      <section style={{ padding: '60px 0' }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '40px',
          textAlign: 'left'
        }} id="detail-layout">
          
          {/* Main Left Content */}
          <div>
            
            {/* RENDER CUSTOM EX-LOVE BACK DETAILS */}
            {slug === 'love' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                {exLoveContent.map((sec, i) => (
                  <article key={i} className="glass-card" style={{ padding: '30px 40px' }}>
                    <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '15px' }}>
                      <span className="font-display text-gold" style={{ fontSize: '24px', fontWeight: '900' }}>0{i+1}</span>
                      <h3 className="font-display" style={{ fontSize: '20px', color: 'var(--cream)' }}>{sec.h}</h3>
                    </div>
                    <p style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: '1.8' }}>{sec.p}</p>
                  </article>
                ))}
              </div>
            )}

            {/* RENDER CUSTOM NEGATIVE ENTITY REMOVAL DETAILS */}
            {slug === 'negativity' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                {negativityContent.map((sec, i) => (
                  <article key={i} className="glass-card" style={{ padding: '30px 40px' }}>
                    <div style={{ display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '15px' }}>
                      <span className="font-display text-gold" style={{ fontSize: '24px', fontWeight: '900' }}>0{i+1}</span>
                      <h3 className="font-display" style={{ fontSize: '20px', color: 'var(--cream)' }}>{sec.h}</h3>
                    </div>
                    <p style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: '1.8' }}>{sec.p}</p>
                  </article>
                ))}
              </div>
            )}

            {/* RENDER STANDARD DYNAMIC SERVICES LAYOUT */}
            {slug !== 'love' && slug !== 'negativity' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
                
                {/* 1. Process block */}
                <div className="glass-card" style={{ padding: '30px 40px' }}>
                  <h3 className="font-display text-gold-gradient" style={{ fontSize: '22px', marginBottom: '15px' }}>
                    The Psychic Healing Process
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: '1.8', marginBottom: '15px' }}>
                    {currentService.description} Through deep ancestral rituals, powerful mantra recitations and personalized yantras, the Best Astrologer in London channels divine cosmic energy to dissolve the karmic blockages standing between you and the life you seek.
                  </p>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                    Every case begins with a confidential reading of your birth chart and an intuitive psychic scan of your aura. From there, Guruji prescribes a precise combination of remedies - specific fasting days, powerful chants, gemstone recommendations, protective amulets and home cleansing rituals - tailored entirely to your specific situation.
                  </p>
                </div>

                {/* 2. Detailed remedies */}
                <div className="glass-card" style={{ padding: '30px 40px' }}>
                  <h3 className="font-display text-gold-gradient" style={{ fontSize: '22px', marginBottom: '20px' }}>
                    Detailed Rituals & Remedies Included
                  </h3>
                  <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px' }}>
                    {[
                      "Personalised birth-chart and karmic analysis",
                      "Powerful mantra recitations performed personally by Guruji",
                      "Personalized yantra crafted, activated and consecrated",
                      "Deep energy cleansing of your home, workspace and aura",
                      "Protective amulet (Kavach) to seal and sustain the result",
                      "Lifetime follow-up support until full transformation manifests",
                      "Specific gemstone and rudraksha suggestions",
                      "Customised fasting and offering schedules"
                    ].map((rem, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px' }}>
                        <div style={{ color: 'var(--gold)', shrink: 0, marginTop: '2px' }}><Check size={14} /></div>
                        <span>{rem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. Expected experiences */}
                <div className="glass-card" style={{ padding: '30px 40px' }}>
                  <h3 className="font-display text-gold-gradient" style={{ fontSize: '22px', marginBottom: '20px' }}>
                    What You Will Experience
                  </h3>
                  <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px' }}>
                    {[
                      "A profound sense of inner peace returning to your life",
                      "Doors that were closed beginning to open naturally",
                      "Renewed emotional connection with the person you love",
                      "Family harmony, mutual respect and rekindled affection",
                      "Freedom from invisible blocks, fears and negative patterns",
                      "Clarity about your path forward and divine purpose"
                    ].map((exp, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px' }}>
                        <div style={{ color: 'var(--gold)', shrink: 0, marginTop: '2px' }}><Check size={14} /></div>
                        <span>{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 4. Timeline stages */}
                <div className="glass-card" style={{ padding: '30px 40px' }}>
                  <h3 className="font-display text-gold-gradient" style={{ fontSize: '22px', marginBottom: '15px' }}>
                    Three Stages of Psychic Healing
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: '1.8' }}>
                    The healing unfolds in three proven stages: <strong>discovery</strong> (uncovering the spiritual root cause), <strong>remedy</strong> (active mantras, rituals and energy work), and <strong>protection</strong> (long-term spiritual safeguards and amulets). Most clients begin to notice positive shifts within 7 to 21 days, with full results manifesting within 1-3 months.
                  </p>
                </div>

              </div>
            )}
          </div>

          {/* Sidebar Right Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            
            {/* Callout box */}
            <div className="glass-card" style={{
              textAlign: 'center',
              background: 'rgba(212, 175, 55, 0.04)',
              borderColor: 'var(--gold)',
              overflow: 'hidden',
              borderRadius: '16px'
            }}>
              <div style={{
                width: '100%',
                height: '180px',
                overflow: 'hidden',
                borderBottom: '1px solid rgba(212, 175, 55, 0.2)'
              }}>
                <img 
                  src={serviceImages[slug] || imgLove} 
                  alt={currentService.title} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              
              <div style={{ padding: '24px 20px 30px 20px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', color: 'var(--gold)', marginBottom: '10px' }}>
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <h4 className="font-display text-gold-gradient" style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '10px' }}>
                  98% Success Rate
                </h4>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '20px' }}>
                  From over 10,000+ consultations all over the world. Complete confidentiality.
                </p>
                
                <button 
                  onClick={() => navigateTo('book')}
                  className="primary-button"
                  style={{ width: '100%', marginBottom: '10px' }}
                >
                  Book Session Now
                </button>
                <a 
                  href="https://wa.me/447722131999"
                  className="glass-button"
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    width: '100%', 
                    textDecoration: 'none',
                    borderColor: 'var(--emerald)',
                    color: 'var(--emerald-glow)'
                  }}
                >
                  WhatsApp Chat
                </a>
              </div>
            </div>

            {/* Navigation to other services */}
            <div className="glass-card" style={{ padding: '24px' }}>
              <h4 className="font-display" style={{
                fontSize: '16px',
                color: 'var(--gold-soft)',
                borderBottom: '1px solid rgba(212, 175, 55, 0.15)',
                paddingBottom: '10px',
                marginBottom: '15px'
              }}>
                Explore Other Services
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {services.filter(s => s.slug !== slug).slice(0, 7).map(other => (
                  <li key={other.slug}>
                    <button
                      onClick={() => navigateTo('service-detail', other.slug)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-primary)',
                        fontSize: '13px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'var(--transition-fast)'
                      }}
                      onMouseEnter={e => e.target.style.color = 'var(--gold)'}
                      onMouseLeave={e => e.target.style.color = 'var(--text-primary)'}
                    >
                      ? {other.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
