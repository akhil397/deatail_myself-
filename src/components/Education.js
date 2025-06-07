import React from "react";
import "../CSS/EducationContact.css";

const Education = () => (
  <section id="education" className="section education-section">
    <h2 className="section-title">Education</h2>
    <ul className="education-list">
      <li>
        <h3>B.Com - Utim College, Cherthala</h3>
        <p className="detail">Revindra Nadja Tagor University | 70% | 2023</p>
      </li>
      <li>
        <h3>+2 Commerce - Akshara Academy</h3>
        <p className="detail">BHSE | 60% | 2009</p>
      </li>
      <li>
        <h3>SSLC - St. Francis Asisi Higher Secondary School</h3>
        <p className="detail">State Syllabus of Kerala | 50% | 2007</p>
      </li>
    </ul>
  </section>
);

export default Education;
