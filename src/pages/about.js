import React, { Component} from 'react'
import './../styles/index.scss'
import Layout from '../components/layout'

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
        {/* <div className="main-page about">
          <div className={'chocolate ' + close}>
            <span>Here goes the left content for about</span><br/>
            <button onClick={this.changeValueClose}>btn</button>

          </div>
          <div className={'teal ' + close}>
            <span>Here goes the right content for about</span><br/>
            <button onClick={this.changeValueClose}>btn</button>
          </div>
        </div> */}
          <div className="main-page about">
          <button onClick={this.changeValueClose}>btn</button>
          <div className={'chocolate ' + status}>
            <span className='span-content'>Here goes the left content for about</span>
          </div>
          <div className={'teal ' + status}>
            <span className='span-content'>Here goes the right content for about</span>
          </div>
        </div>
      </Layout>
     )
    }
}

export default AboutPage