import React, { Component } from 'react';
import styled from 'styled-components'
import CircularDisplay from './../components/circularDisplay'
import './../styles/index.scss'

const IndexView = styled.div`
  #index {
    .index-container {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items:center;
      padding: 0px 40px;
      height: 100%;
      box-sizing: border-box;
      min-height: ${props => props.height - 140 }px;
      @media(max-width:480px){
        padding:0px;
      }
    }
  }
`

class IndexPage extends Component {
  state = {
    complete: false
  }

  completeState = () => {
    this.setState(()=>({
      complete: true
    }))
  }

  render(){
    const height = window.innerHeight;
    return (
      <IndexView height={height}>
        <div id="index" className="page">
          <div className="title-container">
            <h1>I'M front End</h1>
          </div>
          <div className="index-container">
            <CircularDisplay handleComplete={this.completeState}></CircularDisplay>

          </div>

        </div>
      </IndexView>
     )
  }
}

export default IndexPage