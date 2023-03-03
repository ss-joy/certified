import React from "react";
import "./Footer.css";
import logo from "../assets/sust.png";
import fb from "../assets/fb.png";

export default function Footer() {
  return (
    <footer id="footer">
      <div id="footer-section-container">
        <section id="footer-logo">
          <img src={logo} alt="" />
        </section>

        <section>
          About Developers:
          <ul style={{ marginTop: "10px" }}>
            <li>Md. Sakil Sazzad Joy</li>
            <li>Abdullah Khan anan</li>
          </ul>
        </section>
        <section>
          Contact:
          <ul id="contacts">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100080048493810"
                target={"_blank"}
                rel="noreferrer"
              >
                <img src={fb} alt="" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100029830907250"
                target={"_blank"}
                rel="noreferrer"
              >
                <img src={fb} alt="" />
              </a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}
