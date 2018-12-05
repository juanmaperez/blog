import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Menu from './menu'

import './../styles/index.scss'
import './../styles/layout.scss'

class Layout extends Component {
  state = {
    status: null
  }

  constructor(props){
    super(props)
  }

  changeValueClose = () => {
    let { status } = this.state;
    status = status === null || status === 'close' ? 'open' : 'close'
    this.setState(()=> ({
      status
    }))
  }

  render(){
    const { status } = this.state;
    return (
      <div className="wrapper">
        <Header className="header-wrapper" siteTitle={'Juanma Perez'} />
        
        <div className="main-page">
          <div className={'intro ' + status}>
            <div className="intro-container">
              <div className="row-top">

              </div>
              <div className="row-center" >
                <Menu location={this.props.location }/>
              </div>
              <div className="row-bottom">                
                <span className="intro-text">
                  { this.props.intro }
                </span>
                <button className="read-more" onClick={this.changeValueClose}>Read More</button>
              </div>

            </div>
          </div>
          <div className={'content ' + status}>
            <div className="close-btn" onClick={this.changeValueClose}>X</div>
            <div className='content-container'>
              { this.props.children }
            </div>
          </div>
        </div>
      </div>
    )
    
  }
} 

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  intro: PropTypes.string.isRequired
}

export default Layout
