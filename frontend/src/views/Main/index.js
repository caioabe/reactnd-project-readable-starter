import React from 'react';
import { Grid } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import {
  Root,
  Category,
  Categories,
  Post,
  Comment,
  PostForm,
  CommentForm,
  PostsByCategory,
} from '../';

const Main = () => (
  <Grid>
    <Switch>
      <Route exact path="/" component={Root}/>
      <Route exact path="/category" component={Categories}/>
      <Route exact path={'/:categoryId'} component={PostsByCategory}/>
      <Route path="/category" component={Category} />
      <Route path="/post" component={Post}/>
      <Route path="/comment" component={Comment}/>
      <Route path="/new-post" component={PostForm}/>
      <Route path="/new-comment/:postId" component={CommentForm}/>
    </Switch>
  </Grid>
);

export { Main };
