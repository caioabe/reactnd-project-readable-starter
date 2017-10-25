import React from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'react-bootstrap';
import { Header } from './components';
import { Root, Category } from './views';

const App = () => (
  <div>
    <Header />
    <Grid>
      <Route exact path="/" component={Root}/>
      <Route path="/category" component={Category}/>
    </Grid>
  </div>
);

export default App;
