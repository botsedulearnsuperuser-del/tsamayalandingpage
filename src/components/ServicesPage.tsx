import React, { useState } from 'react';
import './LandingPage/LegaeLandingPage.css';

const ServicesPage: React.FC = () => {
    // Images
    const brandLogo = `/assets/AGAPE/image_3__1_-removebg-preview 1.png`;
    const carImg = `/assets/AGAPE/image_3-removebg-preview 1.png`;
    const cabImg = `/assets/AGAPE/image_4__1_-removebg-preview 1.png`;
    const combiImg = `/assets/AGAPE/image_1-removebg-preview 1.png`;
    const popupImg = `/assets/AGAPE/image_3-removebg-preview 1.png`;

    const [showWaitlist, setShowWaitlist] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);
    const [waitlistEmail, setWaitlistEmail] = useState('');
    const [waitlistStep, setWaitlistStep] = useState(1);
    const [agreedToEmails, setAgreedToEmails] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // GOOGLE SCRIPT URL (Same as Landing Page)
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzIG_gYJf9uhg9O93wsigvyjBtTsSFJR_NJF5gEkKApsQDJP6WJhRvJkAFGhm4cg7Uw8A/exec";

    const handleWaitlistSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setWaitlistStep(2);
    };

    const handleFinalConfirm = async () => {
        setIsSubmitting(true);
        try {
            const formData = new FormData();
            formData.append('email', waitlistEmail);
            formData.append('consent', agreedToEmails ? "Yes" : "No");
            formData.append('timestamp', new Date().toISOString());

            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: waitlistEmail,
                    consent: agreedToEmails
                })
            });

            setWaitlistStep(3);
        } catch (error) {
            console.error('Error submitting:', error);
            alert('Error joining list. Please try again.');
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

    return (
        <div className="legae-landing" style={{ paddingTop: '8rem' }}>
            {/* Navigation */}
            <nav className="navbar">
                <div className="logo">
                    <a href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <img src={brandLogo} alt="Agape Logo" style={{ height: '7.5rem', width: 'auto', objectFit: 'contain' }} />
                    </a>
                </div>
                <ul className="nav-links">
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/#testimonials">Testimonials</a></li>
                    <li><a href="/services" style={{ color: 'var(--legae-red)', textDecoration: 'underline' }}>Services</a></li>
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
                        <a href="https://wa.me/26774731334" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--legae-red)', display: 'flex' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.043 6.925a4.985 4.985 0 0 0-4.98 4.979c-.001.94.263 1.856.761 2.649l.118.188l-.503 1.837l1.885-.494l.181.108a4.97 4.97 0 0 0 2.535.693h.001a4.986 4.986 0 0 0 4.979-4.978a4.95 4.95 0 0 0-1.456-3.522a4.95 4.95 0 0 0-3.521-1.46m2.928 7.118c-.125.35-.723.668-1.01.711a2.04 2.04 0 0 1-.943-.059a9 9 0 0 1-.853-.315c-1.502-.648-2.482-2.159-2.558-2.26c-.074-.1-.61-.812-.61-1.548c0-.737.386-1.099.523-1.249a.55.55 0 0 1 .4-.186c.1 0 .199.001.287.005c.092.004.215-.035.336.257c.125.3.425 1.036.462 1.111s.062.162.013.262c-.05.101-.074.162-.15.25c-.074.088-.157.195-.224.263c-.075.074-.153.155-.066.305c.088.149.388.64.832 1.037c.572.51 1.055.667 1.204.743c.15.074.237.063.325-.038c.087-.101.374-.437.474-.586c.1-.15.199-.125.337-.076c.137.051.873.412 1.022.487c.148.074.249.112.287.175c.036.062.036.361-.088.711" /><path fill="currentColor" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-7.96 14.896h-.002a6 6 0 0 1-2.862-.729L6 18l.85-3.104a5.99 5.99 0 0 1 5.19-8.983a5.95 5.95 0 0 1 4.238 1.757a5.95 5.95 0 0 1 1.751 4.237a6 6 0 0 1-5.989 5.989" /></svg>
                        </a>
                    </div>
                    <button className="get-started-btn" onClick={() => setShowWaitlist(true)}>Get Started</button>
                </div>
            </nav>

            <div className="section-header" style={{ padding: '0 10%', marginBottom: '3rem', textAlign: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <h2 style={{ fontSize: '3rem', color: '#1A1A1A' }}>Safe & Reliable School Transport Now Available</h2>
                <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem' }}>
                    Give your child a comfortable, secure, and on-time ride to school with Agape Transport & Logistics.
                </p>
            </div>

            <section className="service-cards" style={{ padding: '0 10% 4rem' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '2rem'
                }}>
                    {/* Card 1: Combi */}
                    <div style={{ background: '#F9FAFB', border: '1px solid #eee', overflow: 'hidden', borderRadius: '0', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ height: '250px', overflow: 'hidden' }}>
                            <img src={combiImg} alt="Combi" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                        <div style={{ padding: '2rem', flex: 1 }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Combi & Bus Options</h3>
                            <p style={{ color: '#666', lineHeight: '1.6' }}>
                                Combi seats available for Primary & High School students. Spaces are limited and filling up fast – secure your child’s seat today and enjoy stress-free school mornings.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Lady Driven */}
                    <div style={{ background: '#F9FAFB', border: '1px solid #eee', overflow: 'hidden', borderRadius: '0', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ height: '250px', overflow: 'hidden' }}>
                            <img src={carImg} alt="Car" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                        <div style={{ padding: '2rem', flex: 1 }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Lady-Driven Care</h3>
                            <p style={{ color: '#666', lineHeight: '1.6' }}>
                                Lady-driven for extra care and peace of mind. Care in every delivery. Give your child a comfortable, secure, and on-time ride.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Locations */}
                    <div style={{ background: '#F9FAFB', border: '1px solid #eee', overflow: 'hidden', borderRadius: '0', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ height: '250px', overflow: 'hidden' }}>
                            <img src={cabImg} alt="Cab" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                        <div style={{ padding: '2rem', flex: 1 }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Cab Services</h3>
                            <p style={{ color: '#666', lineHeight: '1.6' }}>
                                <strong>Pick-up:</strong> Block 6, Block 7 & nearby Ledumadumane<br />
                                <strong>Drop-off:</strong> Gaborone International School (GIS)<br /><br />
                                <strong>From P650 per month</strong>
                            </p>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem', background: '#FDF2F2', padding: '3rem', borderRadius: '24px' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#A31D1D' }}>Secure your child's seat today</h3>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Book now: (+267) 74 731 334</p>
                    <button className="try-free-btn" onClick={() => setShowWaitlist(true)}>Contact Us Now</button>
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
                            <li><a href="/#features">Features</a></li>
                            <li><a href="/#testimonials">Testimonials</a></li>
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
                        <a href="https://wa.me/26774731334" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--legae-red)', display: 'flex' }}>
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
                                        <p className="popup-desc">By contacting us, you get direct access to our transport solutions.</p>
                                        <form className="popup-form" onSubmit={handleWaitlistSubmit}>
                                            <input type="email" placeholder="Enter your email address" required value={waitlistEmail} onChange={(e) => setWaitlistEmail(e.target.value)} className="popup-input" />
                                            <button type="submit" className="try-free-btn" style={{ width: '100%', padding: '0.8rem', background: '#2D1414', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Contact Us Now</button>
                                        </form>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
                                            <p style={{ fontSize: '0.85rem', color: '#666', margin: 0 }}>Reach us via:</p>
                                            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                                <a href="https://wa.me/26774731334" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#25D366' }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.043 6.925a4.985 4.985 0 0 0-4.98 4.979c-.001.94.263 1.856.761 2.649l.118.188l-.503 1.837l1.885-.494l.181.108a4.97 4.97 0 0 0 2.535.693h.001a4.986 4.986 0 0 0 4.979-4.978a4.95 4.95 0 0 0-1.456-3.522a4.95 4.95 0 0 0-3.521-1.46m2.928 7.118c-.125.35-.723.668-1.01.711a2.04 2.04 0 0 1-.943-.059a9 9 0 0 1-.853-.315c-1.502-.648-2.482-2.159-2.558-2.26c-.074-.1-.61-.812-.61-1.548c0-.737.386-1.099.523-1.249a.55.55 0 0 1 .4-.186c.1 0 .199.001.287.005c.092.004.215-.035.336.257c.125.3.425 1.036.462 1.111s.062.162.013.262c-.05.101-.074.162-.15.25c-.074.088-.157.195-.224.263c-.075.074-.153.155-.066.305c.088.149.388.64.832 1.037c.572.51 1.055.667 1.204.743c.15.074.237.063.325-.038c.087-.101.374-.437.474-.586c.1-.15.199-.125.337-.076c.137.051.873.412 1.022.487c.148.074.249.112.287.175c.036.062.036.361-.088.711" /><path fill="currentColor" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-7.96 14.896h-.002a6 6 0 0 1-2.862-.729L6 18l.85-3.104a5.99 5.99 0 0 1 5.19-8.983a5.95 5.95 0 0 1 4.238 1.757a5.95 5.95 0 0 1 1.751 4.237a6 6 0 0 1-5.989 5.989" /></svg>
                                                    <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>(+267) 74 731 334</span>
                                                </a>
                                                <a href="tel:+26774731334" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: '#1a1a1a' }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m20 4l-2 2m4 4.5l-2.5-.5m-6-8l.5 2.5M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2C9.928 20.51 3.49 14.072 3 6a2 2 0 0 1 2-2" /></svg>
                                                    <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>(+267) 74 731 334</span>
                                                </a>
                                            </div>
                                        </div>
                                    </>
                                ) : waitlistStep === 2 ? (
                                    <>
                                        <h2>One last thing...</h2>
                                        <p className="popup-desc">We'd love to keep you in the loop as we approach our launch date and beta testing phase.</p>
                                        <div className="consent-container" style={{ marginBottom: '2rem', display: 'flex', gap: '15px', alignItems: 'flex-start' }}>
                                            <input type="checkbox" id="email-consent" checked={agreedToEmails} onChange={(e) => setAgreedToEmails(e.target.checked)} style={{ marginTop: '5px', cursor: 'pointer', width: '20px', height: '20px' }} />
                                            <label htmlFor="email-consent" style={{ fontSize: '0.9rem', color: '#666', lineHeight: '1.4', cursor: 'pointer' }}>I agree to receive communications from Agape regarding service updates and offers.</label>
                                        </div>
                                        <button className="try-free-btn" onClick={handleFinalConfirm} disabled={!agreedToEmails || isSubmitting} style={{ width: '100%', padding: '1rem', background: agreedToEmails && !isSubmitting ? '#A31D1D' : '#ccc', cursor: agreedToEmails && !isSubmitting ? 'pointer' : 'not-allowed', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                            {isSubmitting ? "Joining..." : "Confirm & Join"}
                                        </button>
                                    </>
                                ) : (
                                    <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                                        <h2 style={{ marginBottom: '1rem' }}>You're on the list!</h2>
                                        <p className="popup-desc" style={{ marginBottom: '2rem' }}>Thank you for contacting Agape. We've received your details at <strong style={{ color: '#1a1a1a' }}>{waitlistEmail}</strong>. We'll be in touch soon!</p>
                                        <button className="try-free-btn" onClick={handleClosePopup} style={{ width: '100%', background: '#1a1a1a' }}>Close</button>
                                    </div>
                                )}
                                <p className="popup-footer-text" style={{ marginTop: '1rem', fontSize: '0.75rem' }}>We promise not to spam you. Safety and reliability are our priorities.</p>
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
            )}
        </div>
    );
};

export default ServicesPage;
