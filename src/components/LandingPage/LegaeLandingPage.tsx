import React, { useState } from 'react';
import './LegaeLandingPage.css';

const LegaeLandingPage: React.FC = () => {
    const assetsPath = '/assets/legaemobile/';
    // REPLACE THIS URL WITH YOUR DEPLOYED GOOGLE APPS SCRIPT WEB APP URL
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzIG_gYJf9uhg9O93wsigvyjBtTsSFJR_NJF5gEkKApsQDJP6WJhRvJkAFGhm4cg7Uw8A/exec";

    // Images based on the directory scan
    const heroHandImg = `/assets/AGAPE/handon.png`;
    const popupImg = `/assets/AGAPE/image_3-removebg-preview 1.png`;
    const featureImg1 = `/assets/AGAPE/image_3-removebg-preview 1.png`;
    const featureImg2 = `/assets/AGAPE/image_4__1_-removebg-preview 1.png`;
    const featureImg3 = `/assets/AGAPE/image_1-removebg-preview 1.png`;
    const brandLogo = `/assets/AGAPE/image_3__1_-removebg-preview 1.png`;

    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const [showWaitlist, setShowWaitlist] = useState(true);
    const [showPrivacy, setShowPrivacy] = useState(false);
    const [waitlistEmail, setWaitlistEmail] = useState('');
    const [waitlistStep, setWaitlistStep] = useState(1);
    const [agreedToEmails, setAgreedToEmails] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

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
                <div className="logo">
                    <img src={brandLogo} alt="Agape Logo" style={{ height: '7.5rem', width: 'auto', objectFit: 'contain' }} />
                </div>
                <ul className="nav-links">
                    <li><a href="#features">About Us</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="/services">Services</a></li>
                </ul>
                <div className="nav-actions">
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--legae-red)', display: 'flex' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1200 1200"><path fill="currentColor" d="M0 0v1200h1200V0zm863.232 156.592c8.715-.185 17.791.098 27.173.732c34.476.047 70.483 3.155 106.201 6.299l-3.882 142.09h-95.947c-44.988-.996-61.235 16.473-62.695 67.236V484.57h162.524l-6.445 152.197H834.082v423.706H675.513V636.768H565.43V484.57h110.083V353.906c0-94.209 39.829-154.174 118.286-184.57c20.149-7.928 43.288-12.189 69.433-12.744" /></svg>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--legae-red)', display: 'flex' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16"><path fill="currentColor" d="M14.5 0h-13C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5h13c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5M11 2.5c0-.275.225-.5.5-.5h2c.275 0 .5.225.5.5v2c0 .275-.225.5-.5.5h-2a.5.5 0 0 1-.5-.5zM8 5a3.001 3.001 0 0 1 0 6a3.001 3.001 0 0 1 0-6m6 8.5c0 .275-.225.5-.5.5h-11a.5.5 0 0 1-.5-.5V7h1.1A5 5 0 0 0 8 13a5 5 0 0 0 4.9-6H14z" /></svg>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--legae-red)', display: 'flex' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14"><g fill="none"><g clip-path="url(#SVGG1Ot4cAD)"><path fill="currentColor" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z" /></g><defs><clipPath id="SVGG1Ot4cAD"><path fill="#fff" d="M0 0h14v14H0z" /></clipPath></defs></g></svg>
                        </a>
                        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--legae-red)', display: 'flex' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.043 6.925a4.985 4.985 0 0 0-4.98 4.979c-.001.94.263 1.856.761 2.649l.118.188l-.503 1.837l1.885-.494l.181.108a4.97 4.97 0 0 0 2.535.693h.001a4.986 4.986 0 0 0 4.979-4.978a4.95 4.95 0 0 0-1.456-3.522a4.95 4.95 0 0 0-3.521-1.46m2.928 7.118c-.125.35-.723.668-1.01.711a2.04 2.04 0 0 1-.943-.059a9 9 0 0 1-.853-.315c-1.502-.648-2.482-2.159-2.558-2.26c-.074-.1-.61-.812-.61-1.548c0-.737.386-1.099.523-1.249a.55.55 0 0 1 .4-.186c.1 0 .199.001.287.005c.092.004.215-.035.336.257c.125.3.425 1.036.462 1.111s.062.162.013.262c-.05.101-.074.162-.15.25c-.074.088-.157.195-.224.263c-.075.074-.153.155-.066.305c.088.149.388.64.832 1.037c.572.51 1.055.667 1.204.743c.15.074.237.063.325-.038c.087-.101.374-.437.474-.586c.1-.15.199-.125.337-.076c.137.051.873.412 1.022.487c.148.074.249.112.287.175c.036.062.036.361-.088.711" /><path fill="currentColor" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-7.96 14.896h-.002a6 6 0 0 1-2.862-.729L6 18l.85-3.104a5.99 5.99 0 0 1 5.19-8.983a5.95 5.95 0 0 1 4.238 1.757a5.95 5.95 0 0 1 1.751 4.237a6 6 0 0 1-5.989 5.989" /></svg>
                        </a>
                    </div>
                    <button className="get-started-btn">Get Started</button>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="hero">
                <div className="hero-container">
                    <div className="hero-content-wrapper">
                        <h1>Seamless Transport & Logistics Solutions</h1>
                        <p className="hero-subtitle">
                            Reliable, efficient, and secure transportation services across Botswana. We move what matters most to you.
                        </p>
                        <button className="try-free-btn" onClick={() => setShowWaitlist(true)}>Contact Us</button>
                    </div>

                    <div className="hero-image-container">
                        <img src={heroHandImg} alt="Legae App" className="hero-phone-img" />
                    </div>
                </div>
            </header>

            {/* Features Section */}
            <section className="features" id="features">
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
                        <img src={featureImg1} alt="Transport Services" />
                        <h3>Transport Services</h3>
                        <p>We provide local and longer‑distance transport for a variety of needs — from household goods and furniture to vehicles, tractors, building materials, and more.</p>
                    </div>
                    <div className="feature-card">
                        <img src={featureImg2} alt="Cargo & Delivery" />
                        <h3>Cargo & Delivery</h3>
                        <p>Move your parcels and cargo across town or beyond — Maun to Gaborone and other routes.</p>
                    </div>
                    <div className="feature-card">
                        <img src={featureImg3} alt="Student Transport" />
                        <h3>Student Transport</h3>
                        <p>Safe drop-offs and pick-ups for schools using our Minibus (Combi) and Honda Fit fleet. Mostly lady-driven for trusted care.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon-container">
                            <div className="feature-icon-box">
                                <div className="feature-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#A31D1D" d="M4 19v-2h2v-7q0-2.075 1.25-3.687T10.5 4.2V2h3v2.2q2 .5 3.25 2.113T18 10v7h2v2zm8 3q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22M2 10q0-2.5 1.113-4.587T6.1 1.95l1.175 1.6q-1.5 1.1-2.387 2.775T4 10zm18 0q0-2-.888-3.675T16.726 3.55l1.175-1.6q1.875 1.375 2.988 3.463T22 10z" /></svg>
                                </div>
                                <h4>Trust & Reliability</h4>
                                <p>Every delivery is handled with security and punctuality in mind.</p>
                            </div>
                        </div>
                        <h3>Real Calls & Support</h3>
                        <p>Get support through direct calls or messages — our team keeps you informed from pickup to delivery.</p>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="how-it-works">
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
            </section>

            {/* Scenario Highlights */}
            <section className="scenarios">
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
            </section>

            {/* Testimonials */}
            <section className="testimonials" id="testimonials">
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
            </section>

            {/* FAQ Section */}
            <section className="faq">
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
                    Agape
                </div>
            </section>

            {/* Early Access */}
            <section className="early-access" id="gallery">
                <h2>Stay Connected</h2>
                <p>Be the first to know about special offers, new routes, and service updates — follow us on social media.</p>
                <button className="try-free-btn" style={{ background: '#A31D1D', marginBottom: '2rem' }} onClick={() => setShowWaitlist(true)}>Contact Us</button>
                <div className="early-access-images">
                    <img src={featureImg1} alt="User 1" />
                    <img src={featureImg2} alt="User 2" />
                    <img src={featureImg3} alt="User 3" />
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-logo-large">Agape</div>
                <div className="footer-grid">
                    <div className="footer-info">
                        <p style={{ color: '#666', maxWidth: '300px' }}>
                            Making transport and delivery simple, dependable, and affordable in Botswana. We deliver with care and reliability.
                        </p>
                    </div>
                    <div className="footer-links">
                        <h4>Platform</h4>
                        <ul>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Testimonials</a></li>
                            <li><a href="#">Downloads</a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); setShowPrivacy(true); }}>Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #FFE4E4', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem', color: '#666' }}>
                    <p>&copy; {new Date().getFullYear()} Agape. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--legae-red)', display: 'flex' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 1200 1200"><path fill="currentColor" d="M0 0v1200h1200V0zm863.232 156.592c8.715-.185 17.791.098 27.173.732c34.476.047 70.483 3.155 106.201 6.299l-3.882 142.09h-95.947c-44.988-.996-61.235 16.473-62.695 67.236V484.57h162.524l-6.445 152.197H834.082v423.706H675.513V636.768H565.43V484.57h110.083V353.906c0-94.209 39.829-154.174 118.286-184.57c20.149-7.928 43.288-12.189 69.433-12.744" /></svg>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--legae-red)', display: 'flex' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="currentColor" d="M14.5 0h-13C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5h13c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5M11 2.5c0-.275.225-.5.5-.5h2c.275 0 .5.225.5.5v2c0 .275-.225.5-.5.5h-2a.5.5 0 0 1-.5-.5zM8 5a3.001 3.001 0 0 1 0 6a3.001 3.001 0 0 1 0-6m6 8.5c0 .275-.225.5-.5.5h-11a.5.5 0 0 1-.5-.5V7h1.1A5 5 0 0 0 8 13a5 5 0 0 0 4.9-6H14z" /></svg>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--legae-red)', display: 'flex' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14"><g fill="none"><g clip-path="url(#SVGG1Ot4cAD)"><path fill="currentColor" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z" /></g><defs><clipPath id="SVGG1Ot4cAD"><path fill="#fff" d="M0 0h14v14H0z" /></clipPath></defs></g></svg>
                        </a>
                        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--legae-red)', display: 'flex' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12.043 6.925a4.985 4.985 0 0 0-4.98 4.979c-.001.94.263 1.856.761 2.649l.118.188l-.503 1.837l1.885-.494l.181.108a4.97 4.97 0 0 0 2.535.693h.001a4.986 4.986 0 0 0 4.979-4.978a4.95 4.95 0 0 0-1.456-3.522a4.95 4.95 0 0 0-3.521-1.46m2.928 7.118c-.125.35-.723.668-1.01.711a2.04 2.04 0 0 1-.943-.059a9 9 0 0 1-.853-.315c-1.502-.648-2.482-2.159-2.558-2.26c-.074-.1-.61-.812-.61-1.548c0-.737.386-1.099.523-1.249a.55.55 0 0 1 .4-.186c.1 0 .199.001.287.005c.092.004.215-.035.336.257c.125.3.425 1.036.462 1.111s.062.162.013.262c-.05.101-.074.162-.15.25c-.074.088-.157.195-.224.263c-.075.074-.153.155-.066.305c.088.149.388.64.832 1.037c.572.51 1.055.667 1.204.743c.15.074.237.063.325-.038c.087-.101.374-.437.474-.586c.1-.15.199-.125.337-.076c.137.051.873.412 1.022.487c.148.074.249.112.287.175c.036.062.036.361-.088.711" /><path fill="currentColor" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-7.96 14.896h-.002a6 6 0 0 1-2.862-.729L6 18l.85-3.104a5.99 5.99 0 0 1 5.19-8.983a5.95 5.95 0 0 1 4.238 1.757a5.95 5.95 0 0 1 1.751 4.237a6 6 0 0 1-5.989 5.989" /></svg>
                        </a>
                        <p>Developed by <a href="https://devgenbotswana.co.bw" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--legae-red)', fontWeight: '600', textDecoration: 'none' }}>DevGenTechnologies</a></p>
                    </div>
                </div>
            </footer>

            {/* Waitlist Popup Overlay */}
            {showWaitlist && (
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
                                        <p className="popup-desc">
                                            By contacting us, you get direct access to our transport solutions.
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
                                            <button type="submit" className="try-free-btn" style={{ width: '100%', padding: '0.8rem', background: '#2D1414', fontSize: '0.9rem' }}>
                                                Contact Us Now
                                            </button>
                                        </form>
                                    </>
                                ) : waitlistStep === 2 ? (
                                    <>
                                        <h2>One last thing...</h2>
                                        <p className="popup-desc">
                                            We'd love to keep you in the loop as we approach our launch date and beta testing phase.
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
                                <p className="popup-footer-text" style={{ marginTop: '1rem', fontSize: '0.75rem' }}>We promise not to spam you. Safety and reliability are our priorities.</p>
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
            {showScrollTop && (
                <button
                    className="scroll-top-btn"
                    onClick={scrollToTop}
                    title="Scroll to top"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22.5 0h-21A1.5 1.5 0 0 0 0 1.5v21A1.5 1.5 0 0 0 1.5 24h21a1.5 1.5 0 0 0 1.5-1.5v-21A1.5 1.5 0 0 0 22.5 0m-4.66 13a.51.51 0 0 1-.86.36l-2.72-2.73a.25.25 0 0 0-.27-.05a.26.26 0 0 0-.16.23v7.9a.5.5 0 0 1-.5.5h-2a.51.51 0 0 1-.5-.5v-7.9a.25.25 0 0 0-.15-.23a.23.23 0 0 0-.27.06L7.69 13.3a.49.49 0 0 1-.85-.3V9.88A.5.5 0 0 1 7 9.51L12 5a.5.5 0 0 1 .67 0l5 4.55a.48.48 0 0 1 .17.37Z" /></svg>
                </button>
            )}
        </div >
    );
};

export default LegaeLandingPage;
