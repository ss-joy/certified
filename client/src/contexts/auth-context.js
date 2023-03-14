import React, { useState } from "react";

const AuthContext = React.createContext({
  isAdmin: "",
  setAdmin: () => {},

  // email: "",
  currentUserId: "",
  setNewCurrentUserId: () => {},
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  // setUserEmail: (email) => {},
  // nowSetUserId: (userId) => {},
  // removeAdmin:()=>{}
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const initialIsAdminStatus = localStorage.getItem("userIsAdmin");
  const initialCurrentUserId = localStorage.getItem("currentUserId");
  const [token, setToken] = useState(initialToken);
  // const [email, setEmail] = useState(null);
  const [currentUserId, setCurrentUserId] = useState(initialCurrentUserId);
  const [isAdmin, setIsAdmin] = useState(initialIsAdminStatus);

  const userIsLoggedIn = !!token;
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("userIsAdmin");
  };
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  // const setUserEmail = (email) => {
  //   setEmail(email);
  // };
  const setNewCurrentUserId = (userId) => {
    localStorage.setItem("currentUserId", userId);
    setCurrentUserId(userId);
  };
  const setAdmin = () => {
    setIsAdmin(true);
    localStorage.setItem("userIsAdmin", "true");
    // localStorage.setItem()
  };
  // const removeAdmin=()=>{

  // }

  return (
    <AuthContext.Provider
      value={{
        isAdmin: isAdmin,
        setAdmin: setAdmin,
        currentUserId: currentUserId,
        // email: email,
        setNewCurrentUserId: setNewCurrentUserId,
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        // setUserEmail: setUserEmail,
        // nowSetUserId: nowSetUserId,
        // removeAdmin:removeAdmin
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
