import React, { useState } from 'react';
import { 
  MessageSquare, 
  ChevronDown, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  Star
} from 'lucide-react';
import SEO from '../SEO';
import './AuthPage.css';

const testimonials = [
  {
    id: 1,
    name: "Eliska Trebalska",
    role: "Mother",
    content: "With Realtioo we have been able move to another country in a 4 weeks. Incredible!",
    date: "8:35 PM - Jan 4, 2022",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Jurek Jalic",
    role: "Father",
    content: "First touch with Realtioo was great. Their patient with our feedback were everyone and you did it!",
    date: "9:20 PM - Jan 8, 2022",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  }
];

const AuthPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    phone: '',
    password: '',
    excludeFromEmails: false
  });

  const [passwordCriteria, setPasswordCriteria] = useState({
    lowercase: false,
    uppercase: false,
    number: false,
    special: false,
    minChars: false
  });

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const pwd = e.target.value;
    setFormData({ ...formData, password: pwd });
    
    setPasswordCriteria({
      lowercase: /[a-z]/.test(pwd),
      uppercase: /[A-Z]/.test(pwd),
      number: /[0-9]/.test(pwd),
      special: /[^A-Za-z0-9]/.test(pwd),
      minChars: pwd.length >= 8
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Getting started! Form submitted successfully (Simulation)');
  };

  return (
    <div className="auth-page-container">
      <SEO
        title="Sign Up or Sign In | Tsamaya Transit Account"
        description="Create or access your Tsamaya Transit account. Sign up for a cashless transit pass, manage your wallet, and pay for combis, buses, and taxis across Botswana."
        keywords="Tsamaya signup, Tsamaya sign in, Tsamaya account, transit account Botswana, cashless transit login, NFC transit pass account, Tsamaya register, Tsamaya login"
        url="/signup"
      />
      {/* Left Panel */}
      <div className="auth-left-panel">
        <div className="auth-bg-pattern"></div>
        <div className="auth-bg-bottom-pattern"></div>
        
        <div className="auth-logo-section">
          <div className="auth-logo">
            <MessageSquare size={20} />
            <span>Feedback</span>
          </div>
        </div>

        <div className="auth-hero-text">
          <h1>Welcome to Feedback Form SaaS App - Revolutionizing Client Feedback!</h1>
          <p>We understand the value of client feedback in shaping businesses for success.</p>
        </div>

        <div className="auth-testimonial-carousel">
          <div className="auth-testimonial-card">
            <div className="auth-testimonial-header">
              <img 
                src={testimonials[activeTestimonial].avatar} 
                alt={testimonials[activeTestimonial].name} 
                className="auth-testimonial-avatar"
              />
              <div className="auth-testimonial-info">
                <h4>{testimonials[activeTestimonial].name}</h4>
                <span>{testimonials[activeTestimonial].role}</span>
              </div>
            </div>
            <p className="auth-testimonial-content">
              "{testimonials[activeTestimonial].content}"
            </p>
            <div className="auth-testimonial-footer">
              <span>{testimonials[activeTestimonial].date}</span>
              <div className="auth-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" stroke="none" />
                ))}
              </div>
            </div>
          </div>
          
          <div className="auth-carousel-dots">
            {testimonials.map((_, index) => (
              <div 
                key={index} 
                className={`auth-dot ${index === activeTestimonial ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div className="auth-right-panel">
        <div className="auth-form-container">
          <div className="auth-form-header">
            <h2>Sign up with free trail</h2>
            <p>Empower your experience, sign up for a free account today</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="auth-form-group">
              <label className="auth-label">Business Name <span>*</span></label>
              <input 
                type="text" 
                className="auth-input" 
                placeholder="ex. email@domain.com"
                required
                value={formData.businessName}
                onChange={(e) => setFormData({...formData, businessName: e.target.value})}
              />
            </div>

            <div className="auth-form-group">
              <label className="auth-label">Work email <span>*</span></label>
              <input 
                type="email" 
                className="auth-input" 
                placeholder="ex. email@domain.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="auth-form-group">
              <label className="auth-label">Phone number <span>*</span> <span style={{color: '#005944', fontSize: '0.75rem', fontWeight: 500, cursor: 'pointer', marginLeft: '5px'}}>Why?</span></label>
              <div className="auth-phone-input-wrapper">
                <div className="auth-country-select">
                  <span>+234</span>
                  <ChevronDown size={14} />
                </div>
                <div className="auth-input-wrapper" style={{ flex: 1 }}>
                   <input 
                    type="tel" 
                    className="auth-input auth-phone-input" 
                    placeholder="Enter phone number"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                  <div className="auth-input-icon">
                    <CheckCircle2 size={18} color="#10b981" />
                  </div>
                </div>
              </div>
            </div>

            <div className="auth-form-group">
              <label className="auth-label">Password <span>*</span></label>
              <div className="auth-input-wrapper">
                <input 
                  type={showPassword ? "text" : "password"} 
                  className="auth-input" 
                  placeholder="Enter password"
                  required
                  value={formData.password}
                  onChange={handlePasswordChange}
                />
                <div className="auth-input-icon" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </div>
              </div>

              <div className="auth-password-strength">
                <div className={`strength-item ${passwordCriteria.lowercase ? 'valid' : ''}`}>
                  <CheckCircle2 size={14} /> One lowercase character
                </div>
                <div className={`strength-item ${passwordCriteria.number ? 'valid' : ''}`}>
                  <CheckCircle2 size={14} /> One number
                </div>
                <div className={`strength-item ${passwordCriteria.uppercase ? 'valid' : ''}`}>
                  <CheckCircle2 size={14} /> One uppercase character
                </div>
                <div className={`strength-item ${passwordCriteria.special ? 'valid' : ''}`}>
                  <CheckCircle2 size={14} /> One special character
                </div>
                <div className={`strength-item ${passwordCriteria.minChars ? 'valid' : ''}`}>
                  <CheckCircle2 size={14} /> 8 characters minimum
                </div>
              </div>
            </div>

            <div className="auth-checkbox-group">
              <input 
                type="checkbox" 
                id="exclude" 
                className="auth-checkbox"
                checked={formData.excludeFromEmails}
                onChange={(e) => setFormData({...formData, excludeFromEmails: e.target.checked})}
              />
              <label htmlFor="exclude" className="auth-checkbox-label">
                Please exclude me from any future emails regarding Feedback App and related Intuit product and feature updates, marketing best practices, and promotions.
              </label>
            </div>

            <p className="auth-terms-text">
              By registering for an account, you are consenting to our <a href="#">Terms of Service</a> and confirming that you have reviewed and accepted the <a href="#">Global Privacy Statement</a>.
            </p>

            <button type="submit" className="auth-submit-btn">
              Get started free
            </button>

            <div className="auth-footer-links">
              Already have an account? <a href="#">Login</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
