import React from 'react'


const GraphCard = ({color1, color2, image, heading}) => {
  return (
    <div className='graph-cards'>
        <div className='graph-card'>
            <div style={{backgroundImage:`linear-gradient(to bottom, ${color1}, ${color2})`, borderRadius:'10px'}} className='graph-img'>
                <img src={image} alt="graph1" width={270} />
            </div>
            <div className='graph-card-content'>
                <h4 style={{color:'#344767', fontWeight:500, marginBottom:3}}>{heading}</h4>
                <h5 style={{color:'#888', fontWeight:400}}>Last Campaign Performance</h5>
            </div>
        </div>
    </div>
  )
}

export default GraphCard