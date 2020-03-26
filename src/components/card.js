import React from 'react'

import './card.css'

function Card({text, icon}){
  return(
    <div className='card'>
      <img src={icon} alt='card icon'/>
      <p>{text}</p>
    </div>
  )
}

export default Card