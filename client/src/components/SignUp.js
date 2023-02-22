import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [reg, setReg] = useState("");
  const [failedStatus, setFailedStatus] = useState(false);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
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
      // const parsed = await response.json();
      navigate("/login");
    } else {
      setFailedStatus(true);
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
      {failedStatus && (
        <section id="failure">
          Sorry there was an error on the server.Please try again later.
        </section>
      )}

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
        <div>
          <label htmlFor="reg">Enter your reg no</label>
          <input type="text" id="red" value={reg} onChange={handleRegChange} />
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
