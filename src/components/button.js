import React from 'react'

import './button.css'

function Button({to:href, text, icon, style, onClick}){
  return(
    <a 
      href={href} 
      className='button' 
      style={style}
      onClick={(e) => onClick(e)}
    >
      <img src={icon} alt='button icon'/>
      {text}
    </a>
  )
}

export default Button