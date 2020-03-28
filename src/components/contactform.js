import React, {useState} from 'react'
import {animated, useSpring} from 'react-spring'
import validate from 'validate.js'

import Button from './button'
import './contactform.css'

import sendIcon from '../images/send.svg'
import notDone from '../images/notdone.svg'
import done from '../images/done.svg'
import loading from '../images/loading.svg'

function ContactForm(){

  const [focused, setFocused] = useState(false)
  const [form, setForm] = useState({})
  const [inputValid, setInputValid] = useState({})
  const [formValid, setFormValid] = useState()
  const [formMessage, setFormMessage] = useState()
  const [formStatus, setFormStatus] = useState('')
  const [resetAnim, setResetAnim] = useState()


  const scale = useSpring({transform: focused ? 'scale(1.1)' : 'scale(1)'})
  const [shake, setShake, stopShake] = useSpring(() => ({
    reset:true,
    config:{
    tension:1000,
    friction:4,
    mass:1,
  }}))
  const rotate = useSpring(
  {from:{transform:'rotate(0deg)'} ,
  to:{transform:'rotate(360deg)'},
  onRest:() => {
    setResetAnim(true)
  },
  onStart:() => {
    setResetAnim(false)
  },
  reset:resetAnim})

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
        message:'must be at least 10 characters'
      }
    }
  }

  const formConstraints = {
    name:{
      presence:true,
      length:{
        minimum:3,
        message:"must be at least 3 characters"       
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
        message:'must be at least 10 characters'
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
      setInputValid((prevState) => {
        return{
          ...prevState,
          [name]:false
        }
      })
    }else if(validatedInfo == undefined){
      setInputValid((prevState) => {
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
      setFormStatus('loading')
      postFormData('https://server-personal-use.herokuapp.com/contact', form)
      .then(data =>{
        setFormStatus('success')
        setFormMessage(data.message)
        setFormStatus('success')
        setForm({name:'', email:'', message:''})
      } 
      ).catch(e => {
        setFormStatus('error')
        setFormMessage('There was an error')  
        }
        )
    }else{
      let string = '';
      console.log(validatedInfo)
      Object.values(validatedInfo).forEach(message => string = string + message + '. ')
      setFormMessage(string)
      setFormStatus('error')
      setShake({
        from:{transform:'translateX(-20px)'},
        to:{transform:'translateX(0px)'}
      })
    }
  }

  return(
    <animated.div style={shake}>
      <animated.form style={scale} className='contact-form'>
        <input 
          type='text' 
          name='name' 
          value={form.name}
          placeholder='Name' 
          className={
            inputValid.name === false && 'not-valid' 
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
          value={form.email}
          placeholder='Email' 
          className={
            inputValid.email === false && 'not-valid' 
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
          value={form.message}
          placeholder='Message' 
          className={
            inputValid.message === false && 'not-valid' 
          }
          onFocus={() => setFocused(true)} 
          onBlur={(e) => {
            setFocused(false);
            checkValidationInput(e)
          }}
          onChange={(e) => changeHandler(e)}
        ></textarea>
        <div style={{display:'flex',alignItems:'center'}}>
          {formStatus === 'success' && <img className='status-icon' src={done} alt='Form status success'/>}
          {formStatus === 'loading' && <animated.img style={rotate}  className='status-icon' src={loading} alt='Form status loading'/>}
          {formStatus === 'error' && <img className='status-icon' src={notDone} alt='Form status error'/>}
          <Button text='Send' icon={sendIcon} onClick={checkValidationForm} style={{marginLeft:'auto'}}/>
        </div>
        {formMessage &&
          <p style={{textAlign:'center'}}>{formMessage}</p>
        }
      </animated.form>
    </animated.div>
  )
}

export default ContactForm