import React from 'react';
import styled from 'styled-components'

const WorkItemView = styled.div`
  border-bottom: 20px solid #fff;
  border-top: 20px solid #fff;
  position: relative;
  width: ${ props => props.width }px;
  height: ${ props => props.height }px;
  box-sizing:border-box;
  overflow:hidden;
  background: rgba(${ props => props.bg }, ${ props => props.opacity } );

  .work-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;

    .containerFixed {
      position:absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
    }
    .containerFixed::before {
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
  }
`


const WorkItem = (props) => {
  
  return(
    <WorkItemView {...props}>
      <div className="work-wrapper">
        <div className="containerFixed">
          {props.bg}
        </div>
      </div>
    </WorkItemView>
  )
}

export default WorkItem