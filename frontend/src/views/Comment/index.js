import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { CommentDetail } from '../';

class Comment extends Component {
  render() {
    const { match } = this.props;
    const { url } = match;

    return (
      <div>
        <h2>Comment</h2>
        <Switch>
          <Route path={`${url}/:commentId`} component={CommentDetail}/>
        </Switch>
      </div>
    );
  }
}

export { Comment };
