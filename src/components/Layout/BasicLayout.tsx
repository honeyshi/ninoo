import { Container, Content, Header } from 'rsuite';

import { Navigation } from 'components/Navigation';
import React from 'react';

export const BasicLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>
      <Content>{children}</Content>
    </Container>
  );
};
