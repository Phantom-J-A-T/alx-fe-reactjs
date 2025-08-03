import axios from 'axios';

const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

const headers = GITHUB_API_KEY
  ? {
      Authorization: `Bearer ${GITHUB_API_KEY}`,
      Accept: 'application/vnd.github.v3+json',
    }
  : {
      Accept: 'application/vnd.github.v3+json',
    };

/**
 * Fetch a single user's detailed profile by username.
 */
export const fetchUserData = async (username) => {
  try {
    const res = await axios.get(`https://api.github.com/users/${username}`, {
      headers,
    });
    return res.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'Failed to fetch user'
    );
  }
};

/**
 * Perform an advanced search for GitHub users based on multiple criteria.
 * @param {Object} params - Search parameters
 * @param {string} params.username - Partial or full GitHub username
 * @param {string} [params.location] - Optional location filter
 * @param {number} [params.minRepos] - Optional minimum public repositories
 * @returns {Promise<object>} - GitHub API search results
 */
export const searchUsers = async ({ username, location, minRepos, page = 1, per_page = 5  }) => {
  if (!username) throw new Error('Username is required for search.');

  let query = `${username} in:login`;

  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  try {
    const response = await await axios.get(
        `https://api.github.com/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=${per_page}`,
        { headers }
      );

    let query = `${username} in:login`;
    if (location) query += ` location:${location}`;
    if (minRepos) query += ` repos:>=${minRepos}`;
  

    return response.data; // contains .items and .total_count
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'Failed to perform advanced search'
    );
  }
};
