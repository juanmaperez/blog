import React, { Component} from 'react'
import styled from 'styled-components'

import WorkItem from './../components/workItem' 

const works = [  
  { title: 'Australis', description: 'Maecenas justo nisi, condimentum eu eros sit amet, pellentesque maximus dolor. Quisque facilisis orci nisi.', bg: '255, 255, 255', opacity: '1',  img: 'australis'},
  { title: 'Colossus Bets', description: 'Ut in gravida purus. Etiam et congue lacus, et consectetur arcu. Donec est justo, interdum sit amet.', bg: '255,175,32', opacity: '1', img: 'colossus'},
  { title: 'Umaicha', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a nisl ac ligula volutpat tincidunt.', bg: '16,69,91', opacity: '1', img: 'umaicha'},
  { title: 'Oysho', description: 'Quisque in faucibus risus, eget ultrices sapien. Donec euismod consequat nibh non aliquet. ', bg: '255,115,80', opacity: '1', img: 'oysho'}]

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
            { works.map(work=><WorkItem key={work.title} work={work} height={height} width={width}></WorkItem> )}
          </div>        
        </div>
      </WorkPageView>
     )
  }
}

export default WorkPage