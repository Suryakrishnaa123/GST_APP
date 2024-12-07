
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import SalesDashboard from './components/SalesDashboard';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/sales-dashboard" element={<SalesDashboard />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
