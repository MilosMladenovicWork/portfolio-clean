import React from 'react'

import './infoContainer.css'

function InfoContainer({children, small, style}){
  return(
    <div className={small ? `info-container half` : `info-container`} style={style}>
      {children}
    </div>
  )
}

export default InfoContainer