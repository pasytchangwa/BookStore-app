import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { removeBook } from '../../redux/books/books';
import '../CSS/BooksSetup.css';

const BooksSetup = ({ id }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    axios
      .delete(
        `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/BgVyYWwUEkoOu7CaDcOv/books/${id}`,
      )
      .then((res) => {
        if (res.status === 201) {
          dispatch(removeBook(id));
        }
      });
  };

  const display = {
    display: 'flex',
    gap: '0.938rem',
    paddingTop: '1.31rem',
  };

  return (
    <div style={display}>
      <button type="button" className="btn">
        Comments
      </button>
      <i className="bar" />
      <button type="button" onClick={handleRemove} className="btn">
        Remove
      </button>
      <i className="bar" />
      <button type="button" className="btn">
        Edit
      </button>
    </div>
  );
};

BooksSetup.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BooksSetup;
