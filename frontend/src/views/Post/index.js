import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { PostForm } from '../Post/PostForm';

class Post extends Component {
  render() {
    const { match } = this.props;
    const { url } = match;

    return (
      <div>
        <h2>Post</h2>
        <Route path={`${url}/:action`} component={PostForm}/>
        <Route exact path={url} render={() => (
          <h3>Please select a topic.</h3>
        )}/>
      </div>
    );
  }
}

export { Post };
