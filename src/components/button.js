import React from 'react'

import './button.css'

function Button({to:href, text, icon}){
  return(
    <a href={href} className='button'>
      <img src={icon} alt='button icon'/>
      {text}
    </a>
  )
}

export default Button