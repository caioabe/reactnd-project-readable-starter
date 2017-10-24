import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          'empty'
        )} />
      </div>
    )
  }
}

export default App;
