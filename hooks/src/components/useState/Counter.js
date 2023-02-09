import React, { useState } from "react";

function Counter() {
  //useState related to number
  const [count, setCount] = useState(1);

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div className="border-b-2 border-slate-900">
      <p className="text-2xl font-semibold py-4">2 UseState Example : Counter(Number)</p>

      <div className="flex justify-center">
        <button
          type="button"
          class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={handleDecrement}
        >
          -
        </button>

        <p className="text-blue-500 text-xl font-semibold px-4">{count}</p>

        <button
          type="button"
          class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Counter;
