import React from 'react';
import styled from 'styled-components'
import Image from './image';

function calculateRotation(index){
	const angle = 360 / 9;
	const rot = angle * index;
	return rot
}

function divideByTwo (amount){
	return amount/2
}


const TechDisplayContainer = styled.div`
	.techs {
		border-radius: 50%;
		height: ${props => props.size }px;
		width: ${props => props.size }px;
		position: relative
	}
` 


const TechIcon = styled.div`
		display: block;
		z-index: 2;
		width: 100px;
		height:100px;
		overflow: hidden;
		border-radius: 50%;
		position:absolute;
		top: ${props => (divideByTwo(props.size)-50) }px;
		left: ${props => (divideByTwo(props.size)-50) }px; 
		transform: rotate(${props => calculateRotation(props.index)}deg) translate(${props => divideByTwo(props.size)}px) rotate(-${props => calculateRotation(props.index)}deg);

		img { 
			display: block; 
			max-width: 100%; 
			border-radius: 50%;
			filter: grayscale(100%);
			transition: .15s;
			
			&:hover,
			&:active {
				filter: grayscale(0);
			}
		}
	`

class TechDisplay extends React.Component {
	render() {
		const techs = ['react', 'angular', 'gatsby', 'css3', 'html5', 'wordpress', 'node', 'js', 'github']
		return (
			<TechDisplayContainer {...this.props}>
				{ this.props.complete && <div className="techs">
					{ techs.map((icon, index)=> <TechIcon {...this.props} index={index}><div key={icon} className={`tech-icon ${icon}`} ><Image src={`/icons/${icon}.png`}/></div></TechIcon>)}
				</div> }
			</TechDisplayContainer>
		)
	}
}


// const TechDisplay = (props) => {

    
//     return (
//         props.complete && <div className="techs">
//           { techs.map((icon)=> <div key={icon} className={`tech-icon ${icon}`} ><Image src={`/icons/${icon}.png`}/></div>)}
//         </div>
//     )
// }

export default TechDisplay;