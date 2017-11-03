import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { updateComment, createComment } from '../../../modules/comments';

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.handleSave = this.handleSave.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
    this.renderButton = this.renderButton.bind(this);
    this.handleInput = this.handleInput.bind(this);

    this.state = {
      commentId: '',
      parentId: '',
      isNew: false,
    };
  }

  componentWillMount() {
    this.setState({
      commentId: this.props.match.params.commentId,
      parentId: this.props.match.params.postId,
      isNew: this.props.match.path.indexOf('/new-comment') >= 0,
    });
  }

  handleSave() {
    const { comments } = this.props;
    const { commentId } = this.props.match.params;
    const comment = _.chain(comments)
      .values()
      .head()
      .find(c => c.id === commentId)
      .value() || [];

    this.props.updateComment({
      id: this.state.commentId,
      author: comment.author,
      body: this.state.body,
      parentId: comment.parentId,
    });
    this.props.history.push(`/comment/${this.state.commentId}`);
  }

  handleCreate() {
    this.props.createComment({
      author: this.state.author,
      body: this.state.body,
      parentId: this.state.parentId,
    });
    this.props.history.push(`/post/${this.state.parentId}`);
  }

  renderButton() {
    let button;

    if (this.state.isNew) {
      button = (
        <Button bsStyle="primary" onClick={this.handleCreate}>
          Create comment
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
    const { comments } = this.props;
    const { commentId } = this.props.match.params;
    const { isNew } = this.state;
    const comment = _.chain(comments)
      .values()
      .head()
      .find(c => c.id === commentId)
      .value() || [];

    return (
      <div>
        <form>
          <FormGroup>
            <ControlLabel>Body:</ControlLabel>
            <FormControl
              componentClass="textarea"
              placeholder="Describe..."
              defaultValue={comment.body}
              onChange={this.handleInput('body')}/>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Author:</ControlLabel>
            <FormControl
              disabled={!isNew}
              componentClass="input"
              placeholder="Describe..."
              defaultValue={comment.author}
              onChange={this.handleInput('author')}/>
          </FormGroup>
        </form>
        {this.renderButton()}
      </div>
    );
  }
}

const mapDispatchToProps = { updateComment, createComment };
const mapStateToProps = ({ comments }) => (
  {
    comments,
  }
);

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(CommentForm);

export { connectedComponent as CommentForm };

CommentForm.propTypes = {
  comments: PropTypes.object,
};

CommentForm.defaultProps = {
  comments: {},
};
