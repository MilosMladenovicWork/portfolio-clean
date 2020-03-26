import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import './header.css'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li>
          <a href='#'>
            Home
          </a>
        </li>
        <li>
          <a href='#'>
            About
          </a>
        </li>
        <li>
          <a href='#'>
            Projects
          </a>
        </li>
        <li>
          <a href='#'>
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
