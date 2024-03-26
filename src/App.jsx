import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Navbar from './components/Navbar/Navbar'
import NavbarMenu from './components/Navbar/NavbarMenu'
import Home from './pages/Home/Home'

const App = () => {
  return (

    <div className='app'>

      <NavbarMenu/>
      <Routes>
        <Route path="/" element={<Home/>} /> 
      </Routes>
      
    </div>

  )
}

export default App