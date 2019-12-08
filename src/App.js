import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { calculator } from './reducers'
import Display from './page/Display'

const store = createStore(calculator)

const App = () => (
  <Provider store={store}>
    <Display />
  </Provider>
);

export default App;
