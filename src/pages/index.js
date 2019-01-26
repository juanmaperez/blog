import React, { Component } from 'react';
import CircularDisplay from './../components/circularDisplay'

import './../styles/index.scss'

class IndexPage extends Component {
  
  render(){
    return (
        <div id="index">
          <div className="title-container">
            <h1>Nice to meet you,</h1>
          </div>
          <CircularDisplay></CircularDisplay>
        </div>
     )
  }
}

export default IndexPage