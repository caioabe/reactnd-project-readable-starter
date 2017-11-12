import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { PostDetail } from '../';

class Category extends Component {
  render() {
    const { match } = this.props;
    const { url } = match;

    return (
      <div>
        <h2>Post Detail</h2>
        <Switch>
          <Route exact path={`${url}/:postId`} component={PostDetail}/>
        </Switch>
      </div>
    );
  }
}

export { Category };
