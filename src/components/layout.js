import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (   
        <div className="wrapper">
          <Header siteTitle={'Juanma Perez'} />  
          {children}
        </div>
    )

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
