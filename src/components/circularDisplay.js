import React, { Component } from 'react'
// import TechDisplay from './techDisplay';


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

    const circular = document.querySelector('.cover-me');
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
      }, 20)
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
    const {counter, wh, complete} = this.state;
    const style = {'height': wh/1.4, 'width': wh/1.4}
    const ready = complete ? 'complete' : '';

    return(
        <div style={style} className="circular-wrapper">
          <div className="cover-me" style={{'width': wh/1.42, 'height':wh/1.42, 'opacity': complete ? 0 : 1}} >
            <div className="counter">
              {counter}
            </div>
            <div className="message">
              Click and hold <br/>
              <strong>to find out more</strong>
            </div>
          </div>
          <div style={{'width': wh/1.42, 'height':wh/1.42}} className={"circular " + ready }>
            {/* <TechDisplay size={wh/1.42} complete={complete}></TechDisplay> */}
          </div>
        </div>
    )
  }
}

export default CircularDisplay