import React, { useState } from 'react'
// import logo from '../../assets/logo.png'

const Navbar = () => {

    // to make the navbar menu active
    const [menu,setMenu] = useState("home");


  return (
    <div className='navbar'>
      {/* <img src={logo} alt="" className='logo' /> */}
      logo
      <ul className='navbar-menu'>
        <li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</li>
        <li onClick={()=>setMenu("destinations")} className={menu==="destinations"?"active":""}>Destinations</li>
        <li onClick={()=>setMenu("about-me")} className={menu==="about-me"?"active":""}>About me</li>
        <li onClick={()=>setMenu("contact")} className={menu==="contact"?"active":""}>Contact</li>
      </ul>
      <div className="search-bar">
        <input type="text" placeholder="Search for your dream trip..." />
        <button type="submit">Search</button>
      </div>
    </div>
  )
}

export default Navbar