import React, { useState, useEffect } from 'react';

function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch(
      'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all'
    );
    const items = await data.json();
    console.log(items);
  };

  return (
    <div>
      <h1>Shop</h1>
    </div>
  );
}

export default Shop;
