import React from 'react';
import './Home.css';
import Lawn2 from '../../Assets/lawn2.jpg'
export default function Home() {

  return (
    <div className='Home'>
      <div className='mainContent'>
        <div className="mainImageHolder">
          <img src={Lawn2} alt="lawn" className="main-image" />
          <div className='mainContentTitle'><h1>CW Lawn Care and Landscaping</h1></div>

        </div>
      </div>
    </div>
  )
}