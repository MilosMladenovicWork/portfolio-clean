import React, {useState} from 'react'
import { graphql } from 'gatsby'
import {animated, useSpring} from 'react-spring'

import Layout from '../components/layout'
import Section from '../components/section'
import SectionHeader from '../components/sectionheader'
import InfoContainer from '../components/infocontainer'
import Tag from '../components/tag'
import Card from '../components/card'
import Button from '../components/button'

import smileIcon from '../images/smile.svg'
import visitIcon from '../images/visit.svg'
import backArrow from '../images/arrowback.svg'

import './projectpage.css'


function Project({data}){

  const project = data.allProjectsJson.nodes[0]

  const [imageHovered, setImageHovered] = useState(false)

  const imageShrink = useSpring({
    transform: imageHovered ? 'scale(1)' : 'scale(0.8)', 
    zIndex:imageHovered ? 2 : 0
  })

  const informationMove = useSpring({
    from:{
      transform:'translateY(-15vh) scale(1)'
    },
    to:[
    {transform:'translateY(-15vh) scale(1)'},
    {transform:'translateY(5vh) scale(1)'},
    {transform:'translateY(-15vh) scale(1)'}
  ]})

  return(
    <Layout>
      <Section>
        <SectionHeader text={project.name}/>
        <div className='back-arrow'>
            <img onClick={() => window.history.back()} src={backArrow} alt='Go back'/>
        </div>
        <div className='project-image-container'>
          <animated.img 
            className='project-image' 
            src={project.img.publicURL} 
            alt={`${project.name} image`}
            onPointerOver={() => setImageHovered(true)}
            onPointerOut={() => setImageHovered(false)}  
            style={imageShrink}
          />
        </div>
        <animated.div className='project-information' style={informationMove}>
          <InfoContainer small={true} dark={true}>
              <h3>
                Description:
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
                Technologies used:
              </h3>
              {project.technologies.map((tech, index) => <Tag text={tech} key={index}/>)}
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
            <div style={{marginLeft:'auto'}}>
              <Button 
                to={project.href}
                text={'Visit'}
                icon={visitIcon}
                target='_blank'
              />
            </div>
        </animated.div>
      </Section>
    </Layout>
  )
}

export const query = graphql`
query($slug: String!) {
  allProjectsJson(filter: {slug: {eq: $slug}}) {
    nodes{
      name
      href
      img {
        publicURL
      }
      technologies
    }
  }
}
`


export default Project