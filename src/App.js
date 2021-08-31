import React from 'react';
import { provider } from 'react-redux';
import store from './redux/configureStore';
import Nav from './components/Nav';

const App = () => (
  <provider store={store}>
    <Nav />
  </provider>
);

export default App;
