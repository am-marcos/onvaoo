import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ThematicVisits from './components/ThematicVisits';
import Guides from './components/Guides';
import Footer from './components/Footer';
import Explorer from './components/Explorer/Explorer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Routes>
            {/* Route pour la page d'accueil */}
            <Route path="/" element={
              <>
                <HeroSection />
                <ThematicVisits />
                <Guides />
              </>
            } />
            {/* Route pour la page Explorer */}
            <Route path="/explorer" element={<Explorer />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;