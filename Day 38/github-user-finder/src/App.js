import React, { useState } from "react";
import "./App.css";
import UserCard from "./components/UserCard";

function App() {
  const [username, setUsername] = useState(""); 
  const [userData, setUserData] = useState(null); 
  const [error, setError] = useState(""); 

  async function getUserData() {
    if (username === "") {
      setError("Please enter a username!");
      setUserData(null);
      return;
    }

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found!");
      }

      const data = await response.json();
      setUserData(data);
      setError("");
    } catch (err) {
      setError("❌ " + err.message);
      setUserData(null);
    }
  }

  return (
    <div className="container">
      <h1>GitHub User Finder</h1>

      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={getUserData}>Search</button>

      {error && <p className="error">{error}</p>}

      {userData && <UserCard user={userData} />}
    </div>
  );
}

export default App;
