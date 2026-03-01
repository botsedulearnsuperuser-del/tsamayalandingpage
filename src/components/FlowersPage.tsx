import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FlowersPage.css';
import Footer from './Common/Footer';

const FlowersPage: React.FC = () => {
    const navigate = useNavigate();
    const brandLogo = `/assets/AGAPE/image_3__1_-removebg-preview 1.png`;

    const flowerProducts = [
        { id: 1, name: "Romantic Red Roses", price: 450, image: "bookingpageimage.png" },
        { id: 2, name: "Spring Tulip Bouquet", price: 380, image: "bookingpageimage1.png" },
        { id: 3, name: "Elegant Lilies", price: 520, image: "bookingpageimage2.png" },
        { id: 4, name: "Sunflower Joy", price: 320, image: "bookingpageimage4.png" },
        { id: 5, name: "Lavender Dream", price: 410, image: "bookingpageimage5.png" },
        { id: 6, name: "Classic White Peonies", price: 650, image: "bookingpageimage6.png" },
        { id: 7, name: "Mixed Celebration", price: 480, image: "bookingpageimage7.png" },
        { id: 8, name: "Midnight Orchids", price: 590, image: "bookingpageimage8.png" },
        { id: 9, name: "Pastel Perfection", price: 430, image: "bookingpageimage9.png" },
        { id: 10, name: "Bright Daisy Mix", price: 290, image: "bookingimagescart.png" },
        { id: 11, name: "Premium Garden Box", price: 750, image: "bookingimagescarting.png" },
        { id: 12, name: "Standard Bloom", price: 300, image: "boookimage.png" }
    ];

    const categories = ["All Flowers", "Bouquets", "Special Occasions", "Gift Sets", "Decor Hire"];
    const [selectedCategory, setSelectedCategory] = useState("All Flowers");
    const [cart, setCart] = useState<{ id: number, quantity: number }[]>([]);
    const [justAdded, setJustAdded] = useState<string | null>(null);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [whatsappProduct, setWhatsappProduct] = useState<string | null>(null);
    const [showPrivacy, setShowPrivacy] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzUXSjFhbgCOlAsAIkUMBPKSrSbkILoL7ac0DlKks8PsXSUI0eRvA0Hp87J432OMe9O/exec';

    // Quote modal state
    const [showQuotePopup, setShowQuotePopup] = useState(false);
    const [quoteName, setQuoteName] = useState('');
    const [quoteEmail, setQuoteEmail] = useState('');
    const [quoteService, setQuoteService] = useState('Wedding Arrangements');
    const [quoteType, setQuoteType] = useState('Individual');
    const [quoteMessage, setQuoteMessage] = useState('');
    const [quoteStep, setQuoteStep] = useState(1);
    const [quoteAgreed, setQuoteAgreed] = useState(false);

    // Images
    const brandLogoLarge = `/assets/AGAPE/image_3__1_-removebg-preview 1.png`;
    const sidebarBanner = `/assets/flowers/Header (2).png`;

    // Checkout form state
    const [checkoutForm, setCheckoutForm] = useState({
        fullName: '',
        phone: '',
        customerType: 'Individual', // Individual or Company
        deliveryDate: '',
        location: '',
        consent: false
    });

    const toggleCart = (product: { id: number, name: string }) => {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            setCart(prev => prev.filter(item => item.id !== product.id));
        } else {
            setCart(prev => [...prev, { id: product.id, quantity: 1 }]);
            setJustAdded(product.name);
            setTimeout(() => setJustAdded(null), 3000);
        }
    };

    const updateQuantity = (productId: number, delta: number) => {
        setCart(prev => prev.map(item => {
            if (item.id === productId) {
                const newQty = Math.max(1, item.quantity + delta);
                return { ...item, quantity: newQty };
            }
            return item;
        }));
    };

    const handleOrder = (flowerName: string) => {
        setWhatsappProduct(flowerName);
    };

    const confirmWhatsAppOrder = () => {
        if (whatsappProduct) {
            const message = encodeURIComponent(`Hi Agape Florist, I would like to order: ${whatsappProduct}`);
            window.open(`https://wa.me/26774731334?text=${message}`, '_blank');
            setWhatsappProduct(null);
        }
    };

    const handleQuoteSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setQuoteStep(2);
    };

    const handleFinalQuoteConfirm = async () => {
        setIsSubmitting(true);
        try {
            const params = new URLSearchParams();
            params.append('name', quoteName);
            params.append('email', quoteEmail);
            params.append('service', quoteService);
            params.append('customerType', quoteType);
            params.append('message', quoteMessage);
            params.append('consent', quoteAgreed ? "Yes" : "No");
            params.append('timestamp', new Date().toISOString());
            params.append('source', 'Detailed Quote Inquiry');

            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: params
            });

            setQuoteStep(3);
        } catch (error) {
            console.error('Error submitting quote:', error);
            alert('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const closeQuotePopup = () => {
        setShowQuotePopup(false);
        setQuoteStep(1);
        setQuoteName('');
        setQuoteEmail('');
        setQuoteService('Funeral Floral Decor');
        setQuoteType('Individual');
        setQuoteMessage('');
        setQuoteAgreed(false);
    };

    const handleCheckoutSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const cartItems = flowerProducts
            .filter(p => cart.some(item => item.id === p.id))
            .map(p => {
                const qty = cart.find(item => item.id === p.id)?.quantity || 1;
                return `${p.name} (x${qty})`;
            })
            .join(', ');

        const totalAmount = flowerProducts.filter(p => cart.some(item => item.id === p.id)).reduce((sum, p) => {
            const qty = cart.find(item => item.id === p.id)?.quantity || 1;
            return sum + (p.price * qty);
        }, 0);

        try {
            // Prepare data for Google Sheets using URLSearchParams
            // This ensures data is sent as application/x-www-form-urlencoded, which is what Google Apps Script expects
            const params = new URLSearchParams();
            params.append('name', checkoutForm.fullName);
            params.append('phone', checkoutForm.phone);
            params.append('type', checkoutForm.customerType);
            params.append('deliveryDate', checkoutForm.deliveryDate);
            params.append('location', checkoutForm.location);
            params.append('items', cartItems);
            params.append('total', `P ${totalAmount}.00`);
            params.append('timestamp', new Date().toISOString());
            params.append('consent', checkoutForm.consent ? "Yes" : "No");
            params.append('source', 'Flowers Checkout');

            // Log to Google Script
            // Note: no-cors mode is necessary for Google Apps Script, which doesn't support CORS preflight
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: params
            });

            // Show success message instead of WhatsApp
            setShowSuccess(true);
            setCart([]); // Reset cart on success

            // Auto close success after some time OR let user close it
            setTimeout(() => {
                setShowSuccess(false);
                setIsCheckoutOpen(false);
            }, 5000);

        } catch (error) {
            console.error('Error submitting order:', error);
            alert('Something went wrong. Please try again or contact us via WhatsApp directly.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flowers-page">
            {/* Navbar */}
            <nav className="flower-nav">
                <div className="nav-container">
                    <div className="logo" onClick={() => navigate('/')}>
                        <img src={brandLogo} alt="Agape Logo" />
                        <span className="logo-text"> / Agape Florist</span>
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
                        <div className="nav-actions" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                            <div className="cart-icon-wrapper desk-cart-icon" onClick={() => setIsCheckoutOpen(true)} style={{ position: 'relative', cursor: 'pointer' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M14.665 2.33a.75.75 0 0 1 1.006.335l2.201 4.402c1.353.104 2.202.37 2.75 1.047c.9 1.114.541 2.79-.177 6.143l-.429 2c-.487 2.273-.73 3.409-1.555 4.076S16.474 21 14.15 21h-4.3c-2.324 0-3.486 0-4.31-.667c-.826-.667-1.07-1.803-1.556-4.076l-.429-2c-.718-3.353-1.078-5.029-.177-6.143c.548-.678 1.397-.943 2.75-1.047l2.201-4.402a.75.75 0 0 1 1.342.67l-1.835 3.67Q8.559 7 9.422 7h5.156q.863-.001 1.586.005l-1.835-3.67a.75.75 0 0 1 .336-1.006M7.25 12a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M10 14.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clipRule="evenodd" /></svg>
                                {cart.length > 0 && <span className="cart-badge">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>}
                            </div>
                            <button className="contact-btn" onClick={() => { setIsMenuOpen(false); setShowQuotePopup(true); }}>Get a Quote</button>
                        </div>
                    </div>

                    {/* Mobile Cart Icon - always visible */}
                    <div className="cart-icon-wrapper mobile-cart-icon" onClick={() => setIsCheckoutOpen(true)} style={{ position: 'relative', cursor: 'pointer', display: 'none' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M14.665 2.33a.75.75 0 0 1 1.006.335l2.201 4.402c1.353.104 2.202.37 2.75 1.047c.9 1.114.541 2.79-.177 6.143l-.429 2c-.487 2.273-.73 3.409-1.555 4.076S16.474 21 14.15 21h-4.3c-2.324 0-3.486 0-4.31-.667c-.826-.667-1.07-1.803-1.556-4.076l-.429-2c-.718-3.353-1.078-5.029-.177-6.143c.548-.678 1.397-.943 2.75-1.047l2.201-4.402a.75.75 0 0 1 1.342.67l-1.835 3.67Q8.559 7 9.422 7h5.156q.863-.001 1.586.005l-1.835-3.67a.75.75 0 0 1 .336-1.006M7.25 12a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M10 14.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clipRule="evenodd" /></svg>
                        {cart.length > 0 && <span className="cart-badge">{cart.reduce((sum, item) => sum + item.quantity, 0)}</span>}
                    </div>
                </div>
            </nav>

            <header className="flower-hero">
                <h1>Exquisite Floral Design</h1>
                <p>Bringing beauty and elegance to every Botswana celebration.</p>
            </header>

            <main className="flower-content">
                <aside className="filters">
                    <div className="filter-section">
                        <h3>Categories</h3>
                        <ul>
                            {categories.map(cat => (
                                <li
                                    key={cat}
                                    className={selectedCategory === cat ? 'active' : ''}
                                    onClick={() => setSelectedCategory(cat)}
                                >
                                    {cat}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="filter-section">
                        <h3>Price Range</h3>
                        <div className="price-inputs">
                            <input type="text" placeholder="Min" />
                            <span>-</span>
                            <input type="text" placeholder="Max" />
                        </div>
                    </div>
                    <div className="filter-section">
                        <h3>Delivery Zone</h3>
                        <select>
                            <option>Gaborone</option>
                            <option>Phakalane</option>
                            <option>Tlokweng</option>
                            <option>Mogoditshane</option>
                        </select>
                    </div>

                    <div className="sidebar-banner-container">
                        <img src={sidebarBanner} alt="Agape Florist" className="sidebar-banner-img" />
                    </div>
                </aside>

                <section className="product-grid-container">
                    <div className="grid-header">
                        <h2>Our Collection</h2>
                        <span className="results-count">{flowerProducts.length} items found</span>
                    </div>
                    <div className="product-grid">
                        {flowerProducts.map(product => (
                            <div key={product.id} className="flower-card">
                                <div className="card-image">
                                    <img src={`/assets/flowers/${product.image}`} alt={product.name} />
                                    <button className="wishlist-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="M9.498 5.793c1.42-1.904 3.555-2.46 5.519-1.925c2.12.577 3.984 2.398 4.603 4.934q.048.195.083.39a4.45 4.45 0 0 0-2.774-.07c-1.287-.952-2.881-1.112-4.298-.59c-1.775.655-3.161 2.316-3.482 4.406c-.41 2.676 1.22 5.08 3.525 7.124l.388.336c-.313.022-.631-.027-.935-.092a10 10 0 0 1-.466-.112l-.537-.15C6.35 18.701 3.154 16.6 2.237 13.46c-.732-2.506-.028-5.015 1.52-6.575c1.434-1.445 3.56-2.031 5.741-1.092m1.628 7.448c.428-2.792 3.657-4.168 5.315-1.772a.104.104 0 0 0 .144.025c2.377-1.684 4.94.713 4.387 3.483q-.48 2.41-4.47 4l-.435.17l-.263.108c-.227.089-.467.16-.684.122c-.216-.038-.417-.188-.6-.348l-.31-.28q-3.47-2.986-3.084-5.508" /></g></svg>
                                    </button>
                                </div>
                                <div className="card-info">
                                    <h3>{product.name}</h3>
                                    <div className="color-dots">
                                        <span className="dot red"></span>
                                        <span className="dot pink"></span>
                                        <span className="dot white"></span>
                                    </div>
                                    <p className="price">P {product.price}.00</p>
                                    <div className="action-buttons-grid">
                                        <button
                                            className={`add-to-cart-btn ${cart.some(item => item.id === product.id) ? 'added' : ''}`}
                                            onClick={() => toggleCart(product)}
                                            title={cart.some(item => item.id === product.id) ? "Remove from cart" : "Add to cart"}
                                        >
                                            {cart.some(item => item.id === product.id) ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M10 2.25a1.75 1.75 0 0 0-1.582 1c-.684.006-1.216.037-1.692.223A3.25 3.25 0 0 0 5.3 4.563c-.367.493-.54 1.127-.776 1.998l-.047.17l-.513 2.964q-.277.191-.486.459c-.901 1.153-.472 2.87.386 6.301c.545 2.183.818 3.274 1.632 3.91C6.31 21 7.435 21 9.685 21h4.63c2.25 0 3.375 0 4.189-.635c.814-.636 1.086-1.727 1.632-3.91c.858-3.432 1.287-5.147.386-6.301a2.2 2.2 0 0 0-.487-.46l-.513-2.962l-.046-.17c-.237-.872-.41-1.506-.776-2a3.25 3.25 0 0 0-1.426-1.089c-.476-.186-1.009-.217-1.692-.222A1.75 1.75 0 0 0 14 2.25zm8.418 6.896l-.362-2.088c-.283-1.04-.386-1.367-.56-1.601a1.75 1.75 0 0 0-.768-.587c-.22-.086-.486-.111-1.148-.118A1.75 1.75 0 0 1 14 5.75h-4a1.75 1.75 0 0 1-1.58-.998c-.663.007-.928.032-1.148.118a1.75 1.75 0 0 0-.768.587c-.174.234-.277.56-.56 1.6l-.362 2.089C6.58 9 7.91 9 9.685 9h4.63c1.775 0 3.105 0 4.103.146M8 12.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75m8.75.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zM12 12.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4a.75.75 0 0 1 .75-.75" clip-rule="evenodd" /></svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M14.665 2.33a.75.75 0 0 1 1.006.335l2.201 4.402c1.353.104 2.202.37 2.75 1.047c.9 1.114.541 2.79-.177 6.143l-.429 2c-.487 2.273-.73 3.409-1.555 4.076S16.474 21 14.15 21h-4.3c-2.324 0-3.486 0-4.31-.667c-.826-.667-1.07-1.803-1.556-4.076l-.429-2c-.718-3.353-1.078-5.029-.177-6.143c.548-.678 1.397-.943 2.75-1.047l2.201-4.402a.75.75 0 0 1 1.342.67l-1.835 3.67Q8.559 7 9.422 7h5.156q.863-.001 1.586.005l-1.835-3.67a.75.75 0 0 1 .336-1.006M7.25 12a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75M10 14.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z" clip-rule="evenodd" /></svg>
                                            )}
                                        </button>
                                        <button className="order-btn" onClick={() => handleOrder(product.name)}>Order via WhatsApp</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pagination">
                        <button disabled>Prev</button>
                        <span className="page-nums">
                            <button className="active">1</button>
                            <button>2</button>
                            <button>3</button>
                            <span>...</span>
                            <button>10</button>
                        </span>
                        <button>Next</button>
                    </div>
                </section>
            </main>

            {/* Added to Cart Notification Modal */}
            {justAdded && (
                <div className="cart-notification-overlay">
                    <div className="cart-notification-modal">
                        <div className="success-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.45-2.45l-1.4 1.4zm1.4 5.4q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22" /></svg>
                        </div>
                        <div className="notification-content">
                            <h4>Added to Cart!</h4>
                            <p><strong>{justAdded}</strong> has been added. checkout at the top icon anytime.</p>
                        </div>
                        <button className="close-notification" onClick={() => setJustAdded(null)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12" /></svg>
                        </button>
                    </div>
                </div>
            )}

            {/* Checkout Sidebar Overlay */}
            <div className={`checkout-sidebar-overlay ${isCheckoutOpen ? 'active' : ''}`} onClick={() => setIsCheckoutOpen(false)}>
                <div className={`checkout-sidebar ${isCheckoutOpen ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
                    <div className="checkout-header">
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <h2 style={{ marginBottom: '4px' }}>Your Cart</h2>
                            <p style={{ fontSize: '0.8rem', color: '#666', fontWeight: 'normal' }}>Please add your information and complete the checkout.</p>
                        </div>
                        <button className="close-checkout" onClick={() => setIsCheckoutOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 6L6 18M6 6l12 12" /></svg>
                        </button>
                    </div>

                    <div className="checkout-content">
                        {showSuccess ? (
                            <div className="checkout-success-view">
                                <div className="success-lottie-container">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path fill="#10b981" d="m10.6 16.6l7.05-7.05l-1.4-1.4l-5.65 5.65l-2.45-2.45l-1.4 1.4zm1.4 5.4q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22" /></svg>
                                </div>
                                <h3>Thank You!</h3>
                                <p>Your order for <strong>{checkoutForm.fullName}</strong> has been received and saved to our system. Our team will contact you shortly regarding delivery.</p>
                                <button className="place-order-btn" onClick={() => { setIsCheckoutOpen(false); setShowSuccess(false); }}>Close</button>
                            </div>
                        ) : (
                            <>
                                <div className="cart-items-summary">
                                    {cart.length === 0 ? (
                                        <div className="empty-cart-view">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 512 512" style={{ color: '#A31D1D', marginBottom: '1.5rem', opacity: 0.8 }}><path fill="currentColor" d="M267.375 14.688c-17.09 6.94-30.576 17.288-38.75 29.593l-14.813-27.593c-9.017 49.344-12.52 95.085 32 109.563c-10.734 36.94-17.187 73.9-20.687 110.813l-20.563-38.344c-2.848-14.713-9.618-30.698-17.343-47l-17.376 74.124c-7.214-22.468-16.496-44.677-28.47-66.47c24.46-43.217 16.134-70.568-31.093-79.28c-.515 3.04-.56 9.344-.56 9.344l-19.876-8.75L87.5 100.53l-9.344-4.655c-5.433 42.254-.12 74.946 46.625 72.094a342 342 0 0 1 10.314 20.28L29.22 156.312c31.263 45.247 64.173 82.76 112.53 47.094c10.985 26.656 18.485 53.944 23.75 81.72l-64.78-40.188c12.872 36.068 28.203 67.286 66.936 52.437c1.237 7.446 2.306 14.926 3.28 22.438h18.876c-2.757-21.95-6.533-43.82-11.906-65.5c8.208-4.095 14.35-8.853 18.75-14.188c3.693 11.197 11.61 19.643 26.438 23.594c-1.097 18.71-1.506 37.414-1.438 56.092h18.688c-.014-4.07-.003-8.12.03-12.187c41.888-6.813 39.48-42.478 32.407-81.188l-31.967 59.625c.765-23.7 2.492-47.326 5.593-70.906c52.515 5.043 61.144-38.783 65.125-87.78l-61.81 65.843c3.47-20.563 8.06-41.09 14-61.564c37.544 4.596 76.884-35.765 75.28-70l-12.438 7.72c-1.053-11.96-6.674-25.51-17.125-40.69c-7.535 5.354-14.003 12.573-19.843 20.44L285.5 31.03l-11.688 14.595c-.32-10.47-2.17-20.77-6.437-30.938zm182.22 99.25c-4.994.008-10.98.86-18.25 2.906c-13.336 3.754-27.52 12.25-22.376 37.625c-24.488 13.127-45.408 31.122-62.25 53.155h-.19c.03.045.067.08.095.125c-.8 1.05-1.593 2.09-2.375 3.156l23.063-76.344c-45.938 31.743-83.94 65.165-45.438 114.75c-9.69 21.296-16.536 44.94-20.313 70.5h38.032c24.53-7.376 29.6-36.436 32.187-68.25l-48.155 51.282c6.766-30.55 18.424-57.235 34.406-79.47c36.727 42.145 77.18 14.898 118.033-19.81l-104.594 3.28c13.094-14.284 28.35-26.198 45.56-35.5c11.388 14.74 28.402 14.172 40.595 7.812c25.338-13.216 17.442-27.84 38.28-45.906c-20.892 5.264-19.352-19.358-46.31-19.313zM152.936 338.5l26.032 154.594h143.593L348.969 338.5z" /></svg>
                                            <p className="empty-cart-msg">Your cart is empty. Add some flowers to get started!</p>
                                        </div>
                                    ) : (
                                        flowerProducts.filter(p => cart.some(item => item.id === p.id)).map(product => {
                                            const cartItem = cart.find(item => item.id === product.id);
                                            return (
                                                <div key={product.id} className="checkout-item">
                                                    <div className="item-img-mini">
                                                        <img src={`/assets/flowers/${product.image}`} alt={product.name} />
                                                    </div>
                                                    <div className="item-details-mini">
                                                        <h4>{product.name}</h4>
                                                        <p>P {product.price}.00</p>
                                                        <div className="quantity-controls" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '5px' }}>
                                                            <button type="button" onClick={() => updateQuantity(product.id, -1)} className="qty-btn" style={{ padding: '2px 8px', border: '1px solid #ddd', background: '#fff', borderRadius: '4px', cursor: 'pointer' }}>-</button>
                                                            <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{cartItem?.quantity}</span>
                                                            <button type="button" onClick={() => updateQuantity(product.id, 1)} className="qty-btn" style={{ padding: '2px 8px', border: '1px solid #ddd', background: '#fff', borderRadius: '4px', cursor: 'pointer' }}>+</button>
                                                        </div>
                                                    </div>
                                                    <button className="remove-item" onClick={() => toggleCart(product)}>Remove</button>
                                                </div>
                                            );
                                        })
                                    )}
                                </div>

                                {cart.length > 0 && (
                                    <form className="checkout-form" onSubmit={handleCheckoutSubmit}>
                                        <h3>Delivery Details</h3>
                                        <div className="form-group">
                                            <label>Full Name</label>
                                            <input
                                                type="text"
                                                required
                                                value={checkoutForm.fullName}
                                                onChange={(e) => setCheckoutForm({ ...checkoutForm, fullName: e.target.value })}
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Phone Number</label>
                                            <input
                                                type="tel"
                                                required
                                                value={checkoutForm.phone}
                                                onChange={(e) => setCheckoutForm({ ...checkoutForm, phone: e.target.value })}
                                                placeholder="+267 ..."
                                            />
                                        </div>
                                        <div className="form-group-row">
                                            <div className="form-group">
                                                <label>Customer Type</label>
                                                <select
                                                    value={checkoutForm.customerType}
                                                    onChange={(e) => setCheckoutForm({ ...checkoutForm, customerType: e.target.value })}
                                                >
                                                    <option>Individual</option>
                                                    <option>Company</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>Delivery Date</label>
                                                <input
                                                    type="date"
                                                    required
                                                    value={checkoutForm.deliveryDate}
                                                    onChange={(e) => setCheckoutForm({ ...checkoutForm, deliveryDate: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Delivery Location</label>
                                            <input
                                                type="text"
                                                required
                                                value={checkoutForm.location}
                                                onChange={(e) => setCheckoutForm({ ...checkoutForm, location: e.target.value })}
                                                placeholder="Gaborone, Phakalane, etc."
                                            />
                                        </div>
                                        <div className="form-consent">
                                            <input
                                                type="checkbox"
                                                id="order-consent"
                                                required
                                                checked={checkoutForm.consent}
                                                onChange={(e) => setCheckoutForm({ ...checkoutForm, consent: e.target.checked })}
                                            />
                                            <label htmlFor="order-consent">I consent to Agape Florist using my information to contact me for delivery or future florist services.</label>
                                        </div>

                                        <div className="checkout-footer">
                                            <div className="total-row">
                                                <span>Total</span>
                                                <span>P {flowerProducts.filter(p => cart.some(item => item.id === p.id)).reduce((sum, p) => {
                                                    const qty = cart.find(item => item.id === p.id)?.quantity || 1;
                                                    return sum + (p.price * qty);
                                                }, 0)}.00</span>
                                            </div>
                                            <button type="submit" className="place-order-btn" disabled={isSubmitting}>
                                                {isSubmitting ? 'Processing...' : 'Place Order Now'}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Quote Popup Overlay */}
            {showQuotePopup && (
                <div className="popup-overlay" onClick={closeQuotePopup}>
                    <div className="waitlist-popup quote-detailed-popup" onClick={(e) => e.stopPropagation()}>
                        <div className="popup-content detailed-quote-content">
                            <div className="quote-form-header">
                                <img src={brandLogoLarge} alt="Logo" className="quote-logo-mini" />
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', position: 'relative' }}>
                                    <h2>Request a Corporate or Individual Quote</h2>
                                    <button className="close-popup-inline" onClick={closeQuotePopup} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#A31D1D', padding: '5px', display: 'flex' }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M3 16.74L7.76 12L3 7.26L7.26 3L12 7.76L16.74 3L21 7.26L16.24 12L21 16.74L16.74 21L12 16.24L7.26 21zm9-3.33l4.74 4.75l1.42-1.42L13.41 12l4.75-4.74l-1.42-1.42L12 10.59L7.26 5.84L5.84 7.26L10.59 12l-4.75 4.74l1.42 1.42z" /></svg>
                                    </button>
                                </div>
                                <p className="welcome-msg">Welcome to <strong>Agape Florist & Decor</strong>. We are dedicated to providing excellence. Tell us more about the service you need, and we'll help you create something truly special. You can talk to us directly about your requirements below.</p>
                            </div>

                            {quoteStep === 1 ? (
                                <form className="detailed-quote-form" onSubmit={handleQuoteSubmit}>
                                    <div className="quote-grid-2x2">
                                        <div className="form-group">
                                            <label>Full Name</label>
                                            <input type="text" placeholder="John Doe" required value={quoteName} onChange={(e) => setQuoteName(e.target.value)} className="popup-input" />
                                        </div>
                                        <div className="form-group">
                                            <label>Email Address</label>
                                            <input type="email" placeholder="john@example.com" required value={quoteEmail} onChange={(e) => setQuoteEmail(e.target.value)} className="popup-input" />
                                        </div>
                                        <div className="form-group">
                                            <label>Service Required</label>
                                            <select value={quoteService} onChange={(e) => setQuoteService(e.target.value)} className="popup-input">
                                                <option>Wedding Arrangements</option>
                                                <option>Funeral Floral Decor</option>
                                                <option>Corporate Office Blooms</option>
                                                <option>Special Event Decor</option>
                                                <option>Gift Bouquet Sets</option>
                                                <option>Decor Hire Services</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Customer Type</label>
                                            <select value={quoteType} onChange={(e) => setQuoteType(e.target.value)} className="popup-input">
                                                <option>Individual</option>
                                                <option>Company / Organization</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group full-width" style={{ marginTop: '1.2rem' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                                            <label style={{ margin: 0, fontWeight: '600', fontSize: '1rem' }}>Talk to us: Inquiry details</label>
                                            <button type="submit" className="place-order-btn" style={{ maxWidth: '200px', width: 'auto', padding: '0.6rem 1.2rem', height: 'auto', background: '#A31D1D', fontSize: '0.85rem', margin: 0 }}>Send Quote Request</button>
                                        </div>
                                        <textarea
                                            placeholder="Please describe any specific requirements or questions you have..."
                                            value={quoteMessage}
                                            onChange={(e) => setQuoteMessage(e.target.value)}
                                            className="popup-input"
                                            style={{ borderRadius: '15px', minHeight: '120px', resize: 'vertical', fontSize: '0.95rem' }}
                                        />
                                    </div>
                                </form>
                            ) : quoteStep === 2 ? (
                                <div className="consent-step">
                                    <h3>Almost Done</h3>
                                    <p>Your inquiry details have been captured. We value your privacy and only use your information to provide your requested quote.</p>
                                    <div className="consent-container-detailed">
                                        <input type="checkbox" id="quote-consent" checked={quoteAgreed} onChange={(e) => setQuoteAgreed(e.target.checked)} />
                                        <label htmlFor="quote-consent">I agree to be contacted by Agape regarding this quote and future service updates.</label>
                                    </div>
                                    <div className="form-actions-quote" style={{ marginTop: '2rem' }}>
                                        <button className="place-order-btn" onClick={handleFinalQuoteConfirm} disabled={!quoteAgreed || isSubmitting} style={{ maxWidth: '300px', width: '100%', height: '50px', background: quoteAgreed && !isSubmitting ? '#A31D1D' : '#ccc', fontSize: '1.1rem' }}>
                                            {isSubmitting ? "Sending Inquiry..." : "Submit Quote Request"}
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="success-step-quote">
                                    <div className="success-icon-large">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path fill="#10b981" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                                    </div>
                                    <h2>Inquiry Received</h2>
                                    <p>Thank you, <strong>{quoteName}</strong>. Your detailed request has been logged. Our professional team will review your requirements and provide a quote via <strong>{quoteEmail}</strong> shortly.</p>
                                    <button className="place-order-btn" onClick={closeQuotePopup} style={{ maxWidth: '200px', background: '#A31D1D' }}>Return to Shop</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* WhatsApp Contact Warning Modal */}
            {whatsappProduct && (
                <div className="whatsapp-warning-overlay" onClick={() => setWhatsappProduct(null)}>
                    <div className="whatsapp-warning-card" onClick={(e) => e.stopPropagation()}>
                        <div className="warning-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 1.25c5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75c-1.86 0-3.61-.473-5.137-1.305l-4.74.795a.75.75 0 0 1-.865-.852l.8-5.29A10.7 10.7 0 0 1 1.25 12C1.25 6.063 6.063 1.25 12 1.25M7.943 6.7c-.735 0-1.344.62-1.23 1.386c.216 1.436.854 4.082 2.752 5.994c1.984 1.999 4.823 2.854 6.36 3.191c.796.175 1.475-.455 1.475-1.232v-1.824a.3.3 0 0 0-.192-.28l-1.96-.753a.3.3 0 0 0-.166-.014l-1.977.386c-1.275-.66-2.047-1.4-2.51-2.515l.372-2.015a.3.3 0 0 0-.014-.16l-.735-1.969a.3.3 0 0 0-.28-.195z" clip-rule="evenodd" /></svg>
                        </div>
                        <h3>Direct Inquiry?</h3>
                        <p>You are about to contact <strong>Agape Florist</strong> directly via WhatsApp. This will take you away from our website.</p>

                        <div className="warning-advice">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path fill="currentColor" d="M1.093 11.892L6.84 1.391a.752.752 0 0 1 1.32 0l5.747 10.501a.75.75 0 0 1-.66 1.11H1.753a.75.75 0 0 1-.66-1.11M8.3 8l.403-2.418A.5.5 0 0 0 8.21 5H6.79a.5.5 0 0 0-.493.582L6.7 8zm.3 1.9a1.1 1.1 0 1 0-2.2 0a1.1 1.1 0 0 0 2.2 0" /></svg>
                            <span>Tip: Most users prefer to <strong>Add to Cart</strong> and checkout all items at once using the basket icon at the top!</span>
                        </div>

                        <div className="warning-actions">
                            <button className="secondary-action" onClick={() => setWhatsappProduct(null)}>Stay on Website</button>
                            <button className="primary-action" onClick={confirmWhatsAppOrder}>Contact Now</button>
                        </div>
                    </div>
                </div>
            )}

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

export default FlowersPage;
