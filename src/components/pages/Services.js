import React from 'react'
import'../../App.css';
import CardsService from '../CardsService';
import Footer from '../Footer';

function Services() {
  return (
    <>
        <h1 className='services'>Services</h1>
        <CardsService/>
        <Footer/>
    </>
    
  )
}

export default Services

