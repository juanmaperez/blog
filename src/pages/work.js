import React, { Component} from 'react'
import styled from 'styled-components'

import WorkItem from './../components/workItem' 

const works = [  
  { title: 'Australis', description: 'Maecenas justo nisi, condimentum eu eros sit amet, pellentesque maximus dolor. Quisque facilisis orci nisi.', bg: 'f4f2ec', color: '0e3746',  img: 'australis'},
  { title: 'Colossus Bets', description: 'Ut in gravida purus. Etiam et congue lacus, et consectetur arcu. Donec est justo, interdum sit amet.', bg: 'be2623', color: 'f4f2ec', img: 'colossus'},
  { title: 'Umaicha', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a nisl ac ligula volutpat tincidunt.', bg: 'eae8dc', color: '0e3746', img: 'umaicha'},
  { title: 'Oysho', description: 'Quisque in faucibus risus, eget ultrices sapien. Donec euismod consequat nibh non aliquet. ', bg: '0e3746', color: 'f4f2ec', img: 'oysho'}]

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
    @media(max-width:480px) {
      padding: 0px;
      top: 0px;
    }
  }
  .title-container {
    h1 {

    }
  }
}
`

class WorkPage extends Component {

  state = { 
    height: 0,
    width: 0
  }

  componentDidMount(){
    this.resize();
    window.addEventListener('resize', this.resize.bind(this))
  }

  resize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.setState({height, width})
  }
  
  componentWillUnmount(){
    window.removeEventListener('resize', this.resize.bind(this))
  }

  render(){
    const {height, width} = this.state;
    
    return (
      <WorkPageView>
        <div id="work" className="page">
          <div className="title-container">
            <h1>What I did before</h1>
          </div>  
          <div className="work-container">
            { works.map((work, index)=><WorkItem key={work.title} work={work} height={height} width={width}></WorkItem> )}
          </div>        
        </div>
      </WorkPageView>
     )
  }
}

export default WorkPage