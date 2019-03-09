import React, { Component } from 'react';
import styled from'styled-components';

import Image from './image'

const PostView = styled.div`
  padding: 0px;
  box-sizing: border-box;
  width: 100%;
  position: relative;
  height: ${props => props.height}px;
  @media(max-width:878px){
    width:50%;
  }
  @media(max-width:510px){
    width:100%;
    padding:25px 0px;
  }
  .post {
    cursor: pointer;
    position: relative;
    height: ${props => props.height}px;
    background: ${props => props.index % 2 ? '#EAE8DC' : '#f4f2EC'  };
    display: flex;
    flex-direction: ${props => props.index % 2 ? 'row' : 'row-reverse'};
    justify-content: space-around;
    box-sizing: border-box;
    transition: all 200ms linear;
    overflow: hidden;
    &:hover {
      // transform: scale(1.02);
      .image-container {
        .image {
          transform: scale(1.2);
        }
      }
      .post-container {
        .post-icon {
          transform: rotate(360deg)
        }
        .post-title {
          color: #0e3746;
          transition: all 500ms linear;
        }
      }
    }
    .image-container {
      flex: 1;
      position: relative;
      overflow: hidden;
      height: 100%;
      width: 50%;
      box-sizing: border-box;
      .image {
        padding: 20px;
        transition: all 3s linear;
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
      flex: 1;
      padding: 40px;
      max-width: 50%;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .post-icon {
        width: 35px;
        height: 35px;
        background: url(icons/${props=> props.icon}.png);
        border-radius: 50%;
        background-size: 130%;
        background-position:center center;
        box-shadow: 0px 1px 1px 1px rgba(0,0,0,0.2), 0 2px 4px rgba(0,0,0,0.08);; 
        overflow: hidden;   
        transition: all 400ms linear;  
      }
      .post-date {
        display: block;
        margin: 20px 3px 0px;
        font-size: 18px;
        text-transform: uppercase;
        font-family: 'Mfred';
        letter-spacing: 1px;
        margin-bottom: 0px;
        color: #be2623;
      } 
      .post-title {
        margin: 15px 0px;
        padding: 0px;
        font-weight:bolder;
        font-size: 82px;
        line-height: 1;
        letter-spacing: 1.4px;
        color: transparent;
        -webkit-text-stroke: 0.001em #0e3746;
        transition: all 500ms linear;
      }
    }
  }
`

class PostItem extends Component {
  
  state = {height: 0, width: 0 };

  resize = () => {
    const height = window.innerHeight > 480 ? window.innerHeight/1.5 : window.innerHeight;
    const width = window.innerWidth;
    this.setState({ height, width }) 
  }

  componentDidMount(){
    this.resize();
    window.addEventListener("resize", this.resize.bind(this))
  }

  componentWillUnmount(){
    window.removeEventListener("resize", this.resize.bind(this))
  }

  render(){
    const {post, index } = this.props;
    const { height, width } = this.state;
    console.log(height)

    const image = "https://juanmaperez.me/wp-content/uploads/2017/04/juanma_perez.jpg"
    return(
      <PostView image={image} height={height} index={index} icon={'angular'}>
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