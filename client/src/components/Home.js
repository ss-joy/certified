import React, { useState } from "react";
import "./Home.css";
import Button from "./UI/Button";
import girl from "../assets/girl-writing-journal-diary_74855-7408.avif";
import boy from "../assets/boy2.jpg";
import help from "../assets/help.jpg";
import blockchain from "../assets/blockchain.jpg";
export default function Home() {
  function handleClick() {
    setRead1((prev) => {
      return !prev;
    });
  }
  function handleClick2() {
    setRead2((prev) => {
      return !prev;
    });
  }
  function handleClick3() {
    setRead3((prev) => {
      return !prev;
    });
  }
  const [read1, setRead1] = useState(false);
  const [read2, setRead2] = useState(false);
  const [read3, setRead3] = useState(false);

  return (
    <div id="home-container">
      <section>
        <article style={{ marginTop: "10px" }}>
          <p style={{ textDecoration: "underline", fontWeight: "bold" }}>
            Welcome to our blockchain-based online admission system!
          </p>
          We're thrilled that you're considering using our secure and innovative
          platform to apply to universities. Our use of blockchain technology
          ensures that your personal information and application materials
          remain safe and tamper-proof throughout the entire admission process.
          {read1 &&
            `With our easy-to-use interface, you can apply to multiple universities
          at once, track your application status, and receive updates in
          real-time. We're committed to providing you with the best possible
          experience, and we're here to support you every step of the way.
          Please take some time to explore our system and learn more about the
          benefits of applying to universities through our blockchain-based
          platform. We can't wait to help you take the next step in your
          educational journey!`}
          <Button clickHandler={handleClick} />
        </article>
        <img src={girl} alt="" />
      </section>
      <section id="section2">
        <img src={boy} alt="" />
        <article>
          <p style={{ textDecoration: "underline", fontWeight: "bold" }}>
            Why use our online admission system?
          </p>
          Can this site ensure the safety and security of your personal
          information and application materials? Our system uses advanced
          technology to protect your information from cyber threats and data
          breaches, making it the safest and most reliable way to apply to
          universities. With our system, you can easily track the status of your
          application and receive updates in real-time, giving you peace of mind
          and reducing stress during the admission process.
          {read2 &&
            ` Plus, our system is
          accessible from anywhere in the world, making it easier for you to
          apply to multiple universities without having to travel to each
          campus. We are committed to providing you with the best possible
          experience and ensuring that your application is in safe hands. Give
          our blockchain-based online admission system a try and experience the difference for yourself!`}
          <Button clickHandler={handleClick2} />
        </article>
      </section>
      <section id="section3">
        <article>
          <p style={{ textDecoration: "underline", fontWeight: "bold" }}>
            Why did we use blockchain??
          </p>
          Blockchain technology is revolutionizing the way we store and transmit
          information, and it has the potential to greatly enhance the security
          of a university admission system. By using a decentralized network of
          nodes, blockchain technology creates a tamper-proof and immutable
          record of all transactions. This means that student records and
          application materials are stored securely and cannot be altered by
          unauthorized parties.
          {read3 &&
            `Additionally, blockchain technology uses
          cryptographic security to protect against unauthorized access,
          ensuring that only authorized parties can access sensitive
          information. By implementing a blockchain-based admission system,
          universities can greatly reduce the risk of data breaches and cyber
          attacks, ensuring that student information is kept safe and secure.
          This added layer of security gives students greater peace of mind and
          confidence in the admission process.`}
          <Button clickHandler={handleClick3} />
        </article>
        <img src={blockchain} alt="" />
      </section>
      <section id="section4">
        <img src={help} alt="" />
        <article>
          <p style={{ textDecoration: "underline", fontWeight: "bold" }}>
            Need Help?
          </p>
          You can directly ask the maintainers of this system by checking at the
          bottom of the page! Or you may go to the about section to get some
          teachers contact Info. Thank you!!!
        </article>
      </section>
    </div>
  );
}
