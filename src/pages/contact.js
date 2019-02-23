import React, { Component} from 'react';
import styled from 'styled-components';
import ContactForm from './../components/contactForm'

const ContactView = styled.div`
  #contact {
    .contact-container {
      position: relative;
      padding: 0px 0px;

      p {
        margin: 160px 0 0;
        padding: 0px 20px 0px;
        text-align: center;
        font-family: 'Questrial';
        font-size: 14.76vw;
        font-weight: bolder;
        -webkit-text-stroke: 0.1px #000;
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
            <p>My email is already in your clipboard.</p>
          </div>
          {/* <ContactForm></ContactForm> */}
        </div>
      </ContactView>
     )
  }
}

export default ContactPage