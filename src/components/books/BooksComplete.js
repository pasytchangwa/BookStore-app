import React from 'react';
import PropTypes from 'prop-types';
import '../CSS/BooksComplete.css';

const BooksComplete = ({ progress }) => {
  const { currentChapter, completed } = progress;
  const display2 = {
    display: 'flex',
  };

  return (
    <section style={display2}>
      <article className="progress-ctn1">
        <div className="progress">
          <p className="circle" />
        </div>
        <div className="percent-ctn">
          <p className="percent">
            {completed}
            %
          </p>
          <span className="complete">Completed</span>
        </div>
      </article>
      <p className="separate" />
      <article className="progress-ctn2">
        <p className="chapter">CURRENT CHAPTER</p>
        <p className="chapter-title">{currentChapter}</p>
        <button className="update" type="button">
          UPDATE PROGRESS
        </button>
      </article>
    </section>
  );
};

BooksComplete.propTypes = {
  progress: PropTypes.shape({
    currentChapter: PropTypes.string.isRequired,
    completed: PropTypes.string.isRequired,
  }).isRequired,
};

export default BooksComplete;
