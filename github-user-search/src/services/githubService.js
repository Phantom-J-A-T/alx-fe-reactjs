const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

const headers = {
  Authorization: `Bearer ${GITHUB_API_KEY}`,
  Accept: 'application/vnd.github.v3+json',
};

export const fetchGitHubUser = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers,
  });
  return response.json();
};
