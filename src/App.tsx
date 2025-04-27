import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ThematicVisits from './components/ThematicVisits';
import Guides from './components/Guides';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <ThematicVisits />
        <Guides />
      </main>
      <Footer />
    </div>
  );
}

export default App;