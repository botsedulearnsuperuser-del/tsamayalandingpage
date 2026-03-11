import React, { useEffect } from 'react';
import './AccountConfirmed.css';

const AccountConfirmed: React.FC = () => {
    const brandLogo = '/assets/legaemobile/LOGOS WORKFILE (48) 1.png';

    useEffect(() => {
        // You could add analytics or other side-effects here
        document.title = "Account Confirmed | Legae";
    }, []);

    return (
        <div className="account-confirmed-container">
            <div className="background-gradient"></div>
            
            <nav className="minimal-nav">
                 <div className="logo-minimal">
                    <img 
                        src={brandLogo} 
                        alt="Legae Logo" 
                        style={{ 
                            height: '2rem', 
                            width: 'auto', 
                            objectFit: 'contain',
                            filter: 'brightness(0) saturate(100%) invert(18%) sepia(85%) saturate(3065%) hue-rotate(345deg) brightness(83%) contrast(92%)' 
                        }} 
                    />
                </div>
            </nav>

            <main className="confirmation-content">
                <div className="confirmation-card">
                    <div className="icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24">
                            <rect width="24" height="24" fill="none"/>
                            <g fill="none" stroke="var(--legae-red)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2"/>
                                <path d="M19 13.488V12h2l-9-9l-9 9h2v7a2 2 0 0 0 2 2h4.525M15 19l2 2l4-4"/>
                            </g>
                        </svg>
                    </div>
                    
                    <h1 className="success-heading">Account Confirmed!</h1>
                    
                    <div className="success-message">
                        <p>Thank you for verifying your email address.</p>
                        <p>Your Legae account has been successfully confirmed and is ready to use.</p>
                    </div>
                    
                    <div className="action-section">
                        <p className="instruction-text">
                            You can now close this browser window and go back to the mobile app to sign in securely.
                        </p>
                    </div>
                </div>
            </main>

            <div className="decorative-blob blob-1"></div>
            <div className="decorative-blob blob-2"></div>
        </div>
    );
};

export default AccountConfirmed;
