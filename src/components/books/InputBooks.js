import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';
import InputHeader from './InputHeader';

const InputBooks = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleChange = (ev) => setTitle(ev.target.value);
  const handleChangeAgain = (ev) => setAuthor(ev.target.value);
  const handleChangeAgainAgain = (ev) => setCategory(ev.target.value);

  const submitBookToStore = (ev) => {
    ev.preventDefault();
    const book = {
      id: uuidv4(),
      title,
      author,
      category,
    };

    dispatch(addBook(book));
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <section className="adding">
      <InputHeader />
      <form onSubmit={submitBookToStore} className="form-part">
        <input
          placeholder="Book title"
          value={title}
          onChange={handleChange}
          required
        />
        <input
          placeholder="Book author"
          value={author}
          onChange={handleChangeAgain}
          required
        />
        <select placeholder="category" onChange={handleChangeAgainAgain}>
          <option value="">Category</option>
          <option>Science Fiction</option>
          <option>Action</option>
          <option>Economy</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};

export default InputBooks;
