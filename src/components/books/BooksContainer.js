import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import BooksList from './BooksList';
import InputBooks from './InputBooks';
import { setBooks } from '../../redux/books/books';
import '../CSS/BooksContainer.css';

const BooksContainer = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const displayBooks = async () => {
    const getBooks = await axios.get(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BgVyYWwUEkoOu7CaDcOv/books',
    )
      .then((res) => res.data);
    dispatch(setBooks(getBooks));
  };
  useEffect(() => {
    displayBooks();
  }, []);

  return (
    <main>
      <BooksList books={books} />
      <InputBooks />
    </main>
  );
};

export default BooksContainer;
