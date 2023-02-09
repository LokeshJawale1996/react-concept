import React, { useState } from "react";

function UserForm() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold py-2">
        4 useState Example:Sign Up(Object)
      </h2>

      <form onSubmit={handleSubmit} className="py-4 px-4">
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Name"
          className="bg-green-50 border font-semi-bold  border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-xl rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5 dark:bg-gray-700 dark:border-green-500  placeholder:text-xl  placeholder:font-medium value:text-xl w-full md:w-5/12 mx-auto my-2"
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email"
          className="bg-green-50 border font-semi-bold  border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-xl rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5 dark:bg-gray-700 dark:border-green-500  placeholder:text-xl  placeholder:font-medium value:text-xl w-full md:w-5/12 mx-auto my-2"
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Password"
          className="bg-green-50 border font-semi-bold  border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-xl rounded-lg focus:ring-green-500 focus:border-green-500 block p-2.5 dark:bg-gray-700 dark:border-green-500  placeholder:text-xl  placeholder:font-medium value:text-xl w-full md:w-5/12 mx-auto my-2"
        />
        <button
          type="submit"
          class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default UserForm;
