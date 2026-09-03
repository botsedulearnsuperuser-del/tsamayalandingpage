import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ManageCardsPage.css';

const ManageCardsPage: React.FC = () => {
    const navigate = useNavigate();
    const brandLogo = '/assets/Logo_20for_20Light_20Mode.png';
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const linkedCards = [
        {
            id: 'card-001',
            name: 'My Transit Pass',
            type: 'Adult',
            lastFour: '4821',
            status: 'active',
            balance: 'P 340.00',
            color: '#12B5B0',
        },
        {
            id: 'card-002',
            name: 'Lesego School Pass',
            type: 'Student',
            lastFour: '7193',
            status: 'active',
            balance: 'P 120.00',
            color: '#38B8DF',
        },
        {
            id: 'card-003',
            name: 'Mom Commuter Pass',
            type: 'Adult',
            lastFour: '5567',
            status: 'locked',
            balance: 'P 85.00',
            color: '#FBBF24',
        },
    ];

    const recentActivity = [
        { id: 1, action: 'Card linked', card: '****4821', date: '15 Aug 2026', status: 'completed' },
        { id: 2, action: 'Card locked', card: '****5567', date: '12 Aug 2026', status: 'locked' },
        { id: 3, action: 'New card linked', card: '****7193', date: '01 Aug 2026', status: 'completed' },
        { id: 4, action: 'Spending limit set', card: '****7193', date: '01 Aug 2026', status: 'completed' },
    ];

    return (
        <div className="manage-cards-page">
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
            <main className="manage-cards-main">
                <div className="manage-cards-hero">
                    <span className="hero-tagline">Card Management</span>
                    <h1>Manage Your Linked Cards</h1>
                    <p className="hero-subtitle">
                        View, lock, and manage all your Tsamaya transit cards from one place. Add new cards, set spending limits, and keep your family's transit accounts secure.
                    </p>
                </div>

                {/* Linked Cards Grid */}
                <section className="linked-cards-section">
                    <div className="section-header-row">
                        <h2>Your Linked Cards</h2>
                        <button className="add-card-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" x2="12" y1="5" y2="19"/>
                                <line x1="5" x2="19" y1="12" y2="12"/>
                            </svg>
                            Link New Card
                        </button>
                    </div>

                    <div className="cards-grid">
                        {linkedCards.map((card) => (
                            <div key={card.id} className={`card-display-card ${card.status === 'locked' ? 'locked' : ''}`}>
                                <div className="card-top-row">
                                    <span className="card-type-badge" style={{ background: card.color }}>{card.type}</span>
                                    <span className={`card-status ${card.status}`}>
                                        {card.status === 'active' ? '● Active' : '● Locked'}
                                    </span>
                                </div>
                                <div className="card-chip">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="28" viewBox="0 0 36 28" fill="none">
                                        <rect width="36" height="28" rx="4" fill="#C9A84C" opacity="0.3"/>
                                        <rect x="4" y="4" width="28" height="20" rx="2" stroke="#C9A84C" strokeWidth="1.5" fill="none"/>
                                        <line x1="4" y1="14" x2="32" y2="14" stroke="#C9A84C" strokeWidth="1"/>
                                        <line x1="18" y1="4" x2="18" y2="24" stroke="#C9A84C" strokeWidth="1"/>
                                    </svg>
                                </div>
                                <div className="card-number">
                                    •••• •••• •••• {card.lastFour}
                                </div>
                                <div className="card-name">{card.name}</div>
                                <div className="card-balance-row">
                                    <span className="card-balance-label">Balance</span>
                                    <span className="card-balance-amount">{card.balance}</span>
                                </div>
                                <div className="card-actions">
                                    {card.status === 'active' ? (
                                        <>
                                            <button className="card-action-btn lock-btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                                                </svg>
                                                Lock
                                            </button>
                                            <button className="card-action-btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>
                                                    <path d="m15 5 4 4"/>
                                                </svg>
                                                Edit
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <button className="card-action-btn unlock-btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                                                    <path d="M7 11V7a5 5 0 0 1 9.9-1"/>
                                                </svg>
                                                Unlock
                                            </button>
                                            <button className="card-action-btn remove-btn">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M3 6h18"/>
                                                    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/>
                                                    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                                                </svg>
                                                Remove
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Card Features */}
                <section className="card-features-section">
                    <h2>Card Management Features</h2>
                    <div className="features-grid">
                        <div className="feature-item">
                            <div className="feature-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#12B5B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                                </svg>
                            </div>
                            <h4>One-Tap Kill Switch</h4>
                            <p>Instantly lock a lost or stolen card. Your balance stays safe in your cloud wallet, ready to transfer to a new card.</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#12B5B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                                    <circle cx="9" cy="7" r="4"/>
                                    <line x1="19" x2="19" y1="8" y2="14"/>
                                    <line x1="22" x2="16" y1="11" y2="11"/>
                                </svg>
                            </div>
                            <h4>Family Card Linking</h4>
                            <p>Link up to 4 family cards under one primary account. Manage student and adult passes from a single dashboard.</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#12B5B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="12" x2="12" y1="2" y2="22"/>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                                </svg>
                            </div>
                            <h4>Spending Limits</h4>
                            <p>Set daily or per-transaction spending limits on each linked card. Full control over how much is spent per trip.</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#12B5B0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                                    <polyline points="14 2 14 8 20 8"/>
                                    <line x1="16" x2="8" y1="13" y2="13"/>
                                    <line x1="16" x2="8" y1="17" y2="17"/>
                                    <polyline points="10 9 9 9 8 9"/>
                                </svg>
                            </div>
                            <h4>Activity History</h4>
                            <p>View detailed logs of all card actions including linking, locking, unlocking, and spending limit changes.</p>
                        </div>
                    </div>
                </section>

                {/* Recent Activity */}
                <section className="activity-section">
                    <h2>Recent Card Activity</h2>
                    <div className="activity-table">
                        <div className="activity-header">
                            <span>Action</span>
                            <span>Card</span>
                            <span>Date</span>
                            <span>Status</span>
                        </div>
                        {recentActivity.map((item) => (
                            <div key={item.id} className="activity-row">
                                <span className="activity-action">{item.action}</span>
                                <span className="activity-card">{item.card}</span>
                                <span className="activity-date">{item.date}</span>
                                <span className={`activity-status ${item.status}`}>
                                    {item.status === 'completed' ? 'Completed' : 'Locked'}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Security Info */}
                <section className="security-info-section">
                    <div className="security-card">
                        <h3>Cloud-First Security</h3>
                        <p>Your money never lives on physical cards. Funds are securely stored in encrypted cloud wallets, so even if a card is lost or locked, your balance remains protected and accessible.</p>
                    </div>
                    <div className="security-card">
                        <h3>Instant Replacement</h3>
                        <p>Lost a card? Order a replacement and link it to your account in minutes. Your existing balance and settings transfer seamlessly to the new card.</p>
                    </div>
                </section>

                {/* CTA */}
                <section className="manage-cards-cta">
                    <h2>Need a Replacement Card?</h2>
                    <p>Order a new Tsamaya Transit Pass and link it to your existing account in just a few steps.</p>
                    <button className="try-free-btn" onClick={() => navigate('/order-pass')}>Order a Pass</button>
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

export default ManageCardsPage;
