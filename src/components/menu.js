import React, { Component } from 'react';
import { Link } from 'gatsby'
import { navigate } from 'gatsby-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

class Menu extends Component {
  scrollTimer = null;
  state = {
    'options': [
      { title:'Hello', to:'/', color:'' },
      { title:'About', to:'/about', color:'' },
      { title:'Work', to:'/work', color:'' },
      { title:'Blog', to:'/blog', color:'' },
      { title:'Contact', to:'/contact', color:'' }
    ],
    'active': 0,
  } 

  componentDidMount(){
    this.setOptionActive();
    window.addEventListener('wheel', e => this.handleNavigation(e));
  }

  setOptionActive(){
    const { options } = this.state;
    const { location } = this.props;
    let active = 0;
    options.forEach((opt, i) => { if (opt.to === location.pathname){ active = i} })
    if( active !== 0 ) this.setState(()=>({ active }))
  }

  handleNavigation = (e) =>{
    clearTimeout(this.scrollTimer); 
    if (e.deltaY < 0) {
      this.scrollTimer = setTimeout(this.goUp, 35)
    } else if (e.deltaY > 0) {
      this.scrollTimer = setTimeout(this.goDown, 35)
    }     
  };

  goUp = () => {
    let { active, options } = this.state;
    if(active > 0 ) {
      active-=1;
      this.setState(()=>({ active }))
      navigate(options[active].to)
    }
  }

  goDown = () => {
    let { active, options } = this.state;
    if(active < options.length - 1) {
      active+=1
      console.log(active)
      this.setState(()=>({ active }))
      navigate(options[active].to)
    }
  }

  render(){
    const { active, options } = this.state;
    const styles = { top: -(20 + 258 * active)}
    
    return (
      <div className="menu">
        {active}
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
