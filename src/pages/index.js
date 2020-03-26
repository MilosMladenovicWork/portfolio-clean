import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from '../components/section'
import Background from '../components/background'
import HomeIllustration from '../components/homeillustration'
import Button from '../components/button'
import SectionHeader from '../components/sectionHeader'
import InfoContainer from '../components/infocontainer'
import Tag from '../components/tag'
import Card from '../components/card'

import codeIcon from '../images/code.svg'
import contactIcon from '../images/contact.svg'
import smileIcon from '../images/smile.svg'

const technologies = [
  'HTML5', 'CSS3','JavaScript', 'Bootstrap', 'SCSS', 'JQuery', 'React', 'Node.js', 'MongoDB'
]

const projects = [
  'MovieZone', 'MovieZone', 'MovieZone', 'MovieZone'
]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Background>
      <Section>
        <div style={{display:'flex',height:'70vh'}}>
          <div style={{alignSelf:'center'}}>
            <p>Welcome,</p>
            <h1>I am Front End Web Developer</h1>
            <p>I develop clean, modern and responsive websites and applications with accent on loading speed.</p>
            <Button to='#' text='My Work' icon={codeIcon}/><br/>
            <Button to='#' text='Contact Me' icon={contactIcon}/>
          </div>
          <div>
            <HomeIllustration/>
          </div>
        </div>
      </Section>
    </Background>
      <Section>
        <SectionHeader text='About Me'/>
        <p>More information about me</p>
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between', alignItems:'flex-start'}}>
          <InfoContainer small={true} style={{backgroundColor:'#F3F3F3'}}>
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
      <Section>
        <SectionHeader text='My Projects'/>
        <p>Some of my work</p>
        <div>

        </div>
      </Section>
  </Layout>
)

export default IndexPage
