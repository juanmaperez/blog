import React from 'react';
import Image from './image';
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'

const ExperienceView = styled.div`
  div.experience-item {
    padding: 10px 30px 30px;
    border-radius: 10px;
    margin-bottom: 40px;
    border: 1px solid #f1f1f1;
    transition: box-shadow 0.3s ease-in-out, left 2s linear, opacity 20000ms linear;
    @media(max-width:480px){
      padding: 10px 0px 30px;
    }
    &:hover {
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.08);      }

    .experience-header {
      display: block;
      margin: 10px 20px 20px;
      display: flex;
      align-items: center;
  
      .title {
        text-transform: uppercase;
        text-decoration:none;
        font-family: 'MFred' !important;               
        display: block;
        font-size: 50px;
        margin: 15px 10px 0px;
        font-weight: normal;
        @media(max-width:480px) {
          font-size: 40px;
        }
      }
      .date {
        font-family: 'Questrial' !important;
        letter-spacing: 1px;    
        line-height: 10px; 
        text-indent: 2px;     
        display: block;
        font-size: 12px;
        margin: 0px 5px 0px;
        font-weight: normal;
        color: #999;
      }
      img {
        margin-top: 5px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 5px solid #fff;
        display: inline-block;
      }
    }



    ul.tasks {
      padding: 10px 30px 0px;
      .task {
        margin-bottom: 20px;
        font-family: 'Questrial' !important;
        svg {
          font-size: 8px;
          color: Salmon;
          margin-bottom: 2px;
        }
      }
    }
    
  }
`

const Experience = (props) => {
  const { node } = props;
  return (
  <ExperienceView>
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
  </ExperienceView>
)}

export default Experience