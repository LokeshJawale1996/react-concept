import React, { useState, useMemo } from "react";
const ProductTable = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredProduct = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        class="block p-2.5 w-1/2 mx-auto z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
      />

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProduct.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;


// Let's say you have a list of products and you want to display them in a table. You also have a search bar that filters the list of products based on a search term. You want to optimize the rendering of the table so that it only re-renders when the search term or the list of products changes.

//In the above code, we're using the useMemo hook to filter the list of products based on the search term. The useMemo hook takes two arguments: a function that returns the memoized value, and an array of dependencies. The memoized value is only re-calculated when one of the dependencies changes.

// In this case, the function we pass to useMemo filters the products array based on the searchTerm. The products array and searchTerm are included in the dependencies array, so if either of them changes, the memoized value will be re-calculated.

// By using useMemo in this way, we can optimize the rendering of the ProductTable component so that it only re-renders when necessary. This can be especially helpful in larger applications where performance can become an issue