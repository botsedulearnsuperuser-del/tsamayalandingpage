import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface TsamayaNavbarProps {
    /** Show the "Get Transit Pass" button always visible (e.g. on sub-pages) */
    alwaysShowCta?: boolean;
    /** Override CTA click — defaults to navigating home */
    onCtaClick?: () => void;
}

const TsamayaNavbar: React.FC<TsamayaNavbarProps> = ({ alwaysShowCta = true, onCtaClick }) => {
    const navigate = useNavigate();
    const brandLogo = '/assets/Logo_20for_20Light_20Mode.png';
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleCtaClick = () => {
        if (onCtaClick) {
            onCtaClick();
        } else {
            navigate('/');
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav className="navbar">
                <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src={brandLogo}
                        alt="Tsamaya"
                        style={{ height: '2.5rem', width: 'auto', objectFit: 'contain', cursor: 'pointer' }}
                        onClick={() => navigate('/')}
                    />
                </div>

                <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <button className="close-menu-btn" onClick={() => setIsMobileMenuOpen(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                <path d="M5 5l14 14M5 19l14 -14"/>
                            </g>
                        </svg>
                    </button>
                    <ul className="nav-links">
                        <li><a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); setIsMobileMenuOpen(false); }}>Home</a></li>
                        <li><a href="/#benefits" onClick={(e) => { e.preventDefault(); navigate('/'); setIsMobileMenuOpen(false); }}>Key Benefits</a></li>
                        <li><a href="/#how-it-works" onClick={(e) => { e.preventDefault(); navigate('/'); setIsMobileMenuOpen(false); }}>How It Works</a></li>
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
                            className={`get-started-btn ${alwaysShowCta ? 'visible' : ''}`}
                            onClick={handleCtaClick}
                        >
                            Get Transit Pass
                        </button>
                    </div>
                </div>

                <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <rect width="24" height="24" fill="none"/>
                        <path fill="currentColor" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"/>
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
            />
        </>
    );
};

export default TsamayaNavbar;
