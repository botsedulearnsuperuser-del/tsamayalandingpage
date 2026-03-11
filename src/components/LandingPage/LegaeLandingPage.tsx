import React, { useState, useEffect } from 'react';
import './LegaeLandingPage.css';

const LegaeLandingPage: React.FC = () => {
    const assetsPath = '/assets/legaemobile/';

    // Images based on the directory scan
    const heroHandImg = `${assetsPath}Untitled_design__2_-removebg-preview.png`;
    const featureImg1 = `${assetsPath}Untitled_design__3_-removebg-preview.png`;
    const featureImg2 = `${assetsPath}Untitled_design__4_-removebg-preview.png`;
    const featureImg3 = `${assetsPath}Untitled_design__5_-removebg-preview.png`;
    const brandLogo = `${assetsPath}LOGOS WORKFILE (48) 1.png`;

    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    const [showWaitlist, setShowWaitlist] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);
    const [waitlistEmail, setWaitlistEmail] = useState('');
    const [waitlistStep, setWaitlistStep] = useState(1);
    const [agreedToEmails, setAgreedToEmails] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowWaitlist(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleWaitlistSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setWaitlistStep(2);
    };

    const handleFinalConfirm = () => {
        alert(`Thank you! ${waitlistEmail} has been added to the Legae waitlist.`);
        setShowWaitlist(false);
        setWaitlistEmail('');
        setWaitlistStep(1);
        setAgreedToEmails(false);
    };

    const faqData = [
        {
            question: "How do I list my property?",
            answer: "Simply download the Legae app, create a verified property owner or agent account, and tap on the 'List Property' button. You'll be guided through uploading photos, setting a price, and providing property details."
        },
        {
            question: "Is the app free to use?",
            answer: "Legae is completely free for property seekers! For owners and agents, we offer both free basic listings and premium featured slots to help your properties get noticed faster."
        },
        {
            question: "How do I contact agents?",
            answer: "Each listing has a built-in 'Contact Agent' button. You can chat directly through our secure in-app messaging system or call them directly if they've enabled that option."
        },
        {
            question: "Are the listings verified?",
            answer: "Yes. Safety is our priority. Our team manually reviews property titles, identification documents, and conducts spot checks to ensure every listing on Legae is 100% legitimate."
        }
    ];

    return (
        <div className="legae-landing">
            {/* Navigation */}
            <nav className="navbar">
                <div className="logo">
                    <img 
                        src={brandLogo} 
                        alt="Legae Logo" 
                        style={{ 
                            height: '2.5rem', 
                            width: 'auto', 
                            objectFit: 'contain',
                            filter: 'brightness(0) saturate(100%) invert(18%) sepia(85%) saturate(3065%) hue-rotate(345deg) brightness(83%) contrast(92%)' 
                        }} 
                    />
                </div>
                <ul className="nav-links">
                    <li><a href="#features">Features</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#downloads">Downloads</a></li>
                </ul>
                <div className="nav-actions">
                    <button className="get-started-btn">Get Started</button>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="hero">
                <div className="hero-container">
                    <div className="hero-content-wrapper">
                        <h1>An app that finds homes for you so you can live gracefully</h1>
                        <p className="hero-subtitle">
                            Find student housing, dream homes, and manage rentals effortlessly.
                            Legae is the most reliable and discrete way to find your next home in Botswana.
                        </p>
                        <button className="try-free-btn" onClick={() => setShowWaitlist(true)}>Join Waitlist</button>
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
                        <h2>Designed to help you live gracefully. In any situation.</h2>
                    </div>
                    <div>
                        <p>We've built Legae to be the most comprehensive housing app in the region, focusing on ease of use and reliability.</p>
                    </div>
                </div>

                <div className="features-grid">
                    <div className="feature-card">
                        <img src={featureImg1} alt="Create Scenarios" />
                        <h3>Find Your Dream Home</h3>
                        <p>Browse through thousands of verified listings with detailed information and high-quality photos.</p>
                    </div>
                    <div className="feature-card">
                        <img src={featureImg2} alt="Real Calls" />
                        <h3>Student Accomodation</h3>
                        <p>Specifically curated listings for students, near major campuses with all the amenities you need.</p>
                    </div>
                    <div className="feature-card">
                        <img src={featureImg3} alt="Faking Chat" />
                        <h3>Direct Management</h3>
                        <p>Owners and agents can manage their properties, chat with potential tenants, and track payments.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon-container">
                            <div className="feature-icon-box">
                                <div className="feature-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="#A31D1D" d="M4 19v-2h2v-7q0-2.075 1.25-3.687T10.5 4.2V2h3v2.2q2 .5 3.25 2.113T18 10v7h2v2zm8 3q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22M2 10q0-2.5 1.113-4.587T6.1 1.95l1.175 1.6q-1.5 1.1-2.387 2.775T4 10zm18 0q0-2-.888-3.675T16.726 3.55l1.175-1.6q1.875 1.375 2.988 3.463T22 10z" /></svg>
                                </div>
                                <h4>Instant Notifications</h4>
                                <p>Get notified the moment a property matching your criteria is listed.</p>
                            </div>
                        </div>
                        <h3>Smart Alerts</h3>
                        <p>Stay ahead of the market with real-time alerts for the newest and hottest listings.</p>
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
                            <h3>Download app</h3>
                            <p>Available on iOS and Android.</p>
                        </div>
                        <div className="step-item">
                            <div className="step-number">02</div>
                            <h3>Set preferences</h3>
                            <p>Tell us your location and budget.</p>
                        </div>
                        <div className="step-item">
                            <div className="step-number">03</div>
                            <h3>Find a home</h3>
                            <p>Browse through verified listings.</p>
                        </div>
                        <div className="step-item">
                            <div className="step-number">04</div>
                            <h3>Secure deal</h3>
                            <p>Chat and secure with a few taps.</p>
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
                    <h2>Scenario Highlights</h2>
                    <p>Focus on the moments that matter most with our selection of curated housing categories.</p>
                    <div className="scenario-list">
                        <div className="scenario-item">
                            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ background: '#FDF2F2', padding: '10px', borderRadius: '8px', display: 'flex' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 8 8"><path fill="#A31D1D" d="M0 3h1v4m1-1V4h4v2M0 3l4-2l4 2l-4 2" /></svg>
                                </span>
                                Student Accommodation in Gabs
                            </span>
                            <span>→</span>
                        </div>
                        <div className="scenario-item">
                            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ background: '#FDF2F2', padding: '10px', borderRadius: '8px', display: 'flex' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 15"><path fill="#A31D1D" d="M6.176 1.176a.25.25 0 0 0-.352 0l-4.4 4.4A.25.25 0 0 0 1.6 6H3v6.751a.25.25 0 0 0 .249.249h3.5A.25.25 0 0 0 7 12.753v-7.43c0-.066.026-.13.073-.176L8.5 3.5zM6 11H5v-1h1zm0-2H5V8h1zm0-3v1H5V6zm6.75-3h-.5a.25.25 0 0 0-.25.25V5l-1.324-1.824a.25.25 0 0 0-.352 0L8.056 5.932A.25.25 0 0 0 8 6.088v6.66a.25.25 0 0 0 .246.252h1.5a.253.253 0 0 0 .254-.252V11h1v1.747a.253.253 0 0 0 .253.253h1.5a.25.25 0 0 0 .247-.249V3.25a.25.25 0 0 0-.25-.25M10 8H9V7h1zm2 0h-1V7h1zm-2 2H9V9h1zm2 0h-1V9h1z" /></svg>
                                </span>
                                Luxury Villas in Phakalane
                            </span>
                            <span>→</span>
                        </div>
                        <div className="scenario-item">
                            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ background: '#FDF2F2', padding: '10px', borderRadius: '8px', display: 'flex' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#A31D1D" d="M16.923 15.02q-.154-.59-.6-1.1q-.446-.512-1.135-.766l-6.992-2.62q-.136-.05-.27-.061t-.307-.012H7v-2.34q0-.385.177-.742q.177-.358.5-.575l4.885-3.479q.224-.159.458-.229q.234-.069.478-.069t.49.07t.45.228l4.885 3.479q.323.217.5.575T20 8.12v6.898zM14.5 8.441q.162 0 .283-.12q.12-.122.12-.284t-.12-.282q-.121-.122-.283-.122t-.283.122q-.12.121-.12.282t.12.283q.121.121.283.121m-2 0q.162 0 .283-.12q.12-.122.12-.284t-.12-.282q-.121-.122-.283-.122t-.283.122q-.12.121-.12.282t.12.283q.121.121.283.121m2 0q.162 0 .283-.12q.12-.122.12-.284t-.12-.282q-.121-.122-.283-.122t-.283.122q-.12.121-.12.282t.12.283q.121.121.283.121m-2 0q.162 0 .283-.12q.12-.122.12-.284t-.12-.282q-.121-.122-.283-.122t-.283.122q-.12.121-.12.282t.12.283q.121.121.283.121m1.01 11.23q.198.055.481.048q.284-.006.48-.06L21 19.5q0-.696-.475-1.136q-.475-.441-1.179-.441h-5.158q-.498 0-1.02-.06q-.524-.061-.977-.22l-1.572-.526q-.161-.056-.236-.211t-.025-.315q.05-.139.202-.21q.152-.072.313-.016l1.433.502q.408.146.893.217q.486.07 1.053.07h1.202q.283 0 .453-.162t.17-.456q0-.388-.309-.809q-.308-.421-.716-.565l-6.021-2.21q-.137-.042-.273-.074q-.137-.032-.292-.032H6.385v6.737zM2.384 19.922q0 .46.308.768q.309.309.769.309h.846q.46 0 .768-.309q.309-.308.309-.768v-6q0-.46-.309-.768q-.309-.309-.768-.309h-.846q-.46 0-.769.309q-.308.309-.308.768z" /></svg>
                                </span>
                                Affordable Rentals in Tlokweng
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
                        "Legae made finding my student apartment so much easier. I could filter by my budget and proximity to UB, and the direct chat with the landlord was a game changer."
                    </p>
                    <div className="testimonial-author">
                        <strong>Bonnie Odireleng</strong>
                        <p>University of Botswana Student</p>
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
                </div>
            </section>

            {/* Early Access */}
            <section className="early-access">
                <h2>Get early access</h2>
                <p>Be the first to know when we launch new features and exclusive listings.</p>
                <button className="try-free-btn" style={{ background: '#A31D1D', marginBottom: '2rem' }} onClick={() => setShowWaitlist(true)}>Join Waitlist</button>
                <div className="early-access-images">
                    <img src={featureImg1} alt="User 1" />
                    <img src={featureImg2} alt="User 2" />
                    <img src={featureImg3} alt="User 3" />
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-grid">
                    <div className="footer-info">
                        <div className="footer-logo-large" style={{ textAlign: 'left', marginBottom: '1.5rem', display: 'block' }}>
                            Legae
                        </div>
                        <p style={{ color: '#666', maxWidth: '300px', marginBottom: '1.5rem' }}>
                            Making home finding easy and accessible for everyone in Botswana. Unlocking your future, one home at a time.
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
                                Will be available soon on Play Store and App Store.
                            </p>
                        </div>
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
                    <p>&copy; {new Date().getFullYear()} Legae. All rights reserved.</p>
                    <p>Developed by <a href="https://devgenbotswana.co.bw" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--legae-red)', fontWeight: '600', textDecoration: 'none' }}>DevGenTechnologies</a></p>
                </div>
            </footer>

            {/* Waitlist Popup Overlay */}
            {showWaitlist && (
                <div className="popup-overlay">
                    <div className="waitlist-popup">
                        <button className="close-popup" onClick={() => setShowWaitlist(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 5l14 14M5 19l14 -14"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5l14 0M5 19l14 0;M5 5l14 14M5 19l14 -14" /></path><path d="M12 12h0"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 12h14;M12 12h0" /><set fill="freeze" attributeName="opacity" begin="0.4s" to="0" /></path></g></svg>
                        </button>
                        <div className="popup-content">
                            <div className="popup-left">
                                <img src={heroHandImg} alt="Legae App" className="popup-app-img" />
                            </div>
                            <div className="popup-right">
                                <span className="hero-tagline" style={{ color: '#A31D1D', fontSize: '0.8rem', letterSpacing: '2px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' }}>Coming Soon</span>

                                {waitlistStep === 1 ? (
                                    <>
                                        <h2>Join the Legae Waitlist</h2>
                                        <p className="popup-desc">
                                            Be the first professional to unlock the future of housing in Botswana.
                                            By joining our waitlist, you'll get early access to verified listings.
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
                                            <button type="submit" className="try-free-btn" style={{ width: '100%', padding: '1rem', background: '#2D1414' }}>
                                                Join Waitlist
                                            </button>
                                        </form>
                                    </>
                                ) : (
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
                                                I agree to receive emails from Legae regarding product launches, beta mode invitations, and exclusive updates.
                                            </label>
                                        </div>
                                        <button
                                            className="try-free-btn"
                                            onClick={handleFinalConfirm}
                                            disabled={!agreedToEmails}
                                            style={{
                                                width: '100%',
                                                padding: '1rem',
                                                background: agreedToEmails ? '#A31D1D' : '#ccc',
                                                cursor: agreedToEmails ? 'pointer' : 'not-allowed'
                                            }}
                                        >
                                            Confirm & Join
                                        </button>
                                    </>
                                )}
                                <p className="popup-footer-text" style={{ marginTop: '1.5rem' }}>We promise not to spam you. Safety and discretion are our priorities.</p>
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
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M5 5l14 14M5 19l14 -14"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5l14 0M5 19l14 0;M5 5l14 14M5 19l14 -14" /></path><path d="M12 12h0"><animate fill="freeze" attributeName="d" dur="0.4s" values="M5 12h14;M12 12h0" /><set fill="freeze" attributeName="opacity" begin="0.4s" to="0" /></path></g></svg>
                        </button>
                        <div className="privacy-content-wrapper" style={{ padding: '6rem 4rem 4rem 4rem' }}>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: '#1a1a1a', textAlign: 'left' }}>Privacy Policy</h2>

                            <div className="privacy-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', color: '#666', lineHeight: '1.7', fontSize: '0.95rem' }}>
                                <div className="privacy-section">
                                    <h3 style={{ color: '#1a1a1a', marginBottom: '1rem' }}>1. Introduction</h3>
                                    <p>Welcome to Legae. We respect your privacy and are committed to protecting your personal data. This policy informs you about how we handle your data when you visit our website or app.</p>
                                </div>

                                <div className="privacy-section">
                                    <h3 style={{ color: '#1a1a1a', marginBottom: '1rem' }}>2. Data We Collect</h3>
                                    <p>At this stage, we only collect and process your email address when you voluntarily provide it to join our waitlist.</p>
                                </div>

                                <div className="privacy-section">
                                    <h3 style={{ color: '#1a1a1a', marginBottom: '1rem' }}>3. How We Use Your Data</h3>
                                    <p>We use your email address to share updates on our journey, invite you to our beta testing phase, and receive your valuable feedback to improve Legae before our official launch.</p>
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
            )}
        </div>
    );
};

export default LegaeLandingPage;
