import React from 'react';
import '../../App.css';
import CardsHome from '../CardsHome';
import Footer from '../Footer';
import HeroSection from '../HeroSection';

function Home() {
    return(
        <>
         <HeroSection/>
         <CardsHome/>
         <Footer/>
        </>
    );
}

export default Home;