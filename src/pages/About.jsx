import React from 'react';
import { 
  Phone, MessageSquare, Compass, Award, Globe, Heart, Shield, 
  Sparkles, Star, Zap, Check, Gem, Briefcase, Flower2, Flame, 
  Calendar, Users
} from 'lucide-react';
import astrologerImg from '../assets/astrologer.webp';
import sacredTemple from '../assets/sacred_temple.png';
import chakraImg from '../assets/meditating_chakras.webp';

export default function About({ navigateTo }) {
  // Timeline Journey (Horizontal timeline)
  const timeline = [
    { y: "1990", t: "Born In Sacred Lineage", d: "Born into a family of spiritual scholars and initiated into spiritual sadhana at age 7." },
    { y: "1995", t: "Mastery Of Scriptures", d: "Studied Bhrigu Samhita, Lal Kitab and Nadi Astrology under master gurus." },
    { y: "2003", t: "First Global Consultation", d: "Started guiding families across the UK and overseas through psychic and spiritual guidance." },
    { y: "2010", t: "Psychic Healing Centre", d: "Established a dedicated healing practice in London, helping thousands." },
    { y: "2018", t: "International Recognition", d: "Honoured by All India Federation Of Astrologers for outstanding spiritual contributions." },
    { y: "Today", t: "Serving Worldwide", d: "Trusted by 10,000+ people all over the world for proven psychic and spiritual guidance." }
  ];

  // Expertise List
  const expertise = [
    { icon: <Heart size={24} />, t: "Love & Relationship", d: "Resolve love problems, reunite with your partner and heal broken relationships." },
    { icon: <Gem size={24} />, t: "Marriage Astrology", d: "Find the right match, overcome delays and bring harmony in married life." },
    { icon: <Briefcase size={24} />, t: "Career & Business", d: "Get guidance for career growth, job success and business prosperity." },
    { icon: <Shield size={24} />, t: "Spiritual Cleansing", d: "Remove negative energies, evil eye, curse and harmful occult effects." },
    { icon: <Flower2 size={24} />, t: "Spiritual Healing", d: "Chakra healing, energy cleansing and restoring spiritual balance." },
    { icon: <Flame size={24} />, t: "Psychic Remedies", d: "Powerful mantras, spiritual rituals and customised guidance for lasting results." }
  ];

  // Why Choose Guruji Checklist
  const whyChoose = [
    "Compassionate guidance with a kind heart",
    "100% confidentiality - your privacy is sacred",
    "Honest and accurate predictions",
    "Ancient psychic methods with modern understanding",
    "Remedies that are powerful yet safe",
    "Dedicated support until you see results"
  ];

  // Testimonials Data
  const testimonials = [
    {
      name: "Priya S.",
      location: "Canada",
      text: "Guruji helped me reunite with my love after a long separation. His guidance changed my life completely."
    },
    {
      name: "Rohit M.",
      location: "UK",
      text: "The remedies given by Guruji brought peace, success and happiness in my family. Thank you!"
    },
    {
      name: "Neha K.",
      location: "USA",
      text: "I was suffering from negative energy for years. Guruji's healing changed everything. I feel blessed."
    }
  ];

  return (
    <div style={{ paddingBottom: '60px' }}>
      
      {/* 1. HERO HEADER SECTION */}
      <section className="section-padding" style={{
        position: 'relative',
        borderBottom: '1px solid rgba(212, 175, 55, 0.1)',
        overflow: 'hidden',
        paddingTop: '60px',
        paddingBottom: '30px'
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
          gridTemplateColumns: '1fr 1.2fr',
          gap: '50px',
          alignItems: 'center'
        }} id="stats-grid">
          
          {/* Left Column: Guruji Image */}
          <div style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            {/* Golden Aura Glow */}
            <div style={{
              position: 'absolute',
              width: '320px',
              height: '420px',
              background: 'radial-gradient(circle, rgba(212, 175, 55, 0.3) 0%, transparent 75%)',
              filter: 'blur(30px)',
              pointerEvents: 'none',
              zIndex: 1
            }} />
            <img 
              src={astrologerImg} 
              alt="Guruji Best Astrologer in London" 
              style={{
                width: '100%',
                maxWidth: '360px',
                height: '420px',
                borderRadius: '24px',
                border: '2px solid var(--gold)',
                boxShadow: '0 0 50px rgba(212, 175, 55, 0.4)',
                zIndex: 2,
                objectFit: 'cover'
              }}
            />
          </div>

          {/* Right Column: Bio Introduction */}
          <div style={{ textAlign: 'left' }}>
            {/* Tagline Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(212, 175, 55, 0.12)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              padding: '6px 14px',
              borderRadius: '20px',
              fontSize: '11px',
              fontWeight: '700',
              color: 'var(--gold)',
              letterSpacing: '0.05em',
              marginBottom: '20px',
              textTransform: 'uppercase'
            }}>
              <Star size={12} fill="var(--gold)" />
              35+ YEARS OF MASTERY
            </div>

            <h1 className="font-display text-gold-gradient text-shadow-gold text-popup-anim" style={{ 
              fontSize: '44px', 
              fontWeight: 'bold', 
              lineHeight: '1.2',
              marginBottom: '15px' 
            }}>
              About <br />
              Best Astrologer in London
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
              marginBottom: '35px',
              lineHeight: '1.7',
              maxWidth: '520px'
            }}>
              A lifelong practitioner of psychic astrology, helping people overcome life's challenges through authentic insight, spiritual healing and powerful remedies.
            </p>

            <button 
              onClick={() => navigateTo('book')}
              className="primary-button"
              style={{
                padding: '14px 28px',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '14px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <Calendar size={18} />
              BOOK CONSULTATION {"->"}
            </button>
          </div>

        </div>
      </section>

      {/* 2. STATS ROW BANNER */}
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

      {/* 3. ABOUT DETAILS & TEMPLE BANNER */}
      <section className="section-padding" style={{ position: 'relative' }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '50px',
          alignItems: 'center'
        }} id="stats-grid">
          
          {/* Left Column: Core Bio */}
          <div style={{ textAlign: 'left' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <span className="ornament-star">✦</span>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-display)', color: 'var(--gold)', letterSpacing: '0.2em' }}>ABOUT GURUJI</span>
            </div>
            <h2 className="font-display text-gold-gradient" style={{ fontSize: '34px', fontWeight: 'bold', marginBottom: '20px' }}>
              Guiding Souls. <br />Transforming Lives.
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-primary)', marginBottom: '20px', lineHeight: '1.7' }}>
              Best Astrologer in London comes from a sacred lineage of spiritual scholars and has dedicated his life to helping people find solutions to their problems. With deep knowledge of psychic astrology, Lal Kitab, Nadi Astrology and spiritual healing, Guruji has guided thousands of individuals and families towards peace, love, success and spiritual awakening.
            </p>
          </div>

          {/* Right Column: Temple graphic + quote callout */}
          <div style={{
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1.5px solid rgba(212, 175, 55, 0.25)',
            boxShadow: '0 0 35px rgba(212, 175, 55, 0.1)',
            height: '350px',
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr'
          }} className="form-row-2 about-temple-banner">
            {/* Background Temple Image */}
            <div style={{
              position: 'relative',
              height: '100%'
            }}>
              <img 
                src={sacredTemple} 
                alt="Sacred Temple Domes" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              {/* Overlay gradient */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, transparent, rgba(10, 17, 40, 0.95))'
              }} />
            </div>

            {/* Quote Block */}
            <div style={{
              background: 'rgba(10, 17, 40, 0.95)',
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderLeft: '1px solid rgba(212, 175, 55, 0.15)'
            }}>
              <Flower2 size={24} style={{ color: 'var(--gold)', marginBottom: '15px' }} />
              <blockquote style={{
                fontSize: '14px',
                color: 'var(--cream)',
                fontStyle: 'italic',
                lineHeight: '1.6',
                margin: 0,
                textAlign: 'center'
              }}>
                "Every problem has a solution. Every soul deserves peace."
              </blockquote>
              <cite style={{
                display: 'block',
                marginTop: '15px',
                fontSize: '11px',
                fontWeight: '700',
                color: 'var(--gold)',
                letterSpacing: '0.1em',
                fontStyle: 'normal'
              }}>
                - BEST ASTROLOGER IN LONDON
              </cite>
            </div>
          </div>

        </div>
      </section>

      {/* 4. OUR EXPERTISE SECTION */}
      <section className="section-padding" style={{
        background: 'rgba(4, 1, 8, 0.35)',
        borderTop: '1px solid rgba(212, 175, 55, 0.15)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.15)'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-display)', color: 'var(--gold)', letterSpacing: '0.2em' }}>OUR EXPERTISE</span>
            <div className="ornament-line" style={{ margin: '8px auto 20px auto' }}>
              <span className="ornament-star">✦</span>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '25px'
          }} id="stats-grid">
            {expertise.map((exp, idx) => (
              <div 
                key={idx} 
                className="glass-card" 
                style={{
                  padding: '30px 24px',
                  textAlign: 'center',
                  border: '1px solid rgba(212, 175, 55, 0.18)'
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  background: 'rgba(212, 175, 55, 0.08)',
                  border: '1.5px solid rgba(212, 175, 55, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold)',
                  margin: '0 auto 20px auto'
                }}>
                  {exp.icon}
                </div>
                <h3 className="font-display" style={{ fontSize: '17px', color: 'var(--gold-soft)', marginBottom: '10px' }}>
                  {exp.t}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6', margin: 0 }}>
                  {exp.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE DIVINE JOURNEY (TIMELINE) */}
      <section className="section-padding">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <span style={{ fontSize: '11px', fontFamily: 'var(--font-display)', color: 'var(--gold)', letterSpacing: '0.2em' }}>THE DIVINE JOURNEY</span>
            <div className="ornament-line" style={{ margin: '8px auto 20px auto' }}>
              <span className="ornament-star">✦</span>
            </div>
          </div>

          {/* Horizontal Timeline */}
          <div style={{ position: 'relative', padding: '30px 0' }} className="timeline-container-scroll">
            {/* Desktop Connector Line */}
            <div style={{
              position: 'absolute',
              top: '41px',
              left: '5%',
              right: '5%',
              height: '2px',
              background: 'linear-gradient(to right, transparent, var(--gold), transparent)',
              opacity: 0.35,
              zIndex: 1
            }} className="desktop-only-line" />
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gap: '20px',
              zIndex: 2,
              position: 'relative'
            }} id="timeline-row">
              {timeline.map((node, idx) => (
                <div key={idx} style={{ textAlign: 'center' }}>
                  {/* Timeline Dot Node */}
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--gold), var(--gold-soft))',
                    border: '4px solid var(--bg-deep)',
                    boxShadow: '0 0 10px rgba(212, 175, 55, 0.6)',
                    margin: '0 auto 20px auto',
                    zIndex: 3,
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'white' }} />
                  </div>

                  {/* Year tag */}
                  <span className="font-display text-gold-gradient" style={{
                    fontSize: '18px',
                    fontWeight: '900',
                    display: 'block',
                    marginBottom: '10px'
                  }}>
                    {node.y}
                  </span>

                  {/* Timeline Card details */}
                  <div className="glass-card" style={{ 
                    padding: '20px 15px', 
                    height: '190px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'flex-start',
                    border: '1px solid rgba(212, 175, 55, 0.15)'
                  }}>
                    <h4 style={{ fontSize: '13px', color: 'var(--cream)', fontWeight: 'bold', marginBottom: '8px', lineHeight: '1.3' }}>
                      {node.t}
                    </h4>
                    <p style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>
                      {node.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE & TESTIMONIALS (2-COL) */}
      <section className="section-padding" style={{
        borderTop: '1px solid rgba(212, 175, 55, 0.15)',
        background: 'rgba(10, 17, 40, 0.3)'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 2fr',
            gap: '50px',
            alignItems: 'start'
          }} id="stats-grid">
            
            {/* Left Col: Why Choose */}
            <div style={{ textAlign: 'left' }}>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-display)', color: 'var(--gold)', letterSpacing: '0.2em' }}>WHY CHOOSE GURUJI?</span>
              <div style={{ height: '1px', width: '60px', background: 'var(--gold)', margin: '10px 0 25px 0', opacity: 0.5 }} />
              
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px', padding: 0, margin: 0 }}>
                {whyChoose.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: 'rgba(212, 175, 55, 0.12)',
                      border: '1px solid var(--gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--gold)',
                      flexShrink: 0
                    }}>
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: '14px', color: 'var(--cream)', fontWeight: '500' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Col: Testimonials Grid */}
            <div style={{ textAlign: 'left' }}>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-display)', color: 'var(--gold)', letterSpacing: '0.2em' }}>WHAT PEOPLE SAY</span>
              <div style={{ height: '1px', width: '60px', background: 'var(--gold)', margin: '10px 0 25px 0', opacity: 0.5 }} />

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '15px'
              }} className="form-row-2">
                {testimonials.map((testi, idx) => (
                  <div 
                    key={idx} 
                    className="glass-card" 
                    style={{
                      padding: '25px 20px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      minHeight: '230px',
                      border: '1px solid rgba(212, 175, 55, 0.15)'
                    }}
                  >
                    {/* Stars block */}
                    <div>
                      <div style={{ display: 'flex', gap: '2px', color: 'var(--gold)', marginBottom: '12px' }}>
                        {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="var(--gold)" />)}
                      </div>
                      <p style={{ fontSize: '12.5px', color: 'var(--cream)', lineHeight: '1.6', margin: 0, fontStyle: 'italic' }}>
                        "{testi.text}"
                      </p>
                    </div>

                    {/* Author block */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--gold-soft), var(--gold))',
                        color: 'var(--bg-deep)',
                        fontWeight: 'bold',
                        fontSize: '11px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        {testi.name.split(' ')[0][0]}{testi.name.split(' ')[1] ? testi.name.split(' ')[1][0] : ''}
                      </div>
                      <div>
                        <h4 style={{ fontSize: '12px', color: 'var(--cream)', margin: 0, fontWeight: 'bold' }}>{testi.name}</h4>
                        <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>{testi.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. TRANSFORMATION BANNER */}
      <section style={{ padding: '80px 0 20px 0', position: 'relative', overflow: 'hidden' }}>
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
