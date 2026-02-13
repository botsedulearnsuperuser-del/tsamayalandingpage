import React, { useState } from 'react';
import './LegaeLandingPage.css';

const LegaeLandingPage: React.FC = () => {
    const assetsPath = '/assets/legaemobile/';
    // REPLACE THIS URL WITH YOUR DEPLOYED GOOGLE APPS SCRIPT WEB APP URL
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzIG_gYJf9uhg9O93wsigvyjBtTsSFJR_NJF5gEkKApsQDJP6WJhRvJkAFGhm4cg7Uw8A/exec";

    // Images based on the directory scan
    const heroHandImg = `${assetsPath}Untitled_design__2_-removebg-preview.png`;
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

    // Removed delayed useEffect

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
                        <img src={featureImg3} alt="Professional Drivers" />
                        <h3>Professional Drivers</h3>
                        <p>We hire trained, responsible drivers to ensure your goods are transported safely and on schedule.</p>
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
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 8 8"><path fill="#A31D1D" d="M0 3h1v4m1-1V4h4v2M0 3l4-2l4 2l-4 2" /></svg>
                                </span>
                                Household Goods Transport
                            </span>
                            <span>→</span>
                        </div>
                        <div className="scenario-item">
                            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ background: '#FDF2F2', padding: '10px', borderRadius: '8px', display: 'flex' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 15"><path fill="#A31D1D" d="M6.176 1.176a.25.25 0 0 0-.352 0l-4.4 4.4A.25.25 0 0 0 1.6 6H3v6.751a.25.25 0 0 0 .249.249h3.5A.25.25 0 0 0 7 12.753v-7.43c0-.066.026-.13.073-.176L8.5 3.5zM6 11H5v-1h1zm0-2H5V8h1zm0-3v1H5V6zm6.75-3h-.5a.25.25 0 0 0-.25.25V5l-1.324-1.824a.25.25 0 0 0-.352 0L8.056 5.932A.25.25 0 0 0 8 6.088v6.66a.25.25 0 0 0 .246.252h1.5a.253.253 0 0 0 .254-.252V11h1v1.747a.253.253 0 0 0 .253.253h1.5a.25.25 0 0 0 .247-.249V3.25a.25.25 0 0 0-.25-.25M10 8H9V7h1zm2 0h-1V7h1zm-2 2H9V9h1zm2 0h-1V9h1z" /></svg>
                                </span>
                                Bulk Items & Farm Material Delivery
                            </span>
                            <span>→</span>
                        </div>
                        <div className="scenario-item">
                            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <span style={{ background: '#FDF2F2', padding: '10px', borderRadius: '8px', display: 'flex' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#A31D1D" d="M16.923 15.02q-.154-.59-.6-1.1q-.446-.512-1.135-.766l-6.992-2.62q-.136-.05-.27-.061t-.307-.012H7v-2.34q0-.385.177-.742q.177-.358.5-.575l4.885-3.479q.224-.159.458-.229q.234-.069.478-.069t.49.07t.45.228l4.885 3.479q.323.217.5.575T20 8.12v6.898zM14.5 8.441q.162 0 .283-.12q.12-.122.12-.284t-.12-.282q-.121-.122-.283-.122t-.283.122q-.12.121-.12.282t.12.283q.121.121.283.121m-2 0q.162 0 .283-.12q.12-.122.12-.284t-.12-.282q-.121-.122-.283-.122t-.283.122q-.12.121-.12.282t.12.283q.121.121.283.121m2 0q.162 0 .283-.12q.12-.122.12-.284t-.12-.282q-.121-.122-.283-.122t-.283.122q-.12.121-.12.282t.12.283q.121.121.283.121m-2 0q.162 0 .283-.12q.12-.122.12-.284t-.12-.282q-.121-.122-.283-.122t-.283.122q-.12.121-.12.282t.12.283q.121.121.283.121m1.01 11.23q.198.055.481.048q.284-.006.48-.06L21 19.5q0-.696-.475-1.136q-.475-.441-1.179-.441h-5.158q-.498 0-1.02-.06q-.524-.061-.977-.22l-1.572-.526q-.161-.056-.236-.211t-.025-.315q.05-.139.202-.21q.152-.072.313-.016l1.433.502q.408.146.893.217q.486.07 1.053.07h1.202q.283 0 .453-.162t.17-.456q0-.388-.309-.809q-.308-.421-.716-.565l-6.021-2.21q-.137-.042-.273-.074q-.137-.032-.292-.032H6.385v6.737zM2.384 19.922q0 .46.308.768q.309.309.769.309h.846q.46 0 .768-.309q.309-.308.309-.768v-6q0-.46-.309-.768q-.309-.309-.768-.309h-.846q-.46 0-.769.309q-.308.309-.308.768z" /></svg>
                                </span>
                                Vehicle & Tractor Moves
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
            <section className="early-access">
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
                    <p>Developed by <a href="https://devgenbotswana.co.bw" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--legae-red)', fontWeight: '600', textDecoration: 'none' }}>DevGenTechnologies</a></p>
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
                                            <button type="submit" className="try-free-btn" style={{ width: '100%', padding: '1rem', background: '#2D1414' }}>
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
                                <p className="popup-footer-text" style={{ marginTop: '1.5rem' }}>We promise not to spam you. Safety and reliability are our priorities.</p>
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
        </div >
    );
};

export default LegaeLandingPage;
