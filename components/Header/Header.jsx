import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className ='header'>
    <div className='header-content'>
        <h2>
            Welcome to your favourite "where's the foodie?"
        </h2>
        <p>
        All you need is love. But a little chocolate now and then doesn’t hurt.
        
        </p>
       <button> view menu</button> 
        </div>
    </div>
  )
}

export default Header