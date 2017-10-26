import React from 'react';
import { Link } from 'react-router-dom';

const CategoryLink = ({ category }) => (
  <li>
    <Link to={`/category/${category.path}/posts`} children={category.name}/>
  </li>
);

export { CategoryLink };
