import React, { useCallback, useState } from "react";
const AuthContext = React.createContext({
  isAdmin: false,
  email: "",
  userId: "",
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  setUserEmail: (email) => {},
  nowSetUserId: (userId) => {},
  setAdmin: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState(null);
  const [userId, setuserId] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const userIsLoggedIn = !!token;
  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };
  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const setUserEmail = (email) => {
    setEmail(email);
  };
  const nowSetUserId = (userId) => {
    setuserId(userId);
  };
  const setAdmin = () => {
    setIsAdmin(true);
  };

  const contextValue = {
    isAdmin: isAdmin,
    setAdmin: setAdmin,
    email: email,
    userId: userId,
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    setUserEmail: setUserEmail,
    nowSetUserId: nowSetUserId,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
