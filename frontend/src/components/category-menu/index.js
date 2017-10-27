import React from 'react';
import { Nav } from 'react-bootstrap';

import { CategoryLink } from '../';

function renderCategoryLink(category) {
  return <CategoryLink category={category} key={`${category.name}-link`} />;
}

const CategoryMenu = ({ categories }) => (
  <Nav bsStyle="pills">
    {categories.map(renderCategoryLink)}
  </Nav>
);

export { CategoryMenu };
