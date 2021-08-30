import React from 'react';
import propTypes from 'prop-types';

const BooksComplete = ({ progress }) =>{
  const { currentChapter, completed } = progression;

  return (
   <div ClassName='complete-ctn'>
     <div className="progress-ctn">
       <p className="circle">cercle</p>
       <div className="percent-ctn">
         <p className="percent">`${completed}%`</p>
         <span className="complete">Completed</span>
       </div>
     </div>
     <p className="bar">|</p>
     <div className="progress-ctn">
       <p className="chapter">CURRENT CHAPTER</p>
       <p className="chapter-title">`${currentChapter}`</p>
       <button className="update" type='button'>UPDATE PROGRESS</button>
     </div>
   </div>
  );
}

BooksComplete.propTypes = {
  progress: PropTypes.shape({
    currentChapter: PropTypes.string.isRequired,
    completed: PropTypes.string.isRequired,
  }).isRequired,
};

export default BooksComplete;
