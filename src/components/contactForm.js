import React, { Component } from 'react';
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const ContactFormView = styled.div`
  .button-container {
    z-index: 10000000;
    position: fixed; 
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 50px;
    top: 30px;
    right: 20px;
    @media(max-width:480px){
      top: 130px;
      right: auto;
      left: 7px;
      flex-direction: row;

    }
    .btn-contact {
      text-align: right;
      flex: 1;
      font-family: 'Questrial', Helvetica, sans-serif;
      font-size: 14px;
      color: #0e3746;
      background: transparent;
      -webkit-appearance: none;
      cursor: pointer;
      border: 0px;
      position: relative;
      top: 0;
    }
  }
  .msg {
    letter-spacing:1px;
    flex: 1;
    padding:10px;
    max-height: 40px;
    background: #fff;
    box-sizing:border-box;
    display: block;
    opacity: 0 !important;
    font-size: 12px;
    flex-basis:100%;
    width: 100%;
    color: #be2623;
    position: fixed;
    bottom: 0px;
    transition: all 300ms linear;
    text-align: center;

    &.Email {
      opacity:1 !important;
    }
    &.Phone {
      opacity:1 !important;
    }
  }
`

class ContactForm extends Component {
  state = { msg : null, type: '' };
  timeOut = null;
  
  getMyPhone = () => {
    const phone = '+44 07447881161';
    const result = this.copyTextToClipboard(phone, 'Phone');
    if (result) {
      this.removeMsg();
    }
  }
  
  getMyEmail = () => {
    const email = 'juanmaperezvar@gmail.com';
    const result = this.copyTextToClipboard(email, 'Email');
    if (result) {
      this.removeMsg();
    }
  }
 
  copyTextToClipboard = (text, type) => {
    let txtArea;
    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
      txtArea = document.createElement('input');
    } else {
      txtArea = document.createElement('textarea');
    }
    txtArea.id = 'txt';
    txtArea.style.position = 'fixed';
    txtArea.style.top = '0';
    txtArea.style.left = '0';
    txtArea.style.opacity = '0';
    txtArea.style.opacity = '0';
    txtArea.value = text;

    document.body.appendChild(txtArea);
    if (navigator.userAgent.match(/ipad|ipod|iphone/i)) {
      let editable = txtArea.contentEditable;
      let readOnly = txtArea.readOnly;
      txtArea.contentEditable = true;
      txtArea.readOnly = false;
      let range = document.createRange();
      range.selectNodeContents(txtArea);
      let sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      txtArea.setSelectionRange(0, 999999);
      txtArea.contentEditable = editable;
      txtArea.readOnly = readOnly;
    } else {
      txtArea.select();
    }


    try {
      const successful = document.execCommand('copy');
      const msg = successful ? `${ type } copied on your clipboard` : `${ type } unable to copy`;
      if (successful) {
        this.setState(()=>({ msg, type }))
        return true;
      }
    } catch (err) {
      console.error(this.msg);
    } finally {
      document.body.removeChild(txtArea);
    }
    return false;
  }

  removeMsg = () => {
    const msg = null;
    const type = '';
    this.timeOut = null;

    if(!this.timeOut){
      this.timeOut = setTimeout(() => this.setState(()=>({ msg, type })), 4000)
    }
  }

  render(){
    const { msg, type } = this.state;

    return(
      <ContactFormView>
        <div className="button-container">
          <button className="btn-contact" onClick={ this.getMyEmail }><FontAwesomeIcon icon={faEnvelope}/></button>
          <button className="btn-contact" onClick={ this.getMyPhone }><FontAwesomeIcon icon={faPhone}/></button>
        </div>
        <div className={'msg ' + type }>
          <span>{ msg }</span>
        </div>
      </ContactFormView>
    )
  }
}

export default ContactForm

