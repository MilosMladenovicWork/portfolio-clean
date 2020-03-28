import React, {useState} from 'react'
import {animated, useSpring} from 'react-spring'
import validate from 'validate.js'

import Button from './button'
import './contactform.css'

import sendIcon from '../images/send.svg'

function ContactForm(){

  const [focused, setFocused] = useState(false)
  const [form, setForm] = useState({})
  const [formValid, setFormValid] = useState({})

  const scale = useSpring({transform: focused ? 'scale(1.1)' : 'scale(1)'})

  function changeHandler(e){
    let name = e.target.name
    let value = e.target.value
    setForm((prevState) => {
      return{
          ...prevState,
          [name]:value
        }
    })
  }

  const nameConstraint = {
    name:{
      presence:true,
      length:{
        minimum:3,
        message:"Name must be at least 3 characters!"       
      }
    }
  }

  const emailConstraint = {
    email:{
      presence:true,
      email:true
    }
  }

  const messageConstraint = {
    message:{
      presence:true,
      length:{
        minimum:10,
        message:'Message must be at least 10 characters!'
      }
    }
  }

  const formConstraints = {
    name:{
      presence:true,
      length:{
        minimum:3,
        message:"Name must be at least 3 characters!"       
      }
    },
    email:{
      presence:true,
      email:true
    },
    message:{
      presence:true,
      length:{
        minimum:10,
        message:'Message must be at least 10 characters!'
      }
    }
  }

  function checkValidationInput(e){
    let constraint;
    
    let name = e.target.name
    if([name] == 'name'){
      constraint = nameConstraint
    }
    else if([name] == 'email'){
      constraint = emailConstraint
    }
    else if([name] == 'message'){
      constraint = messageConstraint
    }

    let validatedInfo = validate(
      {[name]:e.target.value}, 
      constraint
      );

    if(validatedInfo != undefined){
      setFormValid((prevState) => {
        return{
          ...prevState,
          [name]:false
        }
      })
    }else if(validatedInfo == undefined){
      setFormValid((prevState) => {
        return{
          ...prevState,
          [name]:true
        }
      })
    }
  }

  async function postFormData(url, data){
    let response = await fetch(url, {
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      method:'POST',
      mode:'cors',
      body:JSON.stringify({
        name:data.name,
        email:data.email,
        message:data.message
      })
    })

    return response.json()
  }

  function checkValidationForm(){
    let validatedInfo = validate({name:form.name, email:form.email, message:form.message}, formConstraints)
    if(validatedInfo == undefined){
      postFormData('https://server-personal-use.herokuapp.com/contact', form)
    }else{
      window.alert('nope')
    }
  }

  return(
    <animated.form style={scale} className='contact-form'>
      <input 
        type='text' 
        name='name' 
        placeholder='Name' 
        className={
          formValid.name === false && 'not-valid' 
        }
        onFocus={() => setFocused(true)} 
        onBlur={(e) => {
          setFocused(false);
          checkValidationInput(e)
        }}
        onChange={(e) => changeHandler(e)}
      />
      <input 
        type='email' 
        name='email' 
        placeholder='Email' 
        className={
          formValid.email === false && 'not-valid' 
        }
        onFocus={() => setFocused(true)} 
        onBlur={(e) => {
          setFocused(false);
          checkValidationInput(e)
        }}
        onChange={(e) => changeHandler(e)}
      />
      <textarea 
        name='message' 
        placeholder='Message' 
        className={
          formValid.message === false && 'not-valid' 
        }
        onFocus={() => setFocused(true)} 
        onBlur={(e) => {
          setFocused(false);
          checkValidationInput(e)
        }}
        onChange={(e) => changeHandler(e)}
      ></textarea>
      <Button text='Send' icon={sendIcon} onClick={checkValidationForm} style={{marginLeft:'auto'}}/>
    </animated.form>
  )
}

export default ContactForm