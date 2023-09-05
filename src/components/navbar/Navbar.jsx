import React from 'react'
import './navbar.scss'

export default function Navbar() {
  return (
    <div className="navbar">
        <div className="container">
            <div className="logo">
                <span className="text">fiverr</span>
                <span className="dot">.</span>
            </div>
            <div className="links">
                <span>Fiverr Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sign In</span>
                <span>Become a Seller</span>
                <button className="join">Join</button>
            </div>
        </div>
    </div>
  )
}
