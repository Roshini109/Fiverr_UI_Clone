import React, { useState, useEffect } from 'react'
import './navbar.scss'
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {

  const[active,setActive] = useState(false);
  const[open,setOpen] = useState(false);

  const {pathname} = useLocation()

  const isActive =() => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(()=>{
    window.addEventListener("scroll",isActive);

    return () => {
      window.removeEventListener("scroll",isActive);
    }
  },[])

  const currentUser ={
    id:1,
    username:"Roshini Dias",
    isSeller:true
  }

  return (
    <div className={active || pathname!=="/" ? "navbar active" : "navbar"}>
        <div className="container">
            <div className="logo">
              <Link to ="/" className="link">
                <span className="text">fiverr</span>
              </Link>
                <span className="dot">.</span>
            </div>
            <div className="links">
                <span>Fiverr Business</span>
                <span>Explore</span>
                <span>English</span>
                <span>Sign In</span>
                {!currentUser ?.isSeller && <span>Become a Seller</span>}
                {!currentUser && <button className="join">Join</button>}
                {currentUser && (
                  <div className="user" onClick={()=>setOpen(!open)}>
                    <img src="/assets/p1.jpg" alt="" />
                    <span className="username">{currentUser?.username}</span>
                    {open && <div className="options">
                      {
                        currentUser ?.isSeller && (
                          <>
                            <Link to="/myGigs" className="link">Gigs</Link>
                            <Link to="/add" className="link">Add New Gig</Link>
                          </>
                        )
                      }
                      <Link to="/orders" className="link">Orders</Link>
                      <Link to="/messages" className="link">Messages</Link>
                      <Link to="/" className="link">Logout</Link>
                    </div>}
                  </div>
                )}
            </div>
        </div>
            {
              (active || pathname !== "/") && (
              <>
              <hr />
              <div className="menu">
                <Link className="link" to="/">
                  Graphics & Design
                </Link>
                <Link className="link" to="/">
                  Video & Animation
                </Link>
                <Link className="link" to="/">
                AI Services
                </Link>
                <Link className="link" to="/">
                  Digital Marketing
                </Link>
                <Link className="link" to="/">
                  Music & Audio
                </Link>
                <Link className="link" to="/">
                  Programming & Tech
                </Link>
                <Link className="link" to="/">
                  Business
                </Link>
                <Link className="link" to="/">
                  Lifestyle
                </Link>
            </div>
            </>)}
    </div>
  )
}
