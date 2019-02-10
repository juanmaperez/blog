import React from 'react';
import Image from './image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'

const Experience = (props) => {
  const { node } = props;
  return (
  <div className={'experience-item ' + (node ? 'complete' : '')}>
    <div className="experience-header">
      <Image name={node.title} src={`/icons/${node.icon}`} />
      <div>
        <h3 className="title">{ node.title }</h3>
        <time className="date">{ node.date }</time>
      </div>
    </div>
    <ul className="tasks">
      {node.tasks.map((task, index) => <li className="task" key={index}><FontAwesomeIcon icon={faSquare} /> &nbsp; &nbsp;{task}</li> )}
    </ul>
  </div>
)}

export default Experience