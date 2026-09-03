import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderPassPage.css';

const OrderPassPage: React.FC = () => {
    const navigate = useNavigate();
    const brandLogo = '/assets/Logo_20for_20Light_20Mode.png';
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [selectedPass, setSelectedPass] = useState<string | null>(null);

    const passOptions = [
        {
            id: 'student',
            name: 'Student Transit Pass',
            price: 'P 50',
            description: 'Discounted pass for registered students. Unlimited taps on all qualifying student routes.',
            features: ['Valid student ID required', 'Parental consent needed', 'Route-restricted fares', 'Real-time trip alerts for parents'],
            color: '#38BDF8',
        },
        {
            id: 'adult',
            name: 'Adult Commuter Pass',
            price: 'P 100',
            description: 'Standard NFC transit pass for daily commuters. Full access to all Tsamaya-supported routes.',
            features: ['Tap & go contactless payment', 'Instant wallet top-ups', 'Full route access', 'Digital receipts'],
            color: '#12B5B0',
        },
        {
            id: 'family',
            name: 'Family Bundle Pass',
            price: 'P 200',
            description: "Up to 4 linked cards under one primary account. Manage your family's transit from one dashboard.",
            features: ['Up to 4 linked cards', 'Centralized parent dashboard', 'Per-card spending limits', 'Shared wallet funding'],
            color: '#FBBF24',
        },
    ];

    return (
        <div className="order-pass-page">
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
                        <li><a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); setIsMobileMenuOpen(false); }}>Home</a></li>
                        <li><a href="/#how-it-works" onClick={(e) => { e.preventDefault(); navigate('/'); setIsMobileMenuOpen(false); }}>How It Works</a></li>
                        <li><a href="/#benefits" onClick={(e) => { e.preventDefault(); navigate('/'); setIsMobileMenuOpen(false); }}>Key Benefits</a></li>
                        <li><a href="/#security" onClick={(e) => { e.preventDefault(); navigate('/'); setIsMobileMenuOpen(false); }}>Security</a></li>
                        <li><a href="/#top-up" onClick={(e) => { e.preventDefault(); navigate('/'); setIsMobileMenuOpen(false); }}>Top-Up Partners</a></li>
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
                            className="get-started-btn visible" 
                            onClick={() => { navigate('/'); setIsMobileMenuOpen(false); }}
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
            <main className="order-pass-main">
                <div className="order-pass-hero">
                    <span className="hero-tagline">Tsamaya Transit Pass</span>
                    <h1>Order Your NFC Transit Pass</h1>
                    <p className="hero-subtitle">
                        Get your contactless Tsamaya Transit Pass and start paying for combis, buses, and taxis across Botswana in under a second. Choose the pass that fits your commute.
                    </p>
                </div>

                {/* Pass Options */}
                <div className="pass-options-grid">
                    {passOptions.map((pass) => (
                        <div 
                            key={pass.id} 
                            className={`pass-option-card ${selectedPass === pass.id ? 'selected' : ''}`}
                            onClick={() => setSelectedPass(pass.id)}
                        >
                            <div className="pass-card-badge" style={{ background: pass.color }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="22" height="14" x="1" y="5" rx="2" ry="2"/>
                                    <line x1="1" x2="23" y1="10" y2="10"/>
                                </svg>
                            </div>
                            <h3>{pass.name}</h3>
                            <div className="pass-price">{pass.price}</div>
                            <p className="pass-description">{pass.description}</p>
                            <ul className="pass-features">
                                {pass.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#12B5B0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"/>
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="select-pass-btn" style={{ background: pass.color }}>
                                {selectedPass === pass.id ? 'Selected' : 'Select Pass'}
                            </button>
                        </div>
                    ))}
                </div>

                {/* How to Order */}
                <section className="order-steps-section">
                    <h2>How to Order</h2>
                    <div className="order-steps-grid">
                        <div className="order-step">
                            <div className="step-number">01</div>
                            <h4>Choose Your Pass</h4>
                            <p>Select the Student, Adult, or Family pass that suits your commute needs.</p>
                        </div>
                        <div className="order-step">
                            <div className="step-number">02</div>
                            <h4>Complete Registration</h4>
                            <p>Fill in your details and confirm your identity. Students will need a valid student ID.</p>
                        </div>
                        <div className="order-step">
                            <div className="step-number">03</div>
                            <h4>Receive Your Pass</h4>
                            <p>Pick up your NFC Transit Pass at a designated collection point or wait for delivery.</p>
                        </div>
                        <div className="order-step">
                            <div className="step-number">04</div>
                            <h4>Tap & Go</h4>
                            <p>Activate your pass, top up your wallet, and start tapping to pay on any Tsamaya-supported route.</p>
                        </div>
                    </div>
                </section>

                {/* Info Section */}
                <section className="order-info-section">
                    <div className="info-card">
                        <h3>Cloud-First Security</h3>
                        <p>Your money never lives on the physical card. It's safely stored in your encrypted cloud wallet, so even if you lose your pass, your balance stays protected.</p>
                    </div>
                    <div className="info-card">
                        <h3>One-Tap Kill Switch</h3>
                        <p>Lost or stolen pass? Instantly lock it from the web portal or mobile app. Order a replacement and link it to your existing account seamlessly.</p>
                    </div>
                    <div className="info-card">
                        <h3>Family Management</h3>
                        <p>Parents can link multiple student passes to a single account, set spending limits, and receive real-time trip notifications for complete peace of mind.</p>
                    </div>
                </section>

                {/* CTA */}
                <section className="order-cta-section">
                    <h2>Ready to Go Cashless?</h2>
                    <p>Join thousands of Botswana commuters already using Tsamaya for faster, safer, and smarter transit payments.</p>
                    <button className="try-free-btn" onClick={() => navigate('/')}>Back to Home</button>
                </section>
            </main>

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
                            <li><a href="/order-pass" onClick={(e) => { e.preventDefault(); navigate('/order-pass'); }}>Order a Pass</a></li>
                            <li><a href="/top-up" onClick={(e) => { e.preventDefault(); navigate('/top-up'); }}>Top Up Wallet</a></li>
                            <li><a href="/manage-cards" onClick={(e) => { e.preventDefault(); navigate('/manage-cards'); }}>Manage Linked Cards</a></li>
                            <li><a href="/dispute-fare" onClick={(e) => { e.preventDefault(); navigate('/dispute-fare'); }}>Dispute Fare</a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h4>Operators & Drivers</h4>
                        <ul>
                            <li><a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Driver Registration</a></li>
                            <li><a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Fleet Dashboard Login</a></li>
                            <li><a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Settlement Reports</a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>About Tsamaya</a></li>
                            <li><a href="/terms" onClick={(e) => { e.preventDefault(); navigate('/terms'); }}>Terms of Service</a></li>
                            <li><a href="/privacy" onClick={(e) => { e.preventDefault(); navigate('/privacy'); }}>Privacy Policy</a></li>
                            <li><a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Support Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} tsamaya.co.bw. All rights reserved.</p>
                    <p>Developed by <a href="https://devgenbotswana.co.bw" target="_blank" rel="noopener noreferrer">DevGen Technologies</a></p>
                </div>
            </footer>
        </div>
    );
};

export default OrderPassPage;
