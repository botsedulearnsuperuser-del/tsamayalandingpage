# Backup: Student & Adult NFC Smart Cards (Hero Section)

This document preserves the complete JSX code, CSS styling, and animation logic for the Student and Adult NFC Smart Cards that can flank the center phone mockup in the hero section.

---

## 1. JSX Structure

To add the cards back, place them flanking the center phone inside `.hero-showcase-container` or `.hero-image-container`:

```tsx
{/* Hero Interactive Showcase with Left Student NFC Card, Center Phone, Right Adult NFC Card */}
<div ref={heroImageRef} className="hero-showcase-container">
    {/* Left: Students NFC Transit Card (Slides In/Out from Left) */}
    <div className={`hero-nfc-card-slot hero-nfc-left ${heroVisible ? 'slide-in' : 'slide-out'}`}>
        <div className="nfc-card-badge-label">
            <span className="nfc-badge-dot student-dot"></span>
            🎓 Student NFC Pass
        </div>
        <div className="nfc-smart-card student-smart-card">
            {studentCardImg ? (
                <img src={studentCardImg} alt="Students NFC Transit Card" className="nfc-custom-img" />
            ) : (
                <div className="nfc-card-inner student-card-theme">
                    <div className="nfc-card-top">
                        <div className="nfc-brand-mini">
                            <span className="nfc-brand-icon">⚡</span> TSAMAYA
                        </div>
                        <div className="nfc-contactless-icon">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                <path d="M8.5 16.5a5 5 0 0 1 0-9M12 19a8.5 8.5 0 0 0 0-14M15.5 21.5a12 12 0 0 0 0-19" />
                            </svg>
                        </div>
                    </div>
                    <div className="nfc-chip-row">
                        <div className="emv-gold-chip">
                            <div className="emv-chip-lines"></div>
                        </div>
                        <span className="nfc-type-tag student-tag">STUDENT PASS</span>
                    </div>
                    <div className="nfc-card-bottom">
                        <div className="nfc-holder-info">
                            <span className="nfc-holder-label">SPECIAL FARE • 50% OFF</span>
                            <span className="nfc-holder-name">STUDENT TRANSIT PASS</span>
                        </div>
                        <div className="nfc-card-code">•••• 8821</div>
                    </div>
                </div>
            )}
        </div>
    </div>

    {/* Center Phone Mockup */}
    <div className={`hero-center-mockup ${heroVisible ? 'slide-in' : 'slide-out'}`}>
        <div className="hero-phone-wrapper">
            <img src={heroHandImg} alt="Tsamaya App & Transit Pass" className="hero-phone-img" />
            <div className="hero-hand-bottom-cover">
                <div className="hand-blend-fade"></div>
            </div>
        </div>
    </div>

    {/* Right: Adults NFC Transit Card (Slides In/Out from Right) */}
    <div className={`hero-nfc-card-slot hero-nfc-right ${heroVisible ? 'slide-in' : 'slide-out'}`}>
        <div className="nfc-card-badge-label">
            <span className="nfc-badge-dot adult-dot"></span>
            💳 Adults NFC Pass
        </div>
        <div className="nfc-smart-card adult-smart-card">
            {adultCardImg ? (
                <img src={adultCardImg} alt="Adults NFC Transit Card" className="nfc-custom-img" />
            ) : (
                <div className="nfc-card-inner adult-card-theme">
                    <div className="nfc-card-top">
                        <div className="nfc-brand-mini">
                            <span className="nfc-brand-icon">⚡</span> TSAMAYA
                        </div>
                        <div className="nfc-contactless-icon">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                                <path d="M8.5 16.5a5 5 0 0 1 0-9M12 19a8.5 8.5 0 0 0 0-14M15.5 21.5a12 12 0 0 0 0-19" />
                            </svg>
                        </div>
                    </div>
                    <div className="nfc-chip-row">
                        <div className="emv-gold-chip">
                            <div className="emv-chip-lines"></div>
                        </div>
                        <span className="nfc-type-tag adult-tag">COMMUTER PASS</span>
                    </div>
                    <div className="nfc-card-bottom">
                        <div className="nfc-holder-info">
                            <span className="nfc-holder-label">TAP & GO • BOTSWANA TRANSIT</span>
                            <span className="nfc-holder-name">ADULT COMMUTER PASS</span>
                        </div>
                        <div className="nfc-card-code">•••• 4209</div>
                    </div>
                </div>
            )}
        </div>
    </div>
</div>
```

---

## 2. CSS Styles & Keyframes

Add these styles to `LegaeLandingPage.css`:

```css
/* NFC Card Slots (Left & Right) */
.hero-nfc-card-slot {
    flex: 0 0 250px;
    max-width: 260px;
    z-index: 6;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    will-change: transform, opacity;
}

/* Left: Student Card Slide In / Out */
.hero-nfc-left {
    margin-right: -45px;
    transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s,
                transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s;
}

.hero-nfc-left.slide-in {
    opacity: 1;
    transform: translateX(0) translateY(0) rotate(-6deg);
    animation: floatLeftCard 4.5s ease-in-out infinite 0.9s;
}

.hero-nfc-left.slide-out {
    opacity: 0;
    transform: translateX(-140px) translateY(30px) rotate(-18deg);
}

/* Right: Adult Card Slide In / Out */
.hero-nfc-right {
    margin-left: -45px;
    transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s,
                transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s;
}

.hero-nfc-right.slide-in {
    opacity: 1;
    transform: translateX(0) translateY(0) rotate(6deg);
    animation: floatRightCard 4.5s ease-in-out infinite 0.9s;
}

.hero-nfc-right.slide-out {
    opacity: 0;
    transform: translateX(140px) translateY(30px) rotate(18deg);
}

@keyframes floatLeftCard {
    0%, 100% {
        transform: translateX(0) translateY(0) rotate(-6deg);
    }
    50% {
        transform: translateX(-3px) translateY(-10px) rotate(-4deg);
    }
}

@keyframes floatRightCard {
    0%, 100% {
        transform: translateX(0) translateY(0) rotate(6deg);
    }
    50% {
        transform: translateX(3px) translateY(-10px) rotate(8deg);
    }
}

/* NFC Badge Labels */
.nfc-card-badge-label {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    background: #FFFFFF;
    color: #0F172A;
    font-size: 0.78rem;
    font-weight: 700;
    padding: 0.35rem 0.85rem;
    border-radius: 50px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
    border: 1px solid rgba(0, 0, 0, 0.06);
    white-space: nowrap;
}

.nfc-badge-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
}

.student-dot {
    background-color: #12B5B0;
    box-shadow: 0 0 6px #12B5B0;
}

.adult-dot {
    background-color: #F59E0B;
    box-shadow: 0 0 6px #F59E0B;
}

/* NFC Smart Card Container */
.nfc-smart-card {
    width: 250px;
    height: 155px;
    border-radius: 16px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease;
    box-shadow: 0 20px 35px -8px rgba(15, 23, 42, 0.3),
                0 4px 10px rgba(0, 0, 0, 0.1);
}

.nfc-smart-card:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 28px 45px -8px rgba(18, 181, 176, 0.35);
}

.nfc-custom-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 16px;
}

.nfc-card-inner {
    width: 100%;
    height: 100%;
    padding: 1.1rem 1.15rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    position: relative;
    color: #FFFFFF;
}

.nfc-card-inner::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 60%);
    pointer-events: none;
    border-radius: 16px;
}

/* Student Card Theme */
.student-card-theme {
    background: linear-gradient(135deg, #0D9488 0%, #115E59 50%, #042F2E 100%);
    border: 1.5px solid rgba(45, 212, 191, 0.35);
}

/* Adult Card Theme */
.adult-card-theme {
    background: linear-gradient(135deg, #1E293B 0%, #0F172A 50%, #020617 100%);
    border: 1.5px solid rgba(245, 158, 11, 0.35);
}

.nfc-card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nfc-brand-mini {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.85rem;
    font-weight: 900;
    letter-spacing: 1.5px;
}

.nfc-brand-icon {
    color: #FACC15;
    font-size: 0.9rem;
}

.nfc-contactless-icon {
    opacity: 0.85;
    color: #FFFFFF;
}

.nfc-chip-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.2rem 0;
}

.emv-gold-chip {
    width: 34px;
    height: 25px;
    background: linear-gradient(135deg, #FDE047 0%, #CA8A04 100%);
    border-radius: 4px;
    border: 1px solid #EAB308;
    position: relative;
    overflow: hidden;
}

.emv-chip-lines {
    width: 100%;
    height: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    border-right: 1px solid rgba(0, 0, 0, 0.2);
    border-top: 1px solid rgba(0, 0, 0, 0.2);
    margin: 3px auto;
}

.nfc-type-tag {
    font-size: 0.65rem;
    font-weight: 800;
    letter-spacing: 1px;
    padding: 0.2rem 0.5rem;
    border-radius: 4px;
}

.student-tag {
    background: rgba(45, 212, 191, 0.2);
    color: #5EEAD4;
    border: 1px solid rgba(94, 234, 212, 0.3);
}

.adult-tag {
    background: rgba(245, 158, 11, 0.2);
    color: #FCD34D;
    border: 1px solid rgba(252, 211, 77, 0.3);
}

.nfc-card-bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.nfc-holder-info {
    display: flex;
    flex-direction: column;
}

.nfc-holder-label {
    font-size: 0.55rem;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    opacity: 0.7;
    margin-bottom: 2px;
}

.nfc-holder-name {
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.5px;
}

.nfc-card-code {
    font-family: monospace;
    font-size: 0.75rem;
    letter-spacing: 1.5px;
    opacity: 0.8;
}
```
