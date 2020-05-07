import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

const Header: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <Container>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link className={pathname === '/' ? 'selected' : ''} to="/">
            Listagem
          </Link>
          <Link
            className={pathname === '/import' ? 'selected' : ''}
            to="/import"
          >
            Importar
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
