import React from 'react'
import {animated, useSpring, config} from 'react-spring'

import './project.css'

import eyeIcon from '../images/see.svg'

function Project({img, text}){

  const [transform, set, stop] = useSpring(() => ({transform:'scale(1)', config:config.gentle}))

  return(
    <animated.div 
      className='project'
      style={transform}
      onPointerOver={() => set({transform:`scale(1.1)`})}
      onPointerOut={() => set({transform:`scale(1)`})}
     >
      <img src={img} alt={text}/>
      <div className='project-info'>
        <p>
          {text}
        </p>
        <img src={eyeIcon} alt='click to see project'/>
      </div>
    </animated.div>
  )
}

export default Project