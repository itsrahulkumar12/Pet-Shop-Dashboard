import React from 'react'


const ServiceCard = ({image, service}) => {
  const warning = () => {
    alert('This is just a dummy card.')
  }
  return (
    <div className='service-card'>
        <img src={image} alt="" width={200} style={{borderRadius:10}} />
        <div className='service-card-content'>
            <h4>{service}</h4>
            <h5 onClick={warning}>Book Appointment</h5>
        </div>
    </div>
  )
}

export default ServiceCard