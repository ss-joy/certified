import React, { useState } from "react";
const AuthContext = React.createContext({
  isAdmin: "",
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
  const initialIsAdminStatus = localStorage.getItem("userIsAdmin");
  console.log("admin", initialIsAdminStatus);
  const [token, setToken] = useState(initialToken);
  // const [email, setEmail] = useState(null);
  // const [userId, setuserId] = useState(null);
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
  // const nowSetUserId = (userId) => {
  //   setuserId(userId);
  // };
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
