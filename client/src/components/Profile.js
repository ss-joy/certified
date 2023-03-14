import React, { useCallback, useContext, useEffect, useState } from "react";
import temp from "../assets/sust.png";
import AuthContext from "../contexts/auth-context";
import "./Profile.css";
export default function Profile() {
  //for admin
  const [admin, setAdmin] = useState({
    name: "",
    mobile: "",
    email: "",
  });
  //for student
  const [stuName, setStuName] = useState("");
  const [fName, setFName] = useState("");
  const [MName, setMName] = useState("");
  const [reg, setReg] = useState("");

  const authCtx = useContext(AuthContext);

  const getStudentProfile = useCallback(async () => {
    const response = await fetch("http://localhost:5000/api/student/profile", {
      headers: {
        Authorization: `Bearer ${authCtx.token}`,
      },
    });
    if (response.status >= 200 && response.status < 300) {
      const responseData = await response.json();
      setFName(responseData.father);
      setMName(responseData.mother);
      setReg(responseData.reg);
      setStuName(responseData.name);
    } else {
      const errorResponceData = await response.json();
    }
  }, [authCtx.token]);

  const getAdminProfile = useCallback(async () => {
    const response = await fetch(
      `http://localhost:5000/api/admin/details/${authCtx.currentUserId}`,
      {
        headers: {
          Authorization: `Bearer ${authCtx.token}`,
        },
      }
    );
    const responseData = await response.json();
    const { name, email, mobile } = responseData;
    setAdmin({
      name: name,
      email: email,
      mobile: mobile,
    });
  }, [authCtx.token, authCtx.currentUserId]);
  const isUserAdmin = authCtx.isAdmin === "true" || authCtx.isAdmin === true;

  useEffect(() => {
    if (isUserAdmin) {
      getAdminProfile();
    } else {
      getStudentProfile();
    }
  }, [isUserAdmin, getAdminProfile, getStudentProfile]);
  // }, []);

  const studentContent = (
    <ul>
      <li>
        <strong>Name:</strong>&nbsp;&nbsp;&nbsp;{stuName}
      </li>
      <li>
        <strong>Fathers Name:</strong>&nbsp;&nbsp;&nbsp;{fName}
      </li>
      <li>
        <strong>Mothers Name:</strong>&nbsp;&nbsp;&nbsp;{MName}
      </li>
      <li>
        <strong>HSC Reg No:</strong>&nbsp;&nbsp;&nbsp;{reg}
      </li>
      <button id="profile-btn">Apply to SUST Admission</button>
    </ul>
  );
  const adminContent = (
    <ul>
      <li>
        <strong>Name:</strong> &nbsp;&nbsp;&nbsp;{admin.name}
      </li>
      <li>
        <strong>Phone No:</strong>&nbsp;&nbsp;&nbsp; {admin.mobile}
      </li>
      <li>
        <strong>Email:</strong>&nbsp;&nbsp;&nbsp; {admin.email}
      </li>
    </ul>
  );
  const adminMsg = (
    <article>
      <br />
      <br />
      Welcome {admin.name} You are a part of the admin panel. Admins are granted
      with the most important tasks here. These are the information we have
      about you.
    </article>
  );
  return (
    <div id="profile">
      <section id="profile-image">
        <img src={temp} alt="" />
      </section>
      <section id="user-details">
        {isUserAdmin && <p id="admin">Welcome to the admin panel</p>}
        {!isUserAdmin && studentContent}
        {isUserAdmin && adminContent}
        {isUserAdmin && adminMsg}
      </section>
    </div>
  );
}
