import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <Link>E-Comm-App</Link>
        <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/checkout">Cart</Link>
        </div>
        <div className="nav-links-auth">
            <Link to="/auth">Login</Link>
            <Link to="/auth">Signup</Link>
        </div>
    </nav>
  )
}

export default Navbar
