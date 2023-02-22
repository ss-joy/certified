import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/sust.png";
export default function Header() {
  return (
    <header>
      <div id="logo">
        <Link to={"/"}>
          <img src={logo} alt="sust logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
          <li>
            <NavLink to={"/signup"}>Signup</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About us</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
