import React, { Component } from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components'
import { navigate } from 'gatsby-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'

const MenuView = styled.div`
.menu {
  position: relative;
  .mouse {
    display: block;
    width: 18px;
    height: 28px;
    border-radius: 11px 11px 15px 15px;
    border: 1px solid #0e3746;
    position: absolute;
    right: 5px;
    top: 50%;
    margin-top: -24px;
    z-index: 9999;

    @media(max-width: 480px){
      position: fixed;
      top: 240px;
      left: 20px;
      right: auto; 
      width: 15px;
      height: 22px;
    }

    span.scroll {
      display: block;
      margin: 6px auto;
      width: 1px;
      height: 3px;
      border-radius: 4px;
      background: #0e3746;
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
    
    .goUp {
      background:#0e3746;
      position: absolute;
      top:-8px;
      left: 50%;
      width: 1px;
      height: 8px;
      z-index: 3;
      opacity: 0.3 !important;
    }
    .goDown {
      background:#0e3746;
      position: absolute;
      bottom:-8px;
      left: 50%;
      width: 1px;
      height: 8px;
      z-index: 3;
      opacity: 0.3 !important;
    }
  }
  

  @keyframes scroll {
    0% {
      opacity: 1;
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      -webkit-transform: translateY(15px);
      -ms-transform: translateY(15px);
      transform: translateY(15px);
    }
  }

  .menu-wrapper {
    height: 300px;
    min-height: 100%;
    position: relative;
    // comment to test
    overflow: hidden;

    @media(max-width: 480px){
      height: 150px;
    }
 
    ul.menu-container {
      position:relative;
      transition: top 600ms linear, opacity 2s;
      top: ${props => props.top}px;

      .menu-link {
        cursor: pointer;
        height: 500px;
        padding-left: 0px;
        padding-left: 0px;
        @media(max-width:480px){
          height: 150px; 
          padding-left: 30px;
          line-height: 150px;
        }

        .link { 
          display:inline-block;
          font-weight: 200;
          font-size: 400px;
          line-height: 300px;
          text-decoration: none;
          position: relative;
          color:#0e3746;
          z-index: 2;
          height: 300px;
          font-family: 'MFred' !important;
          text-transform: uppercase;
         @media(max-width:480px){
           font-size: 132px;
           height: 150px; 
           line-height: 100px;

         }
          .icon {
            font-size: 45px;
            line-height: 0;
            transform: rotate(45deg);
            color: #0e3746;
            position: relative;
            top: 3px;
            opacity:0;
            transition: 200ms ease;
          }
          &:hover{
            .icon {opacity: 1}
          }
          
        }
      }
    }
  }
}
`

class Menu extends Component {
  scrollTimer = null;
  state = {
    'options': [
      { title:'Hello', to:'/', color:'', description: 'Hello, whatever asdjlks alkdfk as asdf sadf sdf asdfsdfasd sdfsd asdfsdf saddsfdf' },
      { title:'About', to:'/about', color:'', description: 'About, whatever asdjlks alkdfk as asdf sadf sdf asdfsdfasd sdfsd asdfsdf saddsfdf' },
      { title:'Work', to:'/work', color:'' , description: 'Work, whatever asdjlks alkdfk as asdf sadf sdf asdfsdfasd sdfsd asdfsdf saddsfdf' },
      { title:'Blog', to:'/blog', color:'', description: 'Blog, whatever asdjlks alkdfk as asdf sadf sdf asdfsdfasd sdfsd asdfsdf saddsfdf' },
    ],
    'active': 0,
  } 

  componentDidMount(){
    const { options } = this.state;
    const { location } = this.props;

    const active = options.findIndex(opt => opt.to === location.pathname);

    this.setOptionActive();
    const page = document.querySelector('.intro');
    page.addEventListener('wheel', e => this.handleNavigation(e));
    this.props.handleDescription(options[active].description)
  }

  setOptionActive = ()=>{
    const { options } = this.state;
    const { location } = this.props;
    let active = 0;
    options.forEach((opt, i) => { if (opt.to === location.pathname){ active = i} })
    this.props.handleDescription(options[active].description)
    if( active !== 0 ) this.setState(()=>({ active }))
    
  }

  handleNavigation = (e) =>{
    clearTimeout(this.scrollTimer); 
    if (e.deltaY < 0) {
      this.scrollTimer = setTimeout(this.goDown, 55)
    } else if (e.deltaY > 0) {
      this.scrollTimer = setTimeout(this.goUp, 55)
    }     
  };

  goDown = () => {
    const { status } = this.props;
    let { active, options } = this.state;
    if(active > 0 && status !== 'open') {
      active-=1;
      this.setState(()=>({ active }))
      this.props.handleDescription(options[active].description)
      navigate(options[active].to)
    }
  }

  goUp = () => {
    const { status } = this.props;
    let { active, options } = this.state;
    if(active < options.length - 1 && status !== 'open') {
      active+=1
      this.setState(()=>({ active }))
      this.props.handleDescription(options[active].description)
      navigate(options[active].to)
    }
  }

  setTopPosition(){
    const { active } = this.state
    const height = window.innerWidth > 480 ? '500' : '150';
    return (-(height * active))
  } 

  render(){
    const { active, options } = this.state;
    
    return (
      <MenuView top={ this.setTopPosition() }>
        <div className="menu">
          <div className="mouse">
            <span className="scroll"></span>
            { active < (options.length -1) &&  <span className="goUp" onClick={this.goUp}></span>}
            { active > 0 && <span className="goDown" onClick={this.goDown}></span>}
          </div>
          <div className="menu-wrapper">
            <ul className="menu-container">
              { options.map((option) => <li key={option.title} className="menu-link"><Link to={ option.to }/><span onClick={this.props.handleContent} className="link">{ option.title }<FontAwesomeIcon className="icon" icon={faArrowUp} /></span></li> )}  
            </ul>}
          </div>
        </div>
      </MenuView>
    )
  }
}

export default Menu
