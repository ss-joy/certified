import React, { useState } from "react";
import "./SignUp.css";
export default function SignUp() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [reg, setReg] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleConfirmPasswordChange(e) {
    setConfirmPassword(e.target.value);
  }
  function handleRegChange(e) {
    setReg(e.target.value);
  }

  async function sendSignupRequest(studentInfo) {
    const response = await fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studentInfo),
    });
    if (response.status >= 200 && response.status < 300) {
      alert("You have successfully signed up");
    } else {
      alert("Something went wrong");
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    const studentInfo = {
      reg,
      password,
      email,
    };

    sendSignupRequest(studentInfo);
  }
  return (
    <div id="signup-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Enter email</label>
          <input
            placeholder="Enter your email"
            required
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Enter Password</label>
          <input
            minLength={5}
            placeholder="Choose a password"
            required
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <label htmlFor="confirm-password">Confirm your Password</label>
          <input
            minLength={5}
            placeholder="PLease confirm your password"
            required
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <div>
          <label htmlFor="reg">Enter your reg no</label>
          <input
            min={500}
            placeholder="Enter your registration number"
            required
            type="number"
            id="red"
            value={reg}
            onChange={handleRegChange}
          />
        </div>
        <button>Sign Up</button>
      </form>
      <section id="info">
        Please note if you are are from the admin panel you will have to be
        added to the network manually for security purposes!
      </section>
    </div>
  );
}
