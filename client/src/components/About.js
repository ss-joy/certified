import React from "react";
import Avatar from "./UI/Avatar";
import joy from "../assets/joy.jpg";
import anan from "../assets/anan.jpg";

export default function About() {
  return (
    <div
      style={{
        padding: "60px",
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Avatar info={{ name: "Sakil Sazzad Joy", image: joy }} />
      <Avatar info={{ name: "Abdullah Khan anan", image: anan }} />
    </div>
  );
}
