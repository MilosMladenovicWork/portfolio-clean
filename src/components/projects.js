import React from 'react'

import Project from './project'

import testImg from '../images/testImg.png'


const projects = [
  'MovieZone', 'MovieZone', 'MovieZone', 'MovieZone'
]

function Projects(){
  return(
    <div style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
      <Project text='test' img={testImg}/>
      <Project text='test' img={testImg}/>
      <Project text='test' img={testImg}/>
      <Project text='test' img={testImg}/>
    </div>
  )
}

export default Projects