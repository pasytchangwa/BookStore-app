import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { addBook } from '../../redux/books/books';
import InputHeader from './InputHeader';
import '../CSS/InputBooks.css';

const InputBooks = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');

  const newBook = (book) => {
    axios.post(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BgVyYWwUEkoOu7CaDcOv/books', book,
    )
      .then((res) => {
        if (res.status === 201) {
          dispatch(addBook(book));
        }
      })
      .catch((error) => error);
  };

  const submitBookToStore = (ev) => {
    ev.preventDefault();
    const book = {
      item_id: uuidv4(),
      title,
      category,
    };
    newBook(book);
    setTitle('');
  };

  return (
    <section className="adding">
      <InputHeader />
      <form onSubmit={submitBookToStore} className="form-part">
        <input
          placeholder="Book title"
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
          required
        />
        <select onChange={(ev) => setCategory(ev.target.value)} required>
          <option value="" selected disabled hidden>
            Category
          </option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Action">Action</option>
          <option value="Economy">Economy</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};

export default InputBooks;
