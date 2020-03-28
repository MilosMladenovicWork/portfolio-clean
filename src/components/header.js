// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, {useState, useEffect} from "react"
import {Link, animateScroll as scroll} from 'react-scroll'
import {animated, useSpring} from 'react-spring'

import HomeIcon from './homeicon'
import AboutIcon from './abouticon'
import ProjectsIcon from './projectsicon'
import ContactIcon from './contacticon'

import './header.css'

function Header({section}){

  const [urlPath, setUrlPath] = useState()
  const [showHeader, setShowHeader] = useState()

  const remove = useSpring({transform:showHeader ? 'translateY(0%)' : 'translateY(100%)'})

  useEffect(() => {
    setUrlPath(window.location.pathname)
  },[])
  
  useEffect(() => {
    if(urlPath){
      setShowHeader(!urlPath.match(/([^\/]+$)/gm))
    }
  }, urlPath)

  return(
    <animated.header style={remove}>
    <nav>
      <ul>
        <li>
          <Link to='home' smooth={true} duration={500}>
            <HomeIcon section={section}/>
            <p className={section === 0 && 'active-section'}>
              Home
            </p>       
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            <AboutIcon section={section}/>
            <p className={section === 1 && 'active-section'}>
              About
            </p>
          </Link>
        </li>
        <li>
          <Link to='projects' smooth={true} duration={500}>
            <ProjectsIcon section={section}/>
            <p className={section === 2 && 'active-section'}>
              Projects
            </p>
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            <ContactIcon section={section}/>
            <p className={section === 3 && 'active-section'}>
              Contact
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  </animated.header>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
