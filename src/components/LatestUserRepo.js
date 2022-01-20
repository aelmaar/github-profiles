import React, { useState, useEffect } from "react";
import Repos from "./Repos";

function LatestUserRepo(props) {
  const { login } = props;
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchUserRepos = async () => {
      const response = await fetch(
        `https://api.github.com/users/${login}/repos`
      );
      return response.json();
    };
    fetchUserRepos().then((data) => setRepos(data));
  }, [login]);

  return (
    <div className="userepo_container">
      <h1>Latest Repositories</h1>
      <div className="userepo_repos">
        {repos.slice(0, 6).map((repo) => (
          <Repos key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

export default LatestUserRepo;
