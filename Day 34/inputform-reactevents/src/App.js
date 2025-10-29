import React, { useState } from "react";

function App() {

  const [name, setName] = useState("");


  function handleInput(event) {
    setName(event.target.value);
  }

  function clearInput() {
    setName("");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1>Live Preview Form</h1>
      <input
        type="text"
        placeholder="Enter your Name..."
        value={name}
        onChange={handleInput}
        style={{
          padding: "8px",
          width: "250px",
          borderRadius: "5px",
          border: "1px solid gray",
        }}
      />
      <br /><br />
      <button
        onClick={clearInput}
        style={{
          padding: "8px 16px",
          background: "#131618ff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Clear
      </button>

      <h2 style={{ marginTop: "30px" }}>
        Hello, {name || "Stranger"} 👋
      </h2>
    </div>
  );
}

export default App;
