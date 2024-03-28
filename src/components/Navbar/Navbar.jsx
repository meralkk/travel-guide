import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState("");

  const handleLinkClick = (menuName, path, e) => {
    e.preventDefault();
    setMenu(menuName);
    navigate(path);
  };

  return (
    <>
    <div className="navbar">
      <a href='/' className="logo" onClick={() => setMenu("home")}> 
        <span className="travel">Travel</span><span className="guide">guide</span>
      </a>
      <div className="menu">
        <ul>
          <a href='/' onClick={(e) => handleLinkClick("home", "/", e)} className={menu === "home" ? "active" : ""}>Home,</a>
          <a href='/destinations' onClick={(e) => handleLinkClick("destinations", "/destinations", e)} className={menu === "destinations" ? "active" : ""}>Destinations,</a>
          <a href='/about' onClick={(e) => handleLinkClick("about", "/about", e)} className={menu === "about" ? "active" : ""}>About</a>
        </ul>
      </div>
      <div className="contact">Send me a message</div>
    </div>

    </>

  );
}

export default Navbar;
