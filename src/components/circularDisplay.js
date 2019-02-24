import React, { Component } from 'react'
import styled from 'styled-components'
// import TechDisplay from './techDisplay';
const CircularView = styled.div`
  .curtain {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 0px;
    top: 0px;
    -webkit-clip-path: inset(0 0 0 0);
    clip-path: inset(0 0 0 0);
    height: 100%;
    background: #fff;
    border: 1px solid transparent;

    &.over {
      z-index: 2;
      .counter {
        position: fixed;
        top: 50%;
        left:50%;
        text-transform: uppercase;
        font-size: 240px;
        margin-top: -80px;
        font-family: 'Mfred' !important;
        color: salmon;
        z-index:3;
      }
      .text-left {
        p {
          color: #141414;
          opacity: 0.8;
        }
      }
    }
    &.below {
      width: 100%;
      z-index: 1;
      .counter {
        position: fixed;
        top: 50%;
        left:50%;
        text-transform: uppercase;
        font-size: 240px;
        margin-top: -80px;
        font-family: 'Mfred' !important;
        color: rgba(0,0,0, 0.2);
        z-index:3;

      }
    }

    .text-left {
      flex: 1;
      position: fixed;
      left: 40px;
      top: 160px;
      z-index: 2;
      p {
        font-size: 20vw;
        line-height: 27vh;
        text-indent: -13px;
        margin: 0px;
        font-weight: bolder;
        padding: 0px;
        -webkit-text-stroke: 2px #141414;
        color: #fff;
      }
    }
    .circular-wrapper {
      position: fixed;
      right: 0px;
      top: 240px;
      border-radius: 50%;
      flex: 1;

      .cover-me {
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: url("static/jp_brush.png");
        background-size: cover;
        background-position: center center;
        width: 70vh;
        height: 70vh;
      }
        
      .circular {
        border-radius: 50%;
        background-image: url("static/jp_normal.png");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        margin-top: -2px;
        width: 70vh;
        height: 70vh;
      }
    }
  }

  .message-btn {
    position:absolute;
    z-index: 1000;
    bottom: 15px;
    font-family: 'Questrial';
    font-style: oblique;
    color: #999;
    text-align: center;

    .mouse {
      display: block;
      width: 18px;
      height: 28px;
      border-radius: 11px 11px 15px 15px;
      border: 1px solid #141414;
      margin-top: -24px;
  
      @media(max-width: 480px){
        width: 15px;
        height: 22px;
      }
  
      span.scroll {
        display: block;
        margin: 6px auto;
        width: 1px;
        height: 3px;
        border-radius: 4px;
        background: #141414;
        border: 1px solid transparent;
        -webkit-animation-duration: 2s;
        animation-duration: 2s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-name: scroll;
        animation-name: scroll;
      }
  }
 

  }
`

class CircularDisplay extends Component {
  
  pressHoldDuration = 100;
  timer;
  state = {
    wh: 0,
    counter: 0,
    complete: false
  }

  componentDidMount(){
    const wh = window.innerHeight;
    this.setState(()=>({
      wh
    }))

    const circular = document.querySelector('.index-container');
    if(circular){
      circular.addEventListener("mousedown", this.checkPressingDown, false);
      circular.addEventListener("mouseup", this.checkPressingDown, false);
      circular.addEventListener("mouseleave", this.checkPressingDown, false);
   
      circular.addEventListener("touchstart", this.checkPressingDown, false);
      circular.addEventListener("touchend", this.checkPressingDown, false);
    }

    window.addEventListener('resize', (e) =>{
      const wh = window.innerHeight;
      if(circular){
        this.setState(()=>({
          wh
        }))
      }
    })
  }

  checkPressingDown = (e) => {
    if(e.type !== 'touchstart' && e.type !== 'mousedown') {
      this.resetCounter()
    } else {
      this.timer = setInterval(()=> {
        this.updateCounter()
      }, 40)
    }
  }

  resetCounter = () => {
    const { complete } = this.state;
    if(!complete) {
      clearInterval(this.timer);
      this.setState(()=>({
        counter: 0
      }))
    }
  }

  updateCounter = () => {
    const {counter, complete} = this.state;
    if (!complete && counter < 100){
      this.setState((prevState, { counter }) => ({
        counter: prevState.counter + 1
      }));
    } else {
      this.completeCounter();
    }
  }
  completeCounter(){
    let { complete } = this.state;
    if (complete) return;
    complete = true;
    clearInterval(this.timer);
    this.setState(()=>({ complete }))
  }
 

  render(){
    const {counter, complete} = this.state;
    const style = {'width': (counter + '%')}

    return(
      <CircularView>
        <div className="message-btn">
          { complete &&  <div className="mouse"><span className="scroll"></span></div>}
          { !complete && 'Click and hold'}
        </div>
        <div style={style} className="curtain over">
          <div className="text-left">
            <p>DEV</p>
            <p>ELO</p>
            <p>PER</p>
          </div>
          {!complete && <div class="counter">
            {counter}
          </div>}
          <div className="circular-wrapper">
            <div className="circular">
            </div>
          </div>
          
        </div>
        <div className="curtain below">
          <div className="text-left">
            <p>DEV</p>
            <p>ELO</p>
            <p>PER</p>
          </div>
          <div class="counter">
            {counter}
          </div>
          <div className="circular-wrapper">
            <div className="cover-me" >
          
            </div>
          </div>
        </div>
      </CircularView>
    )
  }
}

export default CircularDisplay