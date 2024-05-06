import React from 'react';
import { category } from './category.props';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './category.style.scss';

const Category = ({ index, category }: category) => {
  return (
    <Breadcrumb.Item
      href="#"
      className={`active-breadcrumb ${index === 0 ? 'first-child' : ''}`}
    >
      {category}
    </Breadcrumb.Item>
  );
};

export default Category;
