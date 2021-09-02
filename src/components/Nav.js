import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import BooksContainer from './books/BooksContainer';
import Categories from './categories/Categories';
import './CSS/Nav.css';

export default function Nav() {
  const dec = {
    textDecoration: 'none',
    color: '#121212',
    fontWeight: 'normal',
  };

  return (
    <Router>
      <div className="wrapper">
        <div className="main-app">
          <header>
            <nav>
              <h1 className="title">Bookstore CMS</h1>
              <ul>
                <li className="books">
                  <Link to="/books" style={dec}>
                    BOOKS
                  </Link>
                </li>
                <li className="categories">
                  <Link to="/categories" style={dec}>
                    CATEGORIES
                  </Link>
                </li>
              </ul>
            </nav>
            <span className="profile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>
            </span>
          </header>
          <Switch>
            <Route path="/books">
              <BooksContainer />
            </Route>
            <Route path="/categories">
              <Categories />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
