import React, { Component } from 'react';
import styled from 'styled-components'
import CircularDisplay from './../components/circularDisplay'
import Techs from './../components/techs';
import './../styles/index.scss'

const IndexView = styled.div`
  #index {
    .index-container {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      position: relative;
      top: 140px;
      padding: 20px 40px
    }
    .description-left {
      margin-top: 150px;
      font-family: 'Questrial';
      font-size: 80px;
      font-weight: bolder;
      -webkit-text-stroke: 0.5px #000;
      color: #fff;
      .techs-line {
        margin-top: 10px;
        img {
          width: 60px;
          filter: grayscale(100%);
        }
      }
    }
  }
`

class IndexPage extends Component {

  render(){
    return (
      <IndexView>
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
      </IndexView>
     )
  }
}

export default IndexPage