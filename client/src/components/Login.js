import React, { useState } from "react";
import "./Login.css";
export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  async function sendLoginRequest(StudentInfo) {
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(StudentInfo),
    });
    console.log(response);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const StudentInfo = {
      email,
      password,
    };
    sendLoginRequest(StudentInfo);
  }
  return (
    <div id="login-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Enter email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Enter Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" onc>
          Log In
        </button>
      </form>
    </div>
  );
}
