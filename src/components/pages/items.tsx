import React from 'react';
import Header from '@molecules/Header';
import { useSelector } from 'react-redux';
import { State } from '@models/reduxState.model';
import ItemsList from '@molecules/ItemsList';
import CategoriesList from '@molecules/categoriesList/Index';
import { Col, Container, Row } from 'react-bootstrap';

const Items: React.FC = () => {
  const posts = useSelector((state: State) => state.posts);

  return (
    <>
      <Header />
      <div className="bg-secondary">
        <Container fluid={true}>
          <Row>
            <Col xs="1"></Col>
            <Col xs="11">
              <CategoriesList categories={posts.categories} />
              <ItemsList items={posts.items} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Items;
