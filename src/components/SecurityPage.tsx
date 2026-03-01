import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ConstructionPage.css';
import Footer from './Common/Footer';

const SecurityPage: React.FC = () => {
    const navigate = useNavigate();
    const brandLogo = `/assets/AGAPE/image_3__1_-removebg-preview 1.png`;
    const heroBg = `/assets/AGAPE/security.png`;

    const securityServices: { id: number; title: string; desc: string; icon: React.ReactNode }[] = [
        {
            id: 1,
            title: "Manned Guarding",
            desc: "Highly trained security personnel for industrial, commercial, and residential properties.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                    <path fill="currentColor" fillRule="evenodd" d="M13.5 10.097C13.5 7.774 24 6 24 6s10.5 1.774 10.5 4.097c0 3.097-1.91 4.403-1.91 4.403H15.41s-1.91-1.306-1.91-4.403m12 .403a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m6.314 7.78c1.39-1.085 1.174-2.28 1.174-2.28H15.012s-.217 1.195 1.174 2.28a8 8 0 1 0 15.629 0M24 20c2.721 0 4.624-.314 5.952-.766q.047.376.048.766a6 6 0 1 1-11.952-.766c1.329.452 3.23.766 5.952.766m1.5 10a1 1 0 0 1 1 1v1.382a1 1 0 0 1-.553.894l-.447.224l.577 2.885l4.24-6.36q.436 0 .804.004C36.526 31.262 42 33.776 42 37.558V42H6v-4.442c0-3.782 5.714-6.325 11.118-7.558c-.019.004.184.007.555.01l4.284 6.425l.543-2.935l-.447-.224a1 1 0 0 1-.553-.894V31a1 1 0 0 1 1-1zm9.5 5.333s-1.333-.666-2-1.333c-.667.667-2 1.333-2 1.333S31.698 38 33 38s2-2.667 2-2.667" clipRule="evenodd" />
                </svg>
            )
        },
        {
            id: 2,
            title: "CCTV Surveillance",
            desc: "24/7 remote monitoring and high-definition camera installations for total visibility.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4ZM14 13l-2-2l-2 2l-2-2l-2 2V9h8v4Z" />
                </svg>
            )
        },
        {
            id: 3,
            title: "Access Control",
            desc: "Biometric and smart-card systems to manage and secure entry points effectively.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M41 25v462h46V71h31.3c-9-3.83-15.3-12.74-15.3-23s6.3-19.17 15.3-23zm96.7 0c9 3.83 15.3 12.74 15.3 23s-6.3 19.17-15.3 23h36.4c-4.5-6.57-7.1-14.49-7.1-23s2.6-16.43 7.1-23zm70.3 0c-12.8 0-23 10.19-23 23s10.2 23 23 23s23-10.19 23-23s-10.2-23-23-23m33.9 0c4.5 6.57 7.1 14.49 7.1 23s-2.6 16.43-7.1 23h36.4c-9-3.83-15.3-12.74-15.3-23s6.3-19.17 15.3-23zm55.8 0c9 3.83 15.3 12.74 15.3 23s-6.3 19.17-15.3 23H329v416h46V25zm173.9 32.64l-32 32l12.8 12.76l32-32.04zM393 121v46h38.9c5.1 0 5.1-1.2 6-3c1-1.9 1.1-4 1.1-4v-32s-.1-2.1-1.1-4c-.9-1.8-.9-3-5.9-3zm69 14v18h32v-18zm-257.8 13.3c-17 2.2-32.5 22.1-32.5 48c0 14.2 5.1 26.8 12.3 35.4l8.5 10.3l-13.3 2.5c-9.3 1.8-16.1 6.9-22 14.9s-10.3 19.3-13.5 32.3c-5.8 23.3-7 52.1-7.2 77.4h31.4l8.5 114.9c21.8 4.8 44.9 4.5 65.9 0l7.5-114.9h29.7c0-25.6-.4-54.7-5.5-78.4c-2.9-12.9-7.2-24.2-13.1-32.1c-6-8.1-13.3-13-23.8-14.7l-13.6-2l8.8-10.8c6.6-8.6 11.2-21 11.2-34.8c0-27.5-17.1-48-35.8-48zm248.2 37.3l-12.8 12.8l32 32l12.8-12.8z" />
                </svg>
            )
        }
    ];

    const [showPrivacy, setShowPrivacy] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="security-page">
            {/* Standard Agape Header */}
            <nav className="agape-nav">
                <div className="nav-container">
                    <div className="logo" onClick={() => navigate('/')}>
                        <img src={brandLogo} alt="Agape Logo" />
                        <span className="logo-text"> / Agape Security</span>
                    </div>

                    <button className="mobile-menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12h18M3 6h18M3 18h18" /></svg>
                    </button>

                    <div className={`nav-wrapper ${isMenuOpen ? 'active' : ''}`}>
                        <ul className="nav-links">
                            <li onClick={() => navigate('/')}>Home</li>
                            <li onClick={() => navigate('/about')}>About</li>
                            <li onClick={() => navigate('/services')}>Services</li>
                            <li onClick={() => navigate('/transport')}>Transport</li>
                            <li onClick={() => navigate('/security')}>Security</li>
                            <li onClick={() => navigate('/construction')}>Construction</li>
                            <li onClick={() => navigate('/flowers')}>Florist</li>
                            <li onClick={() => navigate('/galleries')}>Galleries</li>
                        </ul>
                        <div className="nav-actions">
                            <button className="contact-btn" onClick={() => { setIsMenuOpen(false); window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); }}>Get Protection</button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="page-hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${heroBg}")` }}>
                <div className="hero-content">
                    <h1>Your Safety is Our Priority</h1>
                    <p>We offer professional security solutions tailored to protect what matters most to you and your business.</p>
                </div>
            </header>

            {/* Features/Services */}
            <section className="service-features">
                <div className="section-title">
                    <h2>Professional Security Solutions</h2>
                    <p>Proactive protection driven by technology and discipline.</p>
                </div>
                <div className="features-grid">
                    {securityServices.map(service => (
                        <div key={service.id} className="feature-card">
                            <span className="feature-icon">{service.icon}</span>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Information Section */}
            <section className="info-section">
                <div className="info-content">
                    <div className="info-text">
                        <h2>The Agape Security Advantage</h2>
                        <ul>
                            <li><strong>Rapid Response:</strong> Dedicated units ready to deploy at a moment's notice.</li>
                            <li><strong>Tailored Strategies:</strong> We analyze your specific risks to create custom security plans.</li>
                            <li><strong>Integrity:</strong> All staff undergo rigorous background checks and continuous training.</li>
                            <li><strong>Technical Edge:</strong> We utilize modern tech for patrolling and incident reporting.</li>
                        </ul>
                    </div>
                    <div className="info-image">
                        <img src="/assets/AGAPE/security.png" alt="Security Operations" />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer setShowPrivacy={setShowPrivacy} />

            {/* Privacy Policy Modal */}
            {showPrivacy && (
                <div className="popup-overlay privacy-modal-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', zIndex: 2000, display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => setShowPrivacy(false)}>
                    <div className="waitlist-popup privacy-popup" style={{ background: 'white', maxWidth: '800px', width: '90%', borderRadius: '24px', overflow: 'hidden', position: 'relative', maxHeight: '90vh', overflowY: 'auto' }} onClick={(e) => e.stopPropagation()}>
                        <button className="close-popup" onClick={() => setShowPrivacy(false)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', cursor: 'pointer' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6L6 18M6 6l12 12" /></svg>
                        </button>
                        <div className="privacy-content-wrapper" style={{ padding: '4rem' }}>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '2.5rem', color: '#1a1a1a' }}>Privacy Policy</h2>
                            <p>Standard Agape Privacy terms regarding security operations and data protection.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SecurityPage;
