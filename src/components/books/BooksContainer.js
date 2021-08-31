import { useSelector } from 'react-redux';
import BooksList from './BooksList';
import InputBooks from './InputBooks';
import '../CSS/BooksContainer.css';

const BooksContainer = () => {
  const books = useSelector((state) => state.books);
  return (
    <main>
      <BooksList books={books} />
      <InputBooks />
    </main>
  );
};

export default BooksContainer;
