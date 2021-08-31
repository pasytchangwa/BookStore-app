import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Nav from './components/Nav';

const App = () => (
  <Provider store={store}>
    <Nav />
  </Provider>
);

export default App;
