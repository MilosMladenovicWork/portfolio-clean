import React from 'react'
import {animated, useSpring} from 'react-spring'

import './animatedgroup.css'

function AnimatedGroup({children, delay}){
  
  const [opacity, set, stop] = useSpring(() => ({
    from:{
      opacity:0,
      transform:`scale(1.1)`
    },
    opacity:1,
    transform:'scale(1)',
    delay:0 || delay * 1.5
  }))

  return(
    <animated.g 
      onClick={() => set({opacity:0, transform:'scale(0.9)'})}
      className='animated-group' 
      style={opacity}
    >
      {children}
    </animated.g>
  )
}

export default AnimatedGroup