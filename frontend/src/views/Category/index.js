import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import ApiService from '../../services/api-service';

class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      isLoading: true,
    };
  }
  componentWillMount() {
    ApiService
      .getCategories()
      .then(categories => this.setState({ categories }));
  }

  render() {
    const { url } = this.props.match;

    return (
      <div>
        <h2>Category</h2>
        <ul>
          {
            this.state.categories.map(category => (
              <li key={`${category.name}`}>
                <Link to={`${url}/${category.path}`}>
                  {category.name}
                </Link>
              </li>
            ))
          }
        </ul>
        <Route path={`${url}/:category_id`} component={Topic}/>
        <Route exact path={url} render={() => (
          <h3>Please select a topic.</h3>
        )}/>
      </div>
    );
  }
}

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.category_id}</h3>
  </div>
);

export { Category };
