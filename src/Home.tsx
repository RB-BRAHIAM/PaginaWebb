import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Category from './components/Category';
import MostSearchedCar from './components/MostSearchedCar';
import { SignInButton } from '@clerk/clerk-react';
import { Button } from './components/ui/button';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';

function Home() {
    return (
        <div>
            {/* Header */}
            <Header />
            {/* Hero */}
            <Hero />
            {/* Category */}
            <Category />
            {/* Most Searched Car */}
            <MostSearchedCar />
            {/* Info Section */}
            <InfoSection />
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Home;
