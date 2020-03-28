import React from 'react'
import {animated, useSpring, config} from 'react-spring'

import './tag.css'

function Tag({text}){

  const [transform, set, stop] = useSpring(() => ({
    transform:'scale(1)',
    backgroundColor:'#F3F3F3',
    boxShadow:'0 0 0px #F3F3F3',
    config:config.gentle
  }))

  return(
    <animated.div 
      className='tag'
      style={transform}
      onPointerOver={() => set({transform:`scale(1.1)`, backgroundColor:'white',boxShadow:'0 0 10px #F3F3F3'})}
      onPointerOut={() => set({transform:`scale(1)`, backgroundColor:'#F3F3F3',boxShadow:'0 0 10px #F3F3F3'})}
    >
      {text}
    </animated.div>
  )
}

export default Tag