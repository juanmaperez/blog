import React, { Component} from 'react'
import Layout from '../components/layout'


class ContactPage extends Component {

  state = {
    intro : `CONTACT ipsum dolor sit amet, consectetur adipiscing elit. Quisque vitae augue id mi lobortis aliquet vitae et sem. 
            In fermentum ante sed turpis auctor finibus. Etiam sit amet leo eu arcu euismod ornare id pulvinar mauris. 
            Ut sagittis et urna et efficitur. Morbi porttitor lobortis accumsan. Curabitur hendrerit consequat dignissim.`, 
  }
  
  render(){
    const { intro } = this.state;
    return (
      <Layout intro={ intro }>
        <div>
          <h1>Contact Page</h1>
          <p>Contact content</p>
        </div>
      </Layout>
     )
  }
}

export default ContactPage