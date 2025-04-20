import React from 'react';

export type playGroundProps = {
  Title: string;
};

export const playGround: React.FC<playGroundProps> = ({ Title }) => {
  const items = [
    { name: 'Item 1', price: 5.49 },
    { name: 'Item 2', price: 12.99 },
    { name: 'Item 3', price: 3.75 },
    { name: 'Item 4', price: 24.0 },
    { name: 'Item 5', price: 7.3 },
    { name: 'Item 6', price: 15.2 },
    { name: 'Item 7', price: 0.99 },
    { name: 'Item 8', price: 18.45 },
    { name: 'Item 9', price: 9.0 },
    { name: 'Item 10', price: 11.1 },
  ];

  const filterItems = items.find((item) => {
    return item.price === 9.0;
  });

  console.log(filterItems);

  return (
    <section>
      <h1>{Title}</h1>
    </section>
  );
};

export default playGround;
