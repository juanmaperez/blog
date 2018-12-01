import React, { Component } from 'react';
import { Link } from 'gatsby'

class Menu extends Component {
  state = {
    'options': [
      { title:'Hello', to:'/', color:'' },
      { title:'About', to:'/about', color:'' },
      { title:'Work', to:'/work', color:'' },
      { title:'Blog', to:'/blog', color:'' },
      { title:'Contact', to:'/contact', color:'' }
    ],
    'active': 0
  } 

  goUp = () => {
    let { active, options } = this.state;
    if(active > 0 ) {
      active--;
      this.setState(()=>({
        options,
        active
      }))
    }
  }

  goDown = () => {
    let { active, options } = this.state;
    if(active < options.length - 1) {
      active++;
      this.setState(()=>({
        options,
        active
      }))
    }
  }

  render(){
    const { active, options } = this.state;
    const styles = { top: -20 + (-258 * active)}
    
    return (
      <div>
        <button className="goUp" onClick={this.goUp}>+</button>
        <button className="goDown" onClick={this.goDown}>-</button>
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
