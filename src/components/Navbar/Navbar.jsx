import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.siuuu}/>
      <img className='profile' src ={assets.profile_image}/>
    <hr/>
    </div>
  )
}

export default Navbar
