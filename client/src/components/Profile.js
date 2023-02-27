import React, { useContext, useEffect } from "react";
import temp from "../assets/sust.png";
import AuthContext from "../contexts/auth-context";
import "./Profile.css";
export default function Profile() {
  const authCtx = useContext(AuthContext);
  async function getProfile() {
    const response = await fetch("http://localhost:5000/api/profile/1", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${authCtx.token}`,
      },
    });
    if (response.status >= 200 && response.status < 300) {
      const responseData = await response.json();
      console.log(responseData);
    } else {
      const errorResponceData = await response.json();

      console.log("error", errorResponceData);
    }
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
