import React, { useState } from "react";

function App({ name = "Student" }) {
  const [visible, setVisible] = useState(true);

  return (
    <div style={{ fontFamily: "Arial", padding: "2rem" }}>
      <h1>Welcome, {name}!</h1>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Hide" : "Show"} Message
      </button>
      {visible && <p>This is a toggleable message.</p>}
    </div>
  );
}

export default App;
