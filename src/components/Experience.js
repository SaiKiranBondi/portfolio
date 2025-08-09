import React from 'react';
import './Experience.css';
import data from '../data';

function Experience() {
  const { experience } = data;
  return (
    <section className="experience">
      <div className="experience-content-wrapper">
        <h2>Experience</h2>
        <div className="experience-timeline">
          {experience.map((job, index) => (
            <div key={index} className="experience-item">
              <h3>{job.role} at {job.company}</h3>
              <p className="duration">{job.duration}</p>
              <ul>
                {job.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
