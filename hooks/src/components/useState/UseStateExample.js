import React, { useState } from "react";

function UseStateExample() {
  //useState related to boolean
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div className="border-b-2 border-slate-900">
      <h1 className="text-3xl font-bold bg-slate-500">USESTATE</h1>
      <h2 className="text-2xl font-semibold py-2">1 useState Example:Toggle(boolean)</h2>
      {/* initially isToggled is false so we are able to see off button and 
     when we click on it we see on button and toggle continues */}
      <button
        type="button"
        class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={() => setIsToggled(!isToggled)}
      >
        {" "}
        {isToggled ? "On" : "Off"}
      </button>
    </div>
  );
}
export default UseStateExample;
