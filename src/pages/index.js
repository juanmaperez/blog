import React, { Component} from 'react'
import Layout from '../components/layout'
import Menu from './../components/menu'

import './../styles/index.scss' 

 class IndexPage extends Component {

  _isMounted = false;

  state = {
    status: null, 
  }

  componentDidMount(){
    this._isMounted = true;
  }

  changeValueClose = () => {
    if(this._isMounted){
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
  }
  
  render(){
    const { status } = this.state;
    return (
      <Layout>
        <div className="main-page index">
          <div className={'intro ' + status}>
            <div className="intro-container">
              <div className="row-top">

              </div>
              <div className="row-center" >
                <Menu location={this.props.location}/>
              </div>
              <div className="row-bottom">                
                <span className="intro-text">
                  INDEX ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae augue id mi lobortis aliquet vitae et sem. 
                  In fermentum ante sed turpis auctor finibus. Etiam sit amet leo eu arcu euismod ornare id pulvinar mauris. 
                  Ut sagittis et urna et efficitur. Morbi porttitor lobortis accumsan. Curabitur hendrerit consequat dignissim.
                </span>
                <button className="read-more" onClick={this.changeValueClose}>Read More</button>
              </div>

            </div>
          </div>
          <div className={'content ' + status}>
            <div className="close-btn" onClick={this.changeValueClose}>X</div>
            <div className='content-container'>
            
            
            </div>
          </div>
        </div>
      </Layout>
     )
    }
}

export default IndexPage
