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
 * Fetch GitHub user data by username.
 * @param {string} username - GitHub username.
 * @returns {Promise<object>} - API response containing user data.
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`, {
      headers,
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || 'Failed to fetch GitHub user'
    );
  }
};
