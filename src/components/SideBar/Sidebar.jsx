import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarop'>
        <NavLink to='/add' className='sideop'>
          <img src ={assets.add_icon}/>
          <p>add</p>
        </NavLink>
        <NavLink to='/list' className='sideop'>
          <img src ={assets.order_icon}/>
          <p>list icons</p>
      </NavLink>
      <NavLink to='/order' className='sideop'>
          <img src ={assets.order_icon}/>
          <p>orders</p>
    </NavLink>
    </div>
    </div>
  )
}

export default Sidebar
