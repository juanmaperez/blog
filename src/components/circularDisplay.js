import React, { Component } from 'react'
import styled from 'styled-components'
// import TechDisplay from './techDisplay';
const CircularView = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  width: 100%;
  height: ${props => props.height}px;
  box-sizing: border-box;
  overflow: hidden;

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
    transition: width 1ms linear;
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
        @media(max-width:480px){
          font-size: 19vh;
          top: auto;
          bottom:10px;
          right: 40px;
          left:auto;
        }
      }
      .text-left {
        p {
          color: #141414;
          opacity: 0.8;
          -webkit-text-stroke: 2px #141414;

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
        font-size: 16vh;
        font-family: 'Mfred' !important;
        color: rgba(0,0,0, 0.2);
        z-index:3;
        @media(max-width:480px){
          font-size: 19vh;
          top: auto;
          bottom:10px;
          right: 40px;
          left:auto;
        }
      }
    }

    .text-left {
      flex: 1;
      position: fixed;
      top:160px;
      left: 40px;
      z-index: 2;
      p {
        font-size: 24vw;
        line-height: 80%;
        text-indent: -13px;
        margin: 0px;
        font-weight: bolder;
        padding: 0px;
        -webkit-text-stroke: 2px #141414;
        color: #fff;
      }
      @media(max-width:480px){
        left:30px;
        top:140px;
        p {
          font-size: 39vw;
        }  
      }
    }
    .circular-wrapper {
      position: fixed;
      right: 0px;
      top: 240px;
      border-radius: 50%;
      flex: 1;
      @media(max-width:480px){
        top: auto;
        bottom: -10px;
        left:-10px;
        right: auto;
        margin-right: -60px;
        p {
          font-size: 30vw;
        }  
      }

      .cover-me {
        border-radius: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-image: url("static/jp_brush.png");
        background-size: cover;
        background-position: center center;
        width: 45vw;
        height: 45vw;
      }
        
      .circular {
        border-radius: 50%;
        background-image: url("static/jp_brush_red.png");
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        margin-top: -2px;
        width: 45vw;
        height: 45vw;

      }
    }
  }

  .message-btn {
    position:absolute;
    z-index: 1000;
    bottom: 15px;
    left: 50%;
    text-align: center;
    font-family: 'Questrial';
    font-style: oblique;
    color: #999;
    text-align: center;
    font-size:12px;
    width: 100px;
    margin-left: -65px;
    display: flex;
    justify-content-center;
    text-align: center;
    p {
      text-align: center;
      margin-top: 0px;
      margin-bottom: 0px;
      width: 100%;
    }
    @media(max-width:480px){
      bottom: 0px;
    }

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
    counter: 0,
    complete: false
  }

  componentDidMount(){
    
    const circular = document.querySelector('.index-container');
    if(circular){
      circular.addEventListener("mousedown", this.checkPressingDown, false);
      circular.addEventListener("mouseup", this.checkPressingDown, false);
      circular.addEventListener("mouseleave", this.checkPressingDown, false);
   
      circular.addEventListener("touchstart", this.checkPressingDown, false);
      circular.addEventListener("touchend", this.checkPressingDown, false);
    }
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
    this.props.handleComplete()
  }
 

  render(){
    const {counter, complete} = this.state;
    const style = {'width': (counter + '%')}

    const height = window.innerHeight;

    return(
      <CircularView height={(height - 140)}>
          <div className="message-btn">
            { complete &&  <div className="mouse"><span className="scroll"></span></div>}
            { !complete && <p>Click and hold</p>}
          </div>
          <div style={style} className="curtain over">
            <div className="text-left">
              <p>DEV</p>
              <p>ELO</p>
              <p>PER</p>
            </div>
            {!complete && <div className="counter">
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
            <div className="counter">
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