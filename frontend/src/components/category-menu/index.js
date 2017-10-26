import React from 'react';
import { CategoryLink } from '../';

function renderCategoryLink(category) {
  return <CategoryLink category={category} key={`${category.name}-link`} />;
}

const CategoryMenu = ({ categories }) => <ul>{categories.map(renderCategoryLink)}</ul>;

export { CategoryMenu };
