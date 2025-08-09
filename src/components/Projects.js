import React, { useState, useEffect } from 'react';
import './Projects.css';
import data from '../data';

const renderMarkdownToHtml = (markdown) => {
  let html = markdown;

  // Convert headers
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // Convert bold and italic
  html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
  html = html.replace(/_(.*?)_/gim, '<em>$1</em>');

  // Handle ordered lists
  // This is a more complex regex to capture multiple lines of ordered lists
  // and wrap them in <ol> tags, while converting each item to <li>
  html = html.replace(/(\n|^)(\d+\. .*(?:\n\d+\. .*)*)/g, (match, p1, p2) => {
    const listItems = p2.split('\n').map(item => {
      // Remove the number and dot, then trim
      return `<li>${item.replace(/^\d+\. /, '').trim()}</li>`;
    }).join('');
    return `${p1}<ol>${listItems}</ol>`;
  });

  // Handle unordered lists
  html = html.replace(/(\n|^)(- .*(?:\n- .*)*)/g, (match, p1, p2) => {
    const listItems = p2.split('\n').map(item => {
      // Remove the hyphen and trim
      return `<li>${item.replace(/^- /, '').trim()}</li>`;
    }).join('');
    return `${p1}<ul>${listItems}</ul>`;
  });

  // Convert paragraphs (lines not starting with a tag)
  // This needs to be done carefully after list processing
  html = html.split('\n').map(line => {
    if (!line.trim().startsWith('<') && line.trim() !== '') {
      return `<p>${line.trim()}</p>`;
    }
    return line;
  }).join('');

  return html;
};

// Modal Component is now simpler
const Modal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        
        <h2>{project.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: renderMarkdownToHtml(project.fullDescription) }} />
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
              <h3>{project.title}</h3>
              <div className="project-description" dangerouslySetInnerHTML={{ __html: renderMarkdownToHtml(project.desc) }} />
              {project.tech && (
                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              )}
              <button onClick={() => handleOpenModal(project)} className="read-more-btn">Read More</button>
            </div>
          ))}
        </div>
        <h2>Past Projects</h2>
        <div className="project-grid">
          {pastProjects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <div className="project-description" dangerouslySetInnerHTML={{ __html: renderMarkdownToHtml(project.desc) }} />
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
