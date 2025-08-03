import axios from 'axios';

const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

// Optional authorization header if using a token
const headers = GITHUB_API_KEY
  ? {
      Authorization: `Bearer ${GITHUB_API_KEY}`,
      Accept: 'application/vnd.github.v3+json',
    }
  : {
      Accept: 'application/vnd.github.v3+json',
    };

/**
 * Fetch GitHub user data based on username.
 * @param {string} username - GitHub username.
 * @returns {Promise<object>} GitHub user data
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
