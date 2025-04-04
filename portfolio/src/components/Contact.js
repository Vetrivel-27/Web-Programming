import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const[submitted, setSubmitted] = useState(false);
  const[nameError, setNameError] = useState("");
  const[emailError, setEmailError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(false);
    let valid = true;
    if(!isvalidname(name)){
      setNameError("Please enter a valid name (only letters).");
      valid = false;
    }
    else{
      setNameError("");
    }
    if(!isvalidemail(email)){
      setEmailError("Please enter a valid email address.");
      valid = false;
    }
    else{
      setEmailError("");
    }
    if(!valid)
      return;
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    const subject = `Message from ${name}`;
    const body = `Thank you for visiting my portfolio.\n\nYour message:\n${message}\n\nFrom: ${name}\nEmail: ${email}`;
    const mailtoLink = `mailto:vetrivel0906@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
    setSubmitted(true); 
    setName("");
    setEmail("");
    setMessage("");
  };
  const isvalidname = (name)=>{
    const regex = /^[a-zA-Z ]+$/;
    return regex.test(name);
  }
  const isvalidemail = (email)=>{
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }
  return (
    <div className="contactcontainer" style={{marginTop:'120px'}}>
      <h2>Contact Me</h2>
      {submitted && <p style={{ color: 'green' }}>Thank you for your message!</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" className="inputfield" id="name" value={name} onChange={(e) => setName(e.target.value)} required style={{ borderColor: name ? (isvalidname(name) ? 'green' : 'red') : 'gray' }} />
          {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" className="inputfield" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ borderColor: email ? (isvalidemail(email) ? 'green' : 'red') : 'gray' }} />
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        </div>
        <div>
          <label htmlFor="message">Message: </label>
          <textarea className="inputfield" id="message" value={message} onChange={(e) => setMessage(e.target.value)} required style={{ borderColor: message ? 'green' : 'gray' }} />
        </div>
        <button type="submit" style={{ cursor: 'pointer' }}>Submit</button>
      </form>
    </div>
  );
}
export default Contact;
