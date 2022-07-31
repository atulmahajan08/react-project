import React, { useState } from 'react';
import "./styleee.css";

function StateandProps() {

  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>
        <h1>Counter app using State and Props</h1>
      </header>
        <h2>Current value of  count is {count}</h2>
        <button onClick={() => count > 10 ? "" : setCount(count + 1)}>Increment Counter</button>
        <button onClick={() => count <= 0 ? "" : setCount(count - 1)}>Decrease Counter</button>
        <button onClick={() => setCount(0)}>Reset Counter</button>
    </div>
  )
}

export default StateandProps