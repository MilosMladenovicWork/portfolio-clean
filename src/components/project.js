import React from 'react'
import {animated, useSpring, config} from 'react-spring'

import './project.css'

import eyeIcon from '../images/see.svg'

function Project({img, text, href, slug}){

  const [transform, set, stop] = useSpring(() => ({transform:'scale(1)', config:config.gentle}))
  const [opacity, setContainer, stopContainer] = useSpring(() => ({opacity:0}))

  return(
    <animated.div 
      className='project'
      style={transform}
      onPointerOver={() => set({transform:`scale(1.1)`})}
      onPointerOut={() => set({transform:`scale(1)`})}
     >
      <div className='img-container'>
        <img src={img} alt={text}/>
        {href && 
          <>
            <animated.div 
              className='dark-overlay'
              style={opacity}
              onPointerOver={() => setContainer({opacity:1})}
              onPointerOut={() => setContainer({opacity:0})}
            >
            </animated.div>
            <animated.a
              target='_blank'
              href={href}
              style={opacity}
              onPointerOver={() => setContainer({opacity:1})}
              onPointerOut={() => setContainer({opacity:0})}
            >Visit</animated.a>
          </>
        }
      </div>
      <div className='project-info'>
        <p>
          {text}
        </p>
        <img src={eyeIcon} alt={`Click for more info on ${text}`}/>
      </div>
    </animated.div>
  )
}

export default Project