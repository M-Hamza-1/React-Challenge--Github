import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GithubUserinfo() {
  const [userData, setUserData] = useState(null);
  const [userRepos, setUserRepos] = useState(null);

  useEffect(() => {
    
    axios.get(`http://api.github.com/users/M-Hamza-1?client_id=0ec5c89f979a9a0e5c1f&client_secret=4a352223e48d2eaf9c9609acdcf273e5027960c3&sort=created}`)
      .then(response => {
        setUserData(response.data);
      });

    
    axios.get(`https://api.github.com/users/M-Hamza-1/repos`)
      .then(response => {
        setUserRepos(response.data);
      });
  }, []);

  if (!userData || !userRepos) return <div>Loading...</div>;

  return (
    <div>
      <img src={userData.avatar_url} />
      <h1>{userData.name}</h1>
      <p>Username: {userData.login}</p>
      <p>Location: {userData.location}</p>
      <p>Email: {userData.email}</p>
      <h2>Repositories:</h2>
      
      <ul>
        {userRepos.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} >
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return <GithubUserinfo username="M-Hamza-1" />;
}

export default App;
