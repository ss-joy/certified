import React, { useContext, useEffect, useState } from "react";
import "./Certificate.css";
import AuthContext from "../contexts/auth-context";

export default function Certificate() {
  const authCtx = useContext(AuthContext);
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
  async function getCerti() {
    const resp = await fetch(`http://localhost:5000/api/get-certificate`, {
      headers: {
        Authorization: `Bearer ${authCtx.token}`,
      },
    });
    const paresdResponse = await resp.json();
    const results = paresdResponse.resp;
    console.log(results);
    setName(results.name);
    setBangla(results.bangla);
    setBio(results.biology);
    setChem(results.Chemistry);
    setFName(results.father);
    setMName(results.mother);
    setPhy(results.physics);
    setMath(results.higherMath);
    setEng(results.english);
    setIct(results.ict);
    setGroup(results.group);
    setInsName(results.institution);
    setcenter(results.centre);
    setReg(results.reg);
  }
  useEffect(() => {
    getCerti();
  }, []);
  return (
    <div id="certi">
      <section id="certi-student-header">
        <h1>BOARD OF INTERMEDIATE AND SECONDARY EDUCATION , DHAKA</h1>
        <h3>Banladesh</h3>
        <h5>Higher Secondary Certificate Examination </h5>
        <h6>Academic Transcript</h6>
      </section>
      <section id="certi-student-info">
        <ul>
          <li>
            <strong>Name of the student :</strong>&nbsp;&nbsp;&nbsp;{name}
          </li>
          <li>
            <strong>Father's Name :</strong> &nbsp;&nbsp;&nbsp;{fName}
          </li>
          <li>
            <strong>Mother's Name:</strong> &nbsp;&nbsp;&nbsp; {mName}
          </li>
          <li>
            <strong>Name of the Institution:</strong> &nbsp;&nbsp;&nbsp;{" "}
            {insName}
          </li>
          <li>
            <strong>Name of Centre: </strong> &nbsp;&nbsp;&nbsp;{center}
          </li>
          <li>
            <strong> Reg No:</strong> &nbsp;&nbsp;&nbsp; {reg}
          </li>
          <li>
            <strong> Group:</strong> &nbsp;&nbsp;&nbsp; {group}
          </li>
        </ul>
      </section>
      <section id="cert-student-result">
        <table>
          <tr>
            <th>SL No.</th>
            <th>Name of SUbject</th>
            <th>Marks Obtained</th>
            <th>Letter Grade</th>
            <th>Grade Point</th>
            <th>GPA(without additional subject)</th>
            <th>GPA</th>
          </tr>

          <tr>
            <td>1</td>
            <td>Bangla</td>
            <td></td>
            <td>{bangla}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>2</td>
            <td>English</td>
            <td></td>
            <td>{eng}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>3</td>
            <td>Informations and Communicaton Technology</td>
            <td></td>
            <td>{ict}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>4</td>
            <td>Physics</td>
            <td></td>
            <td>{phy}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>5</td>
            <td>Chemistry</td>
            <td></td>
            <td>{chem}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>6</td>
            <td>Higher Mathmatics</td>
            <td></td>
            <td>{math}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>7</td>
            <td>Biology</td>
            <td></td>
            <td>{bio}</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </section>
    </div>
  );
}
