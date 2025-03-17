import React, { useState, useEffect } from 'react';

const Effects = () => {
  const [countWithEffect, setCountWithEffect] = useState(0);
  let count = 0;

  useEffect(() => {
    console.log('useEffect called, value of countWithEffect: ', countWithEffect);
  }, [countWithEffect]); // Dependency array ensures this runs when 'count' changes

  const increment = () => {
    setCountWithEffect(countWithEffect + 1);
    count++;
  };

  const decrement = () => {
    setCountWithEffect(countWithEffect - 1);
    count--;
  };

  return (
    <>
      <h1>
        Effects Component
      </h1>
      <h2>Counter with Effects: {countWithEffect}</h2>
      <h2>Simple Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <div className="exercise">
        <h2>
          Exercise
        </h2>
        <p>
          Create a new component called <b>Notifier</b>.
        </p>
        <p>
          The <b>Notifier</b> component should contain a counter that increments by 1 for every user click on increment button.
        </p>
        <p>
          The <b>Notifier</b> component should log in the console a new timestamp every 10 counts.
        </p>
      </div>
    </>
  );
}

export default Effects;