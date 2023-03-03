import React from "react";
import "./AddResult.css";
export default function AddResult() {
  return (
    <div id="add-result">
      <h3>Student result entry panel</h3>
      <div id="all-container">
        <section id="stu-info">
          <form>
            <label htmlFor="search-stu">Enter student reg no:</label>
            <input type="search" id="search-stu" />
            <br />
            <button type="submit">Search The Student</button>
          </form>
        </section>
        <section id="enter-result"></section>
      </div>
    </div>
  );
}
