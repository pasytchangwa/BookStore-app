import React from 'react';

const BooksSetup = () => {
  const display = {
    display: 'flex',
    gap: '0.5rem',
  };
  return (
    <div style={display}>
      <button type="button">Comments |</button>
      <button type="button">Remove |</button>
      <button type="button">Edit</button>
    </div>
  );
};

export default BooksSetup;
