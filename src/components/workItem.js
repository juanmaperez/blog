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
  background: #${ props => props.work.bg };
  border-bottom: 2px solid #${ props => props.work.bg };


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
      background: #${ props => props.work.bg };
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
      width:45vw;
      height:auto;
      position: absolute;
      top: 40%;
      left: 50%;
      text-align: center;
      margin-top:-150px;
      border-radius: 5px;
      img { max-width:100% }
    }
    .work-intro{
      width:400px;
      height:300px;
      position: absolute;
      top: 50%;
      left:200px;
      margin-top:-150px;
      border-radius: 5px;
      transition: box-shadow 0.3s ease-in-out;
      padding: 30px 20px;

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
        letter-spacing: 1px;
        color: #${props => props.work.color};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      p {
        font-family: 'Questrial';
        font-size: 16px;
        line-height: 1.4;
        color: #${props => props.work.color};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      ul {
        padding: 10px 20px 0px;
        li {
          margin-bottom: 20px;
          font-family: 'Questrial' !important;
          color: #${props => props.work.color};
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;

          svg {
            width: 0.475em !important;
            height: 0.475em !important;
            background: #be2623;
            margin-bottom: 2px;
            path {
              color: #${props => props.work.color};
            }
          }
        }
      }
    }

    @media(max-width: 1024px){
      .work-image {
        margin-top:0;
        top: 10%;
        left: 50%;
        margin-left: -42.5vw;
        width:85vw;
      }
      .work-intro {
        width:400px;
        min-height:300px;
        position: absolute;
        top: 60%;
        left:50%;
        margin-left: -200px;
        margin-top:0px;
        
      }
    }
    @media(max-width:768px){
      .work-image {
        top: 10%;
        left: 50%;
        margin-left: -42.5vw;
        width:85vw;
      }
      .work-intro {
        width:400px;
        min-height:300px;
        position: absolute;
        top: 58%;
        left:50%;
        margin-left: -200px;
        margin-top:0px;
      }
    }
  }

  @media(max-width: 480px){
    width: 100%;
    padding: 0px;
    height: auto;

    .work-wrapper {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;

      .containerFixed {
        position:relative;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
      }
      .work-image{
        width:100%;
        position: relative;
        top: auto;
        left: auto;
        text-align: center;
        margin:0;
        box-sizing: boder-box;
        img { max-width:100% }
      }
      .work-intro{
        width:100%;
        height:auto;
        position: relative;
        top: auto;
        left:auto;
        margin: 0px;
        padding: 20px 30px;
        box-sizing: border-box;
        h3 {
          font-size: 35px;
          margin: 10px 0px;
          font-weight: normal;
          letter-spacing: 1px;
          color: #${props => props.work.color};
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
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
          <div className="work-image">
            <Image name={work.title} src={`/works/${work.img}.png`} />
          </div>
          <div className="work-intro">
            <h3>{ work.title }</h3>
            <p>{ work.description }</p>
            <ul>
              <li><FontAwesomeIcon icon={faSquare} /> &nbsp; &nbsp;lorem impsum dolor aemet nondist</li>
              <li><FontAwesomeIcon icon={faSquare} /> &nbsp; &nbsp;lorem impsum dolor aemet nondist</li>
              <li><FontAwesomeIcon icon={faSquare} /> &nbsp; &nbsp;lorem impsum dolor aemet nondist</li>
            </ul>
          </div>
        
        </div>
      </div>
    </WorkItemView>
  )
}

export default WorkItem