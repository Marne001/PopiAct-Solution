import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Information from './components/Information';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <Information/>
    </div>
  );
}

export default App;
