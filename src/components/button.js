import React from 'react'

import './button.css'

function Button({to:href, text, icon, style, onClick, target}){
  return(
    <a 
      href={href} 
      className='button' 
      style={style}
      onClick={(e) => onClick && onClick(e)}
      target={target ? target : '_self'}
    >
      <img src={icon} alt='button icon'/>
      {text}
    </a>
  )
}

export default Button