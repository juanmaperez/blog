import React, { Component} from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

import './../styles/index.scss'

class NotFoundPage extends Component {


  render(){
    return (
      <Layout>
        <div className="main-page notFound">
          <div className="intro">
            <div className="intro-container">
              <div className="row-top">

              </div>
              <div className="row-center" >
              </div>
              <div className="row-bottom">                
                <span className="intro-text">
                <h1>NOT FOUND</h1>
                <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
                </span>
                <button className="read-more"><Link to='/' />Go home</button>
              </div>

            </div>
          </div>
        </div>
      </Layout>
     )
    }
}

export default NotFoundPage