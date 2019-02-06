import React, { Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

import '../styles/contact.scss'

class ContactPage extends Component {
  
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

    return (
        <div id="contact" className="page">
          <div className="title-container">
            <h1>We should talk</h1>
          </div>        
          <div className="contact-body">

            <p>Let's talk.</p>
            <p>Let me know  your needs.</p>
            <p>What's your project about?</p>
            <p>We can decide together which technologies are the best solution.</p>
            <p><strong>Through this buttons you can reach mi phone or my email.</strong></p>
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
          </div>
        </div>
     )
  }
}

export default ContactPage