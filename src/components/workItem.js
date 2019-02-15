import React from 'react';
import styled from 'styled-components'

const WorkItemView = styled.div`
  border: 20px solid #fff;
  position: relative;
  width: ${ props => props.width }px;
  height: ${ props => props.height }px;
  background: rgba(${ props => props.bg }, ${ props => props.opacity } );
  box-sizing:border-box;
  overflow:hidden;
  .crop {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    .work-intro {
      border: 1px solid blue;
      width:400px;
      height: 400px;
      position: absolute;
      left: 100px;
    }
  }
`


const WorkItem = (props) => {
  
  return(
    <WorkItemView {...props}>
    <div className="sadfasd">asdfdsfads</div>
      {/* <div className='crop'>
        <div className='work-intro'>
          <h3>Client Name</h3>
          <p>Work done</p>
          <button>Find out more</button>
        </div>
      </div> */}
    </WorkItemView>
  )
}

export default WorkItem