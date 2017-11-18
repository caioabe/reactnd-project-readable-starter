import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

import { getPosts } from '../../modules/posts';

class Post extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { match } = this.props;
    const { url } = match;

    return (
      <div>
        <h2>Post</h2>
          <LinkContainer exact to={`/${url}`}>
            <Button bsStyle="primary">Create New Post</Button>
          </LinkContainer>
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

