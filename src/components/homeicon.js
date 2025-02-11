import React from 'react'

function HomeIcon({section}){
  return(
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
      <path fill={section === 0 ? '#3B8BEA' : '#4E4E4E'} d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      <path d="M0 0h24v24H0z" fill="none"/>
    </svg>
  )
}

export default HomeIcon