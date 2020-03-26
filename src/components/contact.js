import React from 'react'

import Section from './section'
import SectionHeader from '../components/sectionheader'
import ContactForm from './contactform'

function Contact(){
  return(
    <Section id='contact'>
      <SectionHeader text='Contact Me'/>
      <p>Let's get in touch</p>
      <ContactForm/>
    </Section>
  )
}

export default Contact