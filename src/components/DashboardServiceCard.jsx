import React from 'react'
import wash from '../assets/wash.jpg'

const DashboardServiceCard = ({image,heading,desc,time,price}) => {
  return (
    <div className='dashboard-service-card'>
        <div className='service-image-div'>
            <img src={image} alt="" />
        </div>
        <div className='service-description'>
            <h1>{heading}</h1>
            <p style={{maxWidth:500, fontWeight:300}}>{desc}</p>
        </div>
        <div className='service-price'>
            <h5>{time}</h5>
            <h5>₹{price}</h5>
        </div>
        {/* <button className='login-btn'>Edit</button> */}
    </div>
  )
}

export default DashboardServiceCard