import React, { useState } from 'react'
import './Header.css';
import Logo from '../../assets/logo_new.png';
import { Link } from 'react-scroll';
const Header = () => {
  return (
    <div className='header'>
     <img src = {Logo} alt = "logo" className='logo'/>
      <ul className='header-menu'>
      <li><Link  to ='home' scroll={true}>Home</Link></li>
      <li><Link  to ='programs' scroll={true}>Programs</Link></li>
      <li><Link  to ='reasons' scroll={true}>Why Us</Link></li>
      <li><Link  to ='plans' scroll={true}>Plans</Link></li>
      <li><Link  to ='testimonials' scroll={true}>Testimonials</Link></li>
      <li><a target='_blank' href="https://task-over.github.io/PortFolio/">My Portfolio</a></li>
     </ul>
    </div>
  )
}

export default Header
