import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive offers on your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div className='input-container'>
        <input type="email" placeholder='Your Email'/>
      </div>
      <button>Subscribe</button>
    </div>
  )
}

export default NewsLetter
