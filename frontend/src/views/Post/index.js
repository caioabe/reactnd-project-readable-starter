import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { PostDetail } from '../';

class Post extends Component {
  render() {
    const { match } = this.props;
    const { url } = match;

    return (
      <div>
        <h2>Post</h2>
        <Switch>
          <Route path={`${url}/:postId`} component={PostDetail}/>
        </Switch>
      </div>
    );
  }
}

export { Post };
