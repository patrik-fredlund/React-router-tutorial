import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Shop = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((response) => response.json())
    //   .then((data) => setData(data.splice(0, 10)));
    // console.log(data.splice(0, 5));

    //fetch API - old way.

    // (async () => {
    //   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    //   console.log(res);

    //   const data = await res.json();
    //   console.log(data.splice(0, 5));

    //   setData(data.splice(0, 10));
    // })();
    // }, []);

    //async & await - to fetch data

    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => setData(res.data));

    console.log(data.splice(0, 5));
  }, []);

  //axios - fetch data

  return (
    <div>
      <ul>
        {setData.map((item) => {
          return <li key={item.id}>{item.body}</li>;
        })}
      </ul>
    </div>
  );
};
