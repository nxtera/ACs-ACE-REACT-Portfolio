import React from 'react';

export default function Contact() {
  return (
    <div>
      <div className="formContainer">
      <h1>Get In Touch</h1>
      <div class="newMsg">
      <input type="text" id="msgName" placeholder="Full Name..." />
      <input type="text" id="msgEmail" placeholder="Email..." />
  <textarea id="msgContent" 
  name="content" 
  rows="6" 
  cols="40" 
  placeholder="Pleae enter your message here...">
  </textarea>
  <button id="submitThoughtBtn" onclick="sendNewThought(event)">Send Message
  </button>
  </div>
  </div>
    </div>
  );
}

// Name, Email Address, Message