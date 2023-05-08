import React from "react";
import Avatar from "./UI/Avatar";
import joy from "../assets/joy.jpg";
import anan from "../assets/anan.jpg";
import masumsir from "../assets/mausmsir.jpg";
export default function About() {
  return (
    <div>
      <h2
        style={{
          backgroundColor: "teal",
          color: "white",
          textAlign: "center",
          width: "500px",
          margin: "2px auto",
          borderRadius: "6px",
        }}
      >
        Guided by
      </h2>

      <div style={{ margin: "20px auto", textAlign: "center", width: "280px" }}>
        <Avatar role="teacher " info={{ name: "Md Masum", image: masumsir }} />
      </div>
      <h2
        style={{
          backgroundColor: "teal",
          color: "white",
          textAlign: "center",
          width: "500px",
          margin: "2px auto",
          borderRadius: "6px",
        }}
      >
        Developed By
      </h2>
      <div
        style={{
          padding: "60px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Avatar
          role="student"
          info={{ name: "Sakil Sazzad Joy", image: joy }}
        />
        <Avatar
          role="student"
          info={{ name: "Abdullah Khan anan", image: anan }}
        />
      </div>
    </div>
  );
}
