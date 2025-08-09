import React from 'react';
import './Skills.css';
import data from '../data';

function Skills() {
  const { skills } = data;
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skill-categories-container">
        {Object.entries(skills).map(([category, skillList]) => (
          <div key={category} className="skill-category">
            <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <div className="skill-tags">
              {skillList.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
