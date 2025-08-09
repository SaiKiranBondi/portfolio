import React from "react";
import "../styles/About.css";
import data from "../data";

function About() {
  const { education } = data.about;
  return (
    <section className="about">
      <div className="about-content-wrapper">
        <h2>Education</h2>
        <div className="education">
          {education.map((item, index) => (
            <div key={index} className="education-item">
              <h4>
                {item.degree} from {item.school} ({item.year})
              </h4>
              <p>CGPA: {item.cgpa}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
