import React from "react";
import "./Certificate.css";
export default function Certificate() {
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
          <li>Name of the student :</li>
          <li>Father's Name :</li>
          <li>Mother's Name: </li>
          <li>Name of the Institution: </li>
          <li>Name of Centre</li>
          <li>Reg No: </li>
          <li>Group: </li>
        </ul>
      </section>
      <section id="cert-student-result">
        <table>
          <thead>
            <tr>
              <th>SL No.</th>
              <th>Name of SUbject</th>
              <th>Marks Obtained</th>
              <th>Letter Grade</th>
              <th>Grade Point</th>
              <th>GPA(without additional subject)</th>
              <th>GPA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Bangla</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td>English</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Informations and Communicaton Technology</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Physics</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>5</td>
              <td>Chemistry</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>6</td>
              <td>Higher Mathmatics</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>7</td>
              <td>Biology</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </section>

      <p>Date of publication of result:</p>
    </div>
  );
}
