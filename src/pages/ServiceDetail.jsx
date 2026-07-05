import React from 'react';
import { 
  Heart, Shield, Sparkles, Check, Phone, ArrowRight, Zap, 
  HelpCircle, Globe, CheckCircle2, Award, Calendar, Star,
  Compass, Hourglass, Eye, Users, Clock
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
import imgChakra from '../assets/chakra.png';

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
      title: "Reuniting With an Ex-Partner", 
      icon: <Heart size={24} />,
      description: "Powerful psychic guidance, ancient mantras and personalised rituals to bring back lost love and rekindle the bond." 
    },
    { 
      slug: "negativity", 
      title: "Negative Energy Clearing", 
      icon: <Shield size={24} />,
      description: "Cleanse your aura, home and energy field through proven spiritual purification rituals and divine fire ceremonies." 
    },
    { 
      slug: "love-spell-caster", 
      title: "Love Ritual & Devotion Work", 
      icon: <Sparkles size={24} />,
      description: "Time-tested love spells crafted by a master spiritualist to attract, bind and deepen romantic love." 
    },
    { 
      slug: "husband-wife-problems", 
      title: "Husband & Wife Relationship Counseling", 
      icon: <CheckCircle2 size={24} />,
      description: "Restore harmony, trust and love within your marriage through psychic guidance, mantras and spiritual remedies." 
    },
    { 
      slug: "marriage-problems", 
      title: "Marriage Relationship Guidance", 
      icon: <Globe size={24} />,
      description: "Solve marriage roadblocks, family disputes, in-law tensions and astrological doshas blocking your union." 
    },
    { 
      slug: "black-magic-removal", 
      title: "Spiritual Cleansing", 
      icon: <Zap size={24} />,
      description: "Identify and dissolve black magic with powerful counter-rituals, divine protection and lifelong shielding." 
    },
    { 
      slug: "evil-spirit-removal", 
      title: "Spiritual Protection", 
      icon: <Shield size={24} />,
      description: "Free yourself, family or home from evil spirit attachments through powerful banishing rituals." 
    },
    { 
      slug: "evil-eye-removal", 
      title: "Evil Eye Protection", 
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
      title: "Psychic & Tarot Reading", 
      icon: <HelpCircle size={24} />,
      description: "Insight into your past, present and future through gifted psychic intuition and tarot wisdom." 
    },
    { 
      slug: "love-marriage-solution", 
      title: "Love Marriage Guidance", 
      icon: <Globe size={24} />,
      description: "Overcome family resistance, social pressure and astrological doshas blocking your love marriage." 
    },
    { 
      slug: "breakup-solution", 
      title: "Overcoming Breakups & Emotional Healing", 
      icon: <Heart size={24} />,
      description: "Heal the wounds of breakup and reopen the path to reconciliation with proven psychic guidance." 
    }
  ];

  const currentService = services.find(s => s.slug === slug) || services[0];

  // Mappings of Challenges and Solutions for all 12 Services
  const challengesData = {
    "love": [
      {
        challengeIcon: <Heart size={20} />,
        challengeTitle: "Heartbreak & Emotional Pain",
        challengeDesc: "The pain of separation feels unbearable and life seems empty.",
        solutionIcon: <Sparkles size={20} />,
        solutionTitle: "Emotional Healing",
        solutionDesc: "Powerful healing practices to calm your heart, remove negativity and bring peace of mind."
      },
      {
        challengeIcon: <HelpCircle size={20} />,
        challengeTitle: "Confusion & Uncertainty",
        challengeDesc: "You don't know what went wrong or if you still have a chance.",
        solutionIcon: <Compass size={20} />,
        solutionTitle: "Clarity & Direction",
        solutionDesc: "Detailed astrological reading to reveal the real reasons and the right way forward."
      },
      {
        challengeIcon: <Users size={20} />,
        challengeTitle: "Communication Breakdown",
        challengeDesc: "Misunderstandings, arguments and silence have created a gap.",
        solutionIcon: <Heart size={20} />,
        solutionTitle: "Rebuild Connection",
        solutionDesc: "Guidance and remedies to improve communication, trust and emotional connection."
      },
      {
        challengeIcon: <Hourglass size={20} />,
        challengeTitle: "Fear of Losing Them Forever",
        challengeDesc: "You fear they may move on and you will lose them completely.",
        solutionIcon: <Star size={20} />,
        solutionTitle: "Reunion Possibilities",
        solutionDesc: "Astrological solutions and rituals to increase the chances of reuniting with your ex-partner."
      },
      {
        challengeIcon: <Eye size={20} />,
        challengeTitle: "Negative Energies & Obstacles",
        challengeDesc: "External influences, family pressure or third parties are affecting your relationship.",
        solutionIcon: <Shield size={20} />,
        solutionTitle: "Remove Obstacles",
        solutionDesc: "Powerful spiritual remedies to remove blockages and create a positive path for love."
      }
    ],
    "negativity": [
      {
        challengeIcon: <Hourglass size={20} />,
        challengeTitle: "Aura Exhaustion & Fatigue",
        challengeDesc: "Feeling constantly drained and low on physical or spiritual energy.",
        solutionIcon: <Sparkles size={20} />,
        solutionTitle: "Aura Cleansing",
        solutionDesc: "Deep aura purification to restore vibrant energy and positive flow."
      },
      {
        challengeIcon: <HelpCircle size={20} />,
        challengeTitle: "Bad Luck & Blockages",
        challengeDesc: "Experiencing a sequence of unexplained setbacks in career and life.",
        solutionIcon: <Compass size={20} />,
        solutionTitle: "Opening Paths",
        solutionDesc: "Dissolve spiritual blockages to attract prosperity and positive opportunities."
      },
      {
        challengeIcon: <Users size={20} />,
        challengeTitle: "Heavy Atmosphere at Home",
        challengeDesc: "Uncomfortable, tense, or hostile vibes inside your living space.",
        solutionIcon: <Globe size={20} />,
        solutionTitle: "Space Clearing",
        solutionDesc: "Sacred fire rituals (Havan) and purification chants to bless the home."
      },
      {
        challengeIcon: <Eye size={20} />,
        challengeTitle: "Nightmares & Restlessness",
        challengeDesc: "Sleep disturbances, bad dreams, and constant midnight anxiety.",
        solutionIcon: <Shield size={20} />,
        solutionTitle: "Peaceful Sleep",
        solutionDesc: "Protection mantras and spiritual shielding for peaceful night rest."
      },
      {
        challengeIcon: <Zap size={20} />,
        challengeTitle: "Lingering Psychic Attachments",
        challengeDesc: "Feeling like there is an unseen weight or negative presence around you.",
        solutionIcon: <CheckCircle2 size={20} />,
        solutionTitle: "Energy Cleansing",
        solutionDesc: "Complete energetic detachments and spiritual shield activation."
      }
    ],
    "love-spell-caster": [
      {
        challengeIcon: <Users size={20} />,
        challengeTitle: "Unrequited Attraction",
        challengeDesc: "Longing for someone who does not notice or return your feelings.",
        solutionIcon: <Sparkles size={20} />,
        solutionTitle: "Sparking Interest",
        solutionDesc: "Spiritual attraction rituals to draw their attention and warm their heart."
      },
      {
        challengeIcon: <Heart size={20} />,
        challengeTitle: "Fading Romance & Sparks",
        challengeDesc: "Relationship feels dry, distant, and lacks the initial romantic spark.",
        solutionIcon: <Heart size={20} />,
        solutionTitle: "Reigniting Passion",
        solutionDesc: "Sacred devotion work to bring back warm feelings, passion, and excitement."
      },
      {
        challengeIcon: <Shield size={20} />,
        challengeTitle: "Trust & Commitment Doubts",
        challengeDesc: "Fear of infidelity, cold feet, or partner hesitating to commit.",
        solutionIcon: <CheckCircle2 size={20} />,
        solutionTitle: "Deepening Commitment",
        solutionDesc: "Binding love rituals to strengthen trust, devotion, and alignment."
      },
      {
        challengeIcon: <Globe size={20} />,
        challengeTitle: "Long Distance Gaps",
        challengeDesc: "Emotional drift caused by physical distance and lack of connection.",
        solutionIcon: <Compass size={20} />,
        solutionTitle: "Emotional Binding",
        solutionDesc: "Spiritual anchoring to keep minds and hearts connected across borders."
      },
      {
        challengeIcon: <Eye size={20} />,
        challengeTitle: "Third Party Distractions",
        challengeDesc: "Outside interference from family, friends, or others trying to divide you.",
        solutionIcon: <Shield size={20} />,
        solutionTitle: "Relationship Protection",
        solutionDesc: "Protective love shields to block negative third-party influences."
      }
    ],
    "husband-wife-problems": [
      {
        challengeIcon: <Users size={20} />,
        challengeTitle: "Constant Arguing & Friction",
        challengeDesc: "Daily arguments over small details and walking on eggshells.",
        solutionIcon: <CheckCircle2 size={20} />,
        solutionTitle: "Peaceful Communication",
        solutionDesc: "Resolving communication blockages and planetary alignment for harmony."
      },
      {
        challengeIcon: <Heart size={20} />,
        challengeTitle: "Emotional Distance & Silence",
        challengeDesc: "Feeling like roommates instead of partners; silent treatment.",
        solutionIcon: <Sparkles size={20} />,
        solutionTitle: "Reconnecting Hearts",
        solutionDesc: "Healing counseling and spiritual remedies to open up warm conversations."
      },
      {
        challengeIcon: <Clock size={20} />,
        challengeTitle: "Financial Stress & Blame",
        challengeDesc: "Money concerns leading to blame, arguments, and marriage stress.",
        solutionIcon: <Globe size={20} />,
        solutionTitle: "Shared Abundance",
        solutionDesc: "Astrological remedies for wealth planets (Venus/Jupiter) to ease stress."
      },
      {
        challengeIcon: <HelpCircle size={20} />,
        challengeTitle: "In-Law & Family Tensions",
        challengeDesc: "External family pressure putting stress on the marriage.",
        solutionIcon: <Shield size={20} />,
        solutionTitle: "Harmonizing Family",
        solutionDesc: "Family peace rituals to create boundaries and mutual respect."
      },
      {
        challengeIcon: <Zap size={20} />,
        challengeTitle: "Separation & Divorce Threat",
        challengeDesc: "Looming threat of separation or ongoing legal divorce steps.",
        solutionIcon: <Heart size={20} />,
        solutionTitle: "Marriage Protection",
        solutionDesc: "Divine relationship binding remedies to clear blockages and restore vows."
      }
    ],
    "marriage-problems": [
      {
        challengeIcon: <Clock size={20} />,
        challengeTitle: "Delay in Finding Partner",
        challengeDesc: "Finding it difficult to meet the right person or constant broken engagements.",
        solutionIcon: <Calendar size={20} />,
        solutionTitle: "Removing Delays",
        solutionDesc: "Horoscope matching and Venus/Jupiter remedies to speed up marriage."
      },
      {
        challengeIcon: <HelpCircle size={20} />,
        challengeTitle: "Horoscope / Manglik Dosha",
        challengeDesc: "Severe astrological doshas blocking peace and marital longevity.",
        solutionIcon: <Sparkles size={20} />,
        solutionTitle: "Dosha Nivaran",
        solutionDesc: "Customized Vedic rituals and gemstone recommendations to pacify planets."
      },
      {
        challengeIcon: <Users size={20} />,
        challengeTitle: "Post-Marriage Compatibility",
        challengeDesc: "Clashing personalities and values starting right after wedding.",
        solutionIcon: <Compass size={20} />,
        solutionTitle: "Aligning Horoscopes",
        solutionDesc: "Planetary path alignment to balance the male/female cosmic energies."
      },
      {
        challengeIcon: <Shield size={20} />,
        challengeTitle: "Family Disputes & Tensions",
        challengeDesc: "Extended family arguments disrupting the couple's peace.",
        solutionIcon: <CheckCircle2 size={20} />,
        solutionTitle: "Domestic Peace",
        solutionDesc: "Harmony rituals to dissolve family misunderstandings."
      },
      {
        challengeIcon: <Heart size={20} />,
        challengeTitle: "Trust & Communication Gaps",
        challengeDesc: "Suspicions, secrets, and lack of trust between partners.",
        solutionIcon: <Star size={20} />,
        solutionTitle: "Binding Affection",
        solutionDesc: "Sacred mantras to build trust, transparency, and deep mutual respect."
      }
    ],
    "black-magic-removal": [
      {
        challengeIcon: <Zap size={20} />,
        challengeTitle: "Shadow Obstacles & Blocks",
        challengeDesc: "Sudden collapse in business, health, or relationship without cause.",
        solutionIcon: <Shield size={20} />,
        solutionTitle: "Aura Protection",
        solutionDesc: "Vedic aura cleansing to break the influence of evil energies."
      },
      {
        challengeIcon: <Hourglass size={20} />,
        challengeTitle: "Unexplained Illnesses",
        challengeDesc: "Chronic body pain, fatigue, or depression that doctors cannot diagnose.",
        solutionIcon: <Sparkles size={20} />,
        solutionTitle: "Physical & Mental Relief",
        solutionDesc: "Spiritual energy channel clearing and healing water ceremonies."
      },
      {
        challengeIcon: <Eye size={20} />,
        challengeTitle: "Fear & Paranoia",
        challengeDesc: "Persistent feeling of being watched, sleep paralysis, or deep dread.",
        solutionIcon: <CheckCircle2 size={20} />,
        solutionTitle: "Mind Rejuvenation",
        solutionDesc: "Protective talismans (Kavach) and shield mantras."
      },
      {
        challengeIcon: <Clock size={20} />,
        challengeTitle: "Financial Ruin",
        challengeDesc: "Rapid debt accumulation, loss of job, or unexpected huge expenses.",
        solutionIcon: <Globe size={20} />,
        solutionTitle: "Wealth Restoration",
        solutionDesc: "Prayers to Lord Ganesha and Saturn to remove debt-inducing blockages."
      },
      {
        challengeIcon: <HelpCircle size={20} />,
        challengeTitle: "Evil Eye Attacks",
        challengeDesc: "Envies and toxic wishes from neighbors or colleagues affecting growth.",
        solutionIcon: <Star size={20} />,
        solutionTitle: "Lifetime Shielding",
        solutionDesc: "Installing spiritual shields to reflect malicious intentions."
      }
    ],
    "evil-spirit-removal": [
      {
        challengeIcon: <Zap size={20} />,
        challengeTitle: "Presence & Disturbances",
        challengeDesc: "Hearing voices, temperature drops, or objects moving in the home.",
        solutionIcon: <CheckCircle2 size={20} />,
        solutionTitle: "Spirit Release",
        solutionDesc: "Ancient Vedic banishing and home purification rituals."
      },
      {
        challengeIcon: <Eye size={20} />,
        challengeTitle: "Sleep Paralysis & Terror",
        challengeDesc: "Feeling pinned down during sleep or seeing dark figures.",
        solutionIcon: <Shield size={20} />,
        solutionTitle: "Safe Night Rest",
        solutionDesc: "Protection circle chants and sacred ash (Bhasma) barriers."
      },
      {
        challengeIcon: <Users size={20} />,
        challengeTitle: "Personality Changes",
        challengeDesc: "Sudden anger, mood shifts, or acting out of character.",
        solutionIcon: <Sparkles size={20} />,
        solutionTitle: "Reclaiming Self",
        solutionDesc: "Energy detachment rituals to restore your true spiritual self."
      },
      {
        challengeIcon: <Compass size={20} />,
        challengeTitle: "Blocked Career & Growth",
        challengeDesc: "Feeling like a dark shadow is holding you back from success.",
        solutionIcon: <Globe size={20} />,
        solutionTitle: "Path Cleansing",
        solutionDesc: "Rahu/Ketu remedies to clear the path of progress."
      },
      {
        challengeIcon: <HelpCircle size={20} />,
        challengeTitle: "Vulnerability",
        challengeDesc: "Feeling constantly open to psychic attacks and low vibration.",
        solutionIcon: <Star size={20} />,
        solutionTitle: "Lifetime Kavach",
        solutionDesc: "Consecration of a personal protective amulet for constant defense."
      }
    ],
    "evil-eye-removal": [
      {
        challengeIcon: <Eye size={20} />,
        challengeTitle: "Jealousy & Bad Vibes",
        challengeDesc: "Friends or associates looking at your growth with hidden envy.",
        solutionIcon: <Sparkles size={20} />,
        solutionTitle: "Nazar Removal",
        solutionDesc: "Traditional Nazar Utarna rituals to cast away evil intentions."
      },
      {
        challengeIcon: <Zap size={20} />,
        challengeTitle: "Sudden Drop in Business",
        challengeDesc: "Flow of customers suddenly stopping after public success.",
        solutionIcon: <Globe size={20} />,
        solutionTitle: "Commercial Shield",
        solutionDesc: "Protection yantra installation at shop or office entrance."
      },
      {
        challengeIcon: <Users size={20} />,
        challengeTitle: "Children's Health Drops",
        challengeDesc: "Kids crying, getting sick frequently, or losing appetite without reason.",
        solutionIcon: <Shield size={20} />,
        solutionTitle: "Child Protection",
        solutionDesc: "Consecrated black threads and gentle protection chants."
      },
      {
        challengeIcon: <Clock size={20} />,
        challengeTitle: "Constant Accidents",
        challengeDesc: "Frequent vehicle dents, slip-and-falls, or technical breakdowns.",
        solutionIcon: <Compass size={20} />,
        solutionTitle: "Safe Travels",
        solutionDesc: "Vehicle yantra and travel protection rituals."
      },
      {
        challengeIcon: <Heart size={20} />,
        challengeTitle: "Relationship Discord",
        challengeDesc: "Happy relationships suddenly breaking down due to gossip.",
        solutionIcon: <Shield size={20} />,
        solutionTitle: "Love Shielding",
        solutionDesc: "Relationship shielding to prevent external jealousy from entering."
      }
    ],
    "spiritual-healing": [
      {
        challengeIcon: <Heart size={20} />,
        challengeTitle: "Chronic Grief & Sorrow",
        challengeDesc: "Carrying heavy grief from loss, breakups, or past trauma.",
        solutionIcon: <Sparkles size={20} />,
        solutionTitle: "Emotional Release",
        solutionDesc: "Chakra balancing to release trapped emotional pain."
      },
      {
        challengeIcon: <Hourglass size={20} />,
        challengeTitle: "Mental Anxiety & Stress",
        challengeDesc: "Overthinking, racing mind, and constant state of worry.",
        solutionIcon: <CheckCircle2 size={20} />,
        solutionTitle: "Peace & Calm",
        solutionDesc: "Deep meditation, breathing guidelines, and planetary peace."
      },
      {
        challengeIcon: <Zap size={20} />,
        challengeTitle: "Energetic Blockages",
        challengeDesc: "Feeling spiritually blocked or stuck in life's routines.",
        solutionIcon: <Compass size={20} />,
        solutionTitle: "Chakra Realignment",
        solutionDesc: "Aligning the seven main chakras through Vedic sound healing."
      },
      {
        challengeIcon: <Users size={20} />,
        challengeTitle: "Physical Weakness",
        challengeDesc: "Feeling physically weak or constantly low in vitality.",
        solutionIcon: <Shield size={20} />,
        solutionTitle: "Pranic Rejuvenation",
        solutionDesc: "Channelling pure life energy (Prana) to revitalize the system."
      },
      {
        challengeIcon: <HelpCircle size={20} />,
        challengeTitle: "Disconnect from Spirit",
        challengeDesc: "Feeling disconnected from your inner self and purpose.",
        solutionIcon: <Star size={20} />,
        solutionTitle: "Spiritual Awakening",
        solutionDesc: "Guru guidance and mantra sadhana to connect with higher consciousness."
      }
    ],
    "psychic-reading": [
      {
        challengeIcon: <HelpCircle size={20} />,
        challengeTitle: "Confusion About Choices",
        challengeDesc: "Facing major decisions in career or relationship with no direction.",
        solutionIcon: <Compass size={20} />,
        solutionTitle: "Path Clarity",
        solutionDesc: "Gifted psychic scan to reveal the future outcomes of each choice."
      },
      {
        challengeIcon: <Zap size={20} />,
        challengeTitle: "Hidden Blockages",
        challengeDesc: "Feeling like a block exists but not knowing what is causing it.",
        solutionIcon: <Eye size={20} />,
        solutionTitle: "Root Cause Detection",
        solutionDesc: "Aura reading and past life influence analysis."
      },
      {
        challengeIcon: <Clock size={20} />,
        challengeTitle: "Career & Financial Future",
        challengeDesc: "Stuck in a dead-end job, not knowing when progress will come.",
        solutionIcon: <Globe size={20} />,
        solutionTitle: "Path of Prosperity",
        solutionDesc: "Tarot reading to reveal timelines for new jobs and wealth."
      },
      {
        challengeIcon: <Heart size={20} />,
        challengeTitle: "Relationship Status",
        challengeDesc: "Unsure if partner is faithful or when you will find true love.",
        solutionIcon: <Sparkles size={20} />,
        solutionTitle: "Love Path Reading",
        solutionDesc: "Relationship layout to reveal their thoughts and future alignment."
      },
      {
        challengeIcon: <Hourglass size={20} />,
        challengeTitle: "Lifelong Purpose",
        challengeDesc: "Lacking a sense of direction or higher calling.",
        solutionIcon: <Star size={20} />,
        solutionTitle: "Destiny Mapping",
        solutionDesc: "Astrological birth chart analysis combined with psychic insights."
      }
    ],
    "love-marriage-solution": [
      {
        challengeIcon: <Users size={20} />,
        challengeTitle: "Parental Objections",
        challengeDesc: "Parents refusing to accept the love marriage due to caste/status.",
        solutionIcon: <CheckCircle2 size={20} />,
        solutionTitle: "Harmonizing Family",
        solutionDesc: "Planetary remedies to soften parents' hearts and gain approval."
      },
      {
        challengeIcon: <HelpCircle size={20} />,
        challengeTitle: "Astrological Mismatches",
        challengeDesc: "Horoscope mismatch (Doshas) causing fear of failure.",
        solutionIcon: <Sparkles size={20} />,
        solutionTitle: "Kundli Correction",
        solutionDesc: "Vedic remedies and mantras to neutralize negative chart aspects."
      },
      {
        challengeIcon: <Shield size={20} />,
        challengeTitle: "Social Tensions",
        challengeDesc: "Fear of societal backlash, gossip, or peer pressure.",
        solutionIcon: <Globe size={20} />,
        solutionTitle: "Shielding from Pressure",
        solutionDesc: "Protective boundary rituals to keep social noise out."
      },
      {
        challengeIcon: <Clock size={20} />,
        challengeTitle: "Career Stability First",
        challengeDesc: "Delaying marriage because of job or financial instability.",
        solutionIcon: <Calendar size={20} />,
        solutionTitle: "Success Path",
        solutionDesc: "Lakshmi/Kuber rituals to bless career before starting union."
      },
      {
        challengeIcon: <Heart size={20} />,
        challengeTitle: "Premarital Doubts",
        challengeDesc: "Last-minute cold feet, arguments, or misunderstandings.",
        solutionIcon: <Star size={20} />,
        solutionTitle: "Mutual Confidence",
        solutionDesc: "Healing counseling to clear doubts and strengthen the bond."
      }
    ],
    "breakup-solution": [
      {
        challengeIcon: <Heart size={20} />,
        challengeTitle: "Severe Heartache",
        challengeDesc: "Feeling paralyzed by emotional pain and rejection.",
        solutionIcon: <Sparkles size={20} />,
        solutionTitle: "Grief Release",
        solutionDesc: "Heart chakra healing to ease grief and return to peace."
      },
      {
        challengeIcon: <Hourglass size={20} />,
        challengeTitle: "Obsessive Thoughts",
        challengeDesc: "Constantly checking their social media, replaying past memories.",
        solutionIcon: <Clock size={20} />,
        solutionTitle: "Mind Cleansing",
        solutionDesc: "Detachment mantras to break unhealthy energetic cords."
      },
      {
        challengeIcon: <Users size={20} />,
        challengeTitle: "Low Self-Worth",
        challengeDesc: "Blaming yourself, feeling unlovable or insecure.",
        solutionIcon: <Shield size={20} />,
        solutionTitle: "Restoring Confidence",
        solutionDesc: "Aura restoration to reclaim your power and radiant self."
      },
      {
        challengeIcon: <Zap size={20} />,
        challengeTitle: "Bitterness & Anger",
        challengeDesc: "Carrying toxic anger or resentment that blocks your life.",
        solutionIcon: <CheckCircle2 size={20} />,
        solutionTitle: "Peace of Mind",
        solutionDesc: "Forgiveness rituals to release negative ties and move on."
      },
      {
        challengeIcon: <HelpCircle size={20} />,
        challengeTitle: "Fear of Dating Again",
        challengeDesc: "Fear of getting hurt, blocking new romantic possibilities.",
        solutionIcon: <Heart size={20} />,
        solutionTitle: "Heart Opening",
        solutionDesc: "Gentle spiritual guidance to open your heart safely."
      }
    ]
  };

  // Get active rows
  const activeRows = challengesData[slug] || challengesData["love"];

  // Helper to determine experience labels dynamically
  const getExperienceLabel = (s) => {
    if (s === 'love' || s === 'love-spell-caster' || s === 'husband-wife-problems' || s === 'marriage-problems' || s === 'love-marriage-solution' || s === 'breakup-solution') {
      return "Experience in Love Solutions";
    }
    return "Experience in Spiritual Solutions";
  };

  // Helper to determine Hope Box details
  const getHopeBoxDetails = (s) => {
    if (s === 'love' || s === 'love-spell-caster' || s === 'husband-wife-problems' || s === 'marriage-problems' || s === 'love-marriage-solution' || s === 'breakup-solution') {
      return {
        title: "HOPE IS NOT LOST.",
        desc: "The stars can guide you back to love."
      };
    }
    return {
      title: "LIGHT SHINES THROUGH.",
      desc: "Cosmic energies will guide you back to peace."
    };
  };

  const hopeBox = getHopeBoxDetails(slug);

  return (
    <div style={{ paddingBottom: '0' }}>
      
      {/* 1. HERO CONTENT SECTION */}
      <section className="section-padding" style={{
        position: 'relative',
        background: 'rgba(8, 2, 18, 0.4)',
        textAlign: 'left'
      }}>
        <div className="container form-row-2 about-temple-banner" style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '50px',
          alignItems: 'center'
        }}>
          
          {/* Left Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <span className="ornament-star" style={{ fontSize: '14px', color: 'var(--gold)' }}>✦</span>
              <span style={{
                fontSize: '11px',
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.25em',
                color: 'var(--gold)',
                fontWeight: '600'
              }}>
                DIVINE SERVICE
              </span>
            </div>

            <h1 className="font-display text-gold-gradient text-shadow-gold text-popup-anim" style={{ fontSize: '46px', fontWeight: '900', marginBottom: '15px', lineHeight: '1.15' }}>
              {currentService.title}
            </h1>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px' }}>
              <div style={{ height: '1.5px', width: '60px', background: 'var(--gold)', opacity: 0.6 }} />
              <span className="ornament-star" style={{ color: 'var(--gold)', fontSize: '12px' }}>✦</span>
              <div style={{ height: '1.5px', width: '60px', background: 'var(--gold)', opacity: 0.6 }} />
            </div>

            <h2 className="font-display" style={{ fontSize: '18px', color: 'var(--cream)', fontWeight: 'bold', marginBottom: '15px' }}>
              Solutions Crafted to Heal, Protect & Align Your Life Journey.
            </h2>
            
            <p style={{
              fontSize: '14px',
              color: 'var(--text-primary)',
              lineHeight: '1.7',
              marginBottom: '35px'
            }}>
              {currentService.description} Through Vedic Astrology, custom remedies, and spiritual support, we work with you to understand the planetary causes and clear the blockages that hold you back.
            </p>

            {/* Three Points Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '15px',
              marginBottom: '35px'
            }} id="timeline-headers">
              
              {/* Point 1 */}
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold)',
                  flexShrink: 0
                }}>
                  <Shield size={16} />
                </div>
                <div>
                  <h4 style={{ fontSize: '12px', color: 'var(--cream)', fontWeight: 'bold', margin: '0 0 2px 0' }}>100% Confidential</h4>
                  <p style={{ fontSize: '10px', color: 'var(--text-muted)', margin: 0 }}>Your privacy is our highest priority.</p>
                </div>
              </div>

              {/* Point 2 */}
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold)',
                  flexShrink: 0
                }}>
                  <Star size={16} />
                </div>
                <div>
                  <h4 style={{ fontSize: '12px', color: 'var(--cream)', fontWeight: 'bold', margin: '0 0 2px 0' }}>Personalized Guidance</h4>
                  <p style={{ fontSize: '10px', color: 'var(--text-muted)', margin: 0 }}>Solutions crafted only for your situation.</p>
                </div>
              </div>

              {/* Point 3 */}
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  border: '1px solid rgba(212, 175, 55, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--gold)',
                  flexShrink: 0
                }}>
                  <Sparkles size={16} />
                </div>
                <div>
                  <h4 style={{ fontSize: '12px', color: 'var(--cream)', fontWeight: 'bold', margin: '0 0 2px 0' }}>Ancient Wisdom</h4>
                  <p style={{ fontSize: '10px', color: 'var(--text-muted)', margin: 0 }}>Powerful astrology, mantras & rituals.</p>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '15px' }} id="hero-buttons">
              <button 
                onClick={() => navigateTo('book')}
                className="primary-button"
                style={{ padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <Calendar size={18} />
                BOOK A CONSULTATION
              </button>
              <a 
                href="https://wa.me/447722131999"
                className="glass-button"
                style={{
                  padding: '12px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  borderColor: 'rgba(212, 175, 55, 0.4)',
                  color: 'var(--gold)'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(212, 175, 55, 0.05)';
                  e.currentTarget.style.borderColor = 'var(--gold)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'none';
                  e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.4)';
                }}
              >
                <Phone size={18} fill="currentColor" />
                WHATSAPP CHAT
              </a>
            </div>

          </div>

          {/* Right Column */}
          <div>
            {/* Image Frame Wrapper */}
            <div style={{ position: 'relative', width: '100%', maxWidth: '380px', margin: '0 auto' }}>
              
              <img 
                src={serviceImages[slug] || imgLove} 
                alt={currentService.title} 
                style={{
                  width: '100%',
                  borderRadius: '24px',
                  border: '2px solid rgba(212, 175, 55, 0.3)',
                  boxShadow: '0 20px 45px rgba(0, 0, 0, 0.7)',
                  position: 'relative',
                  zIndex: 2,
                  display: 'block'
                }}
              />
            </div>

            {/* Hope Is Not Lost Box */}
            <div className="glass-card" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              padding: '16px 24px',
              marginTop: '30px',
              border: '1.5px solid rgba(212, 175, 55, 0.3)',
              background: 'rgba(212, 175, 55, 0.03)',
              maxWidth: '380px',
              margin: '30px auto 0 auto',
              textAlign: 'left'
            }}>
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                border: '1px solid var(--gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--gold)',
                flexShrink: 0
              }}>
                <Heart size={20} fill="currentColor" />
              </div>
              <div>
                <h4 style={{ fontSize: '13px', color: 'var(--gold-soft)', fontWeight: 'bold', margin: '0 0 2px 0', letterSpacing: '0.05em' }}>
                  {hopeBox.title}
                </h4>
                <p style={{ fontSize: '12px', color: 'var(--text-primary)', margin: 0 }}>
                  {hopeBox.desc}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. CHALLENGES vs SOLUTIONS SECTION */}
      <section className="section-padding" style={{
        position: 'relative'
      }}>
        <div className="container">
          
          {/* Main Panel Box */}
          <div style={{
            background: 'rgba(12, 6, 26, 0.75)',
            border: '1px solid rgba(212, 175, 55, 0.12)',
            borderRadius: '24px',
            padding: '45px 35px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(10px)'
          }}>
            
            {/* Headers */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 60px 1fr',
              gap: '20px',
              marginBottom: '45px',
              textAlign: 'center'
            }} id="timeline-headers">
              <h3 className="font-display" style={{ fontSize: '15px', color: '#f43f5e', fontWeight: 'bold', letterSpacing: '0.12em', margin: 0 }}>
                THE CHALLENGES YOU MAY BE FACING
              </h3>
              <div />
              <h3 className="font-display" style={{ fontSize: '15px', color: '#10b981', fontWeight: 'bold', letterSpacing: '0.12em', margin: 0 }}>
                OUR GUIDANCE – THE SOLUTION
              </h3>
            </div>

            {/* Grid Row Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', position: 'relative' }}>
              
              {/* Center connector line */}
              <div style={{
                position: 'absolute',
                top: '25px',
                bottom: '25px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '1px',
                background: 'linear-gradient(to bottom, var(--gold), rgba(212, 175, 55, 0.15))',
                zIndex: 1
              }} className="desktop-only-line" />

              {activeRows.map((row, i) => (
                <div key={i} style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr auto 1fr',
                  gap: '35px',
                  alignItems: 'center',
                  zIndex: 2,
                  position: 'relative'
                }} className="timeline-row-responsive">
                  
                  {/* Left Challenge Box */}
                  <div className="glass-card" style={{
                    padding: '20px 24px',
                    border: '1.5px solid rgba(244, 63, 94, 0.18)',
                    background: 'rgba(244, 63, 94, 0.015)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '15px',
                    textAlign: 'left'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      background: 'rgba(244, 63, 94, 0.08)',
                      color: '#f43f5e',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {row.challengeIcon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '15px', color: 'var(--cream)', fontWeight: 'bold', margin: '0 0 5px 0' }}>
                        {row.challengeTitle}
                      </h4>
                      <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                        {row.challengeDesc}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot + Arrow */}
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--gold), var(--gold-soft))',
                    color: 'var(--bg-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 10px rgba(212, 175, 55, 0.5)',
                    border: '2px solid var(--bg-deep)',
                    zIndex: 3
                  }} className="desktop-only-arrow">
                    <ArrowRight size={14} />
                  </div>

                  {/* Right Solution Box */}
                  <div className="glass-card" style={{
                    padding: '20px 24px',
                    border: '1.5px solid rgba(16, 185, 129, 0.18)',
                    background: 'rgba(16, 185, 129, 0.015)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '15px',
                    textAlign: 'left'
                  }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      background: 'rgba(16, 185, 129, 0.08)',
                      color: '#10b981',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {row.solutionIcon}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '15px', color: 'var(--cream)', fontWeight: 'bold', margin: '0 0 5px 0' }}>
                        {row.solutionTitle}
                      </h4>
                      <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0, lineHeight: '1.6' }}>
                        {row.solutionDesc}
                      </p>
                    </div>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* 4. YOU ARE NOT ALONE BANNER */}
      <section style={{ padding: '30px 0' }}>
        <div className="container">
          <div style={{
            position: 'relative',
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, rgba(8, 2, 18, 0.8) 100%)',
            border: '1.5px solid rgba(212, 175, 55, 0.25)',
            borderRadius: '24px',
            padding: '35px 45px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '30px',
            overflow: 'hidden',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(8px)'
          }} id="not-alone-banner">
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '25px', textAlign: 'left' }} id="not-alone-content">
              {/* Glowing Lotus Circle */}
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                border: '1.5px solid var(--gold)',
                boxShadow: '0 0 20px rgba(212, 175, 55, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--gold)',
                flexShrink: 0,
                background: 'rgba(212, 175, 55, 0.05)'
              }}>
                <Sparkles size={26} />
              </div>
              <div>
                <h4 style={{ fontSize: '13px', color: 'var(--gold-soft)', fontWeight: 'bold', margin: '0 0 4px 0', letterSpacing: '0.1em' }}>
                  YOU ARE NOT ALONE.
                </h4>
                <p style={{ fontSize: '15px', color: 'var(--cream)', margin: '0 0 6px 0', lineHeight: '1.4' }}>
                  Thousands have found hope, healing and relief again with the right guidance.
                </p>
                <p className="font-display" style={{ fontSize: '18px', color: 'var(--gold)', fontWeight: 'bold', margin: 0 }}>
                  You can be next.
                </p>
              </div>
            </div>

            {/* Silhouette / Graphic Element */}
            <div style={{ opacity: 0.7, display: 'flex', alignItems: 'center' }} className="desktop-only">
              <div style={{
                width: '74px',
                height: '74px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(212, 175, 55, 0.25) 0%, transparent 70%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Award size={36} style={{ color: 'var(--gold)' }} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. STATS & EXPLORE SERVICES ROW */}
      <section className="section-padding">
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '40px',
          textAlign: 'left'
        }} id="detail-layout">
          
          {/* Left Box: Why Choose Our Guidance */}
          <div className="glass-card" style={{ padding: '35px 30px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <h3 className="font-display text-gold-gradient" style={{ fontSize: '22px', fontWeight: 'bold', margin: 0, textAlign: 'center', width: '100%' }}>
              WHY CHOOSE OUR GUIDANCE?
            </h3>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '30px',
              marginTop: '10px'
            }} id="timeline-headers">
              
              {/* Stat 1 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ color: 'var(--gold)', marginBottom: '8px' }}><Users size={28} /></div>
                <p className="font-display" style={{ fontSize: '26px', fontWeight: '900', color: 'var(--cream)', margin: '0 0 3px 0' }}>20,000+</p>
                <p style={{ fontSize: '11px', color: 'var(--text-muted)', margin: 0, fontWeight: '700' }}>Happy Clients Worldwide</p>
              </div>

              {/* Stat 2 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ color: 'var(--gold)', marginBottom: '8px' }}><Award size={28} /></div>
                <p className="font-display" style={{ fontSize: '26px', fontWeight: '900', color: 'var(--cream)', margin: '0 0 3px 0' }}>98%</p>
                <p style={{ fontSize: '11px', color: 'var(--text-muted)', margin: 0, fontWeight: '700' }}>Client Satisfaction Rate</p>
              </div>

              {/* Stat 3 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ color: 'var(--gold)', marginBottom: '8px' }}><Clock size={28} /></div>
                <p className="font-display" style={{ fontSize: '26px', fontWeight: '900', color: 'var(--cream)', margin: '0 0 3px 0' }}>20+ Years</p>
                <p style={{ fontSize: '11px', color: 'var(--text-muted)', margin: 0, fontWeight: '700' }}>{getExperienceLabel(slug)}</p>
              </div>

              {/* Stat 4 */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <div style={{ color: 'var(--gold)', marginBottom: '8px' }}><Globe size={28} /></div>
                <p className="font-display" style={{ fontSize: '26px', fontWeight: '900', color: 'var(--cream)', margin: '0 0 3px 0' }}>Worldwide</p>
                <p style={{ fontSize: '11px', color: 'var(--text-muted)', margin: 0, fontWeight: '700' }}>Consultations Available</p>
              </div>

            </div>
          </div>

          {/* Right Box: Explore Other Services */}
          <div className="glass-card" style={{ padding: '30px' }}>
            <h3 className="font-display" style={{
              fontSize: '18px',
              color: 'var(--gold-soft)',
              borderBottom: '1px solid rgba(212, 175, 55, 0.15)',
              paddingBottom: '10px',
              marginBottom: '15px',
              fontWeight: 'bold',
              letterSpacing: '0.05em'
            }}>
              EXPLORE OTHER SERVICES
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', padding: 0, margin: 0 }}>
              {services.filter(s => s.slug !== slug).slice(0, 6).map(other => (
                <li key={other.slug} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.03)', paddingBottom: '8px' }}>
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
                      justifyContent: 'space-between',
                      width: '100%',
                      transition: 'var(--transition-fast)'
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-primary)'}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ color: 'var(--gold-soft)' }}>{other.icon}</span>
                      <span>{other.title}</span>
                    </span>
                    <span style={{ color: 'var(--gold)', fontSize: '14px', fontWeight: 'bold' }}>&gt;</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 6. BOTTOM CALL TO ACTION */}
      <section style={{ padding: '30px 0 60px 0' }}>
        <div className="container">
          <div style={{
            background: 'rgba(212, 175, 55, 0.03)',
            border: '1.5px solid rgba(212, 175, 55, 0.25)',
            borderRadius: '24px',
            padding: '45px 30px',
            textAlign: 'center',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(8px)'
          }}>
            <h3 className="font-display text-gold-gradient" style={{ fontSize: '26px', fontWeight: 'bold', marginBottom: '15px', letterSpacing: '0.05em' }}>
              TAKE THE FIRST STEP TOWARDS HEALING & PEACE
            </h3>
            <p style={{ color: 'var(--text-primary)', fontSize: '15px', lineHeight: '1.6', marginBottom: '25px', maxWidth: '600px', margin: '0 auto 25px auto' }}>
              Every obstacle has a solution. Connect today and let planetary alignments and custom spiritual remedies guide you back to happiness.
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }} id="cta-buttons">
              <button 
                onClick={() => navigateTo('book')}
                className="primary-button"
                style={{ padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <Calendar size={18} />
                BOOK A CONSULTATION
              </button>
              <a 
                href="https://wa.me/447722131999"
                className="primary-button"
                style={{
                  padding: '12px 24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  textDecoration: 'none',
                  background: 'var(--emerald)',
                  borderColor: 'var(--emerald)',
                  color: 'white'
                }}
              >
                <Phone size={18} fill="white" />
                WHATSAPP CHAT
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
