import React from 'react'

import Section from '../components/section'
import Background from '../components/background'
import HomeIllustration from '../components/homeillustration'
import Button from '../components/button'

import codeIcon from '../images/code.svg'
import contactIcon from '../images/contact.svg'

function Home(){
  return(
    <Background>
      <Section id='home'>
        <div style={{display:'flex',height:'70vh'}}>
          <div style={{alignSelf:'center'}}>
            <p>Welcome,</p>
            <h1>I am Front End Web Developer</h1>
            <p>I develop clean, modern and responsive websites and applications with accent on loading speed.</p>
            <Button to='#projects' text='My Work' icon={codeIcon}/><br/>
            <Button to='#contact' text='Contact Me' icon={contactIcon}/>
          </div>
          <div>
            <HomeIllustration/>
          </div>
        </div>
      </Section>
    </Background>
  )
}

export default Home