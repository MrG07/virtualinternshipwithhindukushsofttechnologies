
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
        minHeight: "100vh",
        textAlign: "center",
        paddingTop: "100px"
      }}
    >
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <br /><br />
      <button onClick={() => setDark(!dark)}>
        Toggle {dark ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default App;
