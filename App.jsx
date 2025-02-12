import React from 'react';
import Header from './components/Header';
import HeroSection from './components/Hero';
import AboutSection from './components/About';
import ServicesSection from './components/Service';
import ContactSection from './components/Contact';
import Footer from './components/Footer';

const App = () => {
    return (
        <div className="App">
            <Header />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default App;
