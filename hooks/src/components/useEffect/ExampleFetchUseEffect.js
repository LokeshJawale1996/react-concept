import React, { useState, useEffect } from "react";
import axios from "axios";
import DATA from './data.json'
const ExampleFetchUseEffect = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
    .get("./data.json")
    .then((res) => setData(res.data))
    .catch(err => console.log(err))
    return () => {
      // Clean up code (optional)
    };
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      ) : (
        "Loading..."
      )}
    </div>
  );
};

export default ExampleFetchUseEffect;
