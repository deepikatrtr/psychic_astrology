import re
import os

# Helper to modify files
def update_home():
    filepath = r"C:\Users\deepika\.gemini\antigravity\scratch\astro-react\src\pages\Home.jsx"
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Add Image Imports
    imports = """import ZodiacWheel from '../components/ZodiacWheel';
import chakraWheel from '../assets/chakra_wheel.jpg';

// Service Images
import imgLove from '../assets/ex_love_back.png';
import imgNegativity from '../assets/negativity_removal.png';
import imgSpell from '../assets/love_spell_caster.png';
import imgHusbandWife from '../assets/husband_wife_problems.png';
import imgMarriage from '../assets/marriage_problems.png';
import imgBlackMagic from '../assets/black_magic_removal.png';
import imgEvilSpirit from '../assets/evil_spirit_removal.png';
import imgEvilEye from '../assets/evil_eye_removal.png';
import imgSpiritualHealing from '../assets/spiritual_healing.png';
import imgPsychicReading from '../assets/psychic_reading.png';
import imgLoveMarriage from '../assets/love_marriage_solution.png';
import imgBreakup from '../assets/breakup_solution.png';

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
};"""

    content = content.replace("import ZodiacWheel from '../components/ZodiacWheel';\nimport chakraWheel from '../assets/chakra_wheel.jpg';", imports)

    # 2. Update the JSX Services Map
    old_map = """            {services.map(s => (
              <div 
                key={s.slug} 
                className="glass-card" 
                style={{
                  padding: '30px 24px',
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  cursor: 'pointer'
                }}
                onClick={() => navigateTo('service-detail', s.slug)}
              >
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.05))',
                  border: '1px solid var(--gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold-glow)',
                  marginBottom: '20px'
                }}>
                  {s.icon}
                </div>
                <h3 className="font-display" style={{ fontSize: '18px', color: 'var(--cream)', marginBottom: '8px' }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '20px', flexGrow: 1 }}>
                  {s.short}
                </p>
                <span className="font-display" style={{
                  fontSize: '11px',
                  letterSpacing: '0.05em',
                  color: 'var(--gold)',
                  fontWeight: '700'
                }}>
                  LEARN DETAILS ➔
                </span>
              </div>
            ))}"""

    new_map = """            {services.map(s => (
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
                    LEARN DETAILS ➔
                  </span>
                </div>
              </div>
            ))}"""

    content = content.replace(old_map, new_map)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print("Home.jsx updated successfully!")

def update_services():
    filepath = r"C:\Users\deepika\.gemini\antigravity\scratch\astro-react\src\pages\Services.jsx"
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Imports
    imports = """import React, { useState } from 'react';
import { 
  Search, Heart, Shield, Sparkles, Zap, HelpCircle, 
  Globe, CheckCircle2, Star 
} from 'lucide-react';

// Service Images
import imgLove from '../assets/ex_love_back.png';
import imgNegativity from '../assets/negativity_removal.png';
import imgSpell from '../assets/love_spell_caster.png';
import imgHusbandWife from '../assets/husband_wife_problems.png';
import imgMarriage from '../assets/marriage_problems.png';
import imgBlackMagic from '../assets/black_magic_removal.png';
import imgEvilSpirit from '../assets/evil_spirit_removal.png';
import imgEvilEye from '../assets/evil_eye_removal.png';
import imgSpiritualHealing from '../assets/spiritual_healing.png';
import imgPsychicReading from '../assets/psychic_reading.png';
import imgLoveMarriage from '../assets/love_marriage_solution.png';
import imgBreakup from '../assets/breakup_solution.png';

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
};"""

    content = content.replace("import React, { useState } from 'react';\nimport { \n  Search, Heart, Shield, Sparkles, Zap, HelpCircle, \n  Globe, CheckCircle2, Star \n} from 'lucide-react';", imports)

    # JSX Services Map
    old_map = """              {filteredServices.map(s => (
                <div 
                  key={s.slug}
                  className="glass-card"
                  style={{
                    padding: '30px 24px',
                    textAlign: 'left',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    cursor: 'pointer'
                  }}
                  onClick={() => navigateTo('service-detail', s.slug)}
                >
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.05))',
                    border: '1px solid var(--gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-glow)',
                    marginBottom: '20px'
                  }}>
                    {s.icon}
                  </div>
                  
                  <h3 className="font-display" style={{ fontSize: '18px', color: 'var(--cream)', marginBottom: '8px' }}>
                    {s.title}
                  </h3>
                  
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '15px' }}>
                    {s.short}
                  </p>
                  
                  <p style={{ fontSize: '13px', color: 'var(--text-primary)', marginBottom: '24px', flexGrow: 1 }}>
                    {s.description}
                  </p>

                  <span className="font-display" style={{
                    fontSize: '11px',
                    letterSpacing: '0.08em',
                    color: 'var(--gold)',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}>
                    CONSULT DETAILS ➔
                  </span>
                </div>
              ))}"""

    new_map = """              {filteredServices.map(s => (
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
                    <h3 className="font-display" style={{ fontSize: '18px', color: 'var(--cream)', marginBottom: '8px' }}>
                      {s.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '10px' }}>
                      {s.short}
                    </p>
                    <p style={{ fontSize: '13px', color: 'var(--text-primary)', marginBottom: '20px', flexGrow: 1 }}>
                      {s.description}
                    </p>
                    <span className="font-display" style={{
                      fontSize: '11px',
                      letterSpacing: '0.08em',
                      color: 'var(--gold)',
                      fontWeight: '700',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}>
                      CONSULT DETAILS ➔
                    </span>
                  </div>
                </div>
              ))}"""

    content = content.replace(old_map, new_map)

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print("Services.jsx updated successfully!")

def update_service_detail():
    filepath = r"C:\Users\deepika\.gemini\antigravity\scratch\astro-react\src\pages\ServiceDetail.jsx"
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    # Imports
    imports = """import React from 'react';
import { 
  Heart, Shield, Sparkles, Check, Phone, ArrowRight, Zap, 
  HelpCircle, Globe, CheckCircle2, Award, Calendar, Star 
} from 'lucide-react';

// Service Images
import imgLove from '../assets/ex_love_back.png';
import imgNegativity from '../assets/negativity_removal.png';
import imgSpell from '../assets/love_spell_caster.png';
import imgHusbandWife from '../assets/husband_wife_problems.png';
import imgMarriage from '../assets/marriage_problems.png';
import imgBlackMagic from '../assets/black_magic_removal.png';
import imgEvilSpirit from '../assets/evil_spirit_removal.png';
import imgEvilEye from '../assets/evil_eye_removal.png';
import imgSpiritualHealing from '../assets/spiritual_healing.png';
import imgPsychicReading from '../assets/psychic_reading.png';
import imgLoveMarriage from '../assets/love_marriage_solution.png';
import imgBreakup from '../assets/breakup_solution.png';

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
};"""

    content = content.replace("import React from 'react';\nimport { \n  Heart, Shield, Sparkles, Check, Phone, ArrowRight, Zap, \n  HelpCircle, Globe, CheckCircle2, Award, Calendar \n} from 'lucide-react';", imports)

    # Render image in sidebar
    old_callout = """            {/* Callout box */}
            <div className="glass-card" style={{
              padding: '30px 24px',
              textAlign: 'center',
              background: 'rgba(212, 175, 55, 0.04)',
              borderColor: 'var(--gold)'
            }}>
              <div style={{ display: 'flex', justifycontent: 'center', gap: '4px', color: 'var(--gold)', marginBottom: '10px' }}>
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>"""
              
    # Let's adjust spacing and case mismatch (justifyContent vs justifycontent)
    # The original file has lowercase `justifycontent` in a JSX block? Ah:
    # "justifyContent: 'center'" was actually in the file. Let's make sure we find it precisely.
    
    # Let's search and replace with the image box included:
    content = content.replace("s.slug===\"love\"?e.jsx(y,{}):s.slug===\"negativity\"?e.jsx(v,{}):e.jsxs(\"div\"", 'e.jsxs("div"')
    
    # Actually, let's insert the image banner inside the callout sidebar card:
    old_callout_part = """            {/* Callout box */}
            <div className="glass-card" style={{
              padding: '30px 24px',
              textAlign: 'center',
              background: 'rgba(212, 175, 55, 0.04)',
              borderColor: 'var(--gold)'
            }}>"""
            
    new_callout_part = """            {/* Callout box */}
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
                  src={serviceImages[slug]} 
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
              </div>"""

    content = content.replace(old_callout_part, new_callout_part)
    
    # Close the added div block before the end of that callout card:
    # The card ends after "WhatsApp Now" CTA:
    # `WhatsApp Now</a></div>`
    # Let's replace `WhatsApp Now</a>` with `WhatsApp Now</a></div>` (closing the extra padding div we inserted)
    content = content.replace('WhatsApp Now</a>\n            </div>', 'WhatsApp Now</a>\n              </div>\n            </div>')
    content = content.replace('WhatsApp Now</a>\r\n            </div>', 'WhatsApp Now</a>\r\n              </div>\r\n            </div>')
    content = content.replace('WhatsApp Now</a>\n\n            </div>', 'WhatsApp Now</a>\n              </div>\n            </div>')
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print("ServiceDetail.jsx updated successfully!")

if __name__ == "__main__":
    update_home()
    update_services()
    update_service_detail()
