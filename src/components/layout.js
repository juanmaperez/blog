import React from 'react'
import PropTypes from 'prop-types'

import Menu from './menu';


import Header from './header'
import './layout.scss'

const Layout = ({ children }) => (   
        <div className="wrapper">
          <Header siteTitle={'Juanma Perez'} />
          <Menu />
          {children}
        </div>
    )

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
