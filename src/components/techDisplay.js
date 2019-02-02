import React from 'react';
import styled from 'styled-components'
import Image from './image';

const TechDisplayContainer = styled.div`
	@mixin on-circle($item-count, $circle-size, $item-size) {
		position: relative;
		width:  $circle-size;
		height: $circle-size;
		padding: 0;
		border-radius: 50%; 
		list-style: none;       
			
		.tech-icon {
			display: block;
			position: absolute;
			top:  50%; 
			left: 50%;
			width:  $item-size;
			height: $item-size;
			margin: -($item-size / 2);
			
			$angle: (360 / $item-count);
			$rot: 0;
	
			@for $i from 1 through $item-count {
				&:nth-of-type(#{$i}) {
				transform: 
						rotate($rot * 1deg) 
						translate($circle-size / 2) 
						rotate($rot * -1deg);
				}

				$rot: $rot + $angle;
			}
		}
	}

	.techs {
		@include on-circle($item-count: 9, $circle-size: ${(props) => props.size}, $item-size: 200px); 
		margin: 5em auto 0;
		
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
	}
` 
class TechDisplay extends React.Component {
	render() {
		const techs = ['react', 'angular', 'gatsby', 'css3', 'html5', 'wordpress', 'node', 'js', 'github']
		return (
			<TechDisplayContainer {...this.props}>
				{ this.props.complete && <div className="techs">
					{ techs.map((icon)=> <div key={icon} className={`tech-icon ${icon}`} ><Image src={`/icons/${icon}.png`}/></div>)}
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