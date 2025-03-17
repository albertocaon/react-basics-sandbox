import React, { useState } from 'react';

const Hooks = () => {
  const [count, setCount] = useState(0);
  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1>
        Hooks Component
      </h1>

      <div>
        <h2>Counter: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>

      <div className="exercise">
        <h2>
          Exercise
        </h2>
        <p>
          Create a new component called <b>CustomHook</b>.
        </p>
        <p>
          The <b>CustomHook</b> component should contain a counter that increments by 1 every second.
        </p>
        <p>
          The <b>CustomHook</b> component should display the counter value.
        </p>
      </div>
    </>
)
  ;
}

export default Hooks;