import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { updatePost, createPost } from '../../../modules/posts';

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.handleSave = this.handleSave.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.handleInput = this.handleInput.bind(this);

    this.state = {
      isNew: false,
      postId: '',
      title: '',
      body: '',
      author: '',
      category: '',
    };
  }

  componentWillMount() {
    const { match, posts } = this.props;
    const isNew = match.path.indexOf('/new-post') >= 0;
    const { postId } = match.params;
    const post = posts.filter(p => p.id === postId)[0] || {};

    this.setState({
      isNew,
      postId,
      title: post.title,
      body: post.body,
      author: post.author,
      category: post.category,
    });
  }

  handleSave() {
    this.props.updatePost({
      id: this.state.postId,
      title: this.state.title,
      body: this.state.body,
    });
    this.props.history.push('/');
  }

  handleCreate() {
    this.props.createPost({
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
      category: this.state.category,
    });
    this.props.history.push('/');
  }

  renderButton() {
    let button;

    if (this.state.isNew) {
      button = (
        <Button bsStyle="primary" onClick={this.handleCreate}>
          Create post
        </Button>
      );
    } else {
      button = (
        <Button bsStyle="success" onClick={this.handleSave}>
          Save editing
        </Button>
      );
    }

    return button;
  }

  handleInput(name) {
    return (event) => {
      this.setState({ [name]: event.target.value });
    };
  }

  render() {
    const posts = this.props.posts || [];
    const { postId } = this.props.match.params;
    const post = posts.find(p => p.id === postId) || {};
    const { isNew } = this.state;

    return (
      <div>
        <form>
          <FormGroup>
            <ControlLabel>Title:</ControlLabel>
            <FormControl type="text"
              defaultValue={post.title}
              placeholder="Eloquent Ruby"
              onChange={this.handleInput('title')}/>

            <ControlLabel>Author:</ControlLabel>
            <FormControl
              readOnly={!isNew}
              type="text"
              defaultValue={post.author}
              placeholder="Eric Evans"
              onChange={this.handleInput('author')}/>

            <ControlLabel>Category:</ControlLabel>
            <FormControl
              readOnly={!isNew}
              componentClass="select"
              defaultValue={post.category}
              placeholder="select"
              onChange={this.handleInput('category')}>
              <option value="react">React</option>
              <option value="redux">Redux</option>
              <option value="udacity">Udacity</option>
            </FormControl>

            <ControlLabel>Body:</ControlLabel>
            <FormControl
              componentClass="textarea"
              placeholder="Describe..."
              defaultValue={post.body}
              onChange={this.handleInput('body')}/>
          </FormGroup>
        </form>
        {this.renderButton()}
      </div>
    );
  }
}

const mapDispatchToProps = { updatePost, createPost };
const mapStateToProps = ({ posts }) => (
  {
    posts,
  }
);

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(PostForm);

export { connectedComponent as PostForm };

PostForm.propTypes = {
  posts: PropTypes.array,
  post: PropTypes.object,
};

PostForm.defaultProps = {
  posts: [],
  post: {},
};
