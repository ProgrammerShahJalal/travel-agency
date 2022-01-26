import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Hero from '../Hero/Hero';
import Features from '../Features/Features';
import Footer from '../Shared/Footer/Footer';
import Carousel from '../Carousel/Carousel';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Features />
            <Carousel />
            <Footer />
        </div>
    );
};

export default Home;