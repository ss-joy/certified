import React, { useState, useContext } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/auth-context";
export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [didLoginFailed, setDidLoginFailed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
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
    setIsLoading(false);
    if (response.status >= 200 && response.status < 300) {
      const responseData = await response.json();
      console.log("login data hash", responseData);
      // const expirationTime = new Date(
      //   new Date().getTime() + +responseData.expiresIn * 1000
      // );
      // console.log(expirationTime);
      // authCtx.login(responseData.token, expirationTime.toISOString());
      authCtx.login(responseData.token);
      if (responseData.isAdmin) {
        authCtx.setAdmin(true);
      }
      // authCtx.nowSetUserId(responseData.userId);
      // authCtx.setUserEmail(responseData.email);
      navigate("/");
      alert("You have successfully logged in");
    } else {
      setDidLoginFailed(true);
      setTimeout(() => {
        setDidLoginFailed(false);
      }, 2000);
      alert("Something went wrong");
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    const StudentInfo = {
      email,
      password,
    };
    sendLoginRequest(StudentInfo);
    setIsLoading(true);
  }
  return (
    <div id="login-form">
      <form onSubmit={handleSubmit}>
        {didLoginFailed && (
          <span id="login-failed">
            Signup failed!!!Please recheck your credentials!!
          </span>
        )}
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
            autoComplete="off"
            minLength={5}
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">{isLoading ? "Loading...." : "Log in"}</button>
      </form>
      {didLoginFailed && (
        <section id="login-failed">
          Login Failed.Please recheck your credentials.
        </section>
      )}
    </div>
  );
}
