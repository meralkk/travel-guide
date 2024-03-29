import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; 
import './Navbar.css';

function Navbar() {
  const location = useLocation(); 
  
  const [menu, setMenu] = useState(""); 
  

  useState(() => {
    if (location.pathname === '/') {
      setMenu('home');
    } else if (location.pathname === '/destinations') {
      setMenu('destinations');
    } else if (location.pathname === '/about') {
      setMenu('about');
    }
  }, [location.pathname]); 

  return (
    <div className="navbar">
      <a href='/' className="logo" onClick={() => setMenu("home")}>
        <span className="travel">Travel</span><span className="guide">guide</span>
      </a>
      <div className="menu">
        <ul>
          <a href='/' className={menu === "home" ? "active" : ""}>Home,</a>
          <a href='/destinations' className={menu === "destinations" ? "active" : ""}>Destinations,</a>
          <a href='/about' className={menu === "about" ? "active" : ""}>About</a>
        </ul>
      </div>
      <div className="contact">Send me a message</div>
    </div>
  );
}

export default Navbar;
