import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './header.css'

const Header = ({section}) => (
  <header>
    <nav>
      <ul>
        <li className={section === 0 && 'active-section'}>
          <Link to='#home'>
            Home       
          </Link>
        </li>
        <li className={section === 1 && 'active-section'} >
          <Link to='#about'>
            About
          </Link>
        </li>
        <li className={section === 2 && 'active-section'}>
          <Link to='#projects'>
            Projects
          </Link>
        </li>
        <li className={section === 3 && 'active-section'}>
          <Link to='#contact'>
            Contact
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
