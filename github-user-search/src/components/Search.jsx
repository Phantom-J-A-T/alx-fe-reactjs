import React, { useState } from 'react';
import { searchUsers, fetchUserData } from '../services/githubService';

const PER_PAGE = 5;

const Search = () => {
  const [form, setForm] = useState({
    username: '',
    location: '',
    minRepos: '',
  });

  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResults([]);
    setPage(1);

    try {
      const data = await searchUsers({ ...form, page: 1, per_page: PER_PAGE });
      const detailedUsers = await Promise.all(
        data.items.map((user) => fetchUserData(user.login))
      );
      setResults(detailedUsers);
      setHasMore(data.total_count > PER_PAGE);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);
    try {
      const data = await searchUsers({ ...form, page: nextPage, per_page: PER_PAGE });
      const detailedUsers = await Promise.all(
        data.items.map((user) => fetchUserData(user.login))
      );
      setResults((prev) => [...prev, ...detailedUsers]);
      setPage(nextPage);
      setHasMore(data.total_count > nextPage * PER_PAGE);
    } catch (err) {
      setError('Failed to load more results.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-xl font-semibold text-gray-700">Advanced GitHub User Search</h2>

        <input
          name="username"
          placeholder="GitHub Username"
          value={form.username}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md"
        />

        <input
          name="location"
          placeholder="Location (optional)"
          value={form.location}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
        />

        <input
          name="minRepos"
          type="number"
          min="0"
          placeholder="Minimum Repositories (optional)"
          value={form.minRepos}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center mt-4 text-blue-600">Loading...</p>}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}

      <div className="mt-6 space-y-4">
        {results.map((user) => (
          <div key={user.id} className="bg-white p-4 rounded shadow flex items-center gap-4">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full border"
            />
            <div>
              <h3 className="text-lg font-semibold">{user.name || user.login}</h3>
              <p className="text-sm text-gray-600">Location: {user.location || 'N/A'}</p>
              <p className="text-sm text-gray-600">Repos: {user.public_repos}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {hasMore && !loading && (
        <div className="text-center mt-6">
          <button
            onClick={handleLoadMore}
            className="bg-gray-200 hover:bg-gray-300 px-6 py-2 rounded text-sm"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
