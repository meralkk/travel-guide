import React from 'react'
import './Destinations.css'
import germany from '../../assets/germany/germany.jpg'

const Destinations = () => {
  return (
    <div className='destinations-container'>
     
        <img src={germany} alt="" />
    
      <div className="title">
        <ul className='country'>
          <li>Dresden,&nbsp;</li>
          <li>Berlin,&nbsp;</li>
          <li>Hamburg,&nbsp;</li>
          <li>Praha,&nbsp;</li>
          <li>Batumi,&nbsp;</li>
          <li>Athens,&nbsp;</li>
          <li>Antalya,&nbsp;</li>
          <li>Istanbul&nbsp;</li>


        </ul>
      </div>
    </div>
  )
}

export default Destinations