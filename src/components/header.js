import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import HomeIcon from './homeicon'
import AboutIcon from './abouticon'
import ProjectsIcon from './projectsicon'
import ContactIcon from './contacticon'

import './header.css'

const Header = ({section}) => (
  <header>
    <nav>
      <ul>
        <li>
          <Link to='#home'>
            <HomeIcon section={section}/>
            <p className={section === 0 && 'active-section'}>
              Home
            </p>       
          </Link>
        </li>
        <li>
          <Link to='#about'>
            <AboutIcon section={section}/>
            <p className={section === 1 && 'active-section'}>
              About
            </p>
          </Link>
        </li>
        <li>
          <Link to='#projects'>
            <ProjectsIcon section={section}/>
            <p className={section === 2 && 'active-section'}>
              Projects
            </p>
          </Link>
        </li>
        <li>
          <Link to='#contact'>
            <ContactIcon section={section}/>
            <p className={section === 3 && 'active-section'}>
              Contact
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
