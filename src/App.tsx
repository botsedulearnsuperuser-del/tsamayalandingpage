import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LegaeLandingPage from './components/LandingPage/LegaeLandingPage';
import ServicesPage from './components/ServicesPage';
import AboutUsPage from './components/AboutUsPage';
import FlowersPage from './components/FlowersPage';
import GalleriesPage from './components/GalleriesPage';
import TransportPage from './components/TransportPage';
import ConstructionPage from './components/ConstructionPage';
import SecurityPage from './components/SecurityPage';
import AccountConfirmed from './components/AccountConfirmed';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<LegaeLandingPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/transport" element={<TransportPage />} />
                    <Route path="/construction" element={<ConstructionPage />} />
                    <Route path="/security" element={<SecurityPage />} />
                    <Route path="/about" element={<AboutUsPage />} />
                    <Route path="/flowers" element={<FlowersPage />} />
                    <Route path="/galleries" element={<GalleriesPage />} />
                    <Route path="/account-confirmed" element={<AccountConfirmed />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
