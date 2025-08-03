import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

const Search = () => {
  const [form, setForm] = useState({
    username: '',
    location: '',
    minRepos: '',
  });

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setUser(null);

    const { username } = form;
    if (!username.trim()) {
      setError('Username is required');
      return;
    }

    setLoading(true);
    try {
      const data = await fetchUserData(username.trim());

      const passesLocation =
        !form.location || data.location?.toLowerCase().includes(form.location.toLowerCase());

      const passesRepoCheck =
        !form.minRepos || data.public_repos >= parseInt(form.minRepos, 10);

      if (!passesLocation || !passesRepoCheck) {
        setError('User found but did not match the additional criteria.');
      } else {
        setUser(data);
      }
    } catch {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-700">Advanced GitHub User Search</h2>

        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            GitHub Username <span className="text-red-500">*</span>
          </label>
          <input
            id="username"
            name="username"
            type="text"
            className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. octocat"
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location (optional)
          </label>
          <input
            id="location"
            name="location"
            type="text"
            className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. Nigeria"
            value={form.location}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700">
            Minimum Repositories (optional)
          </label>
          <input
            id="minRepos"
            name="minRepos"
            type="number"
            min="0"
            className="w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. 10"
            value={form.minRepos}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-4 text-blue-600 font-medium">Loading...</p>}

      {error && <p className="text-center mt-4 text-red-500 font-semibold">{error}</p>}

      {user && (
        <div className="mt-6 bg-white p-4 rounded-md shadow-md text-center">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-24 h-24 mx-auto rounded-full border"
          />
          <h3 className="mt-2 text-lg font-semibold">{user.name || user.login}</h3>
          <p className="text-sm text-gray-600">{user.location || 'No location specified'}</p>
          <p className="text-sm text-gray-600">{user.public_repos} repositories</p>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline mt-2 inline-block"
          >
            Visit GitHub Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;
