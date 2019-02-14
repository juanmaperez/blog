import React, { Component } from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components'
import { navigate } from 'gatsby-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faArrowUp } from '@fortawesome/free-solid-svg-icons'

const MenuView = styled.div`
.menu {
  position: relative;

  .goUp {
    color:#fff;
    cursor: pointer;
    position: absolute;
    top:0px;
    left: 10px;
    width: 30px;
    text-align: center;
    margin-left:-15px;
    z-index: 3;
    opacity: 1;
    @media(max-width:480px){
      top: auto;
      bottom:20px;
      left: 10px;
    }
    i { font-size: 30px;}
    &:hover {
      opacity: .7
    }
  }
  .goDown {
    color:#fff;
    cursor: pointer;
    position: absolute;
    bottom: 0px;
    left: 10px;
    width: 30px;
    text-align: center;
    margin-left:-15px;
    z-index: 15;
    opacity: 1;
    i { font-size: 30px; }
    &:hover {
      opacity: .7
    }
  }
  .menu-wrapper {
    min-height: 100%;
    height: 300px;
    position: relative;
    // comment to test
    overflow: hidden;

    @media(max-width: 480px){
      height: 150px;

    }
 
    ul.menu-container {
      position:relative;
      transition: top 600ms linear;

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
          color:#fff;
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
            color: #fff;
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
      { title:'Contact', to:'/contact', color:'' , description: 'Contact, whatever asdjlks alkdfk as asdf sadf sdf asdfsdfasd sdfsd asdfsdf saddsfdf' }
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

  render(){
    const { active, options } = this.state;
    let height = 0;
    let link = document.querySelector('.menu-link');
    if(link){ height = link.offsetHeight}
    const styles = { top: -(height * active)}
    
    return (
      <MenuView>
        <div className="menu">
          { active < (options.length -1) &&  <span className="goUp" onClick={this.goUp}><FontAwesomeIcon icon={faAngleUp} /></span>}
          { active > 0 && <span className="goDown" onClick={this.goDown}><FontAwesomeIcon icon={faAngleDown} /></span>}
          <div className="menu-wrapper">
            <ul style={ styles } className="menu-container">
              { options.map((option) => <li key={option.title} className="menu-link"><Link to={ option.to }/><span onClick={this.props.handleContent} className="link">{ option.title }<FontAwesomeIcon className="icon" icon={faArrowUp} /></span></li> )}  
            </ul>
          </div>
        </div>
      </MenuView>
    )
  }
}

export default Menu
