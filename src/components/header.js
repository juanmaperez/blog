import React from 'react'
import { Link } from 'gatsby'

import './../styles/header.scss'

const Header = ({ siteTitle, status }) => (
  <div className="header">
    <div
      className="sub-header"> 
      <span className="title">
        <Link className={"link " + status} to="/">
          {siteTitle}
        </Link>
      </span>
    </div>
  </div>
)

export default Header
