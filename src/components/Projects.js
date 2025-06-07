import React from "react";
import "../CSS/ExperienceProjects.css";

const Projects = () => (
  <section id="projects" className="section projects-section">
    <h2 className="section-title">Projects</h2>
    <div className="project-card">
      <h3>E-commerce Website</h3>
      <p>
        Login/Logout, Product categories & subcategories, purchase form,
        dispatch tracking.
      </p>
    </div>
    <div className="project-card">
      <h3>Todo App</h3>
      <p>Full CRUD functionality: create, read, update, delete tasks.</p>
    </div>
    <div className="project-card">
      <h3>Travel Blog</h3>
      <p>Stylized travel blog with images, temples, and custom fonts.</p>
    </div>
  </section>
);

export default Projects;
