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
  const [name, setName] = useState("");
  const [fName, setFName] = useState("");
  const [mName, setMName] = useState("");

  const [insName, setInsName] = useState("");
  const [center, setcenter] = useState("");
  const [reg, setReg] = useState("");
  const [group, setGroup] = useState("");
  const [bangla, setBangla] = useState("");
  const [eng, setEng] = useState("");
  const [ict, setIct] = useState("");
  const [phy, setPhy] = useState("");
  const [chem, setChem] = useState("");
  const [math, setMath] = useState("");
  const [bio, setBio] = useState("");
  //certificate saved on server related code
  const [certificateSaveWasSucessfull, setCertificateSaveWasSucessfull] =
    useState(false);
  const [certificateSaveWasSucessfullMsg, setCertificateSaveWasSucessfullMsg] =
    useState("");

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
    setIsLoading(true);

    if (response.status >= 200 && response.status < 300) {
      const parsedResponse = await response.json();
      console.log(parsedResponse);
      setCertificateSaveWasSucessfull(true);
      setIsLoading(false);

      setCertificateSaveWasSucessfullMsg(parsedResponse.msg);
      setTimeout(() => {
        setCertificateSaveWasSucessfull(false);
      }, 5000);
    } else {
      console.log("error");
      setIsLoading(false);
    }
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
      bangla: +bangla,
      eng: +eng,
      ict: +ict,
      phy: +phy,
      chem: +chem,
      math: +math,
      bio: +bio,
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
          {certificateSaveWasSucessfull && (
            <p style={{ backgroundColor: "white" }}>
              {certificateSaveWasSucessfullMsg}
            </p>
          )}
          <form onSubmit={handleCertificate}>
            <section id="student-certificate-form-holder">
              <section>
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
                  <label htmlFor="reg">Reg No:</label>
                  <input
                    type="text"
                    value={reg}
                    id="reg"
                    onChange={handleReg}
                  />
                </div>
                <div>
                  <label htmlFor="group">Group:</label>
                  {/* <input type="text" value={group} onChange={handleGroup} /> */}
                  <select
                    value={group}
                    onChange={handleGroup}
                    style={{ width: "70%", margin: "6px" }}
                    name=""
                    id="group"
                  >
                    <option>Science</option>
                    <option>Arts</option>
                    <option>Commerce</option>
                  </select>
                </div>
              </section>
              <section>
                <div>
                  <label htmlFor="">Bangla</label>
                  <input type="number" value={bangla} onChange={handleBangla} />
                </div>
                <div>
                  <label htmlFor=""> English</label>
                  <input type="number" value={eng} onChange={handleEng} />
                </div>
                <div>
                  <label htmlFor="">
                    Informations and Communicaton Technology
                  </label>
                  <input type="number" value={ict} onChange={handleIct} />
                </div>
                <div>
                  <label htmlFor=""> Physics</label>
                  <input type="number" value={phy} onChange={handlePhye} />
                </div>
                <div>
                  <label htmlFor="">Chemistry</label>
                  <input type="number" value={chem} onChange={handleChem} />
                </div>
                <div>
                  <label htmlFor=""> Higher Mathmatics</label>
                  <input type="number" value={math} onChange={handleMath} />
                </div>
                <div>
                  <label htmlFor=""> Biology</label>
                  <input type="number" value={bio} onChange={handleBio} />
                </div>
              </section>
            </section>
            <div
              style={{
                margin: "0 auto",
              }}
            >
              <button type="submit">
                {!isLoading ? "Submit Result" : "Loading..."}
              </button>
            </div>
          </form>
        </section>
      )}
    </div>
  );
}
