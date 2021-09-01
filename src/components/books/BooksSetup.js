import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { removeBook } from '../../redux/books/books';

const BooksSetup = ({ id }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    axios
      .delete(
        `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BgVyYWwUEkoOu7CaDcOv/books/${id}`
      )
      .then((res) => {
        if (res.status === 201) {
          dispatch(removeBook(id));
        }
      });
  };

  const display = {
    display: 'flex',
    gap: '0.5rem',
  };

  return (
    <div style={display}>
      <button type="button">Comments</button>
      <p>|</p>
      <button type="button" onClick={handleRemove}>
        Remove
      </button>
      <p>|</p>
      <button type="button">Edit</button>
    </div>
  );
};

BooksSetup.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BooksSetup;
