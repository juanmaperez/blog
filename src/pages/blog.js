import React, { Component} from 'react'
import Image from '../components/image'

import './../styles/blog.scss'

class BlogPage extends Component {

  render(){
    return (
        <div>
          <h1>Blog</h1>
          <h2 className="subtitle">Blog content</h2>

          <div className="post-list">

            <div className="post">
              <div className="date-container">
                <div className="post-date">
                  <span className="post-date-e day">20</span>
                  <span className="post-date-e month">DEC</span>
                  <span className="post-date-e year">2018</span>
                </div>
              </div>
              <div className="title-container">
                <h2 className="post-title">This is an example of post title for the list of posts</h2>
              </div>
        
              <div className="image-container">
                <Image src={'https://juanmaperez.me/wp-content/uploads/2017/04/juanma_perez.jpg'} className="post-image" />
              </div>
            </div>

            <div className="post">
              <div className="date-container">
                <div className="post-date">
                  <span className="post-date-e day">20</span>
                  <span className="post-date-e month">DEC</span>
                  <span className="post-date-e year">2018</span>
                </div>
              </div>
              <div className="title-container">
                <h2 className="post-title">This is an example of post title for the list of posts</h2>
              </div>
        
              <div className="image-container">
                <Image src={'https://juanmaperez.me/wp-content/uploads/2017/04/juanma_perez.jpg'} className="post-image" />
              </div>
            </div>


            <div className="post">
              <div className="date-container">
                <div className="post-date">
                  <span className="post-date-e day">20</span>
                  <span className="post-date-e month">DEC</span>
                  <span className="post-date-e year">2018</span>
                </div>
              </div>
              <div className="title-container">
                <h2 className="post-title">This is an example of post title for the list of posts</h2>
              </div>
        
              <div className="image-container">
                <Image src={'https://juanmaperez.me/wp-content/uploads/2017/04/juanma_perez.jpg'} className="post-image" />
              </div>
            </div>


            <div className="post">
              <div className="date-container">
                <div className="post-date">
                  <span className="post-date-e day">20</span>
                  <span className="post-date-e month">DEC</span>
                  <span className="post-date-e year">2018</span>
                </div>
              </div>
              <div className="title-container">
                <h2 className="post-title">This is an example of post title for the list of posts</h2>
              </div>
        
              <div className="image-container">
                <Image src={'https://juanmaperez.me/wp-content/uploads/2017/04/juanma_perez.jpg'} className="post-image" />
              </div>
            </div>


            <div className="post">
              <div className="date-container">
                <div className="post-date">
                  <span className="post-date-e day">20</span>
                  <span className="post-date-e month">DEC</span>
                  <span className="post-date-e year">2018</span>
                </div>
              </div>
              <div className="title-container">
                <h2 className="post-title">This is an example of post title for the list of posts</h2>
              </div>
        
              <div className="image-container">
                <Image src={'https://juanmaperez.me/wp-content/uploads/2017/04/juanma_perez.jpg'} className="post-image" />
              </div>
            </div>


            <div className="post">
              <div className="date-container">
                <div className="post-date">                  
                  <span className="post-date-e day">20</span>
                  <span className="post-date-e month">DEC</span>
                  <span className="post-date-e year">2018</span>
                </div>
              </div>
              <div className="title-container">
                <h2 className="post-title">This is an example of post title for the list of posts</h2>
              </div>
        
              <div className="image-container">
                <Image src={'https://juanmaperez.me/wp-content/uploads/2017/04/juanma_perez.jpg'} className="post-image" />
              </div>
            </div>

          </div>
        </div>
     )
  }
}

export default BlogPage