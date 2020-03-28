import React, {useState} from 'react'
import {animated, useSpring} from 'react-spring'

import Button from './button'
import './contactform.css'

import sendIcon from '../images/send.svg'

function ContactForm(){

  const [focused, setFocused] = useState(false)

  const scale = useSpring({transform: focused ? 'scale(1.1)' : 'scale(1)'})

  return(
    <animated.form style={scale} className='contact-form'>
      <input type='text' name='name' placeholder='Name' onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}/>
      <input type='email' name='email' placeholder='Email' onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}/>
      <textarea name='message' placeholder='Message' onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}></textarea>
      <Button to='#' text='Send' icon={sendIcon} style={{marginLeft:'auto'}}/>
    </animated.form>
  )
}

export default ContactForm