import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LegaeLandingPage from './components/LandingPage/LegaeLandingPage';
import ServicesPage from './components/ServicesPage';
import './App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<LegaeLandingPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
