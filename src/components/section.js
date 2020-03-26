import React from 'react'

import './section.css'

function Section({children, id}){
  return(
    <section id={id}>
      {children}
    </section>
  )
}

export default Section