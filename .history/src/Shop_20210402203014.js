import React, { useState, useEffect } from 'react';

export function Shop() {
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch(
      'https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get'
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
