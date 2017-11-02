import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.renderButton = this.renderButton.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleCreate = this.handleCreate.bind(this);

    this.state = {
      postId: '',
    };
  }

  componentWillMount() {
    this.setState({
      postId: this.props.match.params.postId,
    });
  }

  handleSave() {
    this.props.savePost(this.state.postId);
  }

  handleCreate() {
    this.props.createPost();
  }

  renderButton() {
    let button;

    if (this.props.match.params.action === 'edit') {
      button = (
        <Button bsStyle="success" onClick={this.handleSave}>
          Save
        </Button>
      );
    } else {
      button = (
        <Button bsStyle="primary" onClick={this.handleCreate}>
          Create
        </Button>
      );
    }

    return button;
  }
  render() {
    const { post } = this.props;

    return (
      <div>
        <form>
          <FormGroup>
            <ControlLabel>Title:</ControlLabel>
            <FormControl type="text" value={post.title} placeholder="Eloquent Ruby"/>
            <ControlLabel>Author:</ControlLabel>
            <FormControl type="text" value={post.author} placeholder="Eric Evans"/>
            <ControlLabel>Category:</ControlLabel>
            <FormControl componentClass="select" placeholder="select">
              <option value="react">React</option>
              <option value="redux">Redux</option>
              <option value="udacity">Udacity</option>
            </FormControl>
            <ControlLabel>Body:</ControlLabel>
            <FormControl componentClass="textarea" placeholder="Describe..." />
          </FormGroup>
        </form>
        { this.renderButton() }
      </div>
    );
  }
}

export { PostForm };

PostForm.propTypes = {
  post: PropTypes.object,
};

PostForm.defaultProps = {
  post: {},
};
