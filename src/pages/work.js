import React, { Component} from 'react'
import Layout from '../components/layout'


class WorkPage extends Component {

  constructor(props){
    super(props)
  }

  state = {
    intro : `WORK ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae augue id mi lobortis aliquet vitae et sem. 
            In fermentum ante sed turpis auctor finibus. Etiam sit amet leo eu arcu euismod ornare id pulvinar mauris. 
            Ut sagittis et urna et efficitur. Morbi porttitor lobortis accumsan. Curabitur hendrerit consequat dignissim.`, 
  }
  
  render(){
    const { intro } = this.state;
    return (
      <Layout {...this.props} intro={ intro }>
        <div>
          <h1>Work Page</h1>
          <p>Work content</p>
        </div>
      </Layout>
     )
  }
}

export default WorkPage