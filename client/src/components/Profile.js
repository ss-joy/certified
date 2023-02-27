import React, { useCallback, useContext, useEffect, useState } from "react";
import temp from "../assets/sust.png";
import AuthContext from "../contexts/auth-context";
import "./Profile.css";
export default function Profile() {
  const [adminName, setAdminName] = useState("");
  const [adminMobile, setAdminMobile] = useState("");
  const [adminEmail, setAdminEmail] = useState("");

  const authCtx = useContext(AuthContext);

  const getStudentProfile = useCallback(async () => {
    const response = await fetch("http://localhost:5000/api/profile/1", {
      headers: {
        Authorization: `Bearer ${authCtx.token}`,
      },
    });
    if (response.status >= 200 && response.status < 300) {
      const responseData = await response.json();
    } else {
      const errorResponceData = await response.json();
    }
  }, [authCtx.token]);

  const getAdminProfile = useCallback(async () => {
    const response = await fetch("http://localhost:5000/api/admin/details", {
      headers: {
        Authorization: `Bearer ${authCtx.token}`,
      },
    });
    const responseData = await response.json();
    const { name, email, mobile } = responseData;
    setAdminEmail(email);
    setAdminMobile(mobile);
    setAdminName(name);
    console.log(responseData);
  }, [authCtx.token]);

  useEffect(() => {
    if (authCtx.isAdmin) {
      getAdminProfile();
    } else {
      getStudentProfile();
    }
    // }, [authCtx.isAdmin, getAdminProfile, getStudentProfile]);
  }, []);

  const studentContent = (
    <ul>
      <li>Name:</li>
      <li>Fathers Name:</li>
      <li>Mothers Name:</li>
      <li>HSC Reg No:</li>
      <li>Birthday:</li>
      <button id="profile-btn">Apply to SUST Admission</button>
    </ul>
  );
  const adminContent = (
    <ul>
      <li>Name:{adminName}</li>
      <li>Phone No:{adminMobile}</li>
      <li>Email:{adminEmail}</li>
    </ul>
  );
  const adminMsg = (
    <article>
      Welcome Mr. You are a part of the admin panel. Admins are granted with the
      most important tasks here. These are the information we have about you.
    </article>
  );
  return (
    <div id="profile">
      <span>{authCtx.userId}</span>
      <section id="profile-image">
        <img src={temp} alt="" />
      </section>
      <section id="user-details">
        {!authCtx.isAdmin && studentContent}
        {authCtx.isAdmin && adminContent}
        {authCtx.isAdmin && adminMsg}
      </section>
    </div>
  );
}
