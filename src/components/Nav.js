import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import BooksContainer from './books/BooksContainer';
import Categories from './categories/Categories';
import './Nav.css';

export default function Nav() {
  return (
    <Router>
      <div className="wrapper">
        <nav>
          <h1 className="title">Bookstore CMS</h1>
          <ul>
            <li className="books">
              <Link to="/books">BOOKS</Link>
            </li>
            <li className="categories">
              <Link to="/categories">CATEGORIES</Link>
            </li>
          </ul>
        </nav>
        <span className="profile">
          <img src="" alt="profile pic" />
        </span>
        <Switch>
          <Route path="/books">
            <BooksContainer />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
