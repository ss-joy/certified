import React, { useContext, useState } from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/sust.png";
import AuthContext from "../contexts/auth-context";

export default function Header(props) {
  const authCtx = useContext(AuthContext);
  function handleLogout() {
    authCtx.logout();
  }
  const showAdminPanel =
    (authCtx.isAdmin === "true" || authCtx.isAdmin === true) &&
    authCtx.isLoggedIn;
  return (
    <header>
      <div id="logo">
        <Link to={"/"}>
          <img src={logo} alt="sust logo" />
        </Link>
      </div>
      <nav>
        <ul>
          {showAdminPanel && (
            <li>
              <NavLink to={"/admin"}>Admin Control</NavLink>
            </li>
          )}
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
            <NavLink to={"/about"}>About</NavLink>
          </li>
          {authCtx.isLoggedIn && !showAdminPanel && (
            <li>
              <NavLink to={"/certifiate"}>Certificate</NavLink>
            </li>
          )}
          {authCtx.isLoggedIn && (
            <li>
              <NavLink to={"/profile"}>
                <img
                  style={{
                    width: "50px",
                    border: "2px solid pink",
                    borderRadius: "50%",
                    padding: "2px",
                  }}
                  src={props.dUserImage}
                  alt="default user"
                />
              </NavLink>
            </li>
          )}
          {authCtx.isLoggedIn && (
            <li>
              <button id="logout" onClick={handleLogout}>
                Log Out
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
