import React from "react"
import { Link } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/GameIndex'>See all games</Link></li>
        <li><Link to='/Signup'>Sign Up</Link></li>
        <li><Link>Log In</Link></li>
        <li><Link to='/About'>About Us</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
