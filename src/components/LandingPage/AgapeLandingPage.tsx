import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LegaeLandingPage.css';

const LegaeLandingPage: React.FC = () => {
    const navigate = useNavigate();
    // REPLACE THIS URL WITH YOUR DEPLOYED GOOGLE APPS SCRIPT WEB APP URL
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzIG_gYJf9uhg9O93wsigvyjBtTsSFJR_NJF5gEkKApsQDJP6WJhRvJkAFGhm4cg7Uw8A/exec";

    // Images based on the directory scan
    const heroHandImg = `/assets/AGAPE/handon.png`;
    const popupImg = `/assets/AGAPE/image_3-removebg-preview 1.png`;
    const featureImg1 = `/assets/AGAPE/image_3-removebg-preview 1.png`;
    const featureImg2 = `/assets/AGAPE/image_4__1_-removebg-preview 1.png`;
    const featureImg3 = `/assets/AGAPE/image_1-removebg-preview 1.png`;
    const brandLogo = `/assets/AGAPE/image_3__1_-removebg-preview 1.png`;
    const constructionImg = `/assets/AGAPE/construction.png`;
    const floristImg = `/assets/AGAPE/florist.png`;
    const securityImg = `/assets/AGAPE/security.png`;

    const heroTransportBg = `/assets/AGAPE/SELLING A Car - Slider (2).png`;
    const heroConstructionBg = `/assets/AGAPE/agape_construction_bg.png`;
    const heroSecurityBg = `/assets/AGAPE/security.png`;
    const heroFloristBg = `/assets/AGAPE/agape_florist_bg.png`;

    const slides = [
        {
            title: "Seamless Transport & Logistics Solutions",
            subtitle: "Reliable, efficient, and secure transportation services across Botswana. We move what matters most to you.",
            bg: heroTransportBg,
            bgStyle: { backgroundSize: 'cover', backgroundPosition: 'center' },
            secondaryAction: {
                label: "Learn More",
                onClick: () => navigate('/transport')
            }
        },
        {
            title: "Florist & Decor Services",
            subtitle: "Creative services driven by excellence. We provide stunning floral arrangements and decor solutions for all your special occasions.",
            bg: heroFloristBg,
            bgStyle: { backgroundSize: 'cover', backgroundPosition: 'center' },
            secondaryAction: {
                label: "View & Order Flowers",
                onClick: () => navigate('/flowers')
            }
        },
        {
            title: "Agape Construction",
            subtitle: "Built on trust. We provide reliable construction services for residential and commercial projects, ensuring quality and durability in every build.",
            bg: heroConstructionBg,
            bgStyle: { backgroundSize: 'cover', backgroundPosition: 'center' },
            secondaryAction: {
                label: "Learn More",
                onClick: () => navigate('/construction')
            }
        },
        {
            title: "Agape Security Services",
            subtitle: "Your safety is our priority. We offer professional security solutions tailored to protect what matters most to you and your business.",
            bg: heroSecurityBg,
            bgStyle: { backgroundSize: 'contain', backgroundPosition: 'right center', backgroundColor: '#111' },
            secondaryAction: {
                label: "Learn More",
                onClick: () => navigate('/security')
            }
        }
    ];

    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const [showWaitlist, setShowWaitlist] = useState(true);
    const [showPrivacy, setShowPrivacy] = useState(false);
    const [waitlistEmail, setWaitlistEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [waitlistStep, setWaitlistStep] = useState(1);
    const [agreedToEmails, setAgreedToEmails] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    React.useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowScrollTop(true);
            } else {
                setShowScrollTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleWaitlistSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setWaitlistStep(2);
    };

    const handleFinalConfirm = async () => {
        setIsSubmitting(true);
        try {
            // Prepare data for Google Sheets
            const formData = new FormData();
            formData.append('email', waitlistEmail);
            formData.append('consent', agreedToEmails ? "Yes" : "No");
            formData.append('timestamp', new Date().toISOString());

            // Since Google Apps Script Web App URLs can be finicky with CORS and simple fetch,
            // we often use 'no-cors' mode or a JSONP approach if simple fetch fails.
            // However, modern deployments usually support simple POST with JSON body.

            // Attempting JSON POST
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Important for Google Apps Script to work without complex CORS headers
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: waitlistEmail,
                    fullName: fullName,
                    phoneNumber: phoneNumber,
                    consent: agreedToEmails
                })
            });

            // Success (with no-cors we can't read the response but assume success if no network error)
            setWaitlistStep(3); // Move to success step
        } catch (error) {
            console.error('Error submitting to waitlist:', error);
            alert('There was an issue joining the waitlist. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClosePopup = () => {
        setShowWaitlist(false);
        setWaitlistEmail('');
        setFullName('');
        setPhoneNumber('');
        setWaitlistStep(1);
        setAgreedToEmails(false);
    };

    const faqData = [
        {
            question: "What kinds of transport jobs can you do?",
            answer: "We provide local and longer‑distance transport for a variety of needs — from household goods and furniture to vehicles, tractors, building materials, and more."
        },
        {
            question: "How do I book a delivery?",
            answer: "Simply reach out to us via phone, WhatsApp, or social media. Tell us your location, destination, and what you need to transport."
        },
        {
            question: "Do you offer cross‑town and longer distance routes?",
            answer: "Yes, we move your parcels and cargo across town or beyond — providing transport from Maun to Gaborone and other routes."
        },
        {
            question: "How do I contact you?",
            answer: "You can get support through direct calls or messages regarding your delivery. Our team keeps you informed from pickup to delivery."
        }
    ];

    return (
        <div className="legae-landing">
            {/* Navigation */}
            <nav className="navbar">
                <div className="logo" style={{ marginTop: '0', paddingTop: '0' }}>
                    <img src={brandLogo} alt="Agape Logo" style={{ height: '4rem', width: 'auto', objectFit: 'contain', display: 'block' }} />
                </div>
                <ul className="nav-links">
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/transport">Transport</a></li>
                    <li><a href="/security">Security</a></li>
                    <li><a href="/construction">Construction</a></li>
                    <li><a href="/flowers">Florist</a></li>
                    <li><a href="/galleries">Galleries</a></li>
                </ul>
                <div className="nav-actions">
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#000000', display: 'flex' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1200 1200"><path fill="currentColor" d="M0 0v1200h1200V0zm863.232 156.592c8.715-.185 17.791.098 27.173.732c34.476.047 70.483 3.155 106.201 6.299l-3.882 142.09h-95.947c-44.988-.996-61.235 16.473-62.695 67.236V484.57h162.524l-6.445 152.197H834.082v423.706H675.513V636.768H565.43V484.57h110.083V353.906c0-94.209 39.829-154.174 118.286-184.57c20.149-7.928 43.288-12.189 69.433-12.744" /></svg>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#000000', display: 'flex' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" d="M14.5 0h-13C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5h13c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5M11 2.5c0-.275.225-.5.5-.5h2c.275 0 .5.225.5.5v2c0 .275-.225.5-.5.5h-2a.5.5 0 0 1-.5-.5zM8 5a3.001 3.001 0 0 1 0 6a3.001 3.001 0 0 1 0-6m6 8.5c0 .275-.225.5-.5.5h-11a.5.5 0 0 1-.5-.5V7h1.1A5 5 0 0 0 8 13a5 5 0 0 0 4.9-6H14z" /></svg>
                        </a>
                        <a href="https://wa.me/26774731334" target="_blank" rel="noopener noreferrer" style={{ color: '#000000', display: 'flex' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 12"><path fill="currentColor" d="M6 0a6 6 0 1 1-3.002 11.196l-2.34.778a.5.5 0 0 1-.632-.632l.78-2.339A6 6 0 0 1 6 0M3.932 3.003a.52.52 0 0 0-.394.2c-.135.158-.516.543-.516 1.325c0 .783.529 1.54.603 1.646c.073.104 1.041 1.71 2.522 2.4q.413.192.84.335c.354.12.677.104.932.064c.284-.045.873-.384.996-.757c.122-.37.122-.689.085-.755s-.135-.107-.284-.188a24 24 0 0 0-1.008-.516c-.135-.054-.234-.08-.332.08c-.099.159-.38.518-.467.624c-.085.103-.172.118-.32.039s-.623-.248-1.187-.79a4.7 4.7 0 0 1-.82-1.102c-.088-.16-.01-.245.063-.325c.067-.07.148-.185.222-.279c.073-.09.099-.157.148-.264c.049-.106.024-.2-.013-.278c-.037-.08-.332-.864-.456-1.183c-.12-.31-.241-.266-.332-.272c-.085-.004-.183-.004-.282-.004" /></svg>
                        </a>

                    </div>
                    <button className="get-started-btn" onClick={() => setShowWaitlist(true)}>Get Started</button>
                    <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ color: 'var(--legae-red)', background: 'none' }}>
                        {isMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12" /></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" d="M0 1h16v3H0zm0 5h16v3H0zm0 5h16v3H0z" /></svg>
                        )}
                    </button>
                </div>

                <div className={`mobile-nav-dropdown ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="mobile-nav-links">
                        <li><a href="/about" onClick={() => setIsMenuOpen(false)}>About</a></li>
                        <li><a href="/services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
                        <li><a href="/transport" onClick={() => setIsMenuOpen(false)}>Transport</a></li>
                        <li><a href="/security" onClick={() => setIsMenuOpen(false)}>Security</a></li>
                        <li><a href="/construction" onClick={() => setIsMenuOpen(false)}>Construction</a></li>
                        <li><a href="/flowers" onClick={() => setIsMenuOpen(false)}>Florist</a></li>
                        <li><a href="/galleries" onClick={() => setIsMenuOpen(false)}>Galleries</a></li>
                    </ul>
                    <button className="mobile-get-started" onClick={() => { setIsMenuOpen(false); setShowWaitlist(true); }}>
                        Get Started
                    </button>
                </div>
            </nav >

            {/* Hero Section */}
            <header className="hero">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${slide.bg}")`,
                            ...slide.bgStyle
                        }}
                    >
                        <div className="hero-container">
                            <div className="hero-content-wrapper">
                                <h1>{slide.title}</h1>
                                <p className="hero-subtitle">{slide.subtitle}</p>
                                <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                                    {slide.secondaryAction && (
                                        <button
                                            className="try-free-btn"
                                            onClick={slide.secondaryAction.onClick}
                                            style={{ background: '#A31D1D', color: 'white', border: 'none', padding: '0.6rem 1.6rem', fontSize: '0.9rem' }}
                                        >
                                            {slide.secondaryAction.label}
                                        </button>
                                    )}
                                    <button
                                        className="try-free-btn secondary"
                                        onClick={scrollToContact}
                                        style={{ background: 'transparent', border: '1px solid white', color: 'white', padding: '0.6rem 1.6rem', fontSize: '0.9rem' }}
                                    >
                                        Contact Us
                                    </button>
                                </div>
                            </div>

                            {index === 0 && (
                                <div className="hero-image-container">
                                    <img src={heroHandImg} alt="Legae App" className="hero-phone-img" />
                                </div>
                            )}
                        </div>
                    </div>
                ))}

                <div className="slider-dots">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        ></span>
                    ))}
                </div>
            </header>

            {/* Features Section */}
            < section className="features" id="features" >
                <div className="section-header">
                    <div>
                        <h2>Designed to help you move anything — anytime, anywhere.</h2>
                    </div>
                    <div>
                        <p>At Agape Transport & Logistics, we’re focused on making transport and delivery simple, dependable, and affordable in Botswana. Whether it’s cargo, goods, or personal items — we deliver with care and reliability.</p>
                    </div>
                </div>

                <div className="features-grid">
                    <div className="feature-card">
                        <img src={featureImg1} alt="Transport Services" style={{ objectPosition: 'right', objectFit: 'contain', background: '#F9FAFB' }} />
                        <h3>Transport Services</h3>
                        <p>We provide local and longer‑distance transport for a variety of needs — from household goods and furniture to vehicles, tractors, building materials, and more.</p>
                    </div>
                    <div className="feature-card">
                        <img src={featureImg2} alt="Cargo & Delivery" style={{ objectFit: 'contain', background: '#F9FAFB' }} />
                        <h3>Cargo & Delivery</h3>
                        <p>Move your parcels and cargo across town or beyond — Maun to Gaborone and other routes.</p>
                    </div>
                    <div className="feature-card">
                        <img src={featureImg3} alt="Student Transport" style={{ objectFit: 'contain', background: '#F9FAFB' }} />
                        <h3>Student Transport</h3>
                        <p>Safe drop-offs and pick-ups for schools using our Minibus (Combi) and Honda Fit fleet. Mostly lady-driven for trusted care.</p>
                    </div>
                </div>

                {/* New Group Services Section */}
                <div className="section-header" style={{ marginTop: '6rem' }}>
                    <div>
                        <h2>Beyond Logistics: The Agape Group</h2>
                    </div>
                    <div>
                        <p>Agape is more than just transport. We are a diversified group of services dedicated to excellence in every sector we operate in.</p>
                    </div>
                </div>

                <div className="features-grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <div className="feature-card" style={{ flex: '1 1 400px', maxWidth: '600px' }}>
                        <img src={constructionImg} alt="Construction" />
                        <h3>Agape Construction</h3>
                        <p>Built on trust. We provide reliable construction services for residential and commercial projects, ensuring quality and durability in every build.</p>
                    </div>
                    <div className="feature-card" style={{ flex: '1 1 400px', maxWidth: '600px' }}>
                        <img src={securityImg} alt="Security" />
                        <h3>Agape Security Services</h3>
                        <p>Your safety is our priority. We offer professional security solutions tailored to protect what matters most to you and your business.</p>
                    </div>
                    <div className="feature-card" style={{ flex: '1 1 400px', maxWidth: '600px', textAlign: 'center' }}>
                        <img src={floristImg} alt="Florist & Decor" />
                        <h3>Florist & Decor Services</h3>
                        <p>Creative services driven by excellence. We provide stunning floral arrangements and decor solutions for all your special occasions.</p>
                    </div>
                </div>
            </section >

            {/* How It Works Section */}
            < section className="how-it-works" >
                <div className="section-header">
                    <h2>How it works</h2>
                </div>

                <div className="steps-list">
                    <div className="steps-content">
                        <div className="step-item">
                            <div className="step-number">01</div>
                            <h3>Reach Out</h3>
                            <p>Contact us via phone, WhatsApp, or social media.</p>
                        </div>
                        <div className="step-item">
                            <div className="step-number">02</div>
                            <h3>Tell Us Your Transport Needs</h3>
                            <p>Where you’re moving from, where you’re going, and what you’re transporting.</p>
                        </div>
                        <div className="step-item">
                            <div className="step-number">03</div>
                            <h3>We Arrange Transport</h3>
                            <p>We match you with a driver and vehicle suited for your job.</p>
                        </div>
                        <div className="step-item">
                            <div className="step-number">04</div>
                            <h3>Delivery & Confirmation</h3>
                            <p>Receive updates and confirmation once delivery is complete.</p>
                        </div>
                    </div>
                    <div className="steps-image">
                        <img src={featureImg2} alt="How it works" style={{ width: '100%', borderRadius: '24px' }} />
                    </div>
                </div>
            </section >

            {/* Scenario Highlights */}
            < section className="scenarios" >
                <div className="scenarios-content">
                    <h2>Highlights</h2>
                    <p>Our key services designed to meet your logistics needs.</p>
                    <div className="scenario-list">
                        <div className="scenario-item">
                            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ background: '#FDF2F2', padding: '10px', borderRadius: '8px', display: 'flex' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#A31D1D" d="M12 3L4 9v12h16V9zm.5 9.5c0 .83-.67 1.5-1.5 1.5v4h-1v-4c-.83 0-1.5-.67-1.5-1.5v-3h1v3h.5v-3h1v3h.5v-3h1zM15 18h-1v-3.5h-1v-3c0-1.1.9-2 2-2z" /></svg>
                                </span>
                                Household Goods Transport
                            </span>
                            <span>→</span>
                        </div>
                        <div className="scenario-item">
                            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ background: '#FDF2F2', padding: '10px', borderRadius: '8px', display: 'flex' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#A31D1D" d="M8 22q-.825 0-1.412-.587T6 20v-4.3q0-1.85.525-3.562t1.65-3.413Q7.225 8.5 6.613 7.7T6 5.9V4.85q0-1.2 1.038-2.012T9.2 2.15l8.9.875q.425.05.663.338t.237.662V7q0 .375-.262.663T18.1 8l-.9.1q.35 1.225.925 2.2t1.375 1.4l-1 1.75q-1.325-.775-2.05-2.137T15.3 8.275l-1.1.1q.2 1.25.763 2.525t1.137 2.3q.45.8.675 1.675T17 16.65V20q0 .825-.587 1.413T15 22zM8 5.1v.8q0 .45.325.725t.775.225L17 6.1V4.9l-7.9-.75q-.45-.05-.775.225T8 5.1" /></svg>
                                </span>
                                Bulk Items & Farm Material Delivery
                            </span>
                            <span>→</span>
                        </div>
                        <div className="scenario-item">
                            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ background: '#FDF2F2', padding: '10px', borderRadius: '8px', display: 'flex' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="#A31D1D" d="M12 3h2l4 7h1a1 1 0 0 1 1 1a1 1 0 0 1-1 1h-1v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-6H1a1 1 0 0 1-1-1a1 1 0 0 1 1-1h1l4-7h2V1h4zm3.86 7L13 5H7l-2.86 5zM5.5 15a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m9 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" /></svg>
                                </span>
                                Student School Runs
                            </span>
                            <span>→</span>
                        </div>
                    </div>
                </div>
                <div className="scenarios-image">
                    <img src={featureImg1} alt="Scenarios" />
                </div>
            </section >

            {/* Testimonials */}
            < section className="testimonials" id="testimonials" >
                <div className="testimonial-card">
                    <div className="testimonial-user-icon" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 640 640"><path fill="#A31D1D" d="M341.8 72.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S82.8 336 96 336h16v176c0 35.3 28.7 64 64 64h288c35.3 0 64-28.7 64-64V336h16c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1zM264 320c0-30.9 25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56m-56 176c0-44.2 35.8-80 80-80h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H224c-8.8 0-16-7.2-16-16" /></svg>
                    </div>
                    <p className="testimonial-text">
                        "Agape transported my furniture and household items with no damage and good timing — very professional."
                    </p>
                    <div className="testimonial-author">
                        <strong>Satisfied Customer</strong>
                        <p>Agape Client</p>
                    </div>
                </div>
            </section >

            {/* FAQ Section */}
            < section className="faq" >
                <div className="faq-title">
                    <h2>Frequently asked questions</h2>
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
            </section >

            {/* Early Access */}
            <section className="early-access" id="contact" >
                <h2>Stay Connected</h2>
                <p>Be the first to know about special offers, new routes, and service updates — follow us on social media.</p>
                <button className="try-free-btn" style={{ background: '#A31D1D', marginBottom: '2rem' }} onClick={() => setShowWaitlist(true)}>Contact Us</button>
                <div className="early-access-images">
                    <img src={featureImg1} alt="User 1" />
                    <img src={featureImg2} alt="User 2" />
                    <img src={featureImg3} alt="User 3" />
                </div>
            </section >

            {/* Footer */}
            < footer className="footer" >
                <div className="footer-logo-large" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Agape Group</div>
                <div className="footer-info" style={{ marginBottom: '2.5rem', textAlign: 'left' }}>
                    <p style={{ color: '#666', maxWidth: '600px', fontSize: '1.1rem', margin: '0' }}>
                        A diversified group delivering excellence in Transport & Logistics, Construction, Security, and Creative Decor Services in Botswana.
                    </p>
                </div>
                <div className="footer-grid">
                    <div className="footer-links">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="/services">School Transport</a></li>
                            <li><a href="/services">Construction</a></li>
                            <li><a href="/services">Security Services</a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/services">Contact</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); setShowPrivacy(true); }}>Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h4>Contact Us</h4>
                        <ul>
                            <li><a href="#">Plot 1234, Gaborone West</a></li>
                            <li><a href="tel:+26774731334">+267 74 731 334</a></li>
                            <li><a href="mailto:info@agape.co.bw">info@agape.co.bw</a></li>
                            <li><a href="#">Botswana</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #FFE4E4', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem', color: '#666' }}>
                    <p>&copy; {new Date().getFullYear()} Agape. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#000000', display: 'flex' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 1200 1200"><path fill="currentColor" d="M0 0v1200h1200V0zm863.232 156.592c8.715-.185 17.791.098 27.173.732c34.476.047 70.483 3.155 106.201 6.299l-3.882 142.09h-95.947c-44.988-.996-61.235 16.473-62.695 67.236V484.57h162.524l-6.445 152.197H834.082v423.706H675.513V636.768H565.43V484.57h110.083V353.906c0-94.209 39.829-154.174 118.286-184.57c20.149-7.928 43.288-12.189 69.433-12.744" /></svg>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#000000', display: 'flex' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="currentColor" d="M14.5 0h-13C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5h13c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5M11 2.5c0-.275.225-.5.5-.5h2c.275 0 .5.225.5.5v2c0 .275-.225.5-.5.5h-2a.5.5 0 0 1-.5-.5zM8 5a3.001 3.001 0 0 1 0 6a3.001 3.001 0 0 1 0-6m6 8.5c0 .275-.225.5-.5.5h-11a.5.5 0 0 1-.5-.5V7h1.1A5 5 0 0 0 8 13a5 5 0 0 0 4.9-6H14z" /></svg>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#000000', display: 'flex' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14"><g fill="none"><g clipPath="url(#SVGG1Ot4cAD)"><path fill="currentColor" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z" /></g><defs><clipPath id="SVGG1Ot4cAD"><path fill="#fff" d="M0 0h14v14H0z" /></clipPath></defs></g></svg>
                        </a>
                        <a href="https://wa.me/26774731334" target="_blank" rel="noopener noreferrer" style={{ color: '#000000', display: 'flex' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 12"><path fill="currentColor" d="M6 0a6 6 0 1 1-3.002 11.196l-2.34.778a.5.5 0 0 1-.632-.632l.78-2.339A6 6 0 0 1 6 0M3.932 3.003a.52.52 0 0 0-.394.2c-.135.158-.516.543-.516 1.325c0 .783.529 1.54.603 1.646c.073.104 1.041 1.71 2.522 2.4q.413.192.84.335c.354.12.677.104.932.064c.284-.045.873-.384.996-.757c.122-.37.122-.689.085-.755s-.135-.107-.284-.188a24 24 0 0 0-1.008-.516c-.135-.054-.234-.08-.332.08c-.099.159-.38.518-.467.624c-.085.103-.172.118-.32.039s-.623-.248-1.187-.79a4.7 4.7 0 0 1-.82-1.102c-.088-.16-.01-.245.063-.325c.067-.07.148-.185.222-.279c.073-.09.099-.157.148-.264c.049-.106.024-.2-.013-.278c-.037-.08-.332-.864-.456-1.183c-.12-.31-.241-.266-.332-.272c-.085-.004-.183-.004-.282-.004" /></svg>
                        </a>
                        <p>Developed by <a href="https://devgenbotswana.co.bw" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--legae-red)', fontWeight: '600', textDecoration: 'none' }}>DevGenTechnologies</a></p>
                    </div>
                </div>
            </footer >

            {/* Waitlist Popup Overlay */}
            {
                showWaitlist && (
                    <div className="popup-overlay">
                        <div className="waitlist-popup">
                            <button className="close-popup" onClick={handleClosePopup}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 5l14 14M5 19l14 -14"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5l14 0M5 19l14 0;M5 5l14 14M5 19l14 -14" /></path><path d="M12 12h0"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 12h14;M12 12h0" /><set fill="freeze" attributeName="opacity" begin="0.4s" to="0" /></path></g></svg>
                            </button>
                            <div className="popup-content">
                                <div className="popup-left">
                                    <img src={popupImg} alt="Agape Services" className="popup-app-img" />
                                </div>
                                <div className="popup-right">

                                    {waitlistStep === 1 ? (
                                        <>
                                            <h2>Contact Agape</h2>
                                            <p className="popup-desc" style={{ marginBottom: '1.5rem' }}>
                                                By contacting us, you get direct access to our transport solutions.
                                            </p>
                                            <form className="popup-form" onSubmit={handleWaitlistSubmit} style={{
                                                display: 'grid',
                                                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                                                gap: '1rem',
                                                maxWidth: '550px'
                                            }}>
                                                <input
                                                    type="text"
                                                    placeholder="Full Name"
                                                    required
                                                    value={fullName}
                                                    onChange={(e) => setFullName(e.target.value)}
                                                    className="popup-input"
                                                    style={{ marginBottom: 0 }}
                                                />
                                                <input
                                                    type="email"
                                                    placeholder="Enter your email address"
                                                    required
                                                    value={waitlistEmail}
                                                    onChange={(e) => setWaitlistEmail(e.target.value)}
                                                    className="popup-input"
                                                    style={{ marginBottom: 0 }}
                                                />
                                                <input
                                                    type="tel"
                                                    placeholder="Phone Number"
                                                    required
                                                    value={phoneNumber}
                                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                                    className="popup-input"
                                                    style={{ marginBottom: 0 }}
                                                />
                                                <button type="submit" className="try-free-btn" style={{ width: '100%', padding: '0.8rem', background: '#2D1414', fontSize: '0.9rem', height: 'fit-content', alignSelf: 'center' }}>
                                                    Contact Us Now
                                                </button>
                                            </form>
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginTop: '0.5rem' }}>
                                                <p style={{ fontSize: '0.85rem', color: '#666', margin: 0 }}>Reach us via:</p>
                                                <div className="contact-row" style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'nowrap' }}>
                                                    <a href="https://wa.me/26774731334" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', color: '#25D366', whiteSpace: 'nowrap' }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12.043 6.925a4.985 4.985 0 0 0-4.98 4.979c-.001.94.263 1.856.761 2.649l.118.188l-.503 1.837l1.885-.494l.181.108a4.97 4.97 0 0 0 2.535.693h.001a4.986 4.986 0 0 0 4.979-4.978a4.95 4.95 0 0 0-1.456-3.522a4.95 4.95 0 0 0-3.521-1.46m2.928 7.118c-.125.35-.723.668-1.01.711a2.04 2.04 0 0 1-.943-.059a9 9 0 0 1-.853-.315c-1.502-.648-2.482-2.159-2.558-2.26c-.074-.1-.61-.812-.61-1.548c0-.737.386-1.099.523-1.249a.55.55 0 0 1 .4-.186c.1 0 .199.001.287.005c.092.004.215-.035.336.257c.125.3.425 1.036.462 1.111s.062.162.013.262c-.05.101-.074.162-.15.25c-.074.088-.157.195-.224.263c-.075.074-.153.155-.066.305c.088.149.388.64.832 1.037c.572.51 1.055.667 1.204.743c.15.074.237.063.325-.038c.087-.101.374-.437.474-.586c.1-.15.199-.125.337-.076c.137.051.873.412 1.022.487c.148.074.249.112.287.175c.036.062.036.361-.088.711" /><path fill="currentColor" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-7.96 14.896h-.002a6 6 0 0 1-2.862-.729L6 18l.85-3.104a5.99 5.99 0 0 1 5.19-8.983a5.95 5.95 0 0 1 4.238 1.757a5.95 5.95 0 0 1 1.751 4.237a6 6 0 0 1-5.989 5.989" /></svg>
                                                        <span style={{ fontWeight: '600', fontSize: '0.8rem' }}>(+267) 74 731 334</span>
                                                    </a>
                                                    <a href="tel:+26774731334" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', color: '#1a1a1a', whiteSpace: 'nowrap' }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m20 4l-2 2m4 4.5l-2.5-.5m-6-8l.5 2.5M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2C9.928 20.51 3.49 14.072 3 6a2 2 0 0 1 2-2" /></svg>
                                                        <span style={{ fontWeight: '600', fontSize: '0.8rem' }}>(+267) 74 731 334</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </>
                                    ) : waitlistStep === 2 ? (
                                        <>
                                            <h2>One last thing...</h2>
                                            <p className="popup-desc">
                                                We'd love to keep you in the loop as we approach our launch date and beta testing phase for Agape Transport and Logistics.
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
                                                    I agree to receive communications from Agape regarding service updates and offers.
                                                </label>
                                            </div>
                                            <button
                                                className="try-free-btn"
                                                onClick={handleFinalConfirm}
                                                disabled={!agreedToEmails || isSubmitting}
                                                style={{
                                                    width: '100%',
                                                    padding: '1rem',
                                                    background: agreedToEmails && !isSubmitting ? '#A31D1D' : '#ccc',
                                                    cursor: agreedToEmails && !isSubmitting ? 'pointer' : 'not-allowed',
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    gap: '10px'
                                                }}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <span className="spinner" style={{
                                                            width: '20px',
                                                            height: '20px',
                                                            border: '3px solid rgba(255,255,255,0.3)',
                                                            borderTop: '3px solid white',
                                                            borderRadius: '50%',
                                                            animation: 'spin 1s linear infinite'
                                                        }}></span>
                                                        Joining...
                                                    </>
                                                ) : (
                                                    "Confirm & Join"
                                                )}
                                            </button>
                                        </>
                                    ) : (
                                        /* Step 3: Success Message */
                                        <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                                            <div style={{
                                                marginBottom: '1.5rem',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                margin: '0 auto 1.5rem auto'
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 512 512">
                                                    <path fill="#A31D1D" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m48.19 121.42l24.1 21.06l-73.61 84.1l-24.1-23.06ZM191.93 342.63L121.37 272L144 249.37L214.57 320Zm65 .79L185.55 272l22.64-22.62l47.16 47.21l111.13-127.17l24.1 21.06Z" />
                                                </svg>
                                            </div>
                                            <h2 style={{ marginBottom: '1rem' }}>You're on the list!</h2>
                                            <p className="popup-desc" style={{ marginBottom: '2rem' }}>
                                                Thank you for contacting Agape. We've received your details at <strong style={{ color: '#1a1a1a' }}>{waitlistEmail}</strong>.
                                                We'll be in touch soon!
                                            </p>
                                            <button
                                                className="try-free-btn"
                                                onClick={handleClosePopup}
                                                style={{ width: '100%', background: '#1a1a1a' }}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    )}
                                    <p className="popup-footer-text" style={{ marginTop: '0.8rem', fontSize: '0.7rem', lineHeight: '1.3', color: '#666' }}>
                                        We'll contact you within 24 hours to finalize your transport booking details.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }

            {/* Privacy Policy Modal */}
            {
                showPrivacy && (
                    <div className="popup-overlay privacy-modal-overlay" onClick={() => setShowPrivacy(false)}>
                        <div className="waitlist-popup privacy-popup" onClick={(e) => e.stopPropagation()}>
                            <button className="close-popup" onClick={() => setShowPrivacy(false)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 5l14 14M5 19l14 -14"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5l14 0M5 19l14 0;M5 5l14 14M5 19l14 -14" /></path><path d="M12 12h0"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 12h14;M12 12h0" /><set fill="freeze" attributeName="opacity" begin="0.4s" to="0" /></path></g></svg>
                            </button>
                            <div className="privacy-content-wrapper" style={{ padding: '6rem 4rem 4rem 4rem' }}>
                                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: '#1a1a1a', textAlign: 'left' }}>Privacy Policy</h2>

                                <div className="privacy-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', color: '#666', lineHeight: '1.7', fontSize: '0.95rem' }}>
                                    <div className="privacy-section">
                                        <h3 style={{ color: '#1a1a1a', marginBottom: '1rem' }}>1. Introduction</h3>
                                        <p>Welcome to Agape. We respect your privacy and are committed to protecting your personal data. This policy informs you about how we handle your data when you visit our website or app.</p>
                                    </div>

                                    <div className="privacy-section">
                                        <h3 style={{ color: '#1a1a1a', marginBottom: '1rem' }}>2. Data We Collect</h3>
                                        <p>At this stage, we only collect and process your email address when you voluntarily provide it to join our waitlist.</p>
                                    </div>

                                    <div className="privacy-section">
                                        <h3 style={{ color: '#1a1a1a', marginBottom: '1rem' }}>3. How We Use Your Data</h3>
                                        <p>We use your email address to share updates on our services and receive your valuable feedback to improve Agape.</p>
                                    </div>

                                    <div className="privacy-section">
                                        <h3 style={{ color: '#1a1a1a', marginBottom: '1rem' }}>4. Data Security</h3>
                                        <p>We have implement appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way.</p>
                                    </div>

                                    <div className="privacy-section" style={{ gridColumn: 'span 2' }}>
                                        <h3 style={{ color: '#1a1a1a', marginBottom: '1rem' }}>5. Your Legal Rights</h3>
                                        <p>You have rights under data protection laws to request access, correction, or erasure of your personal data. Contact us to exercise these rights.</p>
                                    </div>
                                </div>
                                <p style={{ marginTop: '3rem', textAlign: 'center', color: '#999', fontSize: '0.85rem' }}>Last updated: {new Date().toLocaleDateString()}</p>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                showScrollTop && (
                    <button
                        className="scroll-top-btn"
                        onClick={scrollToTop}
                        title="Scroll to top"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22.5 0h-21A1.5 1.5 0 0 0 0 1.5v21A1.5 1.5 0 0 0 1.5 24h21a1.5 1.5 0 0 0 1.5-1.5v-21A1.5 1.5 0 0 0 22.5 0m-4.66 13a.51.51 0 0 1-.86.36l-2.72-2.73a.25.25 0 0 0-.27-.05a.26.26 0 0 0-.16.23v7.9a.5.5 0 0 1-.5.5h-2a.51.51 0 0 1-.5-.5v-7.9a.25.25 0 0 0-.15-.23a.23.23 0 0 0-.27.06L7.69 13.3a.49.49 0 0 1-.85-.3V9.88A.5.5 0 0 1 7 9.51L12 5a.5.5 0 0 1 .67 0l5 4.55a.48.48 0 0 1 .17.37Z" /></svg>
                    </button>
                )
            }
        </div >
    );
};

export default LegaeLandingPage;
