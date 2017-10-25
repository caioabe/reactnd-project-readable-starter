import React, { Component } from 'react';
import ApiService from '../../services/api-service';

class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentWillMount() {
    ApiService
      .getPosts()
      .then(posts => this.setState({ posts }));
  }

  render() {
    const { posts } = this.state;

    return (
      <div>
        <h2>All Posts</h2>
        {
          posts.map(post => (
            <div key={post.id}>
              <p>{post.author}</p>
              <p>{post.body}</p>
              <p>{post.category}</p>
              <p>{post.id}</p>
              <p>{post.timestamp}</p>
              <p>{post.title}</p>
              <p>{post.voteScore}</p>
            </div>
          ))
        }
      </div>
    );
  }
}

export { Root };
