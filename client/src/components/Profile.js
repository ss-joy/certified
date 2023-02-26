import React, { useContext, useEffect } from "react";
import temp from "../assets/sust.png";
import AuthContext from "../contexts/auth-context";
import "./Profile.css";
export default function Profile() {
  const authCtx = useContext(AuthContext);
  async function getProfile() {
    // fetch("http://localhost:5000/api/profile/1", {
    //   method: "GET",
    //   headers: {
    //     Authorization: `${authCtx.token}`,
    //   },
    //   body:{
    //   }
    // });
  }
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div id="profile">
      <section id="profile-image">
        <img src={temp} alt="" />
      </section>
      <section id="user-details">
        <ul>
          <li>Name:</li>
          <li>Fathers Name:</li>
          <li>Mothers Name:</li>
          <li>HSC Reg No:</li>
        </ul>
        <button>Apply to SUST Admission</button>
      </section>
    </div>
  );
}
