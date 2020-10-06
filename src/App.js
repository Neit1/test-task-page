import React from 'react';
// import styles from './App.module.css';
import './App.css';
import AboutSection from './components/AboutSection/AboutSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import JumbotronSection from './components/JumbotronSection/JumbotronSection';
import PortfolioSection from './components/PortfolioSection/PortfolioSection';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="AppContent">
        <JumbotronSection />
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
