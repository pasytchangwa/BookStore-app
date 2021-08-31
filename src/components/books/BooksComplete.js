import React from 'react';
import PropTypes from 'prop-types';

const BooksComplete = ({ progress }) => {
  const { currentChapter, completed } = progress;
  const display2 = {
    display: 'flex',
    gap: '1.2rem',
  };

  return (
    <section style={display2}>
      <article className="progress-ctn">
        <p className="circle">cercle</p>
        <div className="percent-ctn">
          <p className="percent">
            `$
            {completed}
            %`
          </p>
          <span className="complete">Completed</span>
        </div>
      </article>
      <p className="bar">|</p>
      <article className="progress-ctn">
        <p className="chapter">CURRENT CHAPTER</p>
        <p className="chapter-title">
          `$
          {currentChapter}
          `
        </p>
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
