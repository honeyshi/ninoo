import './Navigation.less';

import { Button, Nav, Navbar } from 'rsuite';
import { Link, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';

import { Icon } from 'components/Icon';
import { useState } from 'react';

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
        <a href="/" className="navbar-brand logo">
          <Icon className="icon" name="pin-distance" styleType="fill" />
          ninoo
        </a>
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
