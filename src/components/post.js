import React, { Component } from 'react';
import styled from'styled-components';

import Image from './image'

const PostView = styled.div`
  padding: 25px;
  box-sizing: border-box;
  width: 33%;
  @media(max-width:878px){
    width:50%;
  }
  @media(max-width:510px){
    width:100%;
    padding:25px 0px;
  }
  .post {
    background: #f7f6f3;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-sizing: border-box;
    transition: all 200ms linear;
    overflow: hidden;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.08);      
    &:hover {
      0px 3px 5px 5px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.08);
      transform: scale(1.02);
      .image-container {
        .image {
          transform: scale(1.1);
        }
      }
    }
    .image-container {
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.08);      
      flex: 1;
      position: relative;
      overflow: hidden;
      height: 190px;
      .image {
        transition: all 300ms linear;
        position: relative;
        height: 100%;
        width: 100%;
        background: url(${props => props.image});
        background-size: cover;
        background-position: center center;
       
      }
    }
    .post-container { 
      position: relative;
      padding: 20px 20px 25px;
      flex: 1;
      .post-icon {
        width: 30px;
        height: 30px;
        background: url(icons/${props=> props.icon}.png);
        border-radius: 50%;
        position: absolute;
        top: -15px;
        left:20px;
        background-size: 130%;
        background-position:center center;
        box-shadow: 0px 1px 1px 1px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.08);; 
        overflow: hidden;     

      }
      .post-date {
        display: block;
        margin: 20px 3px 0px;
        font-size: 15px;
        text-transform: uppercase;
        font-family: 'Mfred';
        letter-spacing: 1px;
        margin-bottom: 0px;
        color: #be2623;
      } 
      .post-title {
        margin: 8px 0px;
        padding: 0px;
        font-size: 32px;
        line-height: 1.2;
        letter-spacing: 1.2px;
        color: #0e3746;
        // -webkit-text-stroke: 0.001em #f4f2ec;
      }
    }
  }
`

class PostItem extends Component {
  
  render(){
    const image = "https://juanmaperez.me/wp-content/uploads/2017/04/juanma_perez.jpg"
    return(
      <PostView image={image} icon={'angular'}>
        <div className="post-wrapper">
          <div className="post">
            <div className="image-container">
              <div className="image"></div>
            </div>
            <div className="post-container">
              <div className="post-icon"></div>
              <div className="post-date">
                20 december 2019
              </div>
              <h2 className="post-title">This is an example of post title for the list of posts</h2>
            </div>
          </div>
        </div>
      </PostView>
    )
  }
}

export default PostItem