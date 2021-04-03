import React, { useState, useEffect } from 'react';
import axios from 'axios';

const api = axios.create;

export const Shop = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((response) => response.json())
    //   .then((data) => setData(data.splice(0, 10)));
    // console.log(data.splice(0, 5));
    (async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setData(data.splice(0, 10));
    })();
  }, []);

  return (
    <div>
      <ul>
        {data.map((item) => {
          return <li key={item.id}>{item.body}</li>;
        })}
      </ul>
    </div>
  );
};
