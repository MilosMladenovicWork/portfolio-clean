import React from 'react'

import './button.css'

function Button({to:href, text, icon, style}){
  return(
    <a href={href} className='button' style={style}>
      <img src={icon} alt='button icon'/>
      {text}
    </a>
  )
}

export default Button