import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Item from '@atoms/ItemsList';
import { fetchPosts } from '@redux/actions';
import { Result, ResultQueryResponse } from '@models/QueryResult.model';
import { ItemsListProps } from './itemsList.props';
import { Container } from 'react-bootstrap';

const ItemsList: React.FC<ItemsListProps> = ({ items }: ItemsListProps) => {
  const dispatch = useDispatch<any>();
  const location = useLocation();
  const [error, setError] = useState<string | null>(null);

  const search = new URLSearchParams(location.search).get('search');

  useEffect(() => {
    if (search) {
      dispatch(fetchPosts(search))
        .then((result: ResultQueryResponse) => {
          if (result.items.length === 0) {
            setError('Ups! No encontramos ningún resultado');
          } else {
            setError('');
          }
        })
        .catch((err: Error) => {
          console.error(err);
          setError('Ocurrió un error al buscar los productos');
        });
    }
  }, [search]);

  const renderItems = () => {
    return items.map((element: Result) => (
      <div key={element.id}>
        <Item {...element} />
      </div>
    ));
  };

  return (
    <section>
      <Container fluid={true} className="bg-white rounded">
        {renderItems()}
        <span>{error}</span>
      </Container>
    </section>
  );
};

export default ItemsList;
