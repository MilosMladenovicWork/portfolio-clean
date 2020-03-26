import React from 'react'
import {animated, useSpring, config} from 'react-spring'

import './infoContainer.css'

function InfoContainer({children, small, dark}){

  const [transform, set, stop] = useSpring(() => ({transform:'scale(1)', config:config.gentle}))

  function classAdd(){
    let classes = 'info-container'
    if(small){
      classes += ' half'
    }
    if(dark){
      classes += ' dark'
    }
    return classes
  }

  return(
    <animated.div 
      className={classAdd()}
      style={transform}
      onPointerOver={() => set({transform:`scale(1.1)`})}
      onPointerOut={() => set({transform:`scale(1)`})}
    >
      {children}
    </animated.div>
  )
}

export default InfoContainer