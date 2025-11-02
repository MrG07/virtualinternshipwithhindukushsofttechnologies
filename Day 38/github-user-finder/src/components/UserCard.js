import React from "react";
import "../App.css"; 

function UserCard({ user }) {
  return (
    <div className="card">
      <img src={user.avatar_url} alt="Avatar" />
      <h2>{user.name || "No Name Available"}</h2>
      <p>Username: @{user.login}</p>
      <p>Followers: {user.followers}</p>
      <p>Following: {user.following}</p>
      <p>Public Repos: {user.public_repos}</p>
      <a href={user.html_url} target="_blank" rel="noreferrer">
        Visit Profile
      </a>
    </div>
  );
}

export default UserCard;
