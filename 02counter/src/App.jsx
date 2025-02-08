import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0)

  function addValue() {
    // setCounter(counter + 1)
    setCounter(prev => prev + 1); // Functional update for consistency
  }

  function removeValue() {
    // setCounter(counter - 1)
    setCounter(prev => Math.max(0, prev - 1)); // Prevent negative values
  }

  return (
    <div className="app-container">
      <h1>Hi, Abdul Rahman</h1>
      <div className="counter-display">{counter}</div>
      <div className="button-group">
        <button onClick={addValue}>
          Increase
        </button>
        <button
          onClick={removeValue}
          disabled={counter === 0} // Disable when 0
        >
          Decrease
        </button>
      </div>
    </div>
  );
}

export default App