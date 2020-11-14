import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Information from './components/Information';

import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <AppNavbar/>
      <Information/>
    </div>
    </Provider>
  );
}

export default App;
