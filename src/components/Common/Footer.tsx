import React from 'react';

interface FooterProps {
    setShowPrivacy: (show: boolean) => void;
}

const Footer: React.FC<FooterProps> = ({ setShowPrivacy }) => {
    return (
        <footer className="footer">
            <div className="footer-logo-large">Agape Group</div>
            <div className="footer-info">
                <p>
                    A diversified group delivering excellence in Transport & Logistics, Construction, Security, and Creative Decor Services in Botswana.
                </p>
            </div>
            <div className="footer-grid">
                <div className="footer-links">
                    <h4>Services</h4>
                    <ul>
                        <li><a href="/transport">School Transport</a></li>
                        <li><a href="/construction">Construction</a></li>
                        <li><a href="/security">Security Services</a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/services">Contact</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setShowPrivacy(true); }}>Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="footer-links">
                    <h4>Contact Us</h4>
                    <ul>
                        <li><a href="#">Plot 1234, Gaborone West</a></li>
                        <li><a href="tel:+26777593604">+267 77 593 604</a></li>
                        <li><a href="mailto:info@agape.co.bw">info@agape.co.bw</a></li>
                        <li><a href="#">Botswana</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Agape. All rights reserved.</p>
                <div className="footer-social-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 1200 1200"><path fill="currentColor" d="M0 0v1200h1200V0zm863.232 156.592c8.715-.185 17.791.098 27.173.732c34.476.047 70.483 3.155 106.201 6.299l-3.882 142.09h-95.947c-44.988-.996-61.235 16.473-62.695 67.236V484.57h162.524l-6.445 152.197H834.082v423.706H675.513V636.768H565.43V484.57h110.083V353.906c0-94.209 39.829-154.174 118.286-184.57c20.149-7.928 43.288-12.189 69.433-12.744" /></svg>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16"><path fill="currentColor" d="M14.5 0h-13C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5h13c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5M11 2.5c0-.275.225-.5.5-.5h2c.275 0 .5.225.5.5v2c0 .275-.225.5-.5.5h-2a.5.5 0 0 1-.5-.5zM8 5a3.001 3.001 0 0 1 0 6a3.001 3.001 0 0 1 0-6m6 8.5c0 .275-.225.5-.5.5h-11a.5.5 0 0 1-.5-.5V7h1.1A5 5 0 0 0 8 13a5 5 0 0 0 4.9-6H14z" /></svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 14 14"><g fill="none"><g clipPath="url(#SVGG1Ot4cAD)"><path fill="currentColor" d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z" /></g><defs><clipPath id="SVGG1Ot4cAD"><path fill="#fff" d="M0 0h14v14H0z" /></clipPath></defs></g></svg>
                    </a>
                    <a href="https://wa.me/26777593604" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 12"><path fill="currentColor" d="M6 0a6 6 0 1 1-3.002 11.196l-2.34.778a.5.5 0 0 1-.632-.632l.78-2.339A6 6 0 0 1 6 0M3.932 3.003a.52.52 0 0 0-.394.2c-.135.158-.516.543-.516 1.325c0 .783.529 1.54.603 1.646c.073.104 1.041 1.71 2.522 2.4q.413.192.84.335c.354.12.677.104.932.064c.284-.045.873-.384.996-.757c.122-.37.122-.689.085-.755s-.135-.107-.284-.188a24 24 0 0 0-1.008-.516c-.135-.054-.234-.08-.332.08c-.099.159-.38.518-.467.624c-.085.103-.172.118-.32.039s-.623-.248-1.187-.79a4.7 4.7 0 0 1-.82-1.102c-.088-.16-.01-.245.063-.325c.067-.07.148-.185.222-.279c.073-.09.099-.157.148-.264c.049-.106.024-.2-.013-.278c-.037-.08-.332-.864-.456-1.183c-.12-.31-.241-.266-.332-.272c-.085-.004-.183-.004-.282-.004" /></svg>
                    </a>
                    <p className="developed-by">Developed by <a href="https://devgenbotswana.co.bw" target="_blank" rel="noopener noreferrer">DevGenTechnologies</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
