import React from "react";
import { db } from "../FirebaseConfig";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const userCollectionRef = collection(db, "contactdata");

  const handleSubmit = () => {
    addDoc(userCollectionRef, {
      name: name,
      email: email,
      message: message,
    }).then(() => {
      if (!alert("Form Submitted Successfully!!!"))document.location = 'https://www.google.com/'
    }).catch((error) => {
      alert(error.message)
    });
  };

  return (
    <div className="outer-container">
      <p>Contact Form</p>

      <form className="contact-form">
        <label>Full name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        <label>Email Adress</label>
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <label>Enter Query/Feedback</label>
        <textarea
          type="text"
          placeholder="Enter your Message"
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        ></textarea>
      </form>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Contact;
