import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TopUpWalletPage.css';

const TopUpWalletPage: React.FC = () => {
    const navigate = useNavigate();
    const brandLogo = '/assets/Logo_20for_20Light_20Mode.png';
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [topUpAmount, setTopUpAmount] = useState('');
    const [selectedMethod, setSelectedMethod] = useState<string | null>(null);

    const paymentMethods = [
        {
            id: 'orange',
            name: 'Orange Money',
            type: 'USSD Prompt Push',
            description: 'Dial *168# from your Orange Money line and follow the USSD prompt to complete your top-up instantly.',
            icon: '📱',
            steps: ['Dial *168# on your phone', 'Select "Pay Business"', 'Enter Tsamaya Merchant Code', 'Enter the amount and confirm', 'Funds reflect in seconds'],
        },
        {
            id: 'smega',
            name: 'BTC SMEGA',
            type: 'Direct API Top-Up',
            description: 'Use the SMEGA app or dial the USSD code to push funds directly to your Tsamaya wallet.',
            icon: '📲',
            steps: ['Open the SMEGA app or dial *150#', 'Navigate to "Pay a Bill"', 'Select Tsamaya as the merchant', 'Enter your account reference', 'Confirm payment'],
        },
        {
            id: 'myzaka',
            name: 'Mascom MyZaka',
            type: 'Instant Merchant Pay',
            description: 'Send funds from your Mascom MyZaka wallet directly to your Tsamaya transit account.',
            icon: '💳',
            steps: ['Open your MyZaka app', 'Select "Merchant Payment"', 'Search for "Tsamaya"', 'Enter amount and your Tsamaya ID', 'Confirm and complete'],
        },
        {
            id: 'card',
            name: 'Visa & Mastercard',
            type: 'Cybersource Secure',
            description: 'Link your debit or credit card for secure online top-ups powered by Cybersource payment gateway.',
            icon: '💎',
            steps: ['Log in to your Tsamaya account', 'Navigate to Wallet > Top Up', 'Select "Debit/Credit Card"', 'Enter card details securely', 'Confirm payment via OTP'],
        },
    ];

    const quickAmounts = ['P 20', 'P 50', 'P 100', 'P 200', 'P 500'];

    return (
        <div className="topup-page">
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
            <main className="topup-main">
                <div className="topup-hero">
                    <span className="hero-tagline">Wallet Top-Up</span>
                    <h1>Fund Your Tsamaya Wallet</h1>
                    <p className="hero-subtitle">
                        Add funds to your transit wallet anytime using Orange Money, BTC SMEGA, Mascom MyZaka, or any Visa/Mastercard. Your balance is stored securely in the cloud.
                    </p>
                </div>

                {/* Quick Top-Up Card */}
                <div className="quick-topup-card">
                    <h3>Quick Top-Up</h3>
                    <div className="quick-amounts">
                        {quickAmounts.map((amount) => (
                            <button 
                                key={amount} 
                                className={`quick-amount-btn ${topUpAmount === amount ? 'selected' : ''}`}
                                onClick={() => setTopUpAmount(amount)}
                            >
                                {amount}
                            </button>
                        ))}
                    </div>
                    <div className="custom-amount-row">
                        <label htmlFor="custom-amount">Or enter custom amount:</label>
                        <div className="custom-amount-input">
                            <span className="currency-prefix">P</span>
                            <input 
                                id="custom-amount"
                                type="number" 
                                placeholder="0.00" 
                                value={topUpAmount}
                                onChange={(e) => setTopUpAmount(e.target.value)}
                            />
                        </div>
                    </div>
                    <button className="topup-now-btn" disabled={!topUpAmount}>
                        Top Up Now
                    </button>
                </div>

                {/* Payment Methods */}
                <section className="payment-methods-section">
                    <h2>Payment Methods</h2>
                    <p className="section-subtitle">Choose the most convenient way to fund your Tsamaya transit wallet.</p>
                    
                    <div className="payment-methods-grid">
                        {paymentMethods.map((method) => (
                            <div 
                                key={method.id} 
                                className={`payment-method-card ${selectedMethod === method.id ? 'selected' : ''}`}
                                onClick={() => setSelectedMethod(method.id)}
                            >
                                <div className="method-header">
                                    <span className="method-icon">{method.icon}</span>
                                    <div>
                                        <h4>{method.name}</h4>
                                        <span className="method-type">{method.type}</span>
                                    </div>
                                </div>
                                <p className="method-description">{method.description}</p>
                                
                                {selectedMethod === method.id && (
                                    <div className="method-steps">
                                        <h5>How to Top Up:</h5>
                                        <ol>
                                            {method.steps.map((step, idx) => (
                                                <li key={idx}>{step}</li>
                                            ))}
                                        </ol>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Info Cards */}
                <section className="topup-info-section">
                    <div className="info-card">
                        <h3>Instant Processing</h3>
                        <p>Most top-ups reflect in your wallet within seconds. Mobile money transfers via Orange Money, SMEGA, and MyZaka are processed in real-time.</p>
                    </div>
                    <div className="info-card">
                        <h3>Secure Payments</h3>
                        <p>All card transactions are processed through Cybersource, a PCI DSS Level 1 certified payment gateway. Your card details are never stored on our servers.</p>
                    </div>
                    <div className="info-card">
                        <h3>No Hidden Fees</h3>
                        <p>Top up your wallet with zero processing fees. The full amount you add goes directly to your transit balance.</p>
                    </div>
                </section>

                {/* FAQ */}
                <section className="topup-faq-section">
                    <h2>Frequently Asked Questions</h2>
                    <div className="topup-faq-list">
                        <div className="topup-faq-item">
                            <h4>What is the minimum top-up amount?</h4>
                            <p>The minimum top-up amount is P 10. There is no maximum limit, but daily transaction limits may apply depending on your payment method.</p>
                        </div>
                        <div className="topup-faq-item">
                            <h4>How long does it take for funds to reflect?</h4>
                            <p>Orange Money, BTC SMEGA, and Mascom MyZaka top-ups are instant. Card payments may take up to 60 seconds to process.</p>
                        </div>
                        <div className="topup-faq-item">
                            <h4>Is there a fee for topping up?</h4>
                            <p>No. Tsamaya does not charge any fees for wallet top-ups. However, your mobile network operator may charge standard transaction fees for mobile money transfers.</p>
                        </div>
                        <div className="topup-faq-item">
                            <h4>Can I set up automatic top-ups?</h4>
                            <p>Yes. You can enable auto top-up in your account settings to automatically add funds when your balance drops below a specified threshold.</p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="topup-cta-section">
                    <h2>Need Help with Your Top-Up?</h2>
                    <p>Our support team is available to assist with any payment issues or questions.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button className="try-free-btn" onClick={() => navigate('/')}>Back to Home</button>
                        <button className="try-free-btn" style={{ background: 'transparent', color: '#12B5B0', border: '1.5px solid #12B5B0' }}>
                            Contact Support
                        </button>
                    </div>
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

export default TopUpWalletPage;
