import PropTypes from 'prop-types';
import BooksSetup from './BooksSetup';
import BooksComplete from './BooksComplete';
import '../CSS/BooksItem.css';

const BooksItem = ({ book }) => {
  const {
    item_id: id, category, title, author, progress,
  } = book;

  return (
    <li key={id} className="single-book">
      <div className="about-book">
        <p>{category}</p>
        <h3>{title}</h3>
        <span>{author}</span>
        <BooksSetup id={id} />
      </div>
      <BooksComplete progress={progress} />
    </li>
  );
};

BooksItem.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    progress: BooksComplete.propTypes.progress,
  }).isRequired,
};

export default BooksItem;
