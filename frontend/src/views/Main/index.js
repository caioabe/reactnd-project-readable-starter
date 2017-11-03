import React from 'react';
import { Grid } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import { Root, Category, Post, Comment, PostForm } from '../';

const Main = () => (
  <Grid>
    <Switch>
      <Route exact path="/" component={Root}/>
      <Route path="/category" component={Category}/>
      <Route path="/post" component={Post}/>
      <Route path="/comment" component={Comment}/>
      <Route path="/new-post" component={PostForm}/>
    </Switch>
  </Grid>
);

export { Main };
