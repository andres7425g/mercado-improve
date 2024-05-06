import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { ItemDetailAtomProps } from './itemDetail.props';
import './itemDetail.style.scss';

const ItemDetailAtom = ({
  condition,
  sold_quantity,
  title,
  price,
}: ItemDetailAtomProps) => {
  return (
    <Col xl="4" className="d-flex column">
      <div className="detail-container">
        <span>
          {condition === 'new' ? 'Nuevo' : 'Usado'} - {sold_quantity} vendidos
        </span>
        <h1 className="title">{title}</h1>
        <Row className="row-pay">
          <span>$ {price?.toLocaleString('de-DE')}</span>
          <Button variant="info">Comprar</Button>
        </Row>
      </div>
    </Col>
  );
};

export default ItemDetailAtom;
