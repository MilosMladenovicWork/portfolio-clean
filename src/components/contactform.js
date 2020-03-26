import React from 'react'

import Button from './button'
import './contactform.css'

import sendIcon from '../images/send.svg'

function ContactForm(){
  return(
    <form className='contact-form'>
      <input type='text' name='name' placeholder='Name'/>
      <input type='email' name='email' placeholder='Email'/>
      <textarea name='message' placeholder='Message'></textarea>
      <Button to='#' text='Send' icon={sendIcon} style={{marginLeft:'auto'}}/>
    </form>
  )
}

export default ContactForm