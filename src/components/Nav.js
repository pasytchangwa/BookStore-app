import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Books from './books/Books';
import Categories from './categories/Categories';
import './Nav.css';

export default function Nav() {
  return (
    <Router>
      <div className='wrapper'>
       <h1>Bookstore CMS</h1>
        <nav>
          <ul>
            <li>
              <Link to="/books">BOOKS</Link>
            </li>
            <li>
              <Link to="/categories">CATEGORIES</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>
        <span className='profile'><img src="" alt="profile pic" /></span>
      </div>
    </Router>
  );
}
