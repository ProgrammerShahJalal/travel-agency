import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Hero from '../Hero/Hero';
import Features from '../Features/Features';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Features />
            <Footer />
        </div>
    );
};

export default Home;