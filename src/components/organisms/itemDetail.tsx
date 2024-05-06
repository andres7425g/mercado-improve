import React from 'react';
import ItemDescription from '@atoms/itemDescription';
import { Item } from '@models/ItemResult.model';
import { Col, Container, Row } from 'react-bootstrap';
import ItemDetailAtom from '@atoms/itemDetail';

const ItemDetail: React.FC<{ item: Item }> = ({ item }: { item: Item }) => {
  const { picture, title, price, descriptions, condition, sold_quantity } =
    item;
  return (
    <section>
      <Container>
        <Row>
          <Col xl="3">
            <img src={picture} alt={title} />
          </Col>
          <Col />
          <ItemDetailAtom
            condition={condition}
            sold_quantity={sold_quantity}
            title={title}
            price={price?.amount}
          />
          <ItemDescription description={descriptions as string | string[]} />
        </Row>
      </Container>
    </section>
  );
};

export default ItemDetail;
