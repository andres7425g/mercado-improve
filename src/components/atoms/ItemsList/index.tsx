import React from 'react';
import { Result } from '@models/QueryResult.model';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import icShipping from '@img/ic_shipping.png';
import './itemsList.style.scss';

const Item = ({ id, title, picture, price, seller }: Result) => {
  return (
    <Container fluid={true}>
      <Row className="d-flex pt-3 pb-3">
        <Col xl="2">
          <Link className="img-bg" to={`/items/${id}`}>
            <img className="rounded" src={picture} alt={title} />
          </Link>
        </Col>
        <Col>
          <div className="container-price d-flex align-content-center align-items-center">
            <span className="price">
              $ {price.amount.toLocaleString('de-DE')}
            </span>
            <img
              src={icShipping}
              alt="free shipping"
              aria-label="free shipping"
            />
          </div>
          <Col xl="8">
            <Link className="title col-2" to={`/items/${id}`}>
              {title}
            </Link>
          </Col>
        </Col>
        <Col xl="3">
          <span className="nickname">{seller.nickname}</span>
        </Col>
      </Row>
      <hr />
    </Container>
  );
};

export default Item;
