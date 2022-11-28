import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <div class="newMsg">
        <h3>Name:</h3>
      <input type="text" id="msgName" placeholder="Name..." />
      <h3>Email:</h3>
      <input type="text" id="msgEmail" placeholder="Email..." />
<h3>Message</h3>
  <textarea id="msgContent" name="content" rows="3" cols="50" placeholder="Text..."></textarea>
  <button id="submitThoughtBtn" onclick="sendNewThought(event)">Send Message
  </button>
  </div>
    </div>
  );
}

// Name, Email Address, Message