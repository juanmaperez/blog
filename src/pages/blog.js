import React, { Component} from 'react'
import styled from 'styled-components'
import PostItem from './../components/post';

const BlogView = styled.div`
  #blog {
    .blog-container {
      font-family: 'Questrial', sans-serif;
      width: 100%;
      margin: 0px auto;
      position: relative;
      margin-top: 170px;
      padding: 0px 0px 20px;
      box-sizing: border-box;
      display: flex;
      justify-content: flex-start;
      flex-flow: row wrap;
      @media(max-width:878px){
        margin-top:100px
      }
      @media(max-width:510px){
        margin-top:80px;
      }
    }
  }
`
class BlogPage extends Component {

  render(){
    const postList = [0,0,0,0,0,0,0,0];
    return (
      <BlogView>
        <div id="blog" className="page">
          <div className="title-container">
            <h1>Thoughts from experience</h1>
          </div>

          <div className="blog-container post-list">
            { postList.map((post, index) => (<PostItem key={index} index={index} post={post}/>) )}
          </div>
        </div>
      </BlogView>
     )
  }
}

export default BlogPage