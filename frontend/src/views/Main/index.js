import React from 'react';
import { Grid } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import {
  Root,
  PostDetail,
  Categories,
  CommentDetail,
  PostForm,
  CommentForm,
  PostsByCategory,
} from '../';

const Main = () => (
  <Grid>
    <Switch>
      <Route exact path="/" component={Root}/>
      <Route exact path="/comment/:commentId" component={CommentDetail}/>
      <Route exact path="/edit-comment/:commentId" component={CommentForm}/>
      <Route exact path="/category" component={Categories}/>
      <Route exact path="/new-post" component={PostForm}/>
      <Route exact path="/edit-post/:postId" component={PostForm}/>
      <Route exact path="/new-comment/:postId" component={CommentForm}/>
      <Route exact path="/:categoryId" component={PostsByCategory}/>
      <Route exact path="/:categoryId/:postId" component={PostDetail}/>
    </Switch>
  </Grid>
);

export { Main };
