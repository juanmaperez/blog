import React from 'react';
import Image from './image';

const TechDisplay = (props) => {

    const techs = ['react', 'angular', 'gatsby', 'css3', 'html5', 'wordpress', 'node', 'js', 'github']
  
    return (
        props.complete && <div className="techs">
          { techs.map((icon)=> <Image src={`/icons/${icon}.png`}/>)}
        </div>
    )
}

export default TechDisplay;