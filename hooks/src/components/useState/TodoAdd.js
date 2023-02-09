import React, { useState } from "react";

function TodoAdd() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    if (inputValue === "") {
      //this statment not allows empty todo

      return;
    }
    e.preventDefault();
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  return (
    <div className="border-b-2 border-slate-900">
      <h2 className="text-2xl font-semibold py-2">
        3 useState Example:Todo(String & Array)
      </h2>

      <form
        onSubmit={handleSubmit}
        className="py-4 px-4 w-full md:w-5/12 mx-auto flex gap-x-8"
      >
        <input
          className="bg-green-50 border font-semi-bold  border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-xl rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500  placeholder:text-xl  placeholder:font-medium value:text-xl"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          type="submit"
        >
          Add
        </button>
      </form>
      <ul className="w-5/12 mx-auto">
        {todos.map((todo, index) => (
          <li
            className="flex gap-x-4  bg-red-300 mx-auto py-3 justify-center mb-3 rounded-lg text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium text-sm px-5 text-center mr-2"
            key={index}
          >
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoAdd;
