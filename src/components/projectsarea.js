import React from 'react'

import Section from './section'
import Button from './button'
import SectionHeader from '../components/sectionheader'
import Projects from './projects'

import codeIcon from '../images/code.svg'

function ProjectsArea(){
  return(
    <Section id='projects'>
      <SectionHeader text='My Projects'/>
      <p>Some of my work</p>
      <Projects/>
      <Button to='#' text='See More' icon={codeIcon} style={{marginLeft:'auto'}}/>
    </Section>
  )
}

export default ProjectsArea