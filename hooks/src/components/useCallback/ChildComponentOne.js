import React from 'react';


function ChildComponentOne({ incrementCount }) {
   
  return (
    <div>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}

export default ChildComponentOne;
