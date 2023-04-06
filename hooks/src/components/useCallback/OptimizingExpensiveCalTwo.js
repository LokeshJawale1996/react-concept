import React, { useState, useCallback } from 'react';

function OptimizingExpensiveCalTwo() {
  // Expensive calculation that takes a long time to compute
  const calculateResult = () => {
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result;
  };

  const [result, setResult] = useState(null);

  // Memoize the expensive calculation with useCallback
  const memoizedCalculation = useCallback(() => {
    const calculatedResult = calculateResult();
    setResult(calculatedResult);
  }, []);
  return (
    <div>
      <button onClick={memoizedCalculation}>Calculate Result</button>
      {result && <div>Result: {result}</div>}
    </div>
  );
}


export default OptimizingExpensiveCalTwo;