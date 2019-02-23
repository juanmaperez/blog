import React from 'react';
import styled from 'styled-components'
import Image from './image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'

const WorkItemView = styled.div`
  position: relative;
  width: ${ props => props.width }px;
  height: ${ props => props.height }px;
  overflow:hidden;
  background: rgba(${ props => props.work.bg }, ${ props => props.work.opacity } );
  border-bottom: 100px solid rgb(${ props => props.work.bg });

  .work-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    -webkit-clip-path: inset(0 0 0 0);
    clip-path: inset(0 0 0 0);

    .containerFixed {
      position:fixed; //absolute
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
    }
    .containerFixed:before {
      background: rgba(${ props => props.work.bg }, ${ props => props.work.opacity } );

      display: block;
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-repeat: no-repeat;
    }

    .work-image{
      display: flex;
      flex-direction:row;
      justify-content:center;
      align-items:center;
      width:700px;
      height:auto;
      position: absolute;
      top: 40%;
      left: 45%;
      text-align: center;
      margin-top:-200px;
      border-radius: 5px;
      img { max-width:100% }
    }
    .work-intro{
      width:400px;
      height:300px;
      position: absolute;
      top: 50%;
      left:200px;
      margin-top:-200px;
      border: 1px solid #f1f1f1;
      background: #fff;
      border-radius: 5px;
      transition: box-shadow 0.3s ease-in-out;
      padding: 30px 20px;
      box-shadow: ${props => props.work.opacity !== '1'? "0 0 1px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.1)" : "0 0 1px rgba(255, 255, 255, 0.5), 0 2px 4px rgba(255, 255, 255, 0.4)"}; 

      &:hover {
      }
  
      h3 {
        text-transform: uppercase;
        text-decoration:none;
        font-family: 'MFred' !important;               
        display: block;
        font-size: 50px;
        margin: 10px 0px;
        font-weight: normal;
      }
      p {
        font-family: 'Questrial';
        font-size: 16px;
        line-height: 1.4;
      }

      ul {
        padding: 10px 20px 0px;
        li {
          margin-bottom: 20px;
          font-family: 'Questrial' !important;
          svg {
            font-size: 8px;
            color: rgb(${ props => props.work.bg === '255, 255, 255' ? '0, 0, 0': props.work.bg });
            margin-bottom: 2px;
          }
        }
      }
    }
  }
`


const WorkItem = (props) => {
  const { work } = props
  return(
    <WorkItemView {...props}>
      <div className="work-wrapper">
        <div className="containerFixed">
          <div className="work-intro">
            <h3>{ work.title }</h3>
            <p>{ work.description }</p>
            <ul>
              <li><FontAwesomeIcon icon={faSquare} /> &nbsp; &nbsp;lorem impsum dolor aemet nondist</li>
              <li><FontAwesomeIcon icon={faSquare} /> &nbsp; &nbsp;lorem impsum dolor aemet nondist</li>
              <li><FontAwesomeIcon icon={faSquare} /> &nbsp; &nbsp;lorem impsum dolor aemet nondist</li>
            </ul>
          </div>
          <div className="work-image">
            <Image name={work.title} src={`/works/${work.img}.png`} />
          </div>
        </div>
      </div>
    </WorkItemView>
  )
}

export default WorkItem