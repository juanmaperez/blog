import React, { Component} from 'react'

class ContactPage extends Component {
  
  state = { msg : null };
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
 
  copyTextToClipboard = (text, elementCopied) => {
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
      const msg = successful ? `${ elementCopied } copied on your clipboard` : `${ elementCopied } unable to copy`;
      if (successful) {
        this.setState(()=>({ msg }))
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
    this.timeOut = null;

    if(!this.timeOut){
      this.timeOut = setTimeout(() => this.setState(()=>({ msg })), 3000)
    }
    console.log(this.timeOut)
  }
  
  render(){
    const { msg } = this.state;

    return (
        <div className="contact">
          <div className="contact-header">
            <h1>Contact</h1>
            <p>Don't be shy! Let me know whatever you'd like to know about my work</p>
          </div>
          <div className="contact-header">
            <p onClick={ this.getMyEmail }>Email me</p>
            <p onClick={ this.getMyPhone }>Call me</p>
            <span className="msg">{ msg }</span>
          </div>
        </div>
     )
  }
}

export default ContactPage