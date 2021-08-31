import PropTypes from 'propTypes';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/books';

const BooksSetup = ({ id }) => {
  const dispatch = useDispatch();

  const handleRemove = () => dispatch(removeBook(id));

  const display = {
    display: 'flex',
    gap: '0.5rem',
  };

  return (
    <div style={display}>
      <button type="button">Comments |</button>
      <button
        type="button"
        onClick={handleRemove}
      >
        Remove |
      </button>
      <button type="button">Edit</button>
    </div>
  );
};

BooksSetup.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BooksSetup;
