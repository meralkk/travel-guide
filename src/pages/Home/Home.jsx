import React from 'react'
import Countries from '../../components/Countries/Countries'
import Header from '../../components/Header/Header'
import './Home.css'

const Home = () => {
  return (
    <div>
        <Header/>
        <Countries/>
    </div>
  )
}

export default Home