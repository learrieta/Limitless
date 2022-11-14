import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
import pT from './assets/pt.png';
import cP from './assets/cp.png';
import gT from './assets/gt.png';
import dN from './assets/dn.png';

function CardsService() {
    return (
        <div className='cards'>
            <h1>We provide the following services:</h1>
            <h3>Standard:</h3>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem src = {cP} text= "Whether you are starting out- or starting again, these customs programs will be designed to cater your needs and help you meet your fitness goals."    path='/services'
                        />
                        <CardItem src = {gT}  text= "In order to improve ourselves, we need to know where we have been and where do we want to be. With this goal tracker you will become the best version of yourself."  path='/services'
                        />
                    </ul>
                </div>
            </div>
            <h3>Premium:</h3>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem src = {pT}  text= "Our personal trainers are dedicated to motivate you and work with you to meet your fitness goals."  path='/services'
                        />
                        <CardItem src = {dN} text= "Having a good diet will lead to and healthier lifestyle, who says that dieting has to be bad? we have the best recipes for success!"    path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
      )
}

export default CardsService
