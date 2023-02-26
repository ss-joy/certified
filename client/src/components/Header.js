import React, { useContext } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/sust.png";
import AuthContext from "../contexts/auth-context";
export default function Header() {
  const authCtx = useContext(AuthContext);
  return (
    <header>
      <div id="logo">
        <Link to={"/"}>
          <img src={logo} alt="sust logo" />
        </Link>
      </div>
      <nav>
        <ul>
          {!authCtx.isLoggedIn && (
            <li>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
          )}

          {!authCtx.isLoggedIn && (
            <li>
              <NavLink to={"/signup"}>Signup</NavLink>
            </li>
          )}
          <li>
            <NavLink to={"/about"}>About us</NavLink>
          </li>
          {authCtx.isLoggedIn && (
            <li>
              <NavLink to={"/about"}>Log out</NavLink>
            </li>
          )}
          {authCtx.isLoggedIn && (
            <li>
              <NavLink to={"/profile"}>Profile</NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
