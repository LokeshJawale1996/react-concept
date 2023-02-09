import React, { useState } from "react";

const ChangeValue = () => {
  const [value, setValue] = useState(null);

  return (
    <div className="border-b-2 border-slate-900">
      <p className="text-2xl font-semibold py-4">5 UseState Example : ChangeValue(null)</p>

      <p className="text-xl font-semibold py-2">Value: {value || "null"}</p>
      <button
          type="button"
          class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 my-2"
          onClick={() => setValue("Hello World!")}
        >
          Set Value
        </button>
    </div>
  );
};

export default ChangeValue;
