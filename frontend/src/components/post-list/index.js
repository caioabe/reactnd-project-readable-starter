import _ from 'lodash';
import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { PostItem } from '../';

function renderPostItem(post) {
  return (
    <Col md={4} key={`${post.id}-menu`}>
      <PostItem postId={post.id} />
    </Col>
  );
}

class PostList extends Component {
  constructor(props) {
    super(props);

    this.removeFilter = this.removeFilter.bind(this);
    this.filterByDate = this.filterByDate.bind(this);
    this.filterByVote = this.filterByVote.bind(this);

    this.state = {
      posts: props.posts,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.posts !== this.props.posts) {
      this.setState({
        posts: nextProps.posts,
      });
    }
  }

  removeFilter() {
    this.setState({
      posts: this.props.posts,
    });
  }

  filterByDate() {
    this.setState({
      posts: _.orderBy(this.props.posts, 'timestamp', ['desc']),
    });
  }

  filterByVote() {
    this.setState({
      posts: _.orderBy(this.props.posts, 'voteScore', ['desc']),
    });
  }

  render() {
    const { comments } = this.props;
    const { posts } = this.state;

    return (
      <div>
        <Row>
          <Col md={2}>
            <Button onClick={this.removeFilter}>Remove filters</Button>
          </Col>
          <Col md={2}>
            <Button onClick={this.filterByDate}>Date</Button>
          </Col>
          <Col md={2}>
            <Button onClick={this.filterByVote}>Vote Score</Button>
          </Col>
        </Row>
        <hr />
        <Row>
          {posts.map((post) => {
            post.comments = comments[post.id];
            return renderPostItem(post);
          })}
        </Row>
      </div>
    );
  }
}

export { PostList };

PostList.propTypes = {
  posts: PropTypes.array,
  comments: PropTypes.object,
};

PostList.defaultProps = {
  posts: [],
  comments: {},
};
