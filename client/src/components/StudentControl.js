import React, { useRef, useState } from "react";
import "./StudentControl.css";
export default function StudentControl() {
  const [enterStudent, setEnterStudent] = useState(false);
  const [enterResult, setEnterResult] = useState(false);
  const [enteredRegNo, setEnteredRegNo] = useState("");
  const [studentSearchResponse, setStudentSearchResponse] = useState("");
  const msgRef = useRef(null);
  // const [studentAlreadyE, setEnteredRegNo] = useState("");

  function handleEnterStudentInputChange(e) {
    setEnteredRegNo(e.target.value);
  }
  async function hanldeStudentEntry(e) {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:5000/api/student/enter-new-student",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          enteredRegNo,
        }),
      }
    );
    if (response.status >= 200 && response.status < 300) {
      const parsedResponse = await response.json();
      setStudentSearchResponse(parsedResponse.msg);
      setTimeout(() => {
        msgRef.current.remove();
      }, 5000);
      setEnteredRegNo("");
    }
  }
  const msg = (
    <p ref={msgRef} id="res-msg">
      {studentSearchResponse}
    </p>
  );
  return (
    <div id="student-control-page">
      <button
        onClick={() => {
          setEnterStudent((prev) => {
            return !prev;
          });
        }}
      >
        Enter Student
      </button>
      <button
        onClick={() => {
          setEnterResult((prev) => {
            return !prev;
          });
        }}
      >
        Enter Student Result
      </button>
      {enterResult && <section></section>}
      {enterStudent && (
        <section>
          {msg}
          <form onSubmit={hanldeStudentEntry}>
            <div>
              <label htmlFor="enter-a-student">
                You can enter the reg number of a student here!
              </label>
              <input
                onChange={handleEnterStudentInputChange}
                type="text"
                id="enter-a-student"
                value={enteredRegNo}
              />
            </div>
            <button type="submit">Submit Student</button>
          </form>
        </section>
      )}
    </div>
  );
}
