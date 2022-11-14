import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
import absGym from './assets/absgym.jpg';
import chestGym from './assets/chestworkout.jpg';
import armGym from './assets/armgym.jpg';
import shoulderGym from './assets/shouldergym.jpg';
import cardioGym from './assets/cardiogym.jpg';

function CardsHome() {
  return (
    <div className='cards'>
        <h1>Check out these Epic Workouts</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem src = {chestGym}  text= "Add inches to your chest fast with this high-volume muscle-building workout." label= 'Full Gym Chest Workout' path='/services'
                    />
                    <CardItem src = {absGym} text= "Finish off your six-pack with these simple strategies."  label= 'Abs & Core'  path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem src = {shoulderGym}  text= "What a better way to start in your fitness journey than with shoulders." label= 'Shoulder Exercise for Beginners' path='/services'
                    />
                    <CardItem src = {armGym} text= "Feel the pump with this arm workout."  label= 'Arm Workout'  path='/services'
                    />
                    <CardItem src = {cardioGym} text= "Sprinting into shape with this high intensity cardio."  label= 'Cardio'  path='/services'
                    />
                </ul>
            </div>

        </div>
    </div>
  )
}

export default CardsHome