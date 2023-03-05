import React, { useContext } from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import { Route, Routes } from "react-router-dom";
import AuthContext from "./contexts/auth-context";
import sadUser from "./assets/notloggedin.png";
import pageNotFound from "./assets/page-not-found.jpg";
import StudentControl from "./components/StudentControl";
import About from "./components/About";
import Certificate from "./components/Certificate";

export default function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<Certificate />} />
        {/* <Route path="/about" element={<About />} /> */}

        <Route
          path="/admin"
          element={
            authCtx.isLoggedIn && authCtx.isAdmin ? (
              <StudentControl />
            ) : (
              <section id="not-logged-in">
                <img src={sadUser} id="not-logged-in-img" alt="" />

                <article>Sorry you are not logged in as admin.</article>
                <article>Log in to view the student controller page</article>
              </section>
            )
          }
        />

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
