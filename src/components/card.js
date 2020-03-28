import React from 'react'
import {animated, useSpring, config} from 'react-spring'

import './card.css'

function Card({text, icon}){

  const [transform, set, stop] = useSpring(() => ({
    transform:'scale(1)',
    backgroundColor:'#F3F3F3',
    boxShadow:'0 0 0px #F3F3F3',
    config:config.gentle
  }))

  return(
    <animated.div 
      style={transform} 
      className='card'
      onPointerOver={() => set({transform:`scale(1.1)`, backgroundColor:'white',boxShadow:'0 0 10px #F3F3F3'})}
      onPointerOut={() => set({transform:`scale(1)`, backgroundColor:'#F3F3F3',boxShadow:'0 0 10px #F3F3F3'})}
    >
      <img src={icon} alt='card icon'/>
      <p>{text}</p>
    </animated.div>
  )
}

export default Card