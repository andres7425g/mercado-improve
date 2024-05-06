import { SetSearchKeyWord } from '@redux/actions';
import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import search from '@img/ic_Search.png';
import { useDispatch } from 'react-redux';
import './searchInput.scss';

const SearchInput: React.FC = () => {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(SetSearchKeyWord(searchValue));
    setSearchValue('');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="d-flex align-items-center col-12 form-container"
    >
      <div className="input-group">
        <FormControl
          type="text"
          placeholder="Nunca dejes de buscar"
          className="mr-sm-2"
          value={searchValue}
          onChange={handleChange}
          aria-label="Search"
          min={3}
        />
        <Button
          variant="secondary"
          type="submit"
          className="input-group-append"
        >
          <img src={search} alt="search-icon" />
        </Button>
      </div>
    </Form>
  );
};

export default SearchInput;
