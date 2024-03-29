import React from 'react'
import './Destinations.css'
import germany from '../../assets/germany/germany.jpg'
import { Link } from 'react-router-dom'

const Destinations = () => {
  return (
    <div className='destinations'>
     
        <img src={germany} alt="" />
    
      <div className="title">
        <ul className='country'>
           <li> <Link to="/destinations/dresden">Dresden,   &nbsp;      </Link></li>
           <li> <Link to="/destinations/berlin">Berlin,    &nbsp;         </Link></li>
           <li> <Link to="/destinations/hamburg">Hamburg,   &nbsp;          </Link></li>
           <li> <Link to="/destinations/praha">Praha,      &nbsp;       </Link></li>
           <li> <Link to="/destinations/athens">Athens,     &nbsp;        </Link></li>
           <li> <Link to="/destinations/antalya">Antalya,    &nbsp;         </Link></li>
           <li> <Link to="/destinations/istanbul">Istanbul   &nbsp;          </Link></li>

        </ul>
      </div>
    </div>
  )
}

export default Destinations