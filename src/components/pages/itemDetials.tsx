import React, { useEffect, useState } from 'react';
import Header from '@molecules/Header';
import { fetchItemDetail } from 'services/itemDetail';
import ItemDetail from '@organisms/itemDetail';
import { Item } from '@models/ItemResult.model';
import { Col, Container, Row } from 'react-bootstrap';

const ItemDetails: React.FC = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState('');
  const url = new URL(window.location.href);
  const id = url.pathname.split('/').pop();

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (id) {
          const response = await fetchItemDetail(id);
          console.log(response);

          setData(response.item);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Ups! Ah ocurrido un error, vuelve a intentarlo');
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="bg-secondary">
        <Container fluid={true}>
          <Row>
            <Col xs="1"></Col>
            <Col xs="10" className="bg-white mt-3">
              <ItemDetail item={data as Item} />
              <span>{error}</span>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ItemDetails;
