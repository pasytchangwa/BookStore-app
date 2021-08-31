import React from 'react';
import BooksList from './BooksList';
import InputHeader from './InputHeader';
import InputBooks from './InputBooks';
import '../CSS/BooksContainer.css';

const books = [
  {
    id: 1,
    category: 'Action',
    title: 'The hunger Games',
    author: 'Suxanne Collins',
    progress: {
      currentChapter: 'Chapter 17',
      completed: '64',
    },
  },
  {
    id: 2,
    category: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
    progress: {
      currentChapter: 'Chapter 3: "A Lesson Learned"',
      completed: '8',
    },
  },
  {
    id: 3,
    category: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    progress: {
      currentChapter: 'Introduction',
      completed: '0',
    },
  },
];

const BooksContainer = () => (
  <main>
    <BooksList books={books} />
    <div className="line" />
    <InputHeader />
    <InputBooks />
  </main>
);

export default BooksContainer;
