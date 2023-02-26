import React, { useState } from "react";

const AuthContext = React.createContext({
  email: "",
  userId: "",
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  setUserEmail: (email) => {},
  nowSetUserId: (userId) => {},
});

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);
  const [userId, setuserId] = useState(null);

  const userIsLoggedIn = !!token;
  const loginHandler = (token) => {
    setToken(token);
  };
  const logoutHandler = () => {
    setToken(null);
  };
  const setUserEmail = (email) => {
    setEmail(email);
  };
  const nowSetUserId = (userId) => {
    setuserId(userId);
  };
  const contextValue = {
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
