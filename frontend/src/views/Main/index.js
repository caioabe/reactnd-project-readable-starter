import React from 'react';
import { Grid } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import { Root, Category, Post, Comment } from '../';

const Main = () => (
  <Grid>
    <Switch>
      <Route exact path="/" component={Root}/>
      <Route path="/category" component={Category}/>
      <Route path="/post" component={Post}/>
      <Route path="/comment" component={Comment}/>
    </Switch>
  </Grid>
);

export { Main };
