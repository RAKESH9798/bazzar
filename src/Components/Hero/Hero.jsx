import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

const Hero = () => {
  return (
    <div>
      <div className="hero-container">
        <div className="hero">
            <div className='hero-left'>
                <h2>New Arrival Only</h2>
                <div>
                    <p>New</p>
                    <img src={hand_icon} alt="handIcon"/>
                </div>
                <p>Collections</p>
                <p>For Everyone</p>
            </div>
            <div className='hero-right'>
                <img className='hero-img' src={hero_image} alt="heroImg" />
            </div>
        </div>
        <div className="hero-btn">
            <div>Latest Collection<img src={arrow} alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
