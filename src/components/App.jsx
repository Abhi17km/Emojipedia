import React, { useState } from "react";

function App() {
  const [count, setcount] = useState(0);

  function increase() {
    setcount(count + 1);
  }
  function decrease() {
    setcount(count - 1);
  }

  return (
    <div>
      <div>
        <h1>Counter</h1>
      </div>
      <div className="container">
        <h1>{count}</h1>
        <button onClick={increase}>+</button>
        <button onClick={decrease}>-</button>
      </div>
    </div>
  );
}

export default App;
