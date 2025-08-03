import React, { useState } from 'react';
import Search from '../components/Search';
import { fetchUserData } from '../api/github';

const Home = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (username) => {
    setError('');
    setUserData(null);
    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {userData && (
        <div>
          <img src={userData.avatar_url} alt="avatar" width={100} />
          <h2>{userData.name}</h2>
          <p>@{userData.login}</p>
          <p>{userData.bio}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
