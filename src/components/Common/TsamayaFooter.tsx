import React from 'react';
import { useNavigate } from 'react-router-dom';

interface TsamayaFooterProps {
    onCtaClick?: () => void;
}

const TsamayaFooter: React.FC<TsamayaFooterProps> = ({ onCtaClick }) => {
    const navigate = useNavigate();
    const brandLogo = '/assets/Logo_20for_20Light_20Mode.png';

    const handleCta = () => {
        if (onCtaClick) onCtaClick();
    };

    return (
        <footer className="footer">
            <div className="footer-grid">
                <div className="footer-info">
                    <div style={{ textAlign: 'left', marginBottom: '1.5rem', display: 'block' }}>
                        <img
                            src={brandLogo}
                            alt="Tsamaya"
                            style={{ height: '2.5rem', width: 'auto', objectFit: 'contain', cursor: 'pointer' }}
                            onClick={() => navigate('/')}
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
                            Available on Google Play &amp; App Store soon.
                        </p>
                    </div>
                </div>

                <div className="footer-links">
                    <h4>Commuters</h4>
                    <ul>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); handleCta(); }}>Order a Pass</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); handleCta(); }}>Top Up Wallet</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); handleCta(); }}>Manage Linked Cards</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); handleCta(); }}>Dispute Fare</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Operators &amp; Drivers</h4>
                    <ul>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); handleCta(); }}>Driver Registration</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); handleCta(); }}>Fleet Dashboard Login</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); handleCta(); }}>Settlement Reports</a></li>
                    </ul>
                </div>

                <div className="footer-links">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); handleCta(); }}>About Tsamaya</a></li>
                        <li><a href="/terms" onClick={(e) => { e.preventDefault(); navigate('/terms'); }}>Terms of Service</a></li>
                        <li><a href="/privacy" onClick={(e) => { e.preventDefault(); navigate('/privacy'); }}>Privacy Policy</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); handleCta(); }}>Support Contact</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #D1F2F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem', color: '#666', flexWrap: 'wrap', gap: '1rem' }}>
                <p>&copy; {new Date().getFullYear()} tsamaya.co.bw. All rights reserved.</p>
                <p>Developed by <a href="https://devgenbotswana.co.bw" target="_blank" rel="noopener noreferrer" style={{ color: '#12B5B0', fontWeight: '700', textDecoration: 'none' }}>DevGen Technologies</a></p>
            </div>
        </footer>
    );
};

export default TsamayaFooter;
