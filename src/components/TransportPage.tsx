import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TransportPage.css';
import Footer from './Common/Footer';

const TransportPage: React.FC = () => {
    const navigate = useNavigate();
    const brandLogo = `/assets/AGAPE/image_3__1_-removebg-preview 1.png`;
    const heroBg = `/assets/AGAPE/SELLING A Car - Slider (2).png`;

    const transportServices: { id: number; title: string; desc: string; icon: React.ReactNode }[] = [
        {
            id: 1,
            title: "Cross-Border Logistics",
            desc: "Reliable freight and cargo transport across SADC regions with efficient customs clearance.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 21 24">
                    <path fill="currentColor" d="M10.449 0c-3.64 0-6.71.201-7.168.468c-.8.273-1.402 2.09-1.404 4.246v1.071h-.218a.5.5 0 0 0-.088-.135a.6.6 0 0 0 .146-.392v-.544a.49.49 0 0 0-.427-.535H.432a.49.49 0 0 0-.428.539v-.002v.544c0 .15.055.288.146.393l-.001-.001a.6.6 0 0 0-.146.392V8.73q-.002.023-.002.048c0 .25.187.457.429.487h.859A.42.42 0 0 0 1.658 9l.001-.003h.218v4.822c0 .191.205.368.536.463v.626c-.473.061-.8.274-.8.518v5.36a2.96 2.96 0 0 0 .542 1.863l-.006-.009v.921c0 .243.197.44.44.44h1.798a.44.44 0 0 0 .44-.44v-.631h11.247v.631c0 .243.197.44.44.44h1.798a.44.44 0 0 0 .44-.44v-.92a2.96 2.96 0 0 0 .536-1.86v.007v-5.36c0-.244-.331-.457-.8-.518v-.626c.331-.095.535-.272.536-.463v-4.82h.218c.06.152.202.259.369.268h.855a.49.49 0 0 0 .428-.539v.002v-2.686a.6.6 0 0 0-.146-.393l.001.001a.6.6 0 0 0 .146-.392V4.72a.49.49 0 0 0-.427-.535h-.859a.49.49 0 0 0-.428.539v-.002v.544c0 .15.055.288.146.393l-.001-.001a.6.6 0 0 0-.087.131l-.001.003h-.218V4.716c0-2.167-.608-3.992-1.414-4.251c-.49-.266-3.545-.463-7.157-.463zM3.101 3.107h14.695c.259 0 .475.184.525.429l.001.003c.102.51.16 1.097.16 1.698v.038v-.002V9c0 .296-.24.536-.536.536H2.949A.536.536 0 0 1 2.413 9V5.238q.001-.903.169-1.756l-.009.057a.536.536 0 0 1 .526-.432zm.651 11.786H4.9c.143 0 .259.112.267.253v.001l.191 3.482v.014c0 .148-.12.268-.268.268H3.752a.27.27 0 0 1-.268-.268v-3.482c0-.148.12-.268.268-.268m12.245 0h1.148c.148 0 .268.12.268.268v3.479c0 .148-.12.268-.268.268h-1.339a.27.27 0 0 1-.268-.268v-.015v.001l.191-3.482c.01-.14.126-.25.267-.25h.001zm-9.968.64h8.84c.074 0 .134.06.134.134v.16c0 .074-.06.134-.134.134h-8.84a.134.134 0 0 1-.134-.134v-.16c0-.074.06-.134.134-.134m.053.964h8.733c.074 0 .134.06.134.134v.16c0 .074-.06.134-.134.134H6.082a.134.134 0 0 1-.134-.134v-.16c0-.074.06-.134.134-.134m.054.964h8.626c.074 0 .134.06.134.134v.16c0 .074-.06.134-.134.134H6.136a.133.133 0 0 1-.133-.128v-.16c0-.074.06-.134.134-.134zm.054.964h8.518c.074 0 .134.06.134.134v.16c0 .074-.06.134-.134.134H6.19a.134.134 0 0 1-.134-.134v-.16c0-.074.06-.134.134-.134" /></svg>
            )
        },
        {
            id: 2,
            title: "Student School Runs",
            desc: "Safe and punctual daily transport for students in Gaborone and surrounding areas.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M23.75 13.5H6.23a4.53 4.53 0 0 0-2.78 1l-3.4 2.64a.16.16 0 0 0 0 .11A1.76 1.76 0 0 0 1.75 19h1.6a.24.24 0 0 0 .19-.1a.23.23 0 0 0 0-.21A2.6 2.6 0 0 1 3.5 18a3 3 0 0 1 6 0a2.6 2.6 0 0 1-.09.69a.23.23 0 0 0 .05.21a.24.24 0 0 0 .19.1h6.7a.24.24 0 0 0 .19-.1a.23.23 0 0 0 .05-.21a2.6 2.6 0 0 1-.09-.69a3 3 0 0 1 6 0a3.2 3.2 0 0 1-.07.63a.24.24 0 0 0 .07.24a.23.23 0 0 0 .24.05A1.74 1.74 0 0 0 24 17.25v-3.5a.25.25 0 0 0-.25-.25" /><path fill="currentColor" d="M21.25 4H6.49a4.32 4.32 0 0 0-3.91 2.42l-2 4.1A5 5 0 0 0 0 12.75v2.64a.24.24 0 0 0 .14.23a.24.24 0 0 0 .26 0l2.43-1.91a5.53 5.53 0 0 1 3.4-1.18h17.52a.25.25 0 0 0 .25-.25V6.75A2.75 2.75 0 0 0 21.25 4M7 9.75a.25.25 0 0 1-.25.25H4a.52.52 0 0 1-.43-.24a.51.51 0 0 1 0-.48l1-2A.51.51 0 0 1 5 7h1.75a.25.25 0 0 1 .25.25Zm5.5 0a.25.25 0 0 1-.25.25h-3A.25.25 0 0 1 9 9.75v-2.5A.25.25 0 0 1 9.25 7h3a.25.25 0 0 1 .25.25ZM18 9.5a.5.5 0 0 1-.5.5h-2.75a.25.25 0 0 1-.25-.25v-2.5a.25.25 0 0 1 .25-.25h2.75a.5.5 0 0 1 .5.5Zm3.75 1h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5m0-2.5h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5M4.5 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0m13 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0" /></svg>
            )
        },
        {
            id: 3,
            title: "VIP Executive Chauffeur",
            desc: "Professional lady-driven options for corporate and private executive travel.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M21.907 9.641a1.1 1.1 0 0 0-.088-1.05c-.27-.519-2.14-.647-2.056-.033c.034.248.1.416-.206.446a2.4 2.4 0 0 1-.137-.317l-.53-1.627a2.65 2.65 0 0 0-1.282-1.5l-.373-.2A3.9 3.9 0 0 0 15.4 4.9H8.605a3.9 3.9 0 0 0-1.837.457l-.372.2a2.65 2.65 0 0 0-1.282 1.5L4.58 8.682A2.4 2.4 0 0 1 4.444 9c-.308-.03-.241-.2-.207-.446c.084-.614-1.786-.486-2.056.033a1.1 1.1 0 0 0-.088 1.05a2.16 2.16 0 0 0 1.721.287l-1.079 1.317a2.1 2.1 0 0 0-.578 1.459l.029 5.364A1.083 1.083 0 0 0 3.3 19.1h1.644a.5.5 0 0 0 .516-.475v-.021L5.432 17.4h13.142l-.029 1.21a.5.5 0 0 0 .5.5h1.664a1.083 1.083 0 0 0 1.116-1.04l.03-5.364a2.1 2.1 0 0 0-.578-1.459l-1.091-1.324a2.16 2.16 0 0 0 1.721-.282M5.388 8.9a3.18 3.18 0 0 1 3.279-3.07h6.666a3.183 3.183 0 0 1 3.281 3.076v.45a.125.125 0 0 1-.125.124H5.512a.124.124 0 0 1-.124-.124Zm1.393 4.029a.25.25 0 0 1-.205.115h-3.06c-.136 0-.418-.062-.418-.475l.207-1.069c.071-.372.806-.351 1.133-.156L6.7 12.591a.25.25 0 0 1 .081.342zM20.7 11.5l.207 1.073c0 .413-.282.475-.418.475h-3.06a.247.247 0 0 1-.124-.457l2.266-1.247c.318-.195 1.053-.218 1.129.156" /></svg>
            )
        }
    ];

    const [showPrivacy, setShowPrivacy] = useState(false);

    return (
        <div className="transport-page">
            {/* Standard Agape Header */}
            <nav className="agape-nav">
                <div className="nav-container">
                    <div className="logo" onClick={() => navigate('/')}>
                        <img src={brandLogo} alt="Agape Logo" />
                        <span> / Agape Transport</span>
                    </div>
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
                        <button className="contact-btn" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>Contact Us</button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="page-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("${heroBg}")` }}>
                <div className="hero-content">
                    <h1>Seamless Transport & Logistics</h1>
                    <p>Reliable, efficient, and secure transportation services across Botswana. We move what matters most to you.</p>
                </div>
            </header>

            {/* Features/Services */}
            <section className="service-features">
                <div className="section-title">
                    <h2>Our Specialized Fleet</h2>
                    <p>Tailored solutions for every transportation need.</p>
                </div>
                <div className="features-grid">
                    {transportServices.map(service => (
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
                        <h2>Why Choose Agape Logistics?</h2>
                        <ul>
                            <li><strong>Local Expertise:</strong> Deep understanding of Botswana's logistical landscape.</li>
                            <li><strong>Safety First:</strong> Advanced tracking and vetted professional drivers.</li>
                            <li><strong>Versatile Fleet:</strong> From executive sedans to heavy-duty trucks.</li>
                            <li><strong>Customized Care:</strong> We tailor our routes and schedules to fit your specific needs.</li>
                        </ul>
                    </div>
                    <div className="info-image">
                        <img src="/assets/AGAPE/handon.png" alt="Logistics Support" />
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
                            <p>Standard Agape Privacy terms regarding logistics and data protection.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TransportPage;
