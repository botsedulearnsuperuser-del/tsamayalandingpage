import React from 'react';
import './TsamayaLandingPage.css';

// Import images
const logo = '/assets/Logo_20for_20Light_20Mode.png';
const heroImg = '/assets/Gemini_Generated_Image_56m5z356m5z356m5.png';
import stepsImg from '../../assets/tsamaya/Frame 9.png';

const TsamayaLandingPage: React.FC = () => {
  return (
    <div className="landing-container">
      {/* Header */}
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Tsamaya" className="logo-img" />
        </div>
        <nav className="nav-links">
          <a href="#" className="nav-link">What is Tsamaya</a>
          <a href="#" className="nav-link">How it will work</a>
          <button className="join-btn">Join Waiting List</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            The Smarter,<br />
            Safer Way to<br />
            Move Across<br />
            Botswana.
          </h1>
          <p className="hero-description">
            Cashless public transit for everyone. Pay for combis, buses, and taxis instantly using your Tsamaya NFC Transit Pass or Mobile App. Safe for students, seamless for parents, and reliable for drivers.
          </p>
          <button className="join-btn" style={{ padding: '0.8rem 2rem', fontSize: '0.9rem' }}>
            Get Your Transit Pass
          </button>
        </div>
        <div className="hero-mockups">
          <img src={heroImg} alt="App Mockup" className="mockup-full" />
        </div>
      </section>

      {/* How it Works Section */}
      <section className="how-it-works">
        <h2 className="section-title">How It Works</h2>

        <div className="step-labels">
          <div className="step-label">
            <span className="step-badge">01</span>
            <span className="step-info">Fund Your Wallet (Orange Money, SMEGA, MyZaka, Cards)</span>
          </div>
          <div className="step-label">
            <span className="step-badge">02</span>
            <span className="step-info">Tap Your Transit Pass or Scan QR to Pay</span>
          </div>
          <div className="step-label">
            <span className="step-badge">03</span>
            <span className="step-info">Travel Securely with Instant Confirmation</span>
          </div>
        </div>

        <div className="steps-container">
          <img src={stepsImg} alt="How it works steps" className="steps-full-img" />
        </div>
      </section>

      {/* Waiting List Section */}
      <section className="waiting-list-section">
        <div className="form-container">
          <h2 className="form-title">Join Waiting List</h2>
          <form className="waiting-form">
            <div className="form-group">
              <label>Leina</label>
              <input type="text" placeholder="Kwala leina fa" />
            </div>
            <div className="form-group">
              <label>Sefane</label>
              <input type="text" placeholder="Kwala sefane fa" />
            </div>
            <div className="form-group">
              <label>Bong</label>
              <select>
                <option>Tlhopha Bong</option>
              </select>
            </div>
            <div className="form-group">
              <label>Motse/Toropo</label>
              <select>
                <option>Tlhopha Motse Wa Gago</option>
              </select>
            </div>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your Email Address" />
            </div>
            <button type="submit" className="form-submit-btn">Join Waiting List</button>
          </form>
        </div>

        <div className="coming-soon">
          <h2 className="coming-soon-title">
            Coming<br />
            Soon in<br />
            Botswana
          </h2>
          <p className="coming-soon-text">
            Hang on tight ,we are launching our public beta test soon , join our waitlist and you will be the 1st to know when we are fully online.
          </p>
          <div className="countdown-container">
            <div className="countdown-item">
              <span className="countdown-value">03</span>
              <span className="countdown-label">MONTHS</span>
            </div>
            <span className="countdown-value">:</span>
            <div className="countdown-item">
              <span className="countdown-value">02</span>
              <span className="countdown-label">DAYS</span>
            </div>
            <span className="countdown-value">:</span>
            <div className="countdown-item">
              <span className="countdown-value">01</span>
              <span className="countdown-label">HOURS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <img src={logo} alt="Tsamaya" className="footer-logo" />
        <p className="copyright">@2026</p>
      </footer>
    </div>
  );
};

export default TsamayaLandingPage;
