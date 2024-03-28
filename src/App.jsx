import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import About from './pages/About/About'
import Destinations from './pages/Destinations/Destinations'
import Home from './pages/Home/Home'

const App = () => {
  return (

    <div className='app'>

      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} /> 
        <Route path="/destinations" element={<Destinations/>} /> 
        <Route path="/about" element={<About/>} /> 
      </Routes>
      
    </div>

  )
}

export default App