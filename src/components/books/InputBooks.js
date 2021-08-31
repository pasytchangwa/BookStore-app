import React from 'react';

const InputBooks = () => (
  <form>
    <input placeholder="Book title" />
    <select placeholder="category">
      <option value="" selected disabled hidden>
        Action
      </option>
      <option value="" selected disabled hidden>
        Science Fiction
      </option>
      <option value="" selected disabled hidden>
        Economy
      </option>
    </select>
    <button type="submit">ADD BOOK</button>
  </form>
);

export default InputBooks;
