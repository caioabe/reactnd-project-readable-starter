import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { CommentDetail, CommentForm } from '../';

class Comment extends Component {
  render() {
    const { match } = this.props;
    const { url } = match;

    return (
      <div>
        <h2>Comment</h2>
        <Switch>
          <Route exact path={`${url}/:commentId`} component={CommentDetail}/>
          <Route path={`${url}/:commentId/edit`} component={CommentForm}/>
        </Switch>
      </div>
    );
  }
}

export { Comment };
