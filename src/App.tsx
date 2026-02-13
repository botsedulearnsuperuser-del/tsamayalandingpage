import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LegaeLandingPage from './components/LandingPage/LegaeLandingPage';
import ServicesPage from './components/ServicesPage';
import AboutUsPage from './components/AboutUsPage';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<LegaeLandingPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/about" element={<AboutUsPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
