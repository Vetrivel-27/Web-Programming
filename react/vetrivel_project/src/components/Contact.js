import React, { useState } from "react";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };
  const isvalidname = (name)=>{
    const regex = /^[a-zA-Z ]+$/;
    return regex.test(name);
  }
  const isvaildemail = (email)=>{
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" className="inputfield" id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" className="inputfield" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        </div>
        <div>
          <label htmlFor="message">Message: </label>
          <textarea  className="inputfield" id="message" value={message} onChange={(e) => setMessage(e.target.value)} required/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Contact;
