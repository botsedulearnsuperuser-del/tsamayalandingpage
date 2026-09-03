import React from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from './SEO';
import './PrivacyPolicyPage.css';
import TsamayaNavbar from './Common/TsamayaNavbar';
import TsamayaFooter from './Common/TsamayaFooter';
import './LandingPage/LegaeLandingPage.css';

const TermsOfServicePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="privacy-page">
            <SEO
                title="Tsamaya Terms of Service | Transit Pass Terms & Payment Conditions Botswana"
                description="Tsamaya's Terms of Service governing the use of the Tsamaya cashless transit platform, NFC Transit Pass, mobile app, and transit wallet services in Botswana. Read about eligibility, payments, refunds, and acceptable use."
                keywords="Tsamaya terms of service, transit pass terms, cashless transit terms Botswana, NFC transit pass conditions, transit wallet terms, fare payment conditions, Tsamaya user agreement, payment terms Botswana, transit service agreement, Botswana transport terms, student transit terms, driver terms Tsamaya, operator terms, refund policy Tsamaya, acceptable use policy, dispute resolution Botswana, Tsamaya conditions"
                url="/terms"
            />
            <TsamayaNavbar alwaysShowCta={true} />


            {/* Terms of Service Content */}
            <main className="privacy-main">
                <div className="privacy-container">
                    <h1>Terms of Service</h1>
                    <p className="privacy-last-updated">Last Updated: January 2025</p>
                    <p className="privacy-intro">
                        Welcome to Tsamaya. These Terms of Service ("Terms") govern your access to and use of the Tsamaya cashless transit payment platform, mobile application, NFC Transit Pass, and related services (collectively, the "Services") provided by DevGen Technologies (Pty) Ltd ("we," "us," or "our"), registered in the Republic of Botswana.
                    </p>
                    <p className="privacy-intro">
                        By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Services.
                    </p>

                    {/* Section 1 */}
                    <section className="privacy-section">
                        <h2>1. Definitions</h2>
                        <ul>
                            <li><strong>"Account"</strong> — Your registered Tsamaya user account linked to your transit wallet.</li>
                            <li><strong>"NFC Transit Pass"</strong> — The physical contactless card issued by Tsamaya for tap-to-pay transit payments.</li>
                            <li><strong>"Transit Wallet"</strong> — The digital wallet linked to your Account where funds are stored for fare payments.</li>
                            <li><strong>"Services"</strong> — The Tsamaya cashless transit platform, mobile application, NFC Transit Pass, and all related features.</li>
                            <li><strong>"User," "You," "Your"</strong> — Any individual or entity that accesses or uses the Services.</li>
                            <li><strong>"Driver"</strong> — A transit operator registered on the Tsamaya platform who accepts fares through the Driver app.</li>
                            <li><strong>"Top-Up"</strong> — The process of adding funds to your Transit Wallet.</li>
                        </ul>
                    </section>

                    {/* Section 2 */}
                    <section className="privacy-section">
                        <h2>2. Eligibility</h2>
                        <p>To use the Services, you must:</p>
                        <ul>
                            <li>Be at least 18 years of age, or have parental/guardian consent if under 18.</li>
                            <li>Be a resident of Botswana or a person authorized to use transit services within Botswana.</li>
                            <li>Provide accurate and complete registration information.</li>
                            <li>Not be previously banned or suspended from using the Services.</li>
                        </ul>
                        <p>Student transit passes are available for minors with parental or legal guardian consent. Parents or guardians are responsible for monitoring their child's use of the Services.</p>
                    </section>

                    {/* Section 3 */}
                    <section className="privacy-section">
                        <h2>3. Account Registration</h2>
                        <ul>
                            <li>You must create an Account to access the Services, including purchasing an NFC Transit Pass and funding your Transit Wallet.</li>
                            <li>You are responsible for maintaining the confidentiality of your Account credentials and for all activities that occur under your Account.</li>
                            <li>You agree to provide accurate, current, and complete information during registration and to keep your Account information up to date.</li>
                            <li>You must notify us immediately of any unauthorized use of your Account or any other breach of security.</li>
                            <li>We reserve the right to suspend or terminate your Account if any information provided is found to be inaccurate, incomplete, or fraudulent.</li>
                        </ul>
                    </section>

                    {/* Section 4 */}
                    <section className="privacy-section">
                        <h2>4. Transit Wallet and Payments</h2>
                        
                        <h3>4.1 Funding Your Wallet</h3>
                        <p>You may top up your Transit Wallet using the following payment methods:</p>
                        <ul>
                            <li>Orange Money (USSD push)</li>
                            <li>BTC SMEGA</li>
                            <li>Mascom MyZaka</li>
                            <li>Visa or Mastercard debit or credit card</li>
                        </ul>
                        <p>All payment processing is handled by our authorized payment service providers. We do not store your full card numbers or payment credentials on our servers.</p>

                        <h3>4.2 Fare Payments</h3>
                        <ul>
                            <li>Fares are deducted instantly from your Transit Wallet when you tap your NFC Transit Pass or scan your QR code on the Driver's device.</li>
                            <li>All fare amounts are displayed before you confirm payment.</li>
                            <li>Transaction receipts are generated for every fare payment and are accessible in your Account.</li>
                        </ul>

                        <h3>4.3 Wallet Balance</h3>
                        <ul>
                            <li>Your Transit Wallet balance is stored securely in our cloud-based system, not on your physical NFC card.</li>
                            <li>You may check your wallet balance at any time through the Tsamaya mobile app or web portal.</li>
                            <li>Funds in your Transit Wallet do not expire and are not subject to maintenance fees.</li>
                        </ul>

                        <h3>4.4 Refunds</h3>
                        <ul>
                            <li>If you believe a fare was deducted in error, you may dispute the transaction within 30 days through the app or by contacting support@tsamaya.co.bw.</li>
                            <li>Refund requests will be reviewed within 7 business days.</li>
                            <li>Approved refunds will be credited back to your Transit Wallet or original payment method, at our discretion.</li>
                        </ul>
                    </section>

                    {/* Section 5 */}
                    <section className="privacy-section">
                        <h2>5. NFC Transit Pass</h2>
                        <ul>
                            <li>Your NFC Transit Pass is linked to your Account and Transit Wallet.</li>
                            <li>The physical card does not store funds. All transactions are processed through our secure cloud system.</li>
                            <li>You are responsible for the safekeeping of your NFC Transit Pass.</li>
                            <li>If your NFC Transit Pass is lost or stolen, you must immediately deactivate it through the Tsamaya mobile app, web portal, or by contacting support.</li>
                            <li>We are not liable for any unauthorized use of your NFC Transit Pass before it has been reported as lost or stolen and deactivated.</li>
                            <li>A replacement NFC Transit Pass may be issued subject to a replacement fee, as communicated at the time of request.</li>
                        </ul>
                    </section>

                    {/* Section 6 */}
                    <section className="privacy-section">
                        <h2>6. One-Tap Kill Switch</h2>
                        <p>The One-Tap Kill Switch is a security feature that allows you to instantly deactivate your NFC Transit Pass if it is lost, stolen, or compromised.</p>
                        <ul>
                            <li>You may activate the Kill Switch through the Tsamaya mobile app or web portal at any time.</li>
                            <li>Once activated, the deactivated card can no longer be used for fare payments.</li>
                            <li>Your Transit Wallet balance remains safe and can be accessed using a new card linked to your Account.</li>
                            <li>We are not responsible for any delay in activating the Kill Switch if you fail to report a lost or stolen card promptly.</li>
                        </ul>
                    </section>

                    {/* Section 7 */}
                    <section className="privacy-section">
                        <h2>7. Acceptable Use</h2>
                        <p>You agree not to:</p>
                        <ul>
                            <li>Use the Services for any unlawful purpose or in violation of any applicable laws or regulations.</li>
                            <li>Attempt to gain unauthorized access to any part of the Services or other users' Accounts.</li>
                            <li>Use the Services to transmit harmful, fraudulent, or misleading information.</li>
                            <li>Reverse engineer, decompile, or disassemble any part of the Services.</li>
                            <li>Use the Services to circumvent fare payments or engage in fare evasion.</li>
                            <li>Share your Account credentials with any third party.</li>
                            <li>Use automated systems or bots to interact with the Services without our written consent.</li>
                            <li>Interfere with or disrupt the integrity or performance of the Services.</li>
                        </ul>
                    </section>

                    {/* Section 8 */}
                    <section className="privacy-section">
                        <h2>8. Driver and Operator Terms</h2>
                        <p>If you are a Driver or transit operator using the Tsamaya Driver app:</p>
                        <ul>
                            <li>You must register and be approved by Tsamaya before accepting fares through the platform.</li>
                            <li>You agree to accept NFC Transit Pass taps and QR code scans as valid fare payment from registered passengers.</li>
                            <li>Settlement of fare collections to your account will be processed in accordance with the settlement schedule communicated during onboarding.</li>
                            <li>You must maintain your device and ensure it has a reliable internet connection for real-time transaction processing.</li>
                            <li>You agree to comply with all applicable transport regulations in Botswana.</li>
                        </ul>
                    </section>

                    {/* Section 9 */}
                    <section className="privacy-section">
                        <h2>9. Fees and Charges</h2>
                        <ul>
                            <li>Tsamaya does not charge users a fee for creating an Account or maintaining a Transit Wallet.</li>
                            <li>Fare amounts are determined by transit operators and displayed before payment.</li>
                            <li>Replacement fees for lost or damaged NFC Transit Passes may apply and will be communicated before issuance.</li>
                            <li>We reserve the right to introduce reasonable fees with 30 days' prior notice to users.</li>
                        </ul>
                    </section>

                    {/* Section 10 */}
                    <section className="privacy-section">
                        <h2>10. Data Protection and Privacy</h2>
                        <p>Your use of the Services is subject to our <a href="/privacy" onClick={(e) => { e.preventDefault(); navigate('/privacy'); }}>Privacy Policy</a>, which describes how we collect, use, and protect your personal data in accordance with the Data Protection Act 2024 (Act No. 18 of 2024) of Botswana.</p>
                        <p>By using the Services, you consent to the collection and processing of your data as described in the Privacy Policy.</p>
                    </section>

                    {/* Section 11 */}
                    <section className="privacy-section">
                        <h2>11. Intellectual Property</h2>
                        <ul>
                            <li>All content, trademarks, logos, and intellectual property associated with the Services are the property of DevGen Technologies (Pty) Ltd or its licensors.</li>
                            <li>You are granted a limited, non-exclusive, non-transferable license to use the Services for personal, non-commercial transit purposes.</li>
                            <li>You may not copy, modify, distribute, sell, or lease any part of the Services without our prior written consent.</li>
                        </ul>
                    </section>

                    {/* Section 12 */}
                    <section className="privacy-section">
                        <h2>12. Limitation of Liability</h2>
                        <ul>
                            <li>To the maximum extent permitted by law, DevGen Technologies (Pty) Ltd shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Services.</li>
                            <li>Our total liability to you for any claims arising from or related to the Services shall not exceed the amount you paid to us in the 12 months preceding the claim, or BWP 500, whichever is greater.</li>
                            <li>We are not liable for any delays, interruptions, or failures in the Services caused by factors beyond our reasonable control, including but not limited to network outages, power failures, or acts of God.</li>
                            <li>We are not liable for any unauthorized transactions resulting from your failure to secure your Account or deactivate a lost/stolen NFC Transit Pass.</li>
                        </ul>
                    </section>

                    {/* Section 13 */}
                    <section className="privacy-section">
                        <h2>13. Indemnification</h2>
                        <p>You agree to indemnify and hold harmless DevGen Technologies (Pty) Ltd, its directors, employees, and agents from any claims, losses, damages, liabilities, costs, and expenses (including reasonable legal fees) arising from:</p>
                        <ul>
                            <li>Your use of the Services.</li>
                            <li>Your violation of these Terms.</li>
                            <li>Your violation of any applicable laws or regulations.</li>
                            <li>Any content you submit or transmit through the Services.</li>
                        </ul>
                    </section>

                    {/* Section 14 */}
                    <section className="privacy-section">
                        <h2>14. Suspension and Termination</h2>
                        <ul>
                            <li>We reserve the right to suspend or terminate your Account and access to the Services at any time, with or without notice, for conduct that we reasonably believe violates these Terms or is harmful to other users, us, or third parties.</li>
                            <li>You may terminate your Account at any time by contacting support@tsamaya.co.bw. Any remaining balance in your Transit Wallet will be refunded in accordance with our refund policy.</li>
                            <li>Upon termination, your right to use the Services ceases immediately. Sections that by their nature should survive termination will survive, including limitation of liability, indemnification, and governing law.</li>
                        </ul>
                    </section>

                    {/* Section 15 */}
                    <section className="privacy-section">
                        <h2>15. Dispute Resolution</h2>
                        <ul>
                            <li>Any disputes arising from or related to these Terms shall first be resolved through good-faith negotiation by contacting support@tsamaya.co.bw.</li>
                            <li>If a dispute cannot be resolved through negotiation within 30 days, either party may refer the matter to mediation.</li>
                            <li>These Terms are governed by the laws of the Republic of Botswana. Any unresolved disputes shall be subject to the exclusive jurisdiction of the courts of Botswana.</li>
                        </ul>
                    </section>

                    {/* Section 16 */}
                    <section className="privacy-section">
                        <h2>16. Changes to These Terms</h2>
                        <ul>
                            <li>We may update these Terms from time to time to reflect changes in our Services, legal requirements, or business practices.</li>
                            <li>We will notify you of material changes by email or through a prominent notice on our website or app at least 30 days before the changes take effect.</li>
                            <li>Your continued use of the Services after the effective date of any changes constitutes your acceptance of the updated Terms.</li>
                            <li>If you do not agree to the updated Terms, you must stop using the Services and may terminate your Account.</li>
                        </ul>
                    </section>

                    {/* Section 17 */}
                    <section className="privacy-section">
                        <h2>17. Severability</h2>
                        <p>If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect.</p>
                    </section>

                    {/* Section 18 */}
                    <section className="privacy-section">
                        <h2>18. Entire Agreement</h2>
                        <p>These Terms, together with our Privacy Policy, constitute the entire agreement between you and DevGen Technologies (Pty) Ltd regarding the use of the Services and supersede all prior agreements and understandings.</p>
                    </section>

                    {/* Section 19 */}
                    <section className="privacy-section">
                        <h2>19. Contact Us</h2>
                        <p>If you have any questions about these Terms, please contact us:</p>
                        <div className="privacy-contact-box">
                            <p><strong>DevGen Technologies (Pty) Ltd</strong></p>
                            <p>Trading as: Tsamaya</p>
                            <p>Email: support@tsamaya.co.bw</p>
                            <p>Website: tsamaya.co.bw</p>
                        </div>
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
            <TsamayaFooter />    </div>
    );
};

export default TermsOfServicePage;
