import React, { useState, useEffect } from 'react';

export const Shop = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((response) => response.json())
    //   .then((data) => setData(data.splice(0, 10)));
    // console.log(data.splice(0, 5));
    (async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
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
