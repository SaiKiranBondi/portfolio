import React, { useState, useEffect } from 'react';
import './Projects.css';
import data from '../data';

// Modal Component is now simpler
const Modal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <img src={project.img} alt={project.title} className="modal-img" />
        <h2>{project.title}</h2>
        <p>{project.desc}</p>
        {project.tech && (
          <div className="tech-stack">
            <strong>Technologies:</strong>
            {project.tech.map((tech, i) => (
              <span key={i} className="tech-tag">{tech}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};


function Projects() {
  const { currentProjects, pastProjects } = data;
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // Effect to handle closing modal with Escape key is now in the parent
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        handleCloseModal();
      }
    };
    // Only add event listener if modal is open
    if (selectedProject) {
      window.addEventListener('keydown', handleEsc);
    }

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [selectedProject]); // Rerun effect if selectedProject changes

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <>
      <section className="projects">
        <h2>Current Projects</h2>
        <div className="project-grid">
          {currentProjects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.img} alt={project.title} className="project-img" />
              <h3>{project.title}</h3>
              <p>{truncate(project.desc, 100)}</p>
              <button onClick={() => handleOpenModal(project)} className="read-more-btn">Read More</button>
            </div>
          ))}
        </div>
        <h2>Past Projects</h2>
        <div className="project-grid">
          {pastProjects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p>{truncate(project.desc, 100)}</p>
               <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <button onClick={() => handleOpenModal(project)} className="read-more-btn">Read More</button>
            </div>
          ))}
        </div>
      </section>
      <Modal project={selectedProject} onClose={handleCloseModal} />
    </>
  );
}

export default Projects;
