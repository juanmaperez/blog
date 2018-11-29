import React, { Component} from 'react'
import './../styles/index.scss'
import Layout from '../components/layout'

class AboutPage extends Component {

  
  
  render(){
    let close = 'close';
    function changeValueClose() {
      console.log('hey');
      close = close === 'close' ? '' : 'close';
    }

    return (
      <Layout>
        
        <div className="main-page about">
          <div className="content {{close}}">
            <span>Here goes the content for about</span><br/>
            <button onClick={changeValueClose()}>btn</button>

          </div>
          <div className="aside {{close}}">
            <span>Here goes the content for about</span><br/>
            <button onClick={changeValueClose()}>btn</button>

          </div>
        </div>
      </Layout>
     )
    }
}

export default AboutPage