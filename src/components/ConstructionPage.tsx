import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ConstructionPage.css';
import Footer from './Common/Footer';

const ConstructionPage: React.FC = () => {
    const navigate = useNavigate();
    const brandLogo = `/assets/AGAPE/image_3__1_-removebg-preview 1.png`;
    const heroBg = `/assets/AGAPE/agape_construction_bg.png`;

    const constructionProjects: { id: number; title: string; desc: string; icon: React.ReactNode }[] = [
        {
            id: 1,
            title: "Residential Development",
            desc: "Custom home builds and modern housing estates with premium finishes.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 16 16">
                    <path fill="currentColor" fillRule="evenodd" d="M8.27 2.08a.5.5 0 0 0-.54 0l-7 4.5l.54.84l.73-.468V13.5a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V6.952l.73.469l.54-.842zM6.5 9a.5.5 0 0 0-.5.5V13h1v-3h2v3h1V9.5a.5.5 0 0 0-.5-.5z" clipRule="evenodd" />
                </svg>
            )
        },
        {
            id: 2,
            title: "Commercial Projects",
            desc: "Office complexes and retail structures designed for functionality and growth.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 32 32">
                    <path fill="currentColor" d="M4 4a1 1 0 0 1 1-1h22a1 1 0 1 1 0 2h-3c0 .556-.404 1-.91 1h-.59v3.09c.85.23 1.48 1.02 1.48 1.94c0 .696-.36 1.312-.903 1.67l.92 1.3h4.489a.51.51 0 0 1 .514.5a.5.5 0 0 1-.504.5H28v3h.486a.51.51 0 0 1 .514.5a.51.51 0 0 1-.514.5h-1.018a.49.49 0 0 1-.208.48c-.09.06-.19.09-.29.09c-.16 0-.31-.07-.41-.21l-.255-.36h-8.65l-.255.36c-.1.14-.25.21-.41.21c-.1 0-.2-.03-.29-.09a.49.49 0 0 1-.208-.48h-.978a.51.51 0 0 1-.514-.5c0-.274.232-.5.514-.5H16v-3h-.486a.51.51 0 0 1-.514-.5c0-.274.232-.5.514-.5h4.45l.92-1.3a2 2 0 0 1-.904-1.67c0-.28.23-.5.5-.5c.28 0 .5.22.5.5c0 .36.193.678.481.854l.085-.12a.5.5 0 0 1 .079-.1a.5.5 0 0 1 .355-.147c.13-.001.26.05.355.147a.5.5 0 0 1 .08.1l.084.12c.288-.176.481-.494.481-.854c0-.55-.43-.99-.98-1c-.17 0-.33-.09-.42-.23a.44.44 0 0 1-.09-.27c0-.04 0-.07.01-.11V6h-.59c-.506 0-.91-.444-.91-1h-6v21h.75c.69 0 1.25.56 1.25 1.25V28h12.01c1.1 0 1.99.895 1.99 2H2c0-1.105.89-2 1.99-2H5v-.75c0-.69.56-1.25 1.25-1.25H7V5H5a1 1 0 0 1-1-1m4 3v2.191L12.382 7zm.618 19H13v-2.191zm3.764-3H8v2.191zM8.618 10H13V7.809zm3.764 1H8v2.191zm-3.764 3H13v-2.191zm3.764 1H8v2.191zm-3.764 3H13v-2.191zm3.764 1H8v2.191zm-3.764 3H13v-2.191zm13.264-8.972l-.688.972h1.572l-.688-.972a2 2 0 0 1-.196 0M19.256 15H17v3h.132zm-.893 3h7.234l-2.123-3h-2.988zm6.342-3l2.123 3H27v-3z" />
                </svg>
            )
        },
        {
            id: 3,
            title: "Civil Works",
            desc: "Infrastructure development including roads, drainage, and utility networks.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 72 72">
                    <path fill="#fff" d="M15.35 59.08h-1.779c-.684 0-1.238-.578-1.238-1.291v-34.83c0-.713.554-1.291 1.238-1.291h1.779c.684 0 1.238.578 1.238 1.291v34.83c0 .713-.554 1.291-1.238 1.291m43.11 0h-1.779c-.684 0-1.238-.713-1.238-1.593v-32.97c0-.88.554-1.593 1.238-1.593h1.779c.684 0 1.238.713 1.238 1.593v32.97c0 .88-.555 1.593-1.238 1.593" />
                    <path fill="#fcea2b" d="M7.45 43.47h7.743L7.45 51.213z" />
                    <path fill="#3f3f3f" d="M15.19 43.47h12.34l-7.743 7.743l-12.34-.058z" />
                    <path fill="#fcea2b" d="M27.48 43.47h12.34l-7.743 7.743h-12.29z" />
                    <path fill="#3f3f3f" d="M39.82 43.47h12.34l-7.743 7.743h-12.34z" />
                    <path fill="#fcea2b" d="m52.16 43.47l11.89-.184l-7.918 7.951H44.368z" />
                    <path fill="#3f3f3f" d="M64.008 43.332v7.612h-7.612z" />
                    <path fill="#fcea2b" d="m7.95 28.33l7.646-.034l-7.646 7.646z" />
                    <path fill="#3f3f3f" d="M15.6 28.3h11.94l-7.695 7.646H7.955z" />
                    <path fill="#fcea2b" d="M27.48 28.3h12.34l-7.743 7.743h-12.29z" />
                    <path fill="#3f3f3f" d="M39.82 28.3h12.34l-7.743 7.743h-12.34z" />
                    <path fill="#fcea2b" d="m52.16 28.3l10.908-.007l-.015 1.05l-6.615 6.603l-12.02.098z" />
                    <path fill="#3f3f3f" d="M64.05 28.33v7.612h-7.612z" />
                    <g fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="M12.74 42.72v-6.348M16.92 50.9v6.509c0 .672-.545 1.217-1.217 1.217h-1.748a1.217 1.217 0 0 1-1.217-1.217v-6.071M16.92 36.37v6.348M12.74 28.24v-5.907m4.181 0v5.812M55.1 43.29v-6.921m4.18 14.971v6.071c0 .672-.545 1.217-1.217 1.217h-1.748a1.217 1.217 0 0 1-1.217-1.217V51.34m4.182-14.97v5.969M55.1 28.03v-5.891m4.181 0v5.796M7.95 28.33h56.1v7.612H7.95z" />
                        <path d="M7.95 43.29h56.1v7.612H7.95z" />
                        <circle cx="14.83" cy="17.97" r="4.594" />
                        <circle cx="57.19" cy="17.97" r="4.594" />
                    </g>
                    <g fill="#f4aa41" stroke="#e27022" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <circle cx="14.835" cy="17.966" r="4.594" />
                        <circle cx="57.185" cy="17.966" r="4.594" />
                    </g>
                </svg>
            )
        }
    ];

    const [showPrivacy, setShowPrivacy] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="construction-page">
            {/* Standard Agape Header */}
            <nav className="agape-nav">
                <div className="nav-container">
                    <div className="logo" onClick={() => navigate('/')}>
                        <img src={brandLogo} alt="Agape Logo" />
                        <span className="logo-text"> / Agape Construction</span>
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
                            <button className="contact-btn" onClick={() => { setIsMenuOpen(false); window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); }}>Request Quote</button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="page-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("${heroBg}")` }}>
                <div className="hero-content">
                    <h1>Built on Trust & Integrity</h1>
                    <p>Providing reliable construction services for residential and commercial projects, ensuring quality and durability in every build.</p>
                </div>
            </header>

            {/* Features/Services */}
            <section className="service-features">
                <div className="section-title">
                    <h2>Our Construction Expertise</h2>
                    <p>Delivering excellence from foundation to finishing.</p>
                </div>
                <div className="features-grid">
                    {constructionProjects.map(project => (
                        <div key={project.id} className="feature-card">
                            <span className="feature-icon">{project.icon}</span>
                            <h3>{project.title}</h3>
                            <p>{project.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Information Section */}
            <section className="info-section">
                <div className="info-content">
                    <div className="info-image">
                        <img src="/assets/AGAPE/construction.png" alt="Construction Excellence" />
                    </div>
                    <div className="info-text">
                        <h2>The Agape Quality Standard</h2>
                        <ul>
                            <li><strong>Expert Craftsmanship:</strong> Our team consists of highly skilled and vetted professionals.</li>
                            <li><strong>Quality Materials:</strong> We source only the best materials to ensure longevity.</li>
                            <li><strong>Timely Delivery:</strong> We understand the importance of deadlines in construction.</li>
                            <li><strong>Full Documentation:</strong> Licensed and compliant with all Botswana building regulations.</li>
                        </ul>
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
                            <p>Standard Agape Privacy terms regarding construction ventures and data protection.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ConstructionPage;
