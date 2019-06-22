import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { calculator } from './reducers'
import CFrame from './components/CFrame'
import './App.css';

const store = createStore(calculator)

const App = () => (
  <Provider store={store}>
    <CFrame />
  </Provider>
);

export default App;
