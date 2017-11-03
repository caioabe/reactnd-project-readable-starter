import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

import { PostDetail, PostForm } from '../';
import { getPosts } from '../../modules/posts';

class Post extends Component {
  componentWillMount() {
    this.props.getPosts();
  }

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

const mapDispatchToProps = { getPosts };
const mapStateToProps = ({ posts }) => (
  {
    posts,
  }
);

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Post);

export { connectedComponent as Post };

Post.propTypes = {
  posts: PropTypes.array,
};

Post.defaultProps = {
  posts: [],
};

