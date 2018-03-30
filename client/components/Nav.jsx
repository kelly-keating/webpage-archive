import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => (
  <div id='nav-container'>
    <Link to='/'>
      <div id='nav-title'><h3>Kelly Keating   \\ Web Developer</h3></div>
      <img id='nav-logo' src='http://i.imgur.com/2WYjdQt.jpg'/>
    </Link>
    <div id='nav-buttons'>
      <Link to='/projects'><div className='nav-butt'><h5>Projects</h5></div></Link>
      <Link to='/about'><div className='nav-butt'><h5>About</h5></div></Link>
    </div>
  </div>
)

export default Nav
