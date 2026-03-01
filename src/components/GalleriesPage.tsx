import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './GalleriesPage.css';

const GalleriesPage: React.FC = () => {
    const navigate = useNavigate();
    const brandLogoLarge = `/assets/AGAPE/image_3__1_-removebg-preview 1.png`;
    const [showPrivacy, setShowPrivacy] = useState(false);

    const galleryItems = [
        { id: 1, title: 'Funeral Floral Decor', image: '/assets/flowers/bookingpageimage.png' },
        { id: 2, title: 'Wedding Arrangements', image: '/assets/flowers/bookingpageimage1.png' },
        { id: 3, title: 'Corporate Office Blooms', image: '/assets/flowers/bookingpageimage2.png' },
        { id: 4, title: 'Special Event Decor', image: '/assets/flowers/bookingpageimages.png' },
        { id: 11, title: 'Gift Bouquet Sets', image: '/assets/flowers/bookingpageimage4.png' },
        { id: 12, title: 'Decor Hire Services', image: '/assets/flowers/bookingpageimage5.png' },
        { id: 14, title: 'Lobby Arrangements', image: '/assets/flowers/bookingpageimage6.png' },
        { id: 15, title: 'Custom Floral Sets', image: '/assets/flowers/bookingpageimage7.png' },
        {
            id: 'logistics-promo',
            isPromo: true,
            title: 'Seamless Transport & Logistics Solutions',
            desc: 'Reliable, efficient, and secure transportation services across Botswana. We move what matters most to you.',
            image: '/assets/flowers/Header (2).png'
        },
        { id: 16, title: 'Agape Excellence', image: '/assets/flowers/Header (2).png' }
    ];

    return (
        <div className="flowers-page gallery-mode">
            {/* Header consistent with FlowersPage */}
            <nav className="flower-nav">
                <div className="nav-container">
                    <div className="logo" onClick={() => navigate('/')}>
                        <img src={brandLogoLarge} alt="Agape Logo" />
                        <span>Agape Florist</span>
                    </div>
                    <ul className="nav-links">
                        <li onClick={() => navigate('/')}>Home</li>
                        <li onClick={() => navigate('/services')}>Other Services</li>
                        <li onClick={() => navigate('/flowers')}>Shop Flowers</li>
                    </ul>
                    <div className="nav-actions">
                        <button className="contact-btn" onClick={() => navigate('/flowers')}>Get a Quote</button>
                    </div>
                </div>
            </nav>

            <header className="flower-hero">
                <h1>Florist & Decor Gallery</h1>
                <p>A showcase of our finest floral arrangements and professional event decor.</p>
            </header>

            <main className="gallery-main">
                <div className="gallery-grid">
                    {galleryItems.map(item => (
                        item.isPromo ? (
                            <div key={item.id} className="gallery-item logistics-promo-card">
                                <div className="promo-image-side">
                                    <img src={item.image} alt="Logistics" />
                                </div>
                                <div className="promo-content-side">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                    <button className="promo-contact-btn" onClick={() => navigate('/services')}>Contact Us</button>
                                </div>
                            </div>
                        ) : (
                            <div key={item.id} className={`gallery-item ${item.id === 16 ? 'header-banner-item' : ''}`}>
                                <div className="gallery-img-container">
                                    <img src={item.image} alt={item.title} />
                                    <div className="gallery-item-overlay">
                                        <h3>{item.title}</h3>
                                        <span>Agape Florist & Decor</span>
                                    </div>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </main>

            {/* Footer */}
            <footer className="footer" style={{ padding: '4rem 10% 4rem', backgroundColor: '#FDF2F2', textAlign: 'left', marginTop: '4rem' }}>
                <div className="footer-logo-large" style={{ textAlign: 'left', marginBottom: '1.5rem', fontSize: 'clamp(3rem, 10vw, 4rem)', fontWeight: '900', color: '#1a1a1a', letterSpacing: '-2px', lineHeight: '1' }}>Agape Group</div>
                <div className="footer-info" style={{ marginBottom: '2.5rem', textAlign: 'left' }}>
                    <p style={{ color: '#666', maxWidth: '600px', fontSize: '1.1rem', margin: '0' }}>
                        A diversified group delivering excellence in Transport & Logistics, Construction, Security, and Creative Decor Services in Botswana.
                    </p>
                </div>
                <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem' }}>
                    <div className="footer-links">
                        <h4 style={{ marginBottom: '1.5rem', fontWeight: '700' }}>Services</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.75rem' }}><a href="/transport" style={{ textDecoration: 'none', color: '#666' }}>School Transport</a></li>
                            <li style={{ marginBottom: '0.75rem' }}><a href="/construction" style={{ textDecoration: 'none', color: '#666' }}>Construction</a></li>
                            <li style={{ marginBottom: '0.75rem' }}><a href="/security" style={{ textDecoration: 'none', color: '#666' }}>Security Services</a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h4 style={{ marginBottom: '1.5rem', fontWeight: '700' }}>Company</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.75rem' }}><a href="/about" style={{ textDecoration: 'none', color: '#666' }}>About Us</a></li>
                            <li style={{ marginBottom: '0.75rem' }}><a href="/services" style={{ textDecoration: 'none', color: '#666' }}>Contact</a></li>
                            <li style={{ marginBottom: '0.75rem' }}><a href="#" onClick={(e) => { e.preventDefault(); setShowPrivacy(true); }} style={{ textDecoration: 'none', color: '#666' }}>Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-links">
                        <h4 style={{ marginBottom: '1.5rem', fontWeight: '700' }}>Contact Us</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ textDecoration: 'none', color: '#666' }}>Plot 1234, Gaborone West</a></li>
                            <li style={{ marginBottom: '0.75rem' }}><a href="tel:+26774731334" style={{ textDecoration: 'none', color: '#666' }}>+267 74 731 334</a></li>
                            <li style={{ marginBottom: '0.75rem' }}><a href="mailto:info@agape.co.bw" style={{ textDecoration: 'none', color: '#666' }}>info@agape.co.bw</a></li>
                            <li style={{ marginBottom: '0.75rem' }}><a href="#" style={{ textDecoration: 'none', color: '#666' }}>Botswana</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #FFE4E4', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem', color: '#666', flexWrap: 'wrap', gap: '1rem' }}>
                    <p>&copy; {new Date().getFullYear()} Agape. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#000000', display: 'flex' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 1200 1200"><path fill="currentColor" d="M0 0v1200h1200V0zm863.232 156.592c8.715-.185 17.791.098 27.173.732c34.476.047 70.483 3.155 106.201 6.299l-3.882 142.09h-95.947c-44.988-.996-61.235 16.473-62.695 67.236V484.57h162.524l-6.445 152.197H834.082v423.706H675.513V636.768H565.43V484.57h110.083V353.906c0-94.209 39.829-154.174 118.286-184.57c20.149-7.928 43.288-12.189 69.433-12.744" /></svg>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#000000', display: 'flex' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="currentColor" d="M14.5 0h-13C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5h13c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5M11 2.5c0-.275.225-.5.5-.5h2c.275 0 .5.225.5.5v2c0 .275-.225.5-.5.5h-2a.5.5 0 0 1-.5-.5zM8 5a3.001 3.001 0 0 1 0 6a3.001 3.001 0 0 1 0-6m6 8.5c0 .275-.225.5-.5.5h-11a.5.5 0 0 1-.5-.5V7h1.1A5 5 0 0 0 8 13a5 5 0 0 0 4.9-6H14z" /></svg>
                        </a>
                        <a href="https://wa.me/26774731334" target="_blank" rel="noopener noreferrer" style={{ color: '#000000', display: 'flex' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 12"><path fill="currentColor" d="M6 0a6 6 0 1 1-3.002 11.196l-2.34.778a.5.5 0 0 1-.632-.632l.78-2.339A6 6 0 0 1 6 0M3.932 3.003a.52.52 0 0 0-.394.2c-.135.158-.516.543-.516 1.325c0 .783.529 1.54.603 1.646c.073.104 1.041 1.71 2.522 2.4q.413.192.84.335c.354.12.677.104.932.064c.284-.045.873-.384.996-.757c.122-.37.122-.689.085-.755s-.135-.107-.284-.188a24 24 0 0 0-1.008-.516c-.135-.054-.234-.08-.332.08c-.099.159-.38.518-.467.624c-.085.103-.172.118-.32.039s-.623-.248-1.187-.79a4.7 4.7 0 0 1-.82-1.102c-.088-.16-.01-.245.063-.325c.067-.07.148-.185.222-.279c.073-.09.099-.157.148-.264c.049-.106.024-.2-.013-.278c-.037-.08-.332-.864-.456-1.183c-.12-.31-.241-.266-.332-.272c-.085-.004-.183-.004-.282-.004" /></svg>
                        </a>
                        <p>Developed by <a href="https://devgenbotswana.co.bw" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--legae-red)', fontWeight: '600', textDecoration: 'none' }}>DevGenTechnologies</a></p>
                    </div>
                </div>
            </footer>

            {/* Privacy Policy Modal */}
            {showPrivacy && (
                <div className="popup-overlay privacy-modal-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', zIndex: 2000, display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => setShowPrivacy(false)}>
                    <div className="waitlist-popup privacy-popup" style={{ background: 'white', maxWidth: '800px', width: '90%', borderRadius: '24px', overflow: 'hidden', position: 'relative', maxHeight: '90vh', overflowY: 'auto' }} onClick={(e) => e.stopPropagation()}>
                        <button className="close-popup" onClick={() => setShowPrivacy(false)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', cursor: 'pointer' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 6L6 18M6 6l12 12" /></svg>
                        </button>
                        <div className="privacy-content-wrapper" style={{ padding: '4rem' }}>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '2.5rem', color: '#1a1a1a' }}>Privacy Policy</h2>
                            <div className="privacy-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', color: '#666', lineHeight: '1.7' }}>
                                <div className="privacy-section">
                                    <h3 style={{ color: '#1a1a1a', marginBottom: '1rem' }}>1. Introduction</h3>
                                    <p>Welcome to Agape. We respect your privacy and are committed to protecting your personal data.</p>
                                </div>
                                <div className="privacy-section">
                                    <h3 style={{ color: '#1a1a1a', marginBottom: '1rem' }}>2. Data Collection</h3>
                                    <p>We only collect and process data when you voluntarily provide it to join our waitlist or place an order.</p>
                                </div>
                                <div className="privacy-section">
                                    <h3 style={{ color: '#1a1a1a', marginBottom: '1rem' }}>3. Usage</h3>
                                    <p>We use your data to improve our services and keep you updated on Agape Group developments.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleriesPage;
