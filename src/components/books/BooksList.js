import PropTypes from 'prop-types';
import BooksItem from './BooksItem';
import '../CSS/BooksList.css';

const BooksList = ({ books }) => (
  <section className="list-section">
    <ul className="list">
      {books.map((book) => (
        <BooksItem key={book.id} book={book} />
      ))}
    </ul>
  </section>
);

BooksList.propTypes = {
  books: PropTypes.objectOf(Array).isRequired,
};

export default BooksList;
