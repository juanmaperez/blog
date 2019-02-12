import React, { Component } from 'react';
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

const ContactFormView = styled.div`
  .button-container { 
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding-top: 15px;

    .btn-contact {
      flex: 1;
      min-height:100px;
      font-family: 'Questrial', Helvetica, sans-serif;
      font-size: 24px;
      background: #fff;
      margin: 80px 0px 0px 0px;
      box-shadow: #fff;
      -webkit-appearance: none;
      border:1px solid #f1f1f1;
      border-radius: 5px;
      transition: box-shadow 0.3s ease-in-out, top 100ms linear;
      cursor: pointer;
      position: relative;
      top: 0;

      &:hover{
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05), 0 1px 0 1px rgba(0, 0, 0, 0.08);      }
      }
    }
    .msg {
      flex: 1;
      padding:30px;
      max-height: 80px;
      box-sizing:border-box;
      display: block;
      opacity: 0;
      flex-basis:100%;
      width: 100%;
      color: #999;
      position: relative;
      transition: all 300ms linear;
      text-align: center;
      
      i {
        font-size: 14px;
        transition: left 400ms linear;
        left:50%;
        color: #f1f1f1;
        background:#fff;
        position: absolute;
        top: -11px;
      }
      &.Email {
        opacity:1;
        i { left:25% }
      }
      &.Phone {
        opacity:1;
        i { left:75% }
      }
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
      this.timeOut = setTimeout(() => this.setState(()=>({ msg, type })), 5000)
    }
    console.log(this.timeOut)
  }

  render(){
    const { msg, type } = this.state;

    return(
      <ContactFormView>
        <div className="button-container">
          <button className="btn-contact" onClick={ this.getMyEmail }>Email me</button>
          <button className="btn-contact" onClick={ this.getMyPhone }>Call me</button>
        </div>
        <div className="button-container">
          <div className={'msg ' + type }>
            <span>{ msg }</span>
            <i><FontAwesomeIcon icon={faAngleUp} /></i>
          </div>
        </div>
      </ContactFormView>
    )
  }
}

export default ContactForm

