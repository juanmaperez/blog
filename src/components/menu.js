import React, { Component } from 'react';
import { Link } from 'gatsby'
import { navigate } from 'gatsby-link';


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
    
    console.log('active', this.props.location)
    window.addEventListener('wheel', e => this.handleNavigation(e));
  }

  setActiveValue(){
    const { location } = this.props;
    const { options } = this.state;
    // get the location and compare with the path to load the active value in the menu

  }

  handleNavigation = (e) =>{
    clearTimeout(this.scrollTimer); 
    if (e.deltaY < 0) {
      this.scrollTimer = setTimeout(this.goUp, 35)
    }
    if (e.deltaY > 0) {
      this.scrollTimer = setTimeout(this.goDown, 35)
    }     
  };

  goUp = () => {
    let { active, options } = this.state;
    if(active > 0 ) {
      active--;
      this.setState(()=>({
        active
      }))
      // navigate(options[active].to)
    }
  }

  goDown = () => {
    let { active, options } = this.state;
    if(active < options.length - 1) {
      active++;
      this.setState(()=>({
        active
      }))
      // navigate(options[active].to)
    }
  }

  render(){
    const { active, options } = this.state;
    const styles = { top: -20 + (-258 * active)}
    
    return (
      <div className="menu">
        { active > 0 && <span className="goUp" onClick={this.goUp}><i className="fas fa-angle-up"></i></span>}
        { active < (options.length -1) &&  <span className="goDown" onClick={this.goDown}><i className="fas fa-angle-down"></i></span>}
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
