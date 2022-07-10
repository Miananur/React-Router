import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="Navbar">
      <h1>REACT ROUTER</h1>
      <Link to="/">Menuju home</Link>
      <button><Link to="/register">Register</Link></button>
      <button><Link to="/login">Log In</Link></button>
      <button><Link to="/product">Product</Link></button>
      <button><Link to="/profile">Profile</Link></button>
    </div>
  )
}

export default Navbar