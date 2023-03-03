import React, { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import { Route, Routes } from "react-router-dom";
import AuthContext from "./contexts/auth-context";
import sadUser from "./assets/notloggedin.png";
import pageNotFound from "./assets/page-not-found.jpg";
import AddResult from "./components/AddResult";
export default function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<h1>ok</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<p>abt</p>} />
        <Route path="/admin" element={<AddResult />} />

        <Route
          path="/profile"
          element={
            authCtx.isLoggedIn ? (
              <Profile />
            ) : (
              <section id="not-logged-in">
                <img src={sadUser} id="not-logged-in-img" alt="" />

                <article>Sorry you are not logged in.</article>
                <article>Log in to view the profile page.</article>
              </section>
            )
          }
        />
        <Route
          path="*"
          element={
            <section id="page-not-found">
              <img id="page-not-found-img" src={pageNotFound} alt="" />
              <article>
                It seems you entered a wrong path.Please Navigate back to safety
              </article>
            </section>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}
