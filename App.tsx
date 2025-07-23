import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ObjectionsList from './components/ObjectionsList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cosmic-gradient cosmic-bg">
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      <Header />
      <Hero />
      <ObjectionsList />
      <Footer />
    </div>
  );
}

export default App;