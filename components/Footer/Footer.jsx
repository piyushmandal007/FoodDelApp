import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
            <img src={assets.siuuu}></img>
            <p> All you need is love. But a little chocolate now and then doesn’t hurt.
            </p>
            <div className='footer-icons'>
              <img src={assets.facebook_icon}></img>
              <img src={assets.twitter_icon}></img>
              <img src={assets.linkedin_icon}></img>


            </div>
        </div>
        <div className='footer-content-center'>
          <h2>COMPANY</h2>
          <ul>
              <li>home</li>
              <li>about us</li>
              <li>delivery</li>
              <li>privacy policy</li>
          </ul>
        </div>
        <div className='footer-content-right'>
          <h2>Share Your Views With Us</h2>
          <ul>
            <li>+33-2354-9856</li>
            <li>contactwtf@wtf.ac.in</li>
          </ul>

        </div>
      </div>
      <hr></hr>
      <p className='copyright'>Copyright © 2012 - 2024 wtf®. All rights reserved
      </p>
    </div>
    
    
  )
}

export default Footer