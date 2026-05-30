// src/components/ProjectList/ProjectList.jsx
import React from 'react';
import './ProjectList.css';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-image">
            <img src={project.img} alt={project.name} />
          </div>
          <div className="project-info">
            <h3 className="project-name">{project.name}</h3>
            <span className="project-category">{project.category}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;