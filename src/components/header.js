import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div className="header">
    <div
      className="sub-header"> 
      <span className="title">
        <Link className="link" to="/">
          {siteTitle}
        </Link>
      </span>
    </div>
  </div>
)

export default Header
