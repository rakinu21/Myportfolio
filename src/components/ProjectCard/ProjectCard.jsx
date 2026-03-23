import React from 'react';

const ProjectCard = ({ repo }) => {
  return (
    <div className="project-card glass p-6 m-4">
      <h3>{repo.name}</h3>
      <p>{repo.description || 'No description'}</p>
      <p>⭐ {repo.stargazers_count} | <a href={repo.html_url} target="_blank">View</a></p>
    </div>
  );
};

export default ProjectCard;
