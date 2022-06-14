import React, { useEffect, useState } from "react";

function GitHubSection() {
  const [willBData, setWillBData] = useState();
  const [loading, setLoading] = useState(true);

  const fetchGitHub = async () => {
    const response = await fetch("https://api.github.com/users/willbowdler");
    const data = await response.json();
    console.log(data);
    setWillBData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchGitHub();
  }, []);

  if (!loading) {
    return (
      <div className="gh-container">
        <h1>My GitHub</h1>
        <div className="gh-header">
          <div className="gh-col-1">
            <div>
              <img
                className="gh-profile-pic"
                src={willBData.avatar_url}
                alt="Will Bowdler's Profile Picture"
              />
            </div>
            <div className="gh-profile-desc">
              <h2>{willBData.login}</h2>
              <h4>{willBData.bio}</h4>
            </div>
          </div>
          <div className="gh-col-2">
            <div className="gh-g-item gh-public-repos">
              <h3>Public Repositories:</h3>
              {willBData.public_repos}
            </div>
            <div className="gh-g-item gh-location">
              <h3>Location:</h3>
              {willBData.location}
            </div>
            <div className="gh-g-item gh-member-since">
              <h3>GitHub Member Since:</h3>
              08.09.21
            </div>
            <div className="gh-g-item gh-email">
              <h3>Email:</h3>
              callowaybowdler@gmail.com
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>Loading</h1>;
  }
}

export default GitHubSection;
