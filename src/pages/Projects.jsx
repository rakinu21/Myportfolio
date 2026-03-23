import React, { useState, useEffect } from 'react';
import { fetchGithubRepos } from '../utils/githubAPI.js';
import ProjectCard from '../components/ProjectCard/ProjectCard.jsx';
import { scrollReveal } from '../animations/gsapAnimations.js';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGithubRepos().then(setRepos).finally(() => setLoading(false));
    // GSAP
    scrollReveal('.project-card');
  }, []);

  if (loading) return <p>Loading projects...</p>;

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem'}}>
        {repos.map((repo, index) => (
          <ProjectCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
