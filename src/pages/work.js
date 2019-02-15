import React, { Component} from 'react'
import styled from 'styled-components'

import WorkItem from './../components/workItem' 

const WorkPageView = styled.div`
#work {
  .work-container {
    font-family: 'Questrial', sans-serif;
    width: 100%;
    margin: 0px auto;
    position: relative;
    top:0px;
    padding: 0px 0px 0px;
    box-sizing: border-box;
    background: #fff;
    @media(max-width:480px) {
      padding: 50px 15px 20px;
      top: 10px;
    }
  }
`

class WorkPage extends Component {
  
  render(){
    const height = window.innerHeight;
    const width = window.innerWidth;
    
    return (
      <WorkPageView>
        <div id="work" className="page">
          <div className="title-container">
            <h1>What I did before</h1>
          </div>  
          <div className="work-container">
            <WorkItem bg={'255, 255, 255'} opacity={'0'} height={height} width={width}></WorkItem>
            <WorkItem bg={'255,175,32'} opacity={'1'} height={height} width={width}></WorkItem>
            <WorkItem bg={'16,69,91'} opacity={'1'} height={height} width={width}></WorkItem>
            <WorkItem bg={'255,115,80'} opacity={'1'} height={height} width={width}></WorkItem>
          </div>        
        </div>
      </WorkPageView>
     )
  }
}

export default WorkPage