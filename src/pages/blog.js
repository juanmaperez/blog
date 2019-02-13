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
      top: 140px;
      max-width: 1300px;
      padding: 100px 20px 20px;
      box-sizing: border-box;
      background: #fff;
    }
  }
`

class BlogPage extends Component {

  render(){
    return (
      <BlogView>
        <div id="blog" className="page">
          <div className="title-container">
            <h1>Thoughts from experience</h1>
          </div>

          <div className="blog-container post-list">
            <PostItem></PostItem>
            <PostItem></PostItem>
            <PostItem></PostItem>
            <PostItem></PostItem>
            <PostItem></PostItem>
          </div>
        </div>
      </BlogView>
     )
  }
}

export default BlogPage