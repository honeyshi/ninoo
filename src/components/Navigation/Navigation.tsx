import './Navigation.less';

import { Button, Nav, Navbar } from 'rsuite';
import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import { Brand } from 'components/Brand';

export const Navigation: React.FC = () => {
  const [activeBar, setActiveBar] = useState('');

  let location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/attractions':
        setActiveBar('home');
        break;
      case '/guides':
        setActiveBar('guides');
        break;
      case '/where-go':
        setActiveBar('go');
        break;
    }
  }, [location.pathname]);

  return (
    <Navbar>
      <Navbar.Header>
        <Brand className="navbar-brand" />
      </Navbar.Header>
      <Navbar.Body>
        <Nav pullRight activeKey={activeBar} onSelect={(key) => setActiveBar(key)}>
          <Nav.Item eventKey="home" to="/attractions" componentClass={Link}>
            Что посмотреть
          </Nav.Item>
          <Nav.Item eventKey="guides" to="/guides" componentClass={Link}>
            Гиды
          </Nav.Item>
          <Nav.Item eventKey="go" to="/where-go" componentClass={Link}>
            Куда пойти
          </Nav.Item>
          <Nav.Item to="/auth" componentClass={Link}>
            <Button appearance="ghost">Войти</Button>
          </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};
