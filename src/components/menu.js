import React from 'react';
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Menu = () => (
  <div className="menu-wrapper">
    <div className="menu-container">
      <ul>
        <li className="menu-link"><Link to="/"/>Hi, there</li>
        <li className="menu-link"><Link to="/about"/>About</li>
        <li className="menu-link"><Link to="/work"/>Work</li>
        <li className="menu-link"><Link to="/blog"/>Blog</li>
        <li className="menu-link"><Link to="/contact"/>Contact</li>
      </ul>
    </div>
  </div>
)

export default Menu
