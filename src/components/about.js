import React from 'react'

import Section from '../components/section'
import SectionHeader from './sectionheader'
import InfoContainer from '../components/infocontainer'
import Tag from '../components/tag'
import Card from '../components/card'

import smileIcon from '../images/smile.svg'

const technologies = [
  'HTML5', 'CSS3','JavaScript', 'Bootstrap', 'SCSS', 'JQuery', 'React', 'Node.js', 'MongoDB'
]

function About(){
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
              Some sample text. Some sample text. Some sample text. 
              Some sample text. Some sample text. Some sample text. 
              Some sample text. Some sample text. Some sample text. 
              Some sample text. Some sample text. Some sample text. 
              Some sample text. Some sample text. Some sample text. 
              Some sample text. Some sample text. Some sample text. 
              Some sample text. Some sample text. Some sample text. 
              Some sample text.
            </p>
          </InfoContainer>
          <InfoContainer small={true}>
            <h3>
              Technologies I use are,
            </h3>
            {technologies.map((tech, index) => <Tag text={tech} key={index}/>)}
          </InfoContainer>
          <InfoContainer>
            <h3>
              I have:
            </h3>
            <div style={{display:'flex', flexWrap:'wrap', justifyContent:'flex-start', alignItems:'flex-start'}}>
              <Card icon={smileIcon} text='4 happy clients'/>
              <Card icon={smileIcon} text='Hey'/>
              <Card icon={smileIcon} text='Hey'/>
              <Card icon={smileIcon} text='Hey'/>
              <Card icon={smileIcon} text='Hey'/>
              <Card icon={smileIcon} text='Hey'/>
              <Card icon={smileIcon} text='Hey'/>
              <Card icon={smileIcon} text='Hey'/>
            </div>
          </InfoContainer>
        </div>
      </Section>
  )
}

export default About