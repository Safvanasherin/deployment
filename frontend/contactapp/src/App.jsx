import React from 'react'
import { useState } from 'react'
function App() {
  const [formData, setFormData] = useState({
    name: "",
    email:"",
    message:"",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const handleChange = (e) =>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value,
    });
  };
  const handleSubmit = async (e) =>{
    e.preventDefault();

    const response = await fetch(
      "http://127.0.0.1:8000/api/contact/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await response.json();

    setResponseMessage(data.message);

    setFormData({
      name:"",
      email:"",
      message:""
    });
  };
  return (
    <div>
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Name:</label><br/>
        <input type="text" name='name' value={formData.name} onChange={handleChange}/><br/>
        <label htmlFor="">Email:</label><br/>
        <input type="email" name='email' value={formData.email} onChange={handleChange}/><br/>
        <label htmlFor="">Message:</label><br/>
        <textarea  name='message' value={formData.message} onChange={handleChange}/><br/>
        <button type='submit'>Send message</button>
      </form>
      <p>{responseMessage}</p>
    </div>
  );
}

export default App
