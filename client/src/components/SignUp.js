import React, { useState } from "react";
import "./SignUp.css";
export default function SignUp() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [reg, setReg] = useState("");

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  function handleRegChange(e) {
    setReg(e.target.value);
  }
  return (
    <div id="signup-form">
      <form>
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
    </div>
  );
}
