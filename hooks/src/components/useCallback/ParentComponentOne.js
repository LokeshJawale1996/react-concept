import React, { useState, useCallback } from 'react';
import ChildComponentOne from './ChildComponentOne';

const ParentComponentOne = () => {
    const [count, setCount] = useState(0);

  const incrementCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

//if we pass empty array it will render only once 

//   const incrementCount = useCallback(() => {
//     setCount(count + 1);
//   }, []);
  return (
    <div>
      <h1>Count: {count}</h1>
      <ChildComponentOne incrementCount={incrementCount} />
    </div>
  );

}

export default ParentComponentOne