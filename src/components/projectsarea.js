import React, {useState} from 'react'
import {useStaticQuery, graphql} from 'gatsby'

import Section from './section'
import Button from './button'
import SectionHeader from '../components/sectionheader'
import Projects from './projects'

import codeIcon from '../images/code.svg'

function ProjectsArea(){

  const [projectNum, setProjectNum] = useState(4)

  let data = useStaticQuery(graphql`
  query Projects{
    allProjectsJson {
      nodes {
          name
          slug
          href
          img {
            publicURL
          }
      }
    }
  }
  `)

  function onClick(e){
    e.preventDefault()
    setProjectNum(prevState => prevState + 4)
  }


  return(
    <Section id='projects'>
      <SectionHeader text='My Projects'/>
      <p>Some of my work</p>
      <Projects data={data} projectNum={projectNum}/>
      <Button 
        onClick={onClick}
        to='#' 
        text='See More' 
        icon={codeIcon} 
        style={{marginLeft:'auto'}}
      />
    </Section>
  )
}

export default ProjectsArea