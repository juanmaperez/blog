import React, { Component } from 'react';
import { Link } from 'gatsby'
import { navigate } from 'gatsby-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

class Menu extends Component {
  scrollTimer = null;
  state = {
    'options': [
      { title:'Hello', to:'/', color:'', description: 'Hello, whatever asdjlks alkdfk as asdf sadf sdf asdfsdfasd sdfsd asdfsdf saddsfdf' },
      { title:'About', to:'/about', color:'', description: 'About, whatever asdjlks alkdfk as asdf sadf sdf asdfsdfasd sdfsd asdfsdf saddsfdf'},
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
    window.addEventListener('wheel', e => this.handleNavigation(e));
    this.props.handleDescription(options[active].description)
  }

  setOptionActive(){
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
      this.scrollTimer = setTimeout(this.goUp, 45)
    } else if (e.deltaY > 0) {
      this.scrollTimer = setTimeout(this.goDown, 45)
    }     
  };

  goUp = () => {
    const { status } = this.props;
    let { active, options } = this.state;
    if(active > 0 && status !== 'open') {
      active-=1;
      this.setState(()=>({ active }))
      this.props.handleDescription(options[active].description)
      navigate(options[active].to)
    }
  }

  goDown = () => {
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
    const styles = { top: -(20 + 258 * active)}
    
    return (
      <div className="menu">
        { active > 0 && <span className="goUp" onClick={this.goUp}><FontAwesomeIcon icon={faAngleUp} /></span>}
        { active < (options.length -1) &&  <span className="goDown" onClick={this.goDown}><FontAwesomeIcon icon={faAngleDown} /></span>}
        <div className="menu-wrapper">
          <ul style={ styles } className="menu-container">
            { options.map((option) => <li key={option.title} className="menu-link"><Link to={ option.to }/><span className="link">{ option.title }</span></li> )}  
          </ul>
        </div>
      </div>
    )
  }
}

export default Menu
