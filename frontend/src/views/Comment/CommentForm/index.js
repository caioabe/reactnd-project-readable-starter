import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.handleSave = this.handleSave.bind(this);

    this.state = {
      commentId: '',
    };
  }

  componentWillMount() {
    this.setState({
      commentId: this.props.match.params.commentId,
    });
  }

  handleSave() {
    this.props.savePost(this.state.commentId);
  }

  render() {
    const { comments } = this.props;
    const { commentId } = this.props.match.params;
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
            <FormControl componentClass="textarea" placeholder="Describe..." defaultValue={comment.body}/>
          </FormGroup>
        </form>
        <Button bsStyle="success" onClick={this.handleSave}>
          Save editing
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = { };
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
