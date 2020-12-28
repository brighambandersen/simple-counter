import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <h3 className="big">{count}</h3>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default App;
