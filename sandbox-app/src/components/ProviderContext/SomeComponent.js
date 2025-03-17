import React, { useContext } from 'react';
import { MyContext } from './MyContext';

const SomeComponent = () => {
  const { value, setValue } = useContext(MyContext);

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => setValue('New value from SomeComponent')}>
        Change Value
      </button>
    </div>
  );
};

export default SomeComponent;