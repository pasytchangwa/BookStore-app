import PropTypes from 'prop-types';
import BooksItem from './BooksItem';
import './BooksList.css';

const BooksList = ({ books }) => (
  <ul className="list">
    {books.map((book) => (
      <BooksItem key={book.id} book={book} />
    ))}
  </ul>
);

BooksList.propTypes = {
  books: PropTypes.objectOf(Array).isRequired,
};

export default BooksList;
