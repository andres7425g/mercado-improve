import React from 'react';
import { categoriesProps } from './categoriesList.props';
import Category from '@atoms/category';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './categoriesList.style.scss';

const CategoriesList = ({ categories }: categoriesProps) => {
  return (
    <section>
      <Breadcrumb className="breadcrumb">
        {categories.map((element, index) => {
          return <Category key={element} index={index} category={element} />;
        })}
      </Breadcrumb>
    </section>
  );
};

export default CategoriesList;
