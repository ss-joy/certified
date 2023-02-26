import React, { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import { Route, Routes } from "react-router-dom";
import AuthContext from "./contexts/auth-context";
export default function App() {
  const c = useContext(AuthContext);
  return (
    <div className="app">
      {c.token}
      <Header />
      <Routes>
        <Route path="/" element={<h1>ok</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<p>abt</p>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}
