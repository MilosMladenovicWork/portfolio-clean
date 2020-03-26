import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './header.css'

const Header = ({section}) => (
  <header>
    <nav>
      <ul>
        <li>
          <a href='#home' className={section === 0 && 'active-section'}>
            Home
          </a>
        </li>
        <li>
          <a href='#about' className={section === 1 && 'active-section'} >
            About
          </a>
        </li>
        <li>
          <a href='#projects' className={section === 2 && 'active-section'}>
            Projects
          </a>
        </li>
        <li>
          <a href='#contact' className={section === 3 && 'active-section'}>
            Contact
          </a>
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
