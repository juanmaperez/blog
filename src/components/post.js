import React, { Component } from 'react';
import styled from'styled-components';

const PostView = styled.div`

`

class PostItem extends Component {
  
  render(){
    const image = "https://juanmaperez.me/wp-content/uploads/2017/04/juanma_perez.jpg"
    return(
      <PostView image={image} icon={'angular'}>

      </PostView>
    )
  }
}

export default PostItem