import React, { Component} from 'react'
import Layout from '../components/layout'


class IndexPage extends Component {

  state = {
    intro : `INDEX ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae augue id mi lobortis aliquet vitae et sem. 
            In fermentum ante sed turpis auctor finibus. Etiam sit amet leo eu arcu euismod ornare id pulvinar mauris. 
            Ut sagittis et urna et efficitur. Morbi porttitor lobortis accumsan. Curabitur hendrerit consequat dignissim.`, 
  }
  
  render(){
    const { intro } = this.state;
    return (
        <div>
          <h1>Index Page</h1>
          <p>Index content</p>
        </div>
     )
  }
}

export default IndexPage