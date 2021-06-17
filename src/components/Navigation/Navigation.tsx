import { Button, Nav } from 'rsuite';

import React from 'react';

export const Navigation: React.FC = () => {
  return (
    <Nav activeKey="home">
      <Nav.Item eventKey="home">Что посмотреть</Nav.Item>
      <Nav.Item>Гиды</Nav.Item>
      <Nav.Item>Куда пойти</Nav.Item>
      <Nav.Item>
        <Button appearance="ghost">Войти</Button>
      </Nav.Item>
    </Nav>
  );
};
