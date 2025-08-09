import React from "react";
import "../styles/Achievements.css";
import data from "../data";

function Achievements() {
  const { achievements } = data;
  return (
    <section className="achievements">
      <h2>Achievements</h2>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </section>
  );
}

export default Achievements;
