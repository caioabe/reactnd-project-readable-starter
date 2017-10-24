import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

const App = () => (
  <div className="app">
    <Route exact path='/' render={() => (
      'empty'
    )} />
  </div>
);

export default App;
