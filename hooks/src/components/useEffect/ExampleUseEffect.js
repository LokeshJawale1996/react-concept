import React, { useState, useEffect } from "react";

const ExampleUseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
    //console.log on every rendered
    console.log(document.title);
    //and the dependency array contains only count, which means that the effect will only re-run if the count value changes.

  }, [count]);

  return (
    <div>
        {/* //Every time the "Increase Count" button is clicked, the setCount function is called with the argument count + 1, which updates the count value and causes the component to re-render. When the component re-renders, useEffect will run again, updating the document title with the latest count value. */}

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};

export default ExampleUseEffect;




