import React, { useEffect, useState } from "react";
import "./SignUp.css";
export default function SignUp() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [reg, setReg] = useState("");
  const [signUpHasError, setSignUpHasError] = useState(false);
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);
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

  async function sendSignupRequest(data) {
    const response = await fetch("http://localhost:5000/api/signup", {
      method: "POST",
      data,
      // headers: {
      //   "Content-Type": "application/json",
      // },
      // body: JSON.stringify(studentInfo),
    });
    if (response.status >= 200 && response.status < 300) {
      alert("You have successfully signed up");
    } else {
      setSignUpHasError(true);
      setTimeout(() => {
        setSignUpHasError(false);
      }, 2000);
      // alert("Something went wrong");
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(reg, password, file);
    // const studentInfo = {
    //   reg,
    //   password,
    //   email,
    // };

    // sendSignupRequest(studentInfo);
    const data = new FormData();
    data.append("reg", reg);
    data.append("password", password);
    data.append("email", email);
    data.append("image", file);
    // // console.log(file);
    // // console.log(formData);for
    sendSignupRequest(data);
  }
  function filePicked(e) {
    if (e.target.files || e.target.files.length === 1) {
      const pickedFile = e.target.files[0];
      setFile(pickedFile);
    }
  }
  return (
    <div id="signup-form">
      {signUpHasError && (
        <span id="sign-up-cred-bad">
          Signup failed!!!Please recheck your credentials!!
        </span>
      )}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
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
            minLength={10}
            placeholder="Enter your registration number"
            required
            type="text"
            id="red"
            value={reg}
            onChange={handleRegChange}
          />
        </div>
        <div>
          <label htmlFor="photo">Pick an image for you</label>
          <input
            type="file"
            id="photo"
            name="image"
            accept="image/*"
            onChange={filePicked}
          />
        </div>
        {previewUrl && (
          <div id="preview-img-container">
            <img id="img-preview" src={previewUrl} alt="" />
          </div>
        )}

        <button>Sign Up</button>
      </form>
      <section id="info">
        Please note if you are are from the admin panel you will have to be
        added to the network manually for security purposes!
      </section>
    </div>
  );
}
