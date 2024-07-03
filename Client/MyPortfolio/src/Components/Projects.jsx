import React from 'react';
import './Projects.css';

function Projects() {
  const projectList = [
    {
      title: 'Project 1',
      description: 'Description of project 1.',
      image: '/path-to-image1.jpg',
      link: 'https://project1.com'
    },
    {
      title: 'Project 2',
      description: 'Description of project 2.',
      image: '/path-to-image2.jpg',
      link: 'https://project2.com'
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={`${project.title} screenshot`} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
