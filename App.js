
import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import Login from './components/LoginForm.js';
import Signup from './components/SignupForm.js';
import Home from './components/Home.js';
import RealTimeDataPage from './components/RealTimeDataPage.js';
import PredictiveAnalyticsPage from './PredictiveAnalyticsPage.js';
import AnalyticsPage from './components/AnalyticsPage.js';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Service from './components/Service.js'
import { Contact } from 'lucide-react';
import Dashboard from './components/Dashboard.js';
import UserProfile from './components/UserProfile.js';
import logo from './components/Assets/weblogo.png';
import CustomCursor from './components/Customcursor.js';

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading for a few seconds before showing the content
  useEffect(() => {
    setTimeout(() => {
      setLoading(false); // After 3 seconds, set loading to false
    }, 3000);
  }, []);

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* <CustomCursor/> */}
    {loading ? (
      // Show Lottie loader while the content is loading
      <div className="absolute inset-0 flex justify-center items-center animate-popOut">
        <div className="flex items-center gap-6">
          <DotLottieReact
            src="https://lottie.host/ba5711fa-21fb-44fa-b605-3296ad599de0/tMUg2XsGtc.lottie"
            className="w-44 h-44" // Adjust the size as needed
            loop
            autoplay
          />
          <h1 className="font-extrabold text-transparent text-8xl bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-red-500">
            NeoViz
          </h1>
        </div>
      </div>
      ) : (
        // Once loading is complete, show the routes and main content
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/realtime-data" element={<RealTimeDataPage />} />
          <Route path="/predictive-analytics" element={<PredictiveAnalyticsPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/services" element={<Service/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/profile" element={<UserProfile/>} />

          
        </Routes>
      )}
    </div>
  );
}

export default App;
