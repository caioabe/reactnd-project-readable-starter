import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.handleSave = this.handleSave.bind(this);

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

  render() {
    const { posts } = this.props;
    const { postId } = this.props.match.params;
    const post = posts.find(p => p.id === postId) || {};

    return (
      <div>
        <form>
          <FormGroup>
            <ControlLabel>Title:</ControlLabel>
            <FormControl type="text" defaultValue={post.title} placeholder="Eloquent Ruby"/>
            <ControlLabel>Author:</ControlLabel>
            <FormControl type="text" defaultValue={post.author} placeholder="Eric Evans"/>
            <ControlLabel>Category:</ControlLabel>
            <FormControl componentClass="select" defaultValue={post.category} placeholder="select">
              <option value="react">React</option>
              <option value="redux">Redux</option>
              <option value="udacity">Udacity</option>
            </FormControl>
            <ControlLabel>Body:</ControlLabel>
            <FormControl componentClass="textarea" placeholder="Describe..." defaultValue={post.body}/>
          </FormGroup>
        </form>
        <Button bsStyle="success" onClick={this.handleSave}>
          Save editing
        </Button>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => (
  {
    posts,
  }
);

const connectedComponent = connect(mapStateToProps)(PostForm);

export { connectedComponent as PostForm };

PostForm.propTypes = {
  post: PropTypes.object,
};

PostForm.defaultProps = {
  post: {},
};
