import React from 'react';

// Функциональный компонент для отображения списка проектов
function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map(project => (
        <div key={project.id} className="project-card">
          <img 
            src={project.image} 
            alt={project.title}
            className="project-image"
          />
          <div className="project-info">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-category">{project.category}</p>
            <p className="project-description">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;