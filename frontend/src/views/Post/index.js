import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

import { PostDetail, PostForm } from '../';

class Post extends Component {
  render() {
    const { match } = this.props;
    const { url } = match;

    return (
      <div>
        <h2>Post</h2>
        <Switch>
          <Route exact path={`${url}`} render={() => (
            <LinkContainer exact to={'/new-post'}>
              <Button bsStyle="primary">Create New Post</Button>
            </LinkContainer>
          )}/>
          <Route exact path={`${url}/:postId`} component={PostDetail}/>
          <Route path={`${url}/:postId/edit`} component={PostForm}/>
        </Switch>
      </div>
    );
  }
}

export { Post };
