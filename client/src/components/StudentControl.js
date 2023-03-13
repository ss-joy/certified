import React, { useState } from "react";
import "./StudentControl.css";
export default function StudentControl() {
  const [enterStudent, setEnterStudent] = useState(false);
  const [enterResult, setEnterResult] = useState(false);
  const [enteredRegNo, setEnteredRegNo] = useState("");
  const [studentSearchResponse, setStudentSearchResponse] = useState("");
  const [prompt, setPrompt] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [studentMail, setStudentMail] = useState("");
  //all certificate code
  const [name, setName] = useState(null);
  const [fName, setFName] = useState(null);
  const [mName, setMName] = useState(null);

  const [insName, setInsName] = useState(null);
  const [center, setcenter] = useState(null);
  const [reg, setReg] = useState(null);
  const [group, setGroup] = useState(null);
  const [bangla, setBangla] = useState(null);
  const [eng, setEng] = useState(null);
  const [ict, setIct] = useState(null);
  const [phy, setPhy] = useState(null);
  const [chem, setChem] = useState(null);
  const [math, setMath] = useState(null);
  const [bio, setBio] = useState(null);
  function handleStudentMainChange(e) {
    setStudentMail(e.target.value);
  }
  function handleName(e) {
    setName(e.target.value);
  }
  function handleFName(e) {
    setFName(e.target.value);
  }
  function handleMName(e) {
    setMName(e.target.value);
  }
  function handleInsName(e) {
    setInsName(e.target.value);
  }
  function handleCenter(e) {
    setcenter(e.target.value);
  }
  function handleReg(e) {
    setReg(e.target.value);
  }
  function handleGroup(e) {
    setGroup(e.target.value);
  }
  function handleBangla(e) {
    setBangla(e.target.value);
  }
  function handleEng(e) {
    setEng(e.target.value);
  }
  function handleIct(e) {
    setIct(e.target.value);
  }
  function handlePhye(e) {
    setPhy(e.target.value);
  }
  function handleChem(e) {
    setChem(e.target.value);
  }
  function handleMath(e) {
    setMath(e.target.value);
  }
  function handleBio(e) {
    setBio(e.target.value);
  }
  async function saveCertificate(cert) {
    const response = await fetch("http://localhost:5000/api/save-certificate", {
      method: "POST",
      body: JSON.stringify(cert),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // setIsLoading(true);
    // if (response.status >= 200 && response.status < 300) {
    //   const parsedResponse = await response.json();
    //   setStudentSearchResponse(parsedResponse.msg);
    //   setIsLoading(false);
    //   setPrompt(true);
    //   setTimeout(() => {
    //     setPrompt(false);
    //   }, 5000);
    // } else {
    //   console.log("error");
    // }
    console.log(response);
  }
  function handleCertificate(e) {
    e.preventDefault();
    const cert = {
      name,
      fName,
      mName,
      insName,
      center,
      reg,
      group,
      bangla,
      eng,
      ict,
      phy,
      chem,
      math,
      bio,
    };
    saveCertificate(cert);
  }
  //******** */
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
          studentMail,
        }),
      }
    );
    setIsLoading(true);
    if (response.status >= 200 && response.status < 300) {
      const parsedResponse = await response.json();
      setStudentSearchResponse(parsedResponse.msg);
      setIsLoading(false);
      setPrompt(true);
      setTimeout(() => {
        setPrompt(false);
      }, 5000);
      setEnteredRegNo("");
    } else {
      console.log("error");
    }
  }
  const responsePrompt = <p id="res-msg">{studentSearchResponse}</p>;
  return (
    <div id="student-control-page">
      <button
        onClick={() => {
          setEnterStudent((prev) => {
            return !prev;
          });
          setEnterResult(() => {
            return false;
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
          setEnterStudent(() => {
            return false;
          });
        }}
      >
        Enter Student Result
      </button>
      {enterStudent && (
        <section>
          {prompt && responsePrompt}
          <form onSubmit={hanldeStudentEntry}>
            <div>
              <label htmlFor="enter-a-student">
                You can enter the reg number of a student here!
              </label>
              <input
                minLength={10}
                onChange={handleEnterStudentInputChange}
                type="text"
                id="enter-a-student"
                value={enteredRegNo}
              />
            </div>
            <div>
              <label htmlFor="">Enter Student Mail</label>
              <input
                type="text"
                value={studentMail}
                onChange={handleStudentMainChange}
              />
            </div>
            <button type="submit">
              {!isLoading ? "Enter Student" : "Loading..."}
            </button>
          </form>
        </section>
      )}

      {enterResult && (
        <section>
          {prompt && responsePrompt}
          <form onSubmit={handleCertificate}>
            <div>
              <label htmlFor="">Name of the student :</label>
              <input type="text" value={name} onChange={handleName} />
            </div>
            <div>
              <label htmlFor="">Father's Name :</label>
              <input type="text" value={fName} onChange={handleFName} />
            </div>
            <div>
              <label htmlFor="">Mother's Name:</label>
              <input type="text" value={mName} onChange={handleMName} />
            </div>
            <div>
              <label htmlFor="">Name of the Institution:</label>
              <input type="text" value={insName} onChange={handleInsName} />
            </div>
            <div>
              <label htmlFor="">Name of Centre</label>
              <input type="text" value={center} onChange={handleCenter} />
            </div>
            <div>
              <label htmlFor="">Reg No:</label>
              <input type="text" value={reg} onChange={handleReg} />
            </div>
            <div>
              <label htmlFor="">Group:</label>
              <input type="text" value={group} onChange={handleGroup} />
            </div>
            <div>
              <label htmlFor="">Bangla</label>
              <input type="text" value={bangla} onChange={handleBangla} />
            </div>
            <div>
              <label htmlFor=""> English</label>
              <input type="text" value={eng} onChange={handleEng} />
            </div>
            <div>
              <label htmlFor="">Informations and Communicaton Technology</label>
              <input type="text" value={ict} onChange={handleIct} />
            </div>
            <div>
              <label htmlFor=""> Physics</label>
              <input type="text" value={phy} onChange={handlePhye} />
            </div>
            <div>
              <label htmlFor="">Chemistry</label>
              <input type="text" value={chem} onChange={handleChem} />
            </div>
            <div>
              <label htmlFor=""> Higher Mathmatics</label>
              <input type="text" value={math} onChange={handleMath} />
            </div>
            <div>
              <label htmlFor=""> Biology</label>
              <input type="text" value={bio} onChange={handleBio} />
            </div>

            <div>
              <button>Submit</button>
            </div>
          </form>
        </section>
      )}
    </div>
  );
}
