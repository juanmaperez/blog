import React, { Component} from 'react';
import styled from 'styled-components';
import ContactForm from './../components/contactForm'

const ContactView = styled.div`
  #contact {
    .contact-container {
      position: relative;
      padding: 20px 40px;

      p {
        margin-top: 150px;
        font-family: 'Questrial';
        font-size: 80px;
        font-weight: bolder;
        -webkit-text-stroke: 0.5px #000;
        color: #fff;
      }
    }
  }
`


class ContactPage extends Component {
  

  render(){

    return (
      <ContactView>
        <div id="contact" className="page">
          <div className="title-container">
            <h1>We should talk</h1>
          </div>        
          <div className="contact-container">
            <p>Tell me about your project.</p>
          </div>
          <ContactForm></ContactForm>
        </div>
      </ContactView>
     )
  }
}

export default ContactPage