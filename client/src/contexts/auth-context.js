import React, { useState } from "react";
const AuthContext = React.createContext({
  isAdmin: false,
  setAdmin: () => {},

  // email: "",
  // userId: "",
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
  const [token, setToken] = useState(initialToken);
  // const [email, setEmail] = useState(null);
  // const [userId, setuserId] = useState(null);
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

  // const setUserEmail = (email) => {
  //   setEmail(email);
  // };
  // const nowSetUserId = (userId) => {
  //   setuserId(userId);
  // };
  const setAdmin = () => {
    setIsAdmin(true);
    // localStorage.setItem()
  };
  // const removeAdmin=()=>{

  // }

  return (
    <AuthContext.Provider
      value={{
        isAdmin: isAdmin,
        setAdmin: setIsAdmin,
        // email: email,
        // userId: userId,
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
