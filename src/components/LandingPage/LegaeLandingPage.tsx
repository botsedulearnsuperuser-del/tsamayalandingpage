import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../SEO';
import './LegaeLandingPage.css';

const LegaeLandingPage: React.FC = () => {
    const navigate = useNavigate();

    // Images based on the directory scan
    const heroHandImg = '/assets/Gemini_Generated_Image_56m5z356m5z356m5.png';
    const brandLogo = '/assets/Logo_20for_20Light_20Mode.png';

    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const [showWaitlist, setShowWaitlist] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);
    const [waitlistEmail, setWaitlistEmail] = useState('');
    const [waitlistStep, setWaitlistStep] = useState(1);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [heroVisible, setHeroVisible] = useState(true);
    const [scrolledPastHero, setScrolledPastHero] = useState(false);
    const [activeSlide, setActiveSlide] = useState(0);
    const [agreedToEmails, setAgreedToEmails] = useState(false);
    const heroImageRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            // Show navbar button once scrolled past hero header (around 500px)
            setScrolledPastHero(window.scrollY > 500);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setHeroVisible(entry.isIntersecting);
            },
            { 
                threshold: 0.1,
                rootMargin: '0px 0px -20px 0px' 
            }
        );

        if (heroImageRef.current) {
            observer.observe(heroImageRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWaitlist(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % 5);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        (function (C: any, A: string, L: string) {
            let p = function (a: any, ar: any) { a.q.push(ar); };
            let d = C.document;
            C.Cal = C.Cal || function () {
                let cal = C.Cal;
                let ar = arguments;
                if (!cal.loaded) {
                    cal.ns = {};
                    cal.q = cal.q || [];
                    d.head.appendChild(d.createElement("script")).src = A;
                    cal.loaded = true;
                }
                if (ar[0] === L) {
                    const api = function () { p(api, arguments); };
                    const namespace = ar[1];
                    (api as any).q = (api as any).q || [];
                    if (typeof namespace === "string") {
                        cal.ns[namespace] = cal.ns[namespace] || api;
                        p(cal.ns[namespace], ar);
                        p(cal, ["initNamespace", namespace]);
                    } else p(cal, ar);
                    return;
                }
                p(cal, ar);
            };
        })(window, "https://app.cal.com/embed/embed.js", "init");

        const w = window as any;
        w.Cal("init", "tsamaya-mobile-transport-payments", { origin: "https://app.cal.com" });
        w.Cal.config = w.Cal.config || {};
        w.Cal.config.forwardQueryParams = true;
        w.Cal.ns["tsamaya-mobile-transport-payments"]("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    }, []);

    const handleWaitlistSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setWaitlistStep(2);
    };

    const handleFinalConfirm = () => {
        alert(`Thank you! ${waitlistEmail} has been added to the Tsamaya priority waitlist.`);
        setShowWaitlist(false);
        setWaitlistEmail('');
        setWaitlistStep(1);
        setAgreedToEmails(false);
    };

    const faqData = [
        {
            question: "How does the Tsamaya NFC Transit Pass work?",
            answer: "Just tap your physical Tsamaya Transit Pass or scan your mobile QR code against the driver's smartphone. The fare is deducted instantly from your secure cloud wallet in under a second."
        },
        {
            question: "How do I top up my wallet balance?",
            answer: "You can fund your account anytime using Orange Money (USSD push), BTC SMEGA, Mascom MyZaka, or any Visa/Mastercard debit or credit card."
        },
        {
            question: "What happens if I lose my transit card?",
            answer: "Your money never lives on the physical card—it is safely stored in your cloud wallet. You can instantly activate the One-Tap Kill Switch via the web portal or mobile app to lock the lost card and link a new one seamlessly."
        },
        {
            question: "How do drivers and operators accept fares?",
            answer: "Drivers simply turn their Android smartphone into a contactless POS terminal with the Tsamaya Driver app. There are zero hardware setup costs, boarding is faster, and daily earnings reports are tracked automatically."
        }
    ];

    return (
        <div className="legae-landing">
            <SEO
                title="Tsamaya - Cashless Public Transit Payment Botswana | NFC Transit Pass"
                description="Tsamaya is Botswana's leading cashless public transit payment system. Pay for combis, buses, and taxis instantly using your Tsamaya NFC Transit Pass or Mobile App. Safe for students, seamless for parents, and reliable for drivers across Gaborone, Francistown, and all of Botswana."
                keywords="Tsamaya, Tsamaya Botswana, Tsamaya transit pass, cashless transit Botswana, NFC transit pass, public transport payment Botswana, combi payment Botswana, bus payment Botswana, taxi payment Botswana, transport payment system, digital transit card Botswana, contactless transit payment, Gaborone transport, Botswana transport card, student transit pass, school transport Botswana, mobile transit app, transit wallet Botswana, fare payment system, cashless transport Africa, Botswana NFC card, public transport technology, transit fintech Botswana, payment card Botswana, electronic transport payment, tap and pay transit, Buson, Legae, Legae app, Tsamaya payment, transport Gaborone, transport Francistown, Orange Money transport, BTC SMEGA transport, Mascom MyZaka transport, Visa Mastercard transit, school bus Botswana, combi fare Botswana, bus fare Botswana, taxi fare Botswana, transit system Africa, smart transport card"
                url="/"
                structuredData={{
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "What is Tsamaya?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Tsamaya is Botswana's leading cashless public transit payment system. It allows commuters to pay for combis, buses, and taxis instantly using an NFC Transit Pass or the Tsamaya Mobile App."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How do I get a Tsamaya Transit Pass?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "You can sign up for a Tsamaya Transit Pass through our website or mobile app. Once registered, you can collect your NFC card from a Tsamaya partner location and start loading your transit wallet."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Where can I top up my Tsamaya wallet?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "You can top up your Tsamaya wallet instantly using Orange Money, BTC SMEGA, Mascom MyZaka, or any Visa/Mastercard debit or credit card."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Is Tsamaya safe for students?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes, Tsamaya is designed with student safety in mind. Parents can monitor their children's transit in real-time, set spending limits, and receive notifications. The One-Tap Kill Switch provides instant card deactivation if needed."
                            }
                        }
                    ]
                }}
            />
            {/* Navigation */}
            <nav className="navbar">
                <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
                    <img 
                        src={brandLogo} 
                        alt="Tsamaya" 
                        style={{ 
                            height: '2.5rem', 
                            width: 'auto', 
                            objectFit: 'contain'
                        }} 
                    />
                </div>
                
                <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <button className="close-menu-btn" onClick={() => setIsMobileMenuOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M5 5l14 14M5 19l14 -14"/></g></svg>
                    </button>
                    <ul className="nav-links">
                        <li><a href="#benefits" onClick={() => setIsMobileMenuOpen(false)}>Key Benefits</a></li>
                        <li><a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)}>How It Works</a></li>
                        <li><a href="#security" onClick={() => setIsMobileMenuOpen(false)}>Security</a></li>
                        <li><a href="#top-up" onClick={() => setIsMobileMenuOpen(false)}>Top-Up Partners</a></li>
                    </ul>
                    <div className="nav-actions">
                        <button 
                            className="book-demo-btn"
                            onClick={() => {
                                window.open('https://cal.com/tlhalefangntshilane/tsamaya-mobile-transport-payments', '_blank', 'noopener,noreferrer');
                                setIsMobileMenuOpen(false);
                            }}
                        >
                            Book A Demo
                        </button>
                        <button 
                            className={`get-started-btn ${scrolledPastHero ? 'visible' : ''}`} 
                            onClick={() => setShowWaitlist(true)}
                        >
                            Get Transit Pass
                        </button>
                    </div>
                </div>

                <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" fill="none"/><path fill="currentColor" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"/></svg>
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div 
                className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} 
                onClick={() => setIsMobileMenuOpen(false)}
            ></div>

            {/* Hero Section */}
            <header className="hero">
                <div className="hero-container">
                    <div className="hero-content-wrapper">
                        <h1>The Smarter, Safer Way to Move Across Botswana.</h1>
                        <p className="hero-subtitle">
                            Cashless public transit for everyone. Pay for combis, buses, and taxis instantly using your Tsamaya NFC Transit Pass or Mobile App. Safe for students, seamless for parents, and reliable for drivers.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                            <button className="try-free-btn" onClick={() => setShowWaitlist(true)}>Get Your Transit Pass</button>
                            <button 
                                className="try-free-btn" 
                                onClick={() => setShowWaitlist(true)}
                                style={{ background: 'transparent', color: '#1a1a1a', border: '1.5px solid #12B5B0' }}
                            >
                                Download App
                            </button>
                        </div>
                    </div>

                    {/* Hero Interactive Showcase (Center Phone Mockup with Hand Blend Fade) */}
                    <div ref={heroImageRef} className="hero-showcase-container">
                        {/* Center: Main Phone App Mockup */}
                        <div className={`hero-center-mockup ${heroVisible ? 'slide-in' : 'slide-out'}`}>
                            <div className="hero-phone-wrapper">
                                <img src={heroHandImg} alt="Tsamaya App & Transit Pass" className="hero-phone-img" />
                                
                                {/* Bottom Hand Ending Blend Fade */}
                                <div className="hero-hand-bottom-cover">
                                    <div className="hand-blend-fade"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Animated Zig-Zag Transit Road (Combi & Taxi Path) */}
                    <div className="hero-transit-track-section">
                        <div className="transit-track-header">
                            <span className="transit-track-subtext">Tap & pay across Combis, Taxis & Buses</span>
                        </div>

                        <div className="transit-road-wrapper">
                            <svg 
                                className="transit-road-svg" 
                                viewBox="0 -30 1400 280" 
                                fill="none" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    {/* Road Asphalt Gradient */}
                                    <linearGradient id="roadGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#1E293B" />
                                        <stop offset="35%" stopColor="#0F172A" />
                                        <stop offset="70%" stopColor="#1E293B" />
                                        <stop offset="100%" stopColor="#0F172A" />
                                    </linearGradient>

                                    {/* Road Glow / Border Gradient */}
                                    <linearGradient id="roadBorderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#12B5B0" stopOpacity="0.4" />
                                        <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.8" />
                                        <stop offset="100%" stopColor="#12B5B0" stopOpacity="0.4" />
                                    </linearGradient>

                                    {/* Vehicle Headlight Glow */}
                                    <linearGradient id="headlightBeam" x1="0%" y1="50%" x2="100%" y2="50%">
                                        <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.8" />
                                        <stop offset="100%" stopColor="#FEF08A" stopOpacity="0" />
                                    </linearGradient>

                                    {/* Drop Shadow for Vehicles */}
                                    <filter id="vehicleShadow" x="-20%" y="-20%" width="140%" height="140%">
                                        <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.35" />
                                    </filter>
                                </defs>

                                {/* Background Road Border / Curb */}
                                <path
                                    id="roadBaseCurve"
                                    d="M -60,115 C 160,205 320,35 540,115 C 760,195 930,25 1150,115 C 1280,175 1380,75 1480,115"
                                    stroke="url(#roadBorderGrad)"
                                    strokeWidth="56"
                                    strokeLinecap="round"
                                    fill="none"
                                />

                                {/* Main Asphalt Surface */}
                                <path
                                    d="M -60,115 C 160,205 320,35 540,115 C 760,195 930,25 1150,115 C 1280,175 1380,75 1480,115"
                                    stroke="url(#roadGrad)"
                                    strokeWidth="48"
                                    strokeLinecap="round"
                                    fill="none"
                                />

                                {/* Road Side Guide Lines */}
                                <path
                                    d="M -60,115 C 160,205 320,35 540,115 C 760,195 930,25 1150,115 C 1280,175 1380,75 1480,115"
                                    stroke="#334155"
                                    strokeWidth="42"
                                    strokeLinecap="round"
                                    fill="none"
                                />
                                <path
                                    d="M -60,115 C 160,205 320,35 540,115 C 760,195 930,25 1150,115 C 1280,175 1380,75 1480,115"
                                    stroke="#1E293B"
                                    strokeWidth="38"
                                    strokeLinecap="round"
                                    fill="none"
                                />

                                {/* Dashed Center Lane Line */}
                                <path
                                    className="road-dashed-divider"
                                    d="M -60,115 C 160,205 320,35 540,115 C 760,195 930,25 1150,115 C 1280,175 1380,75 1480,115"
                                    stroke="#FBBF24"
                                    strokeWidth="3"
                                    strokeDasharray="14 16"
                                    strokeLinecap="round"
                                    fill="none"
                                />



                                {/* ======================================================== */}
                                {/* VEHICLE 1: COMBI (Minibus / Quantum) Moving Left to Right */}
                                {/* ======================================================== */}
                                <g className="animated-vehicle-group combi-group" filter="url(#vehicleShadow)">
                                    <animateMotion
                                        path="M -80,115 C 160,205 320,35 540,115 C 760,195 930,25 1150,115 C 1280,175 1380,75 1480,115"
                                        dur="11s"
                                        repeatCount="indefinite"
                                        rotate="auto"
                                    />
                                    
                                    {/* Headlight beam */}
                                    <polygon points="34,-6 62,-14 62,14 34,6" fill="url(#headlightBeam)" />

                                    {/* Combi Body (Facing Right) */}
                                    <g transform="translate(0, 0)">
                                        {/* Main Chassis */}
                                        <rect x="-34" y="-14" width="68" height="28" rx="7" fill="#FFFFFF" stroke="#0E9490" strokeWidth="1.5" />
                                        
                                        {/* Tsamaya Turquoise Side Stripe */}
                                        <rect x="-34" y="2" width="68" height="6" fill="#12B5B0" />
                                        
                                        {/* Front Windshield & Windows */}
                                        <path d="M 18,-11 L 30,-11 C 32,-11 33,-9 33,-7 L 33,0 L 18,0 Z" fill="#0284C7" opacity="0.85" />
                                        <rect x="4" y="-11" width="11" height="11" rx="2" fill="#0284C7" opacity="0.85" />
                                        <rect x="-10" y="-11" width="11" height="11" rx="2" fill="#0284C7" opacity="0.85" />
                                        <rect x="-24" y="-11" width="11" height="11" rx="2" fill="#0284C7" opacity="0.85" />
                                        <rect x="-31" y="-11" width="4" height="11" rx="1" fill="#0284C7" opacity="0.85" />

                                        {/* Headlights & Taillights */}
                                        <rect x="32" y="-10" width="2.5" height="5" rx="1" fill="#FEF08A" />
                                        <rect x="32" y="5" width="2.5" height="5" rx="1" fill="#FEF08A" />
                                        <rect x="-34" y="-10" width="2" height="5" rx="1" fill="#EF4444" />
                                        <rect x="-34" y="5" width="2" height="5" rx="1" fill="#EF4444" />

                                        {/* Wheels */}
                                        <rect x="-24" y="-17" width="10" height="4" rx="2" fill="#0F172A" />
                                        <rect x="-24" y="13" width="10" height="4" rx="2" fill="#0F172A" />
                                        <rect x="16" y="-17" width="10" height="4" rx="2" fill="#0F172A" />
                                        <rect x="16" y="13" width="10" height="4" rx="2" fill="#0F172A" />

                                        {/* Roof Tag / NFC Badge */}
                                        <g transform="translate(0, -22)">
                                            <rect x="-22" y="-7" width="44" height="14" rx="7" fill="#12B5B0" stroke="#FFFFFF" strokeWidth="1.5" />
                                            <text x="0" y="3" fill="#FFFFFF" fontSize="8" fontWeight="800" textAnchor="middle">COMBI</text>
                                        </g>
                                    </g>
                                </g>

                                {/* ======================================================== */}
                                {/* VEHICLE 2: TAXI (Cab / Sedan) Moving Left to Right       */}
                                {/* ======================================================== */}
                                <g className="animated-vehicle-group taxi-group" filter="url(#vehicleShadow)">
                                    <animateMotion
                                        path="M -80,115 C 160,205 320,35 540,115 C 760,195 930,25 1150,115 C 1280,175 1380,75 1480,115"
                                        dur="14s"
                                        begin="-4.5s"
                                        repeatCount="indefinite"
                                        rotate="auto"
                                    />
                                    
                                    {/* Headlight beam */}
                                    <polygon points="26,-5 52,-12 52,12 26,5" fill="url(#headlightBeam)" />

                                    {/* Taxi Body (Facing Right) */}
                                    <g transform="translate(0, 0)">
                                        {/* Main Chassis */}
                                        <rect x="-26" y="-12" width="52" height="24" rx="6" fill="#FBBF24" stroke="#D97706" strokeWidth="1.5" />

                                        {/* Roof / Cabin */}
                                        <rect x="-12" y="-10" width="24" height="20" rx="3" fill="#FFFFFF" />
                                        
                                        {/* Windshields & Windows */}
                                        <path d="M 6,-9 L 14,-9 C 16,-9 17,-8 17,-6 L 17,6 C 17,8 16,9 14,9 L 6,9 Z" fill="#0284C7" opacity="0.8" />
                                        <rect x="-4" y="-8" width="8" height="16" rx="1" fill="#0284C7" opacity="0.75" />
                                        <path d="M -6,-9 L -14,-9 C -16,-9 -17,-8 -17,-6 L -17,6 C -17,8 -16,9 -14,9 L -6,9 Z" fill="#0284C7" opacity="0.8" />

                                        {/* Headlights & Taillights */}
                                        <rect x="24" y="-9" width="2.5" height="4" rx="1" fill="#FEF08A" />
                                        <rect x="24" y="5" width="2.5" height="4" rx="1" fill="#FEF08A" />
                                        <rect x="-26" y="-9" width="2" height="4" rx="1" fill="#EF4444" />
                                        <rect x="-26" y="5" width="2" height="4" rx="1" fill="#EF4444" />

                                        {/* Wheels */}
                                        <rect x="-18" y="-15" width="8" height="4" rx="2" fill="#0F172A" />
                                        <rect x="-18" y="11" width="8" height="4" rx="2" fill="#0F172A" />
                                        <rect x="12" y="-15" width="8" height="4" rx="2" fill="#0F172A" />
                                        <rect x="12" y="11" width="8" height="4" rx="2" fill="#0F172A" />

                                        {/* Roof Taxi Light / Badge */}
                                        <g transform="translate(0, -18)">
                                            <rect x="-18" y="-7" width="36" height="14" rx="7" fill="#0F172A" stroke="#FBBF24" strokeWidth="1.5" />
                                            <text x="0" y="3" fill="#FBBF24" fontSize="8" fontWeight="800" textAnchor="middle">TAXI</text>
                                        </g>
                                    </g>
                                </g>

                                {/* ======================================================== */}
                                {/* VEHICLE 3: TRANSIT BUS (Long Coach) Moving Left to Right */}
                                {/* ======================================================== */}
                                <g className="animated-vehicle-group bus-group" filter="url(#vehicleShadow)">
                                    <animateMotion
                                        path="M -80,115 C 160,205 320,35 540,115 C 760,195 930,25 1150,115 C 1280,175 1380,75 1480,115"
                                        dur="17s"
                                        begin="-9s"
                                        repeatCount="indefinite"
                                        rotate="auto"
                                    />
                                    
                                    {/* Headlight beam */}
                                    <polygon points="42,-7 72,-16 72,16 42,7" fill="url(#headlightBeam)" />

                                    {/* Bus Body (Facing Right) */}
                                    <g transform="translate(0, 0)">
                                        {/* Bus Chassis */}
                                        <rect x="-42" y="-15" width="84" height="30" rx="8" fill="#1E293B" stroke="#12B5B0" strokeWidth="1.8" />

                                        {/* Roof Strip */}
                                        <rect x="-38" y="-13" width="76" height="26" rx="5" fill="#334155" />
                                        
                                        {/* Windows Row */}
                                        <path d="M 24,-11 L 38,-11 C 40,-11 41,-9 41,-6 L 41,6 C 41,9 40,11 38,11 L 24,11 Z" fill="#38BDF8" opacity="0.9" />
                                        <rect x="9" y="-11" width="12" height="22" rx="2" fill="#38BDF8" opacity="0.85" />
                                        <rect x="-7" y="-11" width="12" height="22" rx="2" fill="#38BDF8" opacity="0.85" />
                                        <rect x="-23" y="-11" width="12" height="22" rx="2" fill="#38BDF8" opacity="0.85" />
                                        <rect x="-37" y="-11" width="10" height="22" rx="2" fill="#38BDF8" opacity="0.85" />

                                        {/* Front and Back Lights */}
                                        <rect x="40" y="-12" width="3" height="6" rx="1" fill="#FEF08A" />
                                        <rect x="40" y="6" width="3" height="6" rx="1" fill="#FEF08A" />
                                        <rect x="-42" y="-12" width="2.5" height="6" rx="1" fill="#EF4444" />
                                        <rect x="-42" y="6" width="2.5" height="6" rx="1" fill="#EF4444" />

                                        {/* 3 Axles / Wheels */}
                                        <rect x="-34" y="-18" width="9" height="4" rx="2" fill="#0F172A" />
                                        <rect x="-34" y="14" width="9" height="4" rx="2" fill="#0F172A" />
                                        <rect x="-20" y="-18" width="9" height="4" rx="2" fill="#0F172A" />
                                        <rect x="-20" y="14" width="9" height="4" rx="2" fill="#0F172A" />
                                        <rect x="24" y="-18" width="9" height="4" rx="2" fill="#0F172A" />
                                        <rect x="24" y="14" width="9" height="4" rx="2" fill="#0F172A" />

                                        {/* Roof Tag / Bus Label */}
                                        <g transform="translate(0, -23)">
                                            <rect x="-18" y="-7" width="36" height="14" rx="7" fill="#0E9490" stroke="#FFFFFF" strokeWidth="1.5" />
                                            <text x="0" y="3" fill="#FFFFFF" fontSize="8" fontWeight="800" textAnchor="middle">BUS</text>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
            </header>

            {/* Key Benefits (Value Proposition Cards) */}
            <section className="features" id="benefits">
                <div className="section-header">
                    <div>
                        <h2>Key Benefits for Commuters, Parents & Drivers</h2>
                    </div>
                    <div>
                        <p>A unified cashless transit platform designed to eliminate cash hassles, protect your money, and accelerate daily travel across Botswana.</p>
                    </div>
                </div>

                {/* Row 1: Image left, cards right */}
                <div className="features-split-row">
                    <div className="features-split-image">
                        <img
                            src="/assets/Green White and Yellow Simple Farming Pitch Deck Presentation (2) (1).png"
                            alt="Tsamaya commuters and students"
                        />
                    </div>
                    <div className="features-split-cards">
                        <div className="feature-card">
                            <h3>
                                <span className="feature-card-heading-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15">
                                        <path d="M0 0h15v15H0z" fill="none" />
                                        <path fill="currentColor" d="M4 3c0-1.1.9-2 2-2h7c1.1 0 2 .9 2 2v8c0 1-1 1-1 1v1c0 .55-.45 1-1 1s-1-.45-1-1v-1H7v1c0 .55-.45 1-1 1s-1-.45-1-1v-1c-1 0-1-1-1-1zm1.5 1c-.28 0-.5.22-.5.5v3c0 .28.22.5.5.5h8c.28 0 .5-.22.5-.5v-3c0-.28-.22-.5-.5-.5zM6 9c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1m7 0c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1M6 2.5c0 .28.22.5.5.5h6c.28 0 .5-.22.5-.5s-.22-.5-.5-.5h-6c-.28 0-.5.22-.5.5m-4.5 8.37V12l-.03.16l-.5 1.5c-.08.26-.37.4-.63.31a.49.49 0 0 1-.31-.63l.47-1.42v-1.05c-.3-.18-.5-.5-.5-.87V8.25c0-.55.45-1 1-1q.315 0 .57.18l.84.45l.74-.73c.19-.2.51-.2.7 0c.2.19.2.51 0 .7l-1 1c-.15.16-.39.2-.59.09L2 8.8v1.14l1.22.61c.17.09.28.26.28.45v1.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-1.19l-.95-.48c-.02.02-.03.03-.05.04M1 7c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1" />
                                    </svg>
                                </span>
                                For Commuters & Students
                            </h3>
                            <p><strong>Tap & Go Simplicity:</strong> No more carrying loose cash or searching for change. Just tap your Tsamaya Pass or phone to pay your fare in under a second.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Zero Balance Risk</h3>
                            <p>Stolen or misplaced card? Lock it instantly on the web or mobile app. Your balance remains 100% safe in your cloud wallet.</p>
                        </div>
                    </div>
                </div>

                {/* Row 2: Parents & Guardians (Cards Left, Image Right) */}
                <div className="features-split-row">
                    <div className="features-split-cards">
                        <div className="feature-card">
                            <h3>
                                <span className="feature-card-heading-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
                                        <path d="M0 0h32v32H0z" fill="none" />
                                        <path fill="currentColor" d="M20 30h-3a2 2 0 0 1-2-2v-5h2v5h3v-5h2v-4a1 1 0 0 0-1-1h-8.72l-2-6H4a1 1 0 0 0-1 1v6h2v9h4v-7h2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1-2-2v-6a3.003 3.003 0 0 1 3-3h6.28a2 2 0 0 1 1.897 1.367L13.72 16H21a3.003 3.003 0 0 1 3 3v4a2 2 0 0 1-2 2v3a2 2 0 0 1-2 2m8 0h-2V19h3v-6a1 1 0 0 0-1-1h-4v-2h4a3.003 3.003 0 0 1 3 3v6a2 2 0 0 1-2 2h-1ZM7 9a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m18 6a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2" />
                                        <path fill="currentColor" d="M18.5 15a3.5 3.5 0 1 1 3.5-3.5a3.504 3.504 0 0 1-3.5 3.5m0-5a1.5 1.5 0 1 0 1.5 1.5a1.5 1.5 0 0 0-1.5-1.5" />
                                    </svg>
                                </span>
                                For Parents & Guardians
                            </h3>
                            <p><strong>Total Spending Control:</strong> Fund your child's transport allowance directly from your phone via Orange Money, SMEGA, MyZaka, or bank card with real-time notification alerts.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Real-Time Safety & Peace of Mind</h3>
                            <p>Know that travel funds cannot be lost or misused for anything other than transit fares, giving your family complete security.</p>
                        </div>
                    </div>
                    <div className="features-split-image features-split-image-fade-right">
                        <img
                            src="/assets/Green White and Yellow Simple Farming Pitch Deck Presentation (8) (1).png"
                            alt="Tsamaya parents and guardians"
                        />
                    </div>
                </div>

                {/* Row 3: Drivers & Operators (Image Left, Cards Right) */}
                <div className="features-split-row features-split-row-drivers">
                    <div className="features-split-image features-split-image-large">
                        <img
                            src="/assets/Green White and Yellow Simple Farming Pitch Deck Presentation (9) (1).png"
                            alt="Tsamaya drivers turning phone into POS"
                        />
                    </div>
                    <div className="features-split-cards">
                        <div className="feature-card">
                            <h3>
                                <span className="feature-card-heading-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.42em" height="1em" viewBox="0 0 34 24">
                                        <path d="M0 0h34v24H0z" fill="none" />
                                        <path fill="currentColor" d="M25.678 24v-3.298H7.859V24H1.553v-8.728a6.07 6.07 0 0 1 1.863-4.238l.002-.002l-1.823-.3A1.904 1.904 0 0 1 .001 8.857a1.9 1.9 0 0 1 2.218-1.874l-.011-.002l3.127.51q.075.015.137.036l-.007-.002l2.014-5.126h6.434l.48-2.4h6l.48 2.4h6.062l2.015 5.13a1 1 0 0 1 .12-.033l.008-.001l3.13-.51a1.906 1.906 0 0 1 2.18 1.559l.002.011a1.904 1.904 0 0 1-1.555 2.179l-.011.002l-2.532.415a6.08 6.08 0 0 1 1.739 4.115v3.714q0 .194-.043.374l.002-.011v4.655zm-3.884-7.617a1.27 1.27 0 0 0 1.266 1.266h5.087a1.266 1.266 0 0 0 0-2.532h-5.085a1.27 1.27 0 0 0-1.266 1.266zm-17.745 0a1.27 1.27 0 0 0 1.266 1.266h5.087a1.266 1.266 0 0 0 0-2.532H5.316a1.27 1.27 0 0 0-1.266 1.265zm2.973-6.608h20.264c.034 0 .067.006.099.006l-2-5.106H9.031z" />
                                    </svg>
                                </span>
                                For Drivers & Operators
                            </h3>
                            <p><strong>Turn Phone into POS:</strong> Accept cashless fares using your Android smartphone with zero hardware costs. Faster boarding, reduced queue delays, and guaranteed daily earnings tracking directly on your driver dashboard.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Instant Daily Earnings & Shift Reports</h3>
                            <p>Eliminate cash leakage and manual reconciliation. Receive automated deposits straight to your mobile wallet or bank account.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="how-it-works" id="how-it-works">
                <div className="section-header">
                    <h2>How It Works</h2>
                </div>

                <div className="steps-list">
                    <div className="steps-content">
                        <div className="step-item">
                            <div className="step-number">01</div>
                            <h3>Fund Your Wallet</h3>
                            <p>Top up your Tsamaya account using Orange Money, SMEGA, MyZaka, or any Visa/Mastercard debit or credit card.</p>
                        </div>
                        <div className="step-item">
                            <div className="step-number">02</div>
                            <h3>Tap or Scan to Pay</h3>
                            <p>Tap your physical Tsamaya Transit Pass or open your app to present a digital QR code to the driver.</p>
                        </div>
                        <div className="step-item">
                            <div className="step-number">03</div>
                            <h3>Travel Securely</h3>
                            <p>Enjoy instant fare confirmation, clear digital receipts, and real-time trip logging for complete safety.</p>
                        </div>
                        <div className="step-item">
                            <div className="step-number">04</div>
                            <h3>Manage & Track</h3>
                            <p>Monitor your daily commute history, view detailed receipts, and manage all your family cards in one place.</p>
                        </div>
                    </div>
                    <div className="steps-image">
                        <img
                            src="/assets/Green White and Yellow Simple Farming Pitch Deck Presentation (11) (1).png"
                            alt="How Tsamaya works"
                            className={`steps-slide ${activeSlide === 0 ? 'active' : ''}`}
                        />
                        <img
                            src="/assets/NFCCARDS/Gemini_Generated_Image_yioljnyioljnyiol.png"
                            alt="NFC Card 1"
                            className={`steps-slide steps-slide-blur ${activeSlide === 1 ? 'active' : ''}`}
                        />
                        <img
                            src="/assets/NFCCARDS/Gemini_Generated_Image_2igxk72igxk72igx.png"
                            alt="NFC Card 2"
                            className={`steps-slide steps-slide-blur ${activeSlide === 2 ? 'active' : ''}`}
                        />
                        <img
                            src="/assets/NFCCARDS/Gemini_Generated_Image_e2cevge2cevge2ce.png"
                            alt="NFC Card 3"
                            className={`steps-slide steps-slide-blur ${activeSlide === 3 ? 'active' : ''}`}
                        />
                        <img
                            src="/assets/NFCCARDS/Gemini_Generated_Image_pukrbspukrbspukr.png"
                            alt="NFC Card 4"
                            className={`steps-slide steps-slide-blur ${activeSlide === 4 ? 'active' : ''}`}
                        />
                    </div>
                </div>
            </section>

            {/* Bank-Grade Security & Anti-Fraud Features */}
            <section className="scenarios" id="security">
                <div className="scenarios-content">
                    <h2>Bank-Grade Security & Anti-Fraud Features</h2>
                    <p className="scenarios-subtitle">Designed with a cloud-first security architecture to guarantee safety for every thebe and passenger.</p>
                    <div className="scenario-list">
                        <div className="scenario-item">
                            <div className="scenario-item-main">
                                <div className="scenario-text-wrap">
                                    <h4>Cloud-First Protection</h4>
                                    <p>Money never lives on physical cards. Secured inside encrypted cloud wallets.</p>
                                </div>
                            </div>
                        </div>
                        <div className="scenario-item">
                            <div className="scenario-item-main">
                                <div className="scenario-text-wrap">
                                    <h4>One-Tap Kill Switch</h4>
                                    <p>Lock lost cards instantly on the web portal or mobile app with a single click.</p>
                                </div>
                            </div>
                        </div>
                        <div className="scenario-item">
                            <div className="scenario-item-main">
                                <div className="scenario-text-wrap">
                                    <h4>Role-Enforced Terminals</h4>
                                    <p>Only verified, licensed transit operators can process payments.</p>
                                </div>
                            </div>
                        </div>
                        <div className="scenario-item">
                            <div className="scenario-item-main">
                                <div className="scenario-text-wrap">
                                    <h4>Pre-Set Route Rates</h4>
                                    <p>Fixed fare matrices prevent manual overcharging or accidental multi-tapping.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="scenarios-image">
                    <img
                        src="/assets/Green White and Yellow Simple Farming Pitch Deck Presentation (9) (1).png"
                        alt="Security Architecture"
                    />
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials" id="testimonials">
                <div className="testimonial-card">
                    <div className="testimonial-user-icon" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center', color: '#12B5B0' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <g fill="none">
                                <path fill="currentColor" d="m9.158 19.54l2.118-4.502c.231-.49.347-.736.505-.813a.5.5 0 0 1 .438 0c.158.077.274.322.505.813l2.118 4.502c.347.737.52 1.106.455 1.298a.5.5 0 0 1-.368.326c-.198.043-.543-.173-1.235-.605l-1.27-.794c-.154-.096-.23-.144-.313-.163a.5.5 0 0 0-.222 0c-.082.019-.16.067-.313.163l-1.27.794c-.692.432-1.037.648-1.235.605a.5.5 0 0 1-.368-.326c-.066-.192.108-.56.455-1.298" />
                                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M12 11V9" />
                                <path fill="currentColor" d="M17.8 3H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 4.52 3 5.08 3 6.2v8.258c0 .504 0 .756.045.964a2 2 0 0 0 1.533 1.533c.208.045.46.045.964.045c.093 0 .14 0 .182-.007a.5.5 0 0 0 .357-.257a1 1 0 0 0 .064-.17l3.49-10.472c.131-.393.197-.59.319-.736a1 1 0 0 1 .4-.289c.177-.069.385-.069.8-.069h1.693c.415 0 .622 0 .798.07a1 1 0 0 1 .401.288c.122.146.188.343.319.736l3.49 10.471c.03.09.044.133.064.17a.5.5 0 0 0 .357.258c.042.007.089.007.182.007c.504 0 .756 0 .965-.045a2 2 0 0 0 1.532-1.532c.045-.21.045-.461.045-.965V6.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 3 18.92 3 17.8 3" />
                            </g>
                        </svg>
                    </div>
                    <p className="testimonial-text">
                        "Tsamaya has completely transformed our morning commute. No more scrambling for exact change in combis, and as a parent, I can top up my daughter's transport allowance instantly from my phone."
                    </p>
                    <div className="testimonial-author">
                        <strong>Amogelang Tshukudu</strong>
                        <span>Parent & Daily Commuter, Gaborone</span>
                    </div>
                </div>
            </section>

            {/* Instant Top-Up Partners */}
            <section className="early-access" id="top-up">
                <h2>Instant Top-Up Partners</h2>
                <p>Fund your account anywhere, anytime through local mobile networks and trusted payment gateways:</p>
                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '800px', margin: '0 auto 2rem auto' }}>
                    <span style={{ background: '#fff', padding: '10px 20px', borderRadius: '30px', border: '1px solid #D1F2F0', fontWeight: '600', color: '#1a1a1a' }}>
                        Orange Money <span style={{ color: '#666', fontSize: '0.85rem', fontWeight: 'normal' }}>(USSD Prompt Push)</span>
                    </span>
                    <span style={{ background: '#fff', padding: '10px 20px', borderRadius: '30px', border: '1px solid #D1F2F0', fontWeight: '600', color: '#1a1a1a' }}>
                        BTC SMEGA <span style={{ color: '#666', fontSize: '0.85rem', fontWeight: 'normal' }}>(Direct API Top-Up)</span>
                    </span>
                    <span style={{ background: '#fff', padding: '10px 20px', borderRadius: '30px', border: '1px solid #D1F2F0', fontWeight: '600', color: '#1a1a1a' }}>
                        Mascom MyZaka <span style={{ color: '#666', fontSize: '0.85rem', fontWeight: 'normal' }}>(Instant Merchant Pay)</span>
                    </span>
                    <span style={{ background: '#fff', padding: '10px 20px', borderRadius: '30px', border: '1px solid #D1F2F0', fontWeight: '600', color: '#1a1a1a' }}>
                        Visa & Mastercard <span style={{ color: '#666', fontSize: '0.85rem', fontWeight: 'normal' }}>(Cybersource Secure)</span>
                    </span>
                </div>
                <button className="try-free-btn" style={{ background: '#12B5B0', marginBottom: '2rem' }} onClick={() => setShowWaitlist(true)}>Get Your Transit Pass</button>
                <div className="early-access-images">
                    <img src="/assets/FRONT (2) (1).png" alt="Tsamaya Transit Pass Front" />
                    <img src="/assets/FRONT (3) (1).png" alt="Tsamaya Transit Pass Front" />
                    <img src="/assets/FRONT (2) (1).png" alt="Tsamaya Transit Pass Front" />
                </div>
            </section>

            {/* FAQ Section */}
            <section className="faq">
                <div className="faq-title">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <div className="faq-list">
                    {faqData.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${activeFaq === index ? 'active' : ''}`}
                            onClick={() => toggleFaq(index)}
                        >
                            <div className="faq-question-row">
                                <span className="faq-question">{faq.question}</span>
                                <span className="faq-icon">{activeFaq === index ? '-' : '+'}</span>
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-grid">
                    <div className="footer-info">
                        <div style={{ textAlign: 'left', marginBottom: '1.5rem', display: 'block' }}>
                            <img 
                                src={brandLogo} 
                                alt="Tsamaya" 
                                style={{ 
                                    height: '2.5rem', 
                                    width: 'auto', 
                                    objectFit: 'contain'
                                }} 
                            />
                        </div>
                        <p style={{ color: '#666', maxWidth: '300px', marginBottom: '1.5rem' }}>
                            Cashless transit for combis, buses, and taxis across Botswana.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div style={{ display: 'flex', gap: '12px', color: 'var(--legae-text)' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                                    <rect width="512" height="512" fill="none"/>
                                    <path fill="currentColor" d="M48 59.49v393a4.33 4.33 0 0 0 7.37 3.07L260 256L55.37 56.42A4.33 4.33 0 0 0 48 59.49M345.8 174L89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32ZM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95ZM449.38 231l-71.65-39.46L310.36 256l67.37 64.43L449.38 281c19.49-10.77 19.49-39.23 0-50"/>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1024 1024">
                                    <rect width="1024" height="1024" fill="none"/>
                                    <path fill="currentColor" d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5c-34.9-50-87.7-77.5-157.3-82.8c-65.9-5.2-138 38.4-164.4 38.4c-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8c23.8 68.2 109.6 235.3 199.1 232.6c46.8-1.1 79.9-33.2 140.8-33.2c59.1 0 89.7 33.2 141.9 33.2c90.3-1.3 167.9-153.2 190.5-221.6c-121.1-57.1-114.6-167.2-114.6-170.7m-105.1-305c50.7-60.2 46.1-115 44.6-134.7c-44.8 2.6-96.6 30.5-126.1 64.8c-32.5 36.8-51.6 82.3-47.5 133.6c48.4 3.7 92.6-21.2 129-63.7"/>
                                </svg>
                            </div>
                            <p style={{ color: '#666', fontSize: '0.85rem', margin: 0 }}>
                                Available on Google Play & App Store soon.
                            </p>
                        </div>
                    </div>
                    <div className="footer-links">
                        <h4>Commuters</h4>
                        <ul>
                            <li><a href="#benefits" onClick={() => setShowWaitlist(true)}>Order a Pass</a></li>
                            <li><a href="#top-up" onClick={() => setShowWaitlist(true)}>Top Up Wallet</a></li>
                            <li><a href="#security" onClick={() => setShowWaitlist(true)}>Manage Linked Cards</a></li>
                            <li><a href="#how-it-works" onClick={() => setShowWaitlist(true)}>Dispute Fare</a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h4>Operators & Drivers</h4>
                        <ul>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); setShowWaitlist(true); }}>Driver Registration</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); setShowWaitlist(true); }}>Fleet Dashboard Login</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); setShowWaitlist(true); }}>Settlement Reports</a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); setShowWaitlist(true); }}>About Tsamaya</a></li>
                            <li><a href="/terms" onClick={(e) => { e.preventDefault(); navigate('/terms'); }}>Terms of Service</a></li>
                            <li><a href="/privacy" onClick={(e) => { e.preventDefault(); navigate('/privacy'); }}>Privacy Policy</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); setShowWaitlist(true); }}>Support Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #D1F2F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem', color: '#666' }}>
                    <p>&copy; {new Date().getFullYear()} tsamaya.co.bw. All rights reserved.</p>
                    <p>Developed by <a href="https://devgenbotswana.co.bw" target="_blank" rel="noopener noreferrer" style={{ color: '#12B5B0', fontWeight: '700', textDecoration: 'none' }}>DevGen Technologies</a></p>
                </div>
            </footer>

            {/* Waitlist Popup Overlay */}
            {showWaitlist && (
                <div className="popup-overlay">
                    <div className="waitlist-popup">
                        <button className="close-popup" onClick={() => setShowWaitlist(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M5 5l14 14M5 19l14 -14"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5l14 0M5 19l14 0;M5 5l14 14M5 19l14 -14" /></path><path d="M12 12h0"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 12h14;M12 12h0" /><set fill="freeze" attributeName="opacity" begin="0.4s" to="0" /></path></g></svg>
                        </button>
                        <div className="popup-content">
                            <div className="popup-left">
                                <img src={heroHandImg} alt="Tsamaya App" className="popup-app-img" />
                            </div>
                            <div className="popup-right">
                                <span className="hero-tagline" style={{ color: '#12B5B0', fontSize: '0.8rem', letterSpacing: '2px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>Coming Soon</span>

                                {waitlistStep === 1 ? (
                                    <>
                                        <h2>Get Your Transit Pass</h2>
                                        <p className="popup-desc">
                                            Be the first to experience cashless public transit across Botswana. Join our priority list to receive your Tsamaya NFC Pass and early mobile app access.
                                        </p>
                                        <form className="popup-form" onSubmit={handleWaitlistSubmit}>
                                            <input
                                                type="email"
                                                placeholder="Enter your email address"
                                                required
                                                value={waitlistEmail}
                                                onChange={(e) => setWaitlistEmail(e.target.value)}
                                                className="popup-input"
                                            />
                                            <button type="submit" className="try-free-btn" style={{ width: '100%', padding: '1rem', background: '#12B5B0' }}>
                                                Get Your Transit Pass
                                            </button>
                                        </form>
                                    </>
                                ) : (
                                    <>
                                        <h2>One last step...</h2>
                                        <p className="popup-desc">
                                            We'll keep you updated on transit pass distributions, route rollouts, and beta access in your area.
                                        </p>
                                        <div className="consent-container" style={{ marginBottom: '2rem', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                                            <input
                                                type="checkbox"
                                                id="email-consent"
                                                checked={agreedToEmails}
                                                onChange={(e) => setAgreedToEmails(e.target.checked)}
                                                style={{ marginTop: '5px', cursor: 'pointer', width: '20px', height: '20px' }}
                                            />
                                            <label htmlFor="email-consent" style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.4', cursor: 'pointer' }}>
                                                I agree to receive updates from Tsamaya regarding card launches, beta rollout, and route expansions.
                                            </label>
                                        </div>
                                        <button
                                            className="try-free-btn"
                                            onClick={handleFinalConfirm}
                                            disabled={!agreedToEmails}
                                            style={{
                                                width: '100%',
                                                padding: '1rem',
                                                background: agreedToEmails ? '#12B5B0' : '#ccc',
                                                cursor: agreedToEmails ? 'pointer' : 'not-allowed'
                                            }}
                                        >
                                            Confirm & Join
                                        </button>
                                    </>
                                )}
                                <p className="popup-footer-text" style={{ marginTop: '1.5rem' }}>We respect your privacy. Bank-grade security and discretion guaranteed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Privacy Policy Modal */}
            {showPrivacy && (
                <div className="popup-overlay privacy-modal-overlay" onClick={() => setShowPrivacy(false)}>
                    <div className="waitlist-popup privacy-popup" onClick={(e) => e.stopPropagation()}>
                        <button className="close-popup" onClick={() => setShowPrivacy(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M5 5l14 14M5 19l14 -14"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5l14 0M5 19l14 0;M5 5l14 14M5 19l14 -14" /></path><path d="M12 12h0"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 12h14;M12 12h0" /><set fill="freeze" attributeName="opacity" begin="0.4s" to="0" /></path></g></svg>
                        </button>
                        <div className="privacy-content-wrapper" style={{ padding: '6rem 4rem 4rem 4rem' }}>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: '#1a1a1a', textAlign: 'left' }}>Privacy Policy</h2>

                            <div className="privacy-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', color: '#666', lineHeight: '1.7', fontSize: '0.95rem' }}>
                                <div className="privacy-section">
                                    <h3 style={{ color: '#1a1a1a', marginBottom: '1rem' }}>1. Introduction</h3>
                                    <p>Welcome to Tsamaya (tsamaya.co.bw). We respect your privacy and are committed to protecting your personal data and transit wallet information.</p>
                                </div>

                                <div className="privacy-section">
                                    <h3 style={{ color: '#1a1a1a', marginBottom: '1rem' }}>2. Data We Collect</h3>
                                    <p>We collect essential account information (such as email, phone number, and linked card identifiers) solely to facilitate safe contactless transit payments and account security.</p>
                                </div>

                                <div className="privacy-section">
                                    <h3 style={{ color: '#1a1a1a', marginBottom: '1rem' }}>3. How We Use Your Data</h3>
                                    <p>Your data is used to authenticate transactions, generate digital receipts, process mobile wallet top-ups, and provide real-time trip alerts.</p>
                                </div>

                                <div className="privacy-section">
                                    <h3 style={{ color: '#1a1a1a', marginBottom: '1rem' }}>4. Bank-Grade Security</h3>
                                    <p>All wallet balances and sensitive tokens are encrypted in secure cloud storage. Funds never live directly on physical cards or device hardware.</p>
                                </div>

                                <div className="privacy-section" style={{ gridColumn: 'span 2' }}>
                                    <h3 style={{ color: '#1a1a1a', marginBottom: '1rem' }}>5. Your Legal Rights</h3>
                                    <p>You have full rights under Botswana data protection laws to request access, correction, or erasure of your account information. Contact support@tsamaya.co.bw to manage your privacy settings.</p>
                                </div>
                            </div>
                            <p style={{ marginTop: '3rem', textAlign: 'center', color: '#999', fontSize: '0.85rem' }}>Last updated: {new Date().toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LegaeLandingPage;

