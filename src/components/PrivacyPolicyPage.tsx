import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from './SEO';
import './PrivacyPolicyPage.css';

const PrivacyPolicyPage: React.FC = () => {
    const navigate = useNavigate();
    const brandLogo = '/assets/Logo_20for_20Light_20Mode.png';
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="privacy-page">
            <SEO
                title="Tsamaya Privacy Policy | Data Protection & Transit Payment Privacy Botswana"
                description="Tsamaya's comprehensive Privacy Policy. Learn how we collect, use, and protect your personal and financial data for cashless transit payments in compliance with Botswana's Data Protection Act 2024."
                keywords="Tsamaya privacy policy, data protection Botswana, transit payment privacy, NFC card privacy, cashless transit data, Botswana Data Protection Act 2024, privacy policy Tsamaya, personal data Botswana, financial data protection, transit wallet privacy, student data privacy, mobile app privacy, data controller Botswana, IDPC Botswana, data subject rights, payment card privacy, Tsamaya data security"
                url="/privacy"
            />
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

            {/* Privacy Policy Content */}
            <main className="privacy-main">
                <div className="privacy-container">
                    <h1>Privacy Policy</h1>
                    <p className="privacy-last-updated">Last Updated: January 2025</p>
                    <p className="privacy-intro">
                        Welcome to Tsamaya. We respect your privacy and are committed to protecting your personal data and transit wallet information. This Privacy Policy explains how DevGen Technologies (Pty) Ltd ("we," "us," or "our") collects, uses, discloses, and safeguards your information when you use our cashless transit payment platform, mobile application, and related services (collectively, the "Services").
                    </p>
                    <p className="privacy-intro">
                        This policy is formulated in accordance with the <strong>Data Protection Act 2024 (Act No. 18 of 2024)</strong> of Botswana, which came into effect on 14 January 2025, and all subsidiary legislation made thereunder.
                    </p>

                    {/* Section 1 */}
                    <section className="privacy-section">
                        <h2>1. Data Controller Information</h2>
                        <p>The data controller responsible for your personal data is:</p>
                        <div className="privacy-contact-box">
                            <p><strong>DevGen Technologies (Pty) Ltd</strong></p>
                            <p>Trading as: Tsamaya</p>
                            <p>Registered in the Republic of Botswana</p>
                            <p>Email: support@tsamaya.co.bw</p>
                            <p>Website: tsamaya.co.bw</p>
                        </div>
                        <p>If you have any questions about this Privacy Policy or our data practices, please contact our Data Protection Officer at the email address above.</p>
                    </section>

                    {/* Section 2 */}
                    <section className="privacy-section">
                        <h2>2. Definitions</h2>
                        <p>As defined under the Data Protection Act 2024 of Botswana:</p>
                        <ul>
                            <li><strong>Personal Data</strong> — Any information relating to an identified or identifiable natural person ("data subject"), including but not limited to names, identification numbers, location data, online identifiers, and factors specific to the physical, physiological, genetic, mental, economic, cultural, or social identity of that person.</li>
                            <li><strong>Data Controller</strong> — The natural or legal person, public authority, agency, or other body which, alone or jointly with others, determines the purposes and means of the processing of personal data.</li>
                            <li><strong>Data Processor</strong> — A natural or legal person, public authority, agency, or other body which processes personal data on behalf of the data controller.</li>
                            <li><strong>Data Subject</strong> — An identified or identifiable natural person whose personal data is processed.</li>
                            <li><strong>Processing</strong> — Any operation or set of operations performed on personal data, including collection, recording, organisation, structuring, storage, adaptation, retrieval, consultation, use, disclosure, dissemination, alignment, combination, restriction, erasure, or destruction.</li>
                            <li><strong>Consent</strong> — Any freely given, specific, informed, and unambiguous indication of the data subject's wishes by which he or she, by a statement or clear affirmative action, signifies agreement to the processing of personal data relating to him or her.</li>
                        </ul>
                    </section>

                    {/* Section 3 */}
                    <section className="privacy-section">
                        <h2>3. Information We Collect</h2>
                        <p>We collect and process the following categories of personal data:</p>
                        
                        <h3>3.1 Identity and Account Data</h3>
                        <ul>
                            <li>Full name</li>
                            <li>Email address</li>
                            <li>Mobile phone number</li>
                            <li>Date of birth (for student and senior citizen pass eligibility)</li>
                            <li>Profile photograph (optional, for digital ID verification)</li>
                            <li>Student identification number (for student transit passes)</li>
                        </ul>

                        <h3>3.2 Financial and Transaction Data</h3>
                        <ul>
                            <li>Transit wallet balance</li>
                            <li>Transaction history (top-ups, fare payments, refunds)</li>
                            <li>Payment method details (processed securely through our payment partners; we do not store full card numbers)</li>
                            <li>Top-up amounts and dates</li>
                            <li>Fare amounts and payment timestamps</li>
                        </ul>

                        <h3>3.3 Transit and Usage Data</h3>
                        <ul>
                            <li>Boarding and alighting locations</li>
                            <li>Route information</li>
                            <li>Travel dates and times</li>
                            <li>Vehicle and driver identification (for service quality and safety)</li>
                            <li>Trip frequency and commute patterns</li>
                        </ul>

                        <h3>3.4 Device and Technical Data</h3>
                        <ul>
                            <li>Device type and operating system</li>
                            <li>Mobile device identifiers</li>
                            <li>IP address</li>
                            <li>Browser type and version</li>
                            <li>App version and crash logs</li>
                        </ul>

                        <h3>3.5 NFC Transit Pass Data</h3>
                        <ul>
                            <li>Pass unique identifier</li>
                            <li>Pass activation and deactivation status</li>
                            <li>Tap-to-pay transaction records</li>
                            <li>Card linkage to user account</li>
                        </ul>
                    </section>

                    {/* Section 4 */}
                    <section className="privacy-section">
                        <h2>4. Lawful Basis for Processing</h2>
                        <p>In accordance with Sections 19 through 24 of the Data Protection Act 2024, we process your personal data only when we have a lawful basis to do so:</p>

                        <h3>4.1 Consent (Section 21)</h3>
                        <p>We process your data based on your consent when you:</p>
                        <ul>
                            <li>Register for a Tsamaya account</li>
                            <li>Subscribe to marketing communications</li>
                            <li>Agree to the use of cookies and tracking technologies</li>
                            <li>Provide optional profile information</li>
                        </ul>
                        <p>You may withdraw your consent at any time by contacting us or adjusting your preferences in the app settings. Withdrawal of consent does not affect the lawfulness of processing based on consent before its withdrawal.</p>

                        <h3>4.2 Performance of a Contract (Section 22)</h3>
                        <p>We process your data to fulfil our contractual obligations to you, including:</p>
                        <ul>
                            <li>Providing cashless transit payment services</li>
                            <li>Processing fare payments and wallet top-ups</li>
                            <li>Maintaining your transit account</li>
                            <li>Providing customer support</li>
                            <li>Sending service-related notifications (e.g., top-up confirmations, trip receipts)</li>
                        </ul>

                        <h3>4.3 Legitimate Interest (Section 23)</h3>
                        <p>We may process your data based on our legitimate interest in:</p>
                        <ul>
                            <li>Preventing fraud and ensuring payment security</li>
                            <li>Improving our services and user experience</li>
                            <li>Ensuring the safety of passengers and drivers</li>
                            <li>Complying with legal obligations</li>
                            <li>Enforcing our terms of service</li>
                        </ul>

                        <h3>4.4 Legal Obligation (Section 24)</h3>
                        <p>We may process your data to comply with legal obligations under Botswana law, including tax regulations, financial reporting requirements, and regulatory compliance.</p>
                    </section>

                    {/* Section 5 */}
                    <section className="privacy-section">
                        <h2>5. How We Use Your Information</h2>
                        <p>We use your personal data for the following purposes:</p>
                        <ul>
                            <li><strong>Service Delivery:</strong> To operate, maintain, and provide the Tsamaya cashless transit platform, including processing payments, managing your wallet, and facilitating tap-to-pay transactions.</li>
                            <li><strong>Account Management:</strong> To create and manage your account, verify your identity, and provide customer support.</li>
                            <li><strong>Payment Processing:</strong> To process top-ups via Orange Money, BTC SMEGA, Mascom MyZaka, and Visa/Mastercard debit or credit cards.</li>
                            <li><strong>Transit Operations:</strong> To enable drivers to accept fares, track boarding, and generate trip receipts.</li>
                            <li><strong>Safety and Security:</strong> To detect and prevent fraud, protect against unauthorized transactions, and ensure passenger safety through trip logging.</li>
                            <li><strong>Communication:</strong> To send you service updates, transaction confirmations, receipts, and (with your consent) marketing communications.</li>
                            <li><strong>Analytics and Improvement:</strong> To analyze usage patterns, improve our services, develop new features, and optimize the user experience.</li>
                            <li><strong>Legal Compliance:</strong> To comply with applicable laws, regulations, and regulatory requirements in Botswana.</li>
                            <li><strong>Family Card Management:</strong> To allow primary account holders to manage transit cards for family members, including students and seniors.</li>
                        </ul>
                    </section>

                    {/* Section 6 */}
                    <section className="privacy-section">
                        <h2>6. Data Sharing and Disclosure</h2>
                        <p>We may share your personal data with the following categories of recipients:</p>

                        <h3>6.1 Payment Service Providers</h3>
                        <p>We share transaction data with payment processors including Orange Money, BTC SMEGA, Mascom MyZaka, and card payment networks (Visa/Mastercard) solely for the purpose of processing your payments.</p>

                        <h3>6.2 Transit Operators and Drivers</h3>
                        <p>Drivers receive limited information (boarding confirmation, fare amount) necessary to accept your payment and provide transit services.</p>

                        <h3>6.3 Cloud Infrastructure Providers</h3>
                        <p>Your data is stored on secure cloud infrastructure. We ensure that our hosting providers maintain adequate data protection standards in compliance with the Data Protection Act 2024.</p>

                        <h3>6.4 Regulatory Authorities</h3>
                        <p>We may disclose your data to the Information and Data Protection Commission (IDPC), law enforcement, or other regulatory bodies when required by law or to protect our legal rights.</p>

                        <h3>6.5 Business Transfers</h3>
                        <p>In the event of a merger, acquisition, or sale of assets, your personal data may be transferred. We will notify you of any such change and any choices you may have regarding your data.</p>

                        <p><strong>We do not sell your personal data to third parties.</strong></p>
                    </section>

                    {/* Section 7 */}
                    <section className="privacy-section">
                        <h2>7. Data Security</h2>
                        <p>In accordance with Section 65 of the Data Protection Act 2024, we implement appropriate technical and organizational measures to protect your personal data against unauthorized or unlawful processing, accidental loss, destruction, or damage. These measures include:</p>
                        <ul>
                            <li><strong>Encryption:</strong> All data is encrypted in transit (TLS 1.3) and at rest (AES-256).</li>
                            <li><strong>Cloud-First Architecture:</strong> Money never lives on physical NFC cards. Funds are securely stored in encrypted cloud wallets, not on the transit pass itself.</li>
                            <li><strong>Access Controls:</strong> Strict role-based access controls ensure only authorized personnel can access personal data.</li>
                            <li><strong>Tokenization:</strong> Payment credentials are tokenized and never stored in raw form.</li>
                            <li><strong>One-Tap Kill Switch:</strong> If you lose your transit card, you can instantly deactivate it via the app or web portal to prevent unauthorized use.</li>
                            <li><strong>Regular Security Audits:</strong> We conduct regular security assessments and penetration testing.</li>
                            <li><strong>72-Hour Breach Notification:</strong> In the event of a personal data breach, we will notify the Information and Data Protection Commission (IDPC) within 72 hours as required by law, and will inform affected data subjects without undue delay.</li>
                        </ul>
                    </section>

                    {/* Section 8 */}
                    <section className="privacy-section">
                        <h2>8. Data Retention</h2>
                        <p>We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, including to satisfy any legal, regulatory, accounting, or reporting requirements.</p>
                        
                        <h3>Retention Periods:</h3>
                        <ul>
                            <li><strong>Account Data:</strong> Retained for the duration of your account membership and for 7 years after account closure to comply with financial record-keeping requirements.</li>
                            <li><strong>Transaction Data:</strong> Retained for 7 years from the date of the transaction in accordance with Botswana tax and financial regulations.</li>
                            <li><strong>Transit Trip Data:</strong> Retained for 2 years for analytics, safety, and dispute resolution purposes.</li>
                            <li><strong>Marketing Consent Records:</strong> Retained for the duration of your subscription and for 1 year after withdrawal of consent.</li>
                            <li><strong>Device and Log Data:</strong> Retained for 90 days for security and debugging purposes.</li>
                        </ul>
                        <p>After the applicable retention period, your data will be securely deleted or anonymized so that it can no longer be associated with you.</p>
                    </section>

                    {/* Section 9 */}
                    <section className="privacy-section">
                        <h2>9. Your Rights as a Data Subject</h2>
                        <p>Under the Data Protection Act 2024 (Sections 35 through 42), you have the following rights regarding your personal data:</p>

                        <h3>9.1 Right of Access (Section 36)</h3>
                        <p>You have the right to request confirmation of whether we process your personal data and to obtain access to that data, including information about the purposes of processing, the categories of data concerned, and the recipients to whom the data has been disclosed.</p>

                        <h3>9.2 Right to Rectification (Section 37)</h3>
                        <p>You have the right to request the correction of inaccurate personal data or the completion of incomplete data without undue delay.</p>

                        <h3>9.3 Right to Erasure (Section 38)</h3>
                        <p>You have the right to request the deletion of your personal data when:</p>
                        <ul>
                            <li>The data is no longer necessary for the purposes for which it was collected</li>
                            <li>You withdraw consent and there is no other legal ground for processing</li>
                            <li>You object to processing and there are no overriding legitimate grounds</li>
                            <li>The data has been unlawfully processed</li>
                        </ul>
                        <p><strong>Note:</strong> We may retain certain data where we have a legal obligation or legitimate basis to do so, such as transaction records required for financial compliance.</p>

                        <h3>9.4 Right to Data Portability (Section 39)</h3>
                        <p>You have the right to receive your personal data in a structured, commonly used, and machine-readable format, and to request that we transmit that data to another data controller where technically feasible.</p>

                        <h3>9.5 Right to Object (Section 40)</h3>
                        <p>You have the right to object to the processing of your personal data based on legitimate interests, including profiling. We will cease processing unless we demonstrate compelling legitimate grounds that override your interests.</p>

                        <h3>9.6 Right Not to Be Subject to Automated Decision-Making (Section 41)</h3>
                        <p>You have the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning you or similarly significantly affects you. Any automated fare calculations or fraud detection systems are subject to human review upon your request.</p>

                        <h3>9.7 Right to Withdraw Consent (Section 42)</h3>
                        <p>Where we process your data based on consent, you have the right to withdraw that consent at any time. Withdrawal does not affect the lawfulness of processing carried out before the withdrawal.</p>

                        <p>To exercise any of these rights, please contact us at <strong>support@tsamaya.co.bw</strong>. We will respond to your request within 30 days of receipt.</p>
                    </section>

                    {/* Section 10 */}
                    <section className="privacy-section">
                        <h2>10. Children's Privacy</h2>
                        <p>Tsamaya offers student transit passes for minors. We are committed to protecting the privacy of children in accordance with the Data Protection Act 2024.</p>
                        <ul>
                            <li>Student transit passes are issued with the consent of a parent or legal guardian.</li>
                            <li>We collect only the minimum necessary data for student pass issuance (name, student ID, school affiliation).</li>
                            <li>Parental consent is required for account creation for users under 18 years of age.</li>
                            <li>Parents or guardians may review, request deletion of, or refuse further collection of their child's data by contacting us.</li>
                            <li>We do not use children's data for marketing purposes.</li>
                        </ul>
                    </section>

                    {/* Section 11 */}
                    <section className="privacy-section">
                        <h2>11. Cross-Border Data Transfers</h2>
                        <p>In accordance with Sections 76 through 79 of the Data Protection Act 2024, we may transfer your personal data to countries outside Botswana for processing and storage.</p>
                        
                        <h3>Safeguards for International Transfers:</h3>
                        <ul>
                            <li>We only transfer data to countries that provide an adequate level of data protection as determined by the Information and Data Protection Commission (IDPC).</li>
                            <li>Where adequate protection is not guaranteed, we implement appropriate safeguards including Standard Contractual Clauses (SCCs) and binding corporate rules.</li>
                            <li>A copy of all personal data processed remains stored in Botswana for the duration of processing, as required by law.</li>
                            <li>Transfers are limited to what is necessary for the performance of our contract with you or for compelling legitimate public interest reasons.</li>
                        </ul>
                    </section>

                    {/* Section 12 */}
                    <section className="privacy-section">
                        <h2>12. Cookies and Tracking Technologies</h2>
                        <p>We use cookies and similar technologies to enhance your experience on our website:</p>

                        <h3>12.1 Essential Cookies</h3>
                        <p>Required for basic website functionality, including session management and security features. These cannot be disabled.</p>

                        <h3>12.2 Analytics Cookies</h3>
                        <p>Help us understand how visitors interact with our website by collecting anonymous usage data. We use this information to improve our services.</p>

                        <h3>12.3 Marketing Cookies</h3>
                        <p>Used to deliver relevant advertisements and track campaign performance. These are only set with your explicit consent.</p>

                        <p>You can manage your cookie preferences through your browser settings. Disabling essential cookies may affect website functionality.</p>
                    </section>

                    {/* Section 13 */}
                    <section className="privacy-section">
                        <h2>13. Payment Security</h2>
                        <p>Tsamaya takes payment security seriously. Our cashless transit system is designed with the following security features:</p>
                        <ul>
                            <li><strong>Cloud Wallet Architecture:</strong> Funds are stored in secure cloud wallets, not on physical NFC cards. This means a lost or stolen card does not result in loss of funds.</li>
                            <li><strong>One-Tap Kill Switch:</strong> You can instantly deactivate a lost or compromised card through the app or web portal.</li>
                            <li><strong>Real-Time Transaction Monitoring:</strong> We monitor transactions for suspicious activity and flag potential fraud.</li>
                            <li><strong>Tokenized Payments:</strong> Your actual card numbers are never stored or transmitted during transactions.</li>
                            <li><strong>Secure Payment Partners:</strong> All payment processing is handled by PCI DSS-compliant payment service providers.</li>
                        </ul>
                    </section>

                    {/* Section 14 - Hidden for now */}
                    {false && (
                    <section className="privacy-section">
                        <h2>14. Third-Party Services</h2>
                        <p>Our Services integrate with the following third-party providers:</p>
                        <ul>
                            <li><strong>Orange Money</strong> — Mobile money payment processing</li>
                            <li><strong>BTC SMEGA</strong> — Mobile money payment processing</li>
                            <li><strong>Mascom MyZaka</strong> — Mobile money payment processing</li>
                            <li><strong>Visa/Mastercard</strong> — Card payment processing</li>
                            <li><strong>Cal.com</strong> — Demo scheduling and appointment booking</li>
                        </ul>
                        <p>Each third-party provider has their own privacy policy governing the use of your data. We encourage you to review their policies. We only share the minimum necessary data with these providers to facilitate their services.</p>
                    </section>
                    )}

                    {/* Section 15 */}
                    <section className="privacy-section">
                        <h2>15. Your Choices</h2>
                        <ul>
                            <li><strong>Marketing Communications:</strong> You can opt out of marketing emails by clicking the "unsubscribe" link in any marketing email or by adjusting your preferences in the app settings. Service-related communications (e.g., transaction confirmations) cannot be opted out of as they are essential to service delivery.</li>
                            <li><strong>Location Data:</strong> You can disable location services in your device settings. However, this may affect certain features of the app, such as nearby route suggestions.</li>
                            <li><strong>Account Deletion:</strong> You may request deletion of your account and associated data by contacting support@tsamaya.co.bw. Note that certain data may be retained as required by law.</li>
                            <li><strong>Cookie Preferences:</strong> You can manage cookie settings through your browser or our cookie consent banner.</li>
                        </ul>
                    </section>

                    {/* Section 16 */}
                    <section className="privacy-section">
                        <h2>16. Information and Data Protection Commission (IDPC)</h2>
                        <p>If you believe that our processing of your personal data violates the Data Protection Act 2024, you have the right to lodge a complaint with:</p>
                        <div className="privacy-contact-box">
                            <p><strong>Information and Data Protection Commission (IDPC)</strong></p>
                            <p>Republic of Botswana</p>
                            <p>The Commission is the national supervisory authority responsible for ensuring compliance with the Data Protection Act 2024.</p>
                            <p>You may contact the IDPC to report concerns about data processing practices or to exercise your rights under the Act.</p>
                        </div>
                        <p>We encourage you to contact us first so we can address your concerns directly before lodging a formal complaint with the Commission.</p>
                    </section>

                    {/* Section 17 */}
                    <section className="privacy-section">
                        <h2>17. Changes to This Privacy Policy</h2>
                        <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes:</p>
                        <ul>
                            <li>We will notify you via email or through a prominent notice on our website or app.</li>
                            <li>The "Last Updated" date at the top of this policy will be revised.</li>
                            <li>Where required by law, we will obtain your consent before applying material changes.</li>
                        </ul>
                        <p>We encourage you to review this Privacy Policy periodically to stay informed about how we protect your data.</p>
                    </section>

                    {/* Section 18 */}
                    <section className="privacy-section">
                        <h2>18. Governing Law</h2>
                        <p>This Privacy Policy is governed by and construed in accordance with the laws of the Republic of Botswana, including the Data Protection Act 2024 (Act No. 18 of 2024). Any disputes arising from this policy shall be subject to the exclusive jurisdiction of the courts of Botswana.</p>
                    </section>

                    {/* Section 19 */}
                    <section className="privacy-section">
                        <h2>19. Contact Us</h2>
                        <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:</p>
                        <div className="privacy-contact-box">
                            <p><strong>Data Protection Officer</strong></p>
                            <p>DevGen Technologies (Pty) Ltd</p>
                            <p>Email: support@tsamaya.co.bw</p>
                            <p>Website: tsamaya.co.bw</p>
                        </div>
                        <p>We will respond to all data subject requests within 30 days of receipt, in accordance with the Data Protection Act 2024.</p>
                    </section>

                    {/* Back to Home */}
                    <div className="privacy-back">
                        <button className="try-free-btn" onClick={() => navigate('/')}>
                            Back to Home
                        </button>
                    </div>
                </div>
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
                            <li><a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Order a Pass</a></li>
                            <li><a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Top Up Wallet</a></li>
                            <li><a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Manage Linked Cards</a></li>
                            <li><a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Dispute Fare</a></li>
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
                            <li><a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Terms of Service</a></li>
                            <li><a href="/privacy" onClick={(e) => { e.preventDefault(); navigate('/privacy'); }}>Privacy Policy</a></li>
                            <li><a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Support Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom" style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #D1F2F0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem', color: '#666' }}>
                    <p>&copy; {new Date().getFullYear()} tsamaya.co.bw. All rights reserved.</p>
                    <p>Developed by <a href="https://devgenbotswana.co.bw" target="_blank" rel="noopener noreferrer" style={{ color: '#12B5B0', fontWeight: '700', textDecoration: 'none' }}>DevGen Technologies</a></p>
                </div>
            </footer>
        </div>
    );
};

export default PrivacyPolicyPage;
