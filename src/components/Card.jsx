import React from 'react'

const Card = ({heading, amount, msg, color1, color2, growth, period,positive,icon}) => {
  return (
    <div className='card'>
        <div className='card-heading'>
        <h4>{heading}</h4>
        <h1>{amount}</h1>
        </div>
        <hr />
        <div className='card-bottom'>
            <h4>
                <span style={{color: positive ? '#5EB562' : '#E83975', fontWeight:700}}>{growth}</span> than last {period}
            </h4>
        </div>
        <div style={{backgroundImage:`linear-gradient(to bottom, ${color1}, ${color2})`}} className='card-icon'>
        <i style={{fontSize:'25px', color:'#fefefe'}} className={icon}></i>  
        </div>
    </div>
  )
}

export default Card