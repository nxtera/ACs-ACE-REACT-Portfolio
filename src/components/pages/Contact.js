import React, { useState } from "react";
/* Import helper validate functions */
import {
  isValidEmail,
  isValidMessage,
  isValidName,
} from "../../utils/validate";

/* Usestate to keep track of inputs and check if they are valid */
export default function Contact() {
  const [error, setError] = useState("");
  const handleChange = (event) => {
    if (event.target.id === "msgName") {
      if (!isValidName(event.target.value)) {
        setError("Please enter your full name.");
      } else {
        setError("");
      }
    }

    if (event.target.id === "msgEmail") {
      if (!isValidEmail(event.target.value)) {
        setError("Please enter a valid email address.");
      } else {
        setError("");
      }
    }

    if (event.target.id === "msgContent") {
      if (!isValidMessage(event.target.value)) {
        setError("Message required");
      } else {
        setError("");
      }
    }
  };

  return (
    <div>
      <div className="formContainer">
        <h1>Get In Touch</h1>
        <div className="newMsg">
          <input
            type="text"
            id="msgName"
            placeholder="Full Name..."
            onChange={handleChange}
            onBlur={handleChange}
          />
          <input
            type="text"
            id="msgEmail"
            placeholder="Email..."
            onChange={handleChange}
            onBlur={handleChange}
          />
          <textarea
            id="msgContent"
            name="content"
            rows="7"
            cols="55"
            placeholder="Pleae enter your message here..."
            onChange={handleChange}
            onBlur={handleChange}
          ></textarea>
          <button id="sendMessageBtn" className="btn btn-primary">
            Send Message
          </button>
        </div>
        <p id="errorMsg">{error}</p>
      </div>
    </div>
  );
}
