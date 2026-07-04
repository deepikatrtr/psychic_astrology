import React, { useState, useEffect } from 'react';
import { 
  Heart, Shield, Sparkles, Zap, HelpCircle, Globe, 
  CheckCircle2, Star, Award, Users, Flower2, Flame, Calendar, MessageSquare
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

// Guruji Portrait & Graphics
import astrologerImg from '../assets/astrologer.webp';
import chakraImg from '../assets/meditating_chakras.webp';

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

export default function Services({ navigateTo }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imagesArray = Object.values(serviceImages);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imagesArray.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [imagesArray.length]);

  // 12 Services Data
  const services = [
    { 
      slug: "love", 
      num: "01",
      title: "Get Ex-Love Back", 
      short: "Reunite with lost love through powerful mantras and rituals.", 
      category: "love", 
      icon: <Heart size={16} fill="white" />,
      color: "#e11d48" // Rose/pink
    },
    { 
      slug: "negativity", 
      num: "02",
      title: "Negative Entity Removal", 
      short: "Cleanse your aura, home and energy field from negativity.", 
      category: "protection", 
      icon: <Shield size={16} fill="white" />,
      color: "#2563eb" // Blue
    },
    { 
      slug: "love-spell-caster", 
      num: "03",
      title: "Love Spell Caster", 
      short: "Authentic divine love spells to attract and deepen love.", 
      category: "healing", 
      icon: <Sparkles size={16} fill="white" />,
      color: "#db2777" // Pink/magenta
    },
    { 
      slug: "husband-wife-problems", 
      num: "04",
      title: "Husband & Wife Problems", 
      short: "Restore harmony, trust and love within your marriage.", 
      category: "love", 
      icon: <Heart size={16} fill="white" />,
      color: "#e11d48"
    },
    { 
      slug: "marriage-problems", 
      num: "05",
      title: "Marriage Problems", 
      short: "Solve marriage roadblocks and family disputes.", 
      category: "love", 
      icon: <Globe size={16} />,
      color: "#8b5cf6" // Purple
    },
    { 
      slug: "black-magic-removal", 
      num: "06",
      title: "Black Magic Removal", 
      short: "Remove black magic and get lifelong protection.", 
      category: "protection", 
      icon: <Shield size={16} fill="white" />,
      color: "#2563eb"
    },
    { 
      slug: "evil-spirit-removal", 
      num: "07",
      title: "Evil Spirit Removal", 
      short: "Free yourself and your home from evil spirit attachments.", 
      category: "protection", 
      icon: <Shield size={16} fill="white" />,
      color: "#2563eb"
    },
    { 
      slug: "evil-eye-removal", 
      num: "08",
      title: "Evil Eye Removal", 
      short: "Detect and remove evil eye with spiritual remedies.", 
      category: "protection", 
      icon: <Sparkles size={16} fill="white" />,
      color: "#db2777"
    },
    { 
      slug: "spiritual-healing", 
      num: "09",
      title: "Spiritual Healing", 
      short: "Heal your mind, body & soul with divine energy.", 
      category: "healing", 
      icon: <Flower2 size={16} />,
      color: "#db2777"
    },
    { 
      slug: "psychic-reading", 
      num: "10",
      title: "Psychic Reading", 
      short: "Gain clarity about your past, present and future.", 
      category: "healing", 
      icon: <HelpCircle size={16} />,
      color: "#8b5cf6"
    },
    { 
      slug: "love-marriage-solution", 
      num: "11",
      title: "Love Marriage Solution", 
      short: "Overcome obstacles and bless your love union.", 
      category: "love", 
      icon: <Globe size={16} />,
      color: "#2563eb"
    },
    { 
      slug: "breakup-solution", 
      num: "12",
      title: "Breakup Problem Solution", 
      short: "Mend broken hearts and reopen the path to love.", 
      category: "love", 
      icon: <Heart size={16} fill="white" />,
      color: "#e11d48"
    }
  ];

  // Filtering Logic
  const filteredServices = services.filter(s => {
    return selectedCategory === 'all' || s.category === selectedCategory;
  });

  return (
    <div style={{ paddingBottom: '60px' }}>
      
      {/* 1. HERO HEADER */}
      <section className="section-padding" style={{
        position: 'relative',
        borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
        overflow: 'hidden',
        paddingTop: '60px',
        paddingBottom: '30px',
        backgroundImage: `linear-gradient(rgba(7, 11, 26, 0.85), rgba(7, 11, 26, 0.95)), url(${imagesArray[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.8s ease-in-out'
      }}>
        <div style={{
          position: 'absolute',
          top: '-150px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
          filter: 'blur(50px)',
          zIndex: -1
        }} />

        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '50px',
          alignItems: 'center'
        }} id="stats-grid">
          
          {/* Left Column: Heading Info */}
          <div style={{ textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '15px' }}>
              <span className="ornament-star" style={{ color: 'var(--gold)' }}>✦</span>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-display)', color: 'var(--gold)', letterSpacing: '0.25em', fontWeight: '700' }}>
                OUR SERVICES
              </span>
              <span className="ornament-star" style={{ color: 'var(--gold)' }}>✦</span>
            </div>

            <h1 className="font-display text-gold-gradient text-shadow-gold text-popup-anim" style={{ 
              fontSize: '44px', 
              fontWeight: 'bold', 
              lineHeight: '1.2',
              marginBottom: '15px' 
            }}>
              Sacred Solutions For <br />
              Life's Challenges
            </h1>

            {/* Lotus Ornament */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px' }}>
              <div style={{ height: '1px', width: '30px', background: 'var(--gold)', opacity: 0.5 }} />
              <Flower2 size={16} style={{ color: 'var(--gold)' }} />
              <div style={{ height: '1px', width: '30px', background: 'var(--gold)', opacity: 0.5 }} />
            </div>

            <p style={{
              fontSize: '16px',
              color: 'var(--cream)',
              marginBottom: '20px',
              lineHeight: '1.7',
              maxWidth: '520px'
            }}>
              Psychic wisdom, powerful spiritual rituals and trusted guidance to bring peace, love, protection and prosperity into your life.
            </p>
          </div>



        </div>
      </section>

      {/* 2. STATS BAR */}
      <section style={{ padding: '20px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
          }} id="stats-grid">
            {[
              { icon: <Users size={24} />, n: "35+", label: "Years of Mastery" },
              { icon: <Heart size={24} />, n: "10,000+", label: "Lives Transformed" },
              { icon: <Globe size={24} />, n: "40+", label: "Countries Served" },
              { icon: <Award size={24} />, n: "98%", label: "Success Rate" }
            ].map((stat, i) => (
              <div 
                key={i} 
                className="glass-card"
                style={{
                  padding: '20px 15px',
                  textAlign: 'center',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '15px'
                }}
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(212, 175, 55, 0.1)',
                  color: 'var(--gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {stat.icon}
                </div>
                <div style={{ textAlign: 'left' }}>
                  <p className="font-display text-gold-gradient" style={{ fontSize: '22px', fontWeight: '900', margin: 0, lineHeight: '1.2' }}>
                    {stat.n}
                  </p>
                  <p style={{ fontSize: '11px', color: 'var(--text-muted)', margin: 0, fontWeight: '700' }}>
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FILTER TABS */}
      <section style={{ padding: '25px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '12px',
            justifyContent: 'center'
          }}>
            {[
              { label: 'All Services', id: 'all', icon: null },
              { label: 'Love & Relationship', id: 'love', icon: <Heart size={14} /> },
              { label: 'Protection', id: 'protection', icon: <Shield size={14} /> },
              { label: 'Healing & Guidance', id: 'healing', icon: <Flower2 size={14} /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                style={{
                  background: selectedCategory === tab.id ? 'var(--btn-gradient)' : 'rgba(255, 255, 255, 0.03)',
                  color: selectedCategory === tab.id ? 'var(--bg-dark)' : 'var(--text-primary)',
                  border: '1px solid',
                  borderColor: selectedCategory === tab.id ? 'var(--gold)' : 'var(--glass-border)',
                  padding: '10px 24px',
                  borderRadius: '30px',
                  fontFamily: 'var(--font-display)',
                  fontSize: '11.5px',
                  fontWeight: '700',
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'var(--transition-fast)'
                }}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SERVICES GRID LIST */}
      <section style={{ padding: '20px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '30px'
          }} id="stats-grid">
            {filteredServices.map(s => (
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
                  borderRadius: '20px',
                  border: '1.5px solid rgba(212, 175, 55, 0.2)'
                }}
                onClick={() => navigateTo('service-detail', s.slug)}
              >
                {/* Image Section */}
                <div style={{
                  width: '100%',
                  height: '180px',
                  overflow: 'hidden',
                  position: 'relative'
                }}>
                  {/* Number tag bubble */}
                  <div style={{
                    position: 'absolute',
                    top: '15px',
                    left: '15px',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(4, 8, 23, 0.75)',
                    border: '1px solid rgba(212, 175, 55, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold)',
                    fontSize: '11px',
                    fontWeight: 'bold',
                    zIndex: 5
                  }}>
                    {s.num}
                  </div>

                  <img 
                    src={serviceImages[s.slug]} 
                    alt={s.title} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />

                  {/* Icon Overlay Badge */}
                  <div style={{
                    position: 'absolute',
                    bottom: '15px',
                    left: '15px',
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: s.color,
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
                    zIndex: 5
                  }}>
                    {s.icon}
                  </div>
                </div>

                {/* Card Details */}
                <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <h3 className="font-display" style={{ fontSize: '18px', color: 'var(--gold-soft)', marginBottom: '10px' }}>
                    {s.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '20px', flexGrow: 1 }}>
                    {s.short}
                  </p>
                  <span className="font-display" style={{
                    fontSize: '11px',
                    letterSpacing: '0.08em',
                    color: 'var(--gold)',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    marginTop: 'auto'
                  }}>
                    Learn More {"->"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TRANSFORMATION banner */}
      <section style={{ padding: '60px 0 20px 0', position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div className="glass-card" style={{
            padding: '50px 40px',
            border: '2px solid var(--gold)',
            boxShadow: '0 0 45px rgba(212, 175, 55, 0.18)',
            background: `linear-gradient(to right, rgba(10, 17, 40, 0.95) 40%, rgba(10, 17, 40, 0.1) 100%), url(${chakraImg}) right center / contain no-repeat, #0a1128`,
            display: 'grid',
            gridTemplateColumns: '1.5fr 1fr',
            gap: '40px',
            alignItems: 'center',
            position: 'relative'
          }} id="stats-grid">
            
            {/* Left Col: Text & CTA button */}
            <div style={{ textAlign: 'left', zIndex: 2 }}>
              <h2 className="font-display text-gold-gradient" style={{ fontSize: '38px', fontWeight: 'bold', marginBottom: '15px' }}>
                Ready To Transform Your Life?
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--cream)', marginBottom: '30px', lineHeight: '1.6', maxWidth: '520px' }}>
                Connect with Guruji today and take the first step towards a happy, peaceful and successful life.
              </p>
              
              <a 
                href="https://wa.me/447722131999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="primary-button"
                style={{
                  padding: '14px 28px',
                  borderRadius: '8px',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  textDecoration: 'none'
                }}
              >
                <MessageSquare size={18} />
                BOOK CONSULTATION ON WHATSAPP  {"->"}
              </a>
            </div>

            {/* Right Col: Empty (Spacer for background image) */}
            <div style={{ display: 'none' }} className="cta-spacer"></div>

          </div>
        </div>
      </section>

    </div>
  );
}
