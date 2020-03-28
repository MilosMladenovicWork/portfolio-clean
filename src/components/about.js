import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'

import Section from '../components/section'
import SectionHeader from '../components/sectionheader'
import InfoContainer from '../components/infocontainer'
import Tag from '../components/tag'
import Card from '../components/card'

import smileIcon from '../images/smile.svg'

const technologies = [
  'HTML5', 'CSS3','JavaScript', 'Bootstrap', 'SCSS', 'JQuery', 'React', 'Node.js', 'MongoDB'
]

function About(){

  const data = useStaticQuery(graphql`
    query{
      dataJson{
          description
          technologies
          special{
            icon{
              publicURL
            }
            text
        }
      }
    }
  `)

  return(
    <Section id='about'>
        <SectionHeader text='About Me'/>
        <p>More information about me</p>
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'flex-start'}}>
          <InfoContainer small={true} dark={true}>
            <h3>
              My name is Milos Mladenovic,
            </h3>
            <p>
              {data.dataJson.description}
            </p>
          </InfoContainer>
          <InfoContainer small={true}>
            <h3>
              Technologies I use are,
            </h3>
            {data.dataJson.technologies.map((tech, index) => <Tag text={tech} key={index}/>)}
          </InfoContainer>
          <InfoContainer>
            <h3>
              I have:
            </h3>
            <div style={{display:'flex', flexWrap:'wrap', justifyContent:'flex-start', alignItems:'flex-start'}}>
              {data.dataJson.special.map((card, index) => <Card text={card.text} icon={card.icon.publicURL} index={index}/>)}
            </div>
          </InfoContainer>
        </div>
      </Section>
  )
}

export default About