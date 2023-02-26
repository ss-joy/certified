import React from "react";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
export default function App() {
  function hh() {
    fetch("http://localhost:5000/x/x")
      .then((resss) => {
        return resss.json();
      })
      .then((ppp) => {
        console.log(ppp);
      });
  }
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<h1>ok</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<p>abt</p>} />
      </Routes>
      <Footer />
    </div>
  );
}
