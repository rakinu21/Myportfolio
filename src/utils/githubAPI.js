const GITHUB_USERNAME = 'rakinu21';

export const fetchGithubRepos = async () => {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`);
    if (!response.ok) throw new Error('Failed to fetch');
    const repos = await response.json();
    // Filter non-fork repos or customize
    return repos.filter(repo => !repo.fork).slice(0, 8);
  } catch (error) {
    console.error('GitHub API error:', error);
    return [];
  }
};
