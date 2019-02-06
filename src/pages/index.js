import React, { Component } from 'react';
import CircularDisplay from './../components/circularDisplay'
import Techs from './../components/techs';

import './../styles/index.scss'

class IndexPage extends Component {

  render(){
    return (
        <div id="index" className="page">
          <div className="title-container">
            <h1>Nice to meet you,</h1>
          </div>
          <div className="index-container">
            <div className="description-left">
              I'm Front End Developer <br/>
              working at ColossusBets <br/>
              born in Seville <br/>
              built up in Barcelona <br/>
              and based in London <br/>
              <Techs></Techs>
            </div>
            <CircularDisplay></CircularDisplay>
          </div>
        </div>
     )
  }
}

export default IndexPage