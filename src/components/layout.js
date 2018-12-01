import React from 'react'
import PropTypes from 'prop-types'

import Header from './header'

import './../styles/layout.scss'

const Layout = ({ children }) => (   
        <div className="wrapper">
          <Header className="header-wrapper" siteTitle={'Juanma Perez'} />

          {children}
        
        </div>
    )

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
