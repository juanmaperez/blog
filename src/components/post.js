import React, { Component } from 'react';
import styled from'styled-components';

import Image from './image'

const PostView = styled.div`
  .post {
    border-bottom: 1px solid #000;  
    padding: 50px 70px 0px 30px;
    margin-bottom: 100px;
    display: flex;
    box-sizing: border-box;
    &:first-child{
      padding: 10px 70px 0px 30px;
    }
    &:last-child{
      border-bottom: 0px;
    }

    .post-title-container {
      padding: 0px 25px 0px 0px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      width: 80%;
      box-sizing: border-box;
      h2 { 
        margin: -5px 0px;
        padding: 0px;
        font-weight: normal;
        font-size: 4vw;
      }
    }
    .date-container {
      padding: 12px 30px 8px 0px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      width: 5%;
      text-align: right;
      box-sizing: border-box;

      span {
        display:block;
        line-height: .9;
        color:#000;
        &.post-date-x { font-size: 60px; -webkit-text-stroke: 2px #fff; line-height: .6}
        &.day { font-size: 36px; -webkit-text-stroke: 0.7px #fff; }
        &.month { font-size: 20px}
        &.year { font-size: 18px; line-height: 1.1}
      }
    }
    .image-container{
      width: 15%;
      padding:10px 0px 8px;
      box-sizing: border-box;
      img {
        max-width:100%;
      }
    }  
  }
`

class PostItem extends Component {
  render(){
    return(
      <PostView>
        <div className="post">
          <div className="date-container">
            <div className="post-date">
              <span className="post-date-e day">20</span>
              <span className="post-date-e month">DEC</span>
              <span className="post-date-e year">2018</span>
            </div>
          </div>
          <div className="post-title-container">
            <h2 className="post-title">This is an example of post title for the list of posts</h2>
          </div>
    
          <div className="image-container">
            <Image src={'https://juanmaperez.me/wp-content/uploads/2017/04/juanma_perez.jpg'} className="post-image" />
          </div>
        </div>
      </PostView>
    )
  }
}

export default PostItem