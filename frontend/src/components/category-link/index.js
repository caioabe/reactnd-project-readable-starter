import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { NavItem } from 'react-bootstrap';
import PropTypes from 'prop-types';

const CategoryLink = ({ category }) => (
  <LinkContainer to={`/category/${category.path}`}>
    <NavItem>{category.name}</NavItem>
  </LinkContainer>
);

export { CategoryLink };

CategoryLink.propTypes = {
  category: PropTypes.object,
};

CategoryLink.defaultProps = {
  category: {},
};
