import React from 'react';
import Hero from '../Hero/Hero';
import Features from '../Features/Features';
import Carousel from '../Carousel/Carousel';
import Blog from '../Blogs/Blogs';

const Home = () => {
    return (
        <div>
            <Hero />
            <Blog />
            <Features />
            <Carousel />
        </div>
    );
};

export default Home;