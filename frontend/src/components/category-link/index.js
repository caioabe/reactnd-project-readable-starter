import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { NavItem } from 'react-bootstrap';

const CategoryLink = ({ category }) => (
  <LinkContainer to={`/category/${category.path}/posts`}>
    <NavItem>{category.name}</NavItem>
  </LinkContainer>
);

export { CategoryLink };
