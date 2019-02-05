import React from 'react';
import Image from './image';


class Techs extends React.Component {
	render() {
		const techs = ['react', 'angular', 'gatsby', 'css3', 'html5', 'wordpress', 'node', 'js', 'github']
		return (
			<div className={`techs-line ${this.props.complete ? 'complete' : 'incomplete'}`} >
					{ techs.map((icon, index)=> <Image name={icon} key={icon} src={`/icons/${icon}.png`}/>)}
			</div>
			)
	}
}

export default Techs;