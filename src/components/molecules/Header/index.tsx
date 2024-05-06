import React, { useEffect } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { State } from '@models/reduxState.model';
import { SetSearchKeyWord } from '@redux/actions';

import logo from '@img/Logo_ML.png';
import SearchInput from '@atoms/SearchInput';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchWord = useSelector((state: State) => state.searchKeyWord);

  useEffect(() => {
    if (searchWord) {
      dispatch(SetSearchKeyWord(''));
      navigate(`/items?search=${searchWord}`);
    }
  }, [searchWord]);

  return (
    <header>
      <Navbar bg="primary" expand="lg">
        <Container className="col-10 d-flex justify-content-center align-items-center">
          <Navbar.Brand as={Link} to="/" className="col-1">
            <img src={logo} alt="mercado libre" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <SearchInput />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
