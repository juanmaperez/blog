import React, { Component} from 'react'
import Layout from '../components/layout'
import Menu from './../components/menu'

import './../styles/index.scss'

class AboutPage extends Component {

  state = {
    status: null, 
  }

  changeValueClose = () => {
    let { status } = this.state;
    if(status === null) {
      status = 'open';
    } else {
      status = status === 'open' ? 'close' : 'open';
    }
    this.setState(()=> ({
      status
    }))
  }
  
  render(){
    const { status } = this.state;
    return (
      <Layout>
        <div>
          <h1>About Page</h1>
          <p>About content</p>
        </div>
      </Layout>
     )
  }
}

export default AboutPage