import { Container, Content, Header } from 'rsuite';

import { Navigation } from 'components/Navigation';
import { Paragraph } from 'components/Paragraph';
import React from 'react';

interface BasicLayoutProps {
  headerText?: string;
}

export const BasicLayout: React.FC<BasicLayoutProps> = ({ headerText, children }) => {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>
      <Content>
        {headerText && (
          <Paragraph center primary tag="h2" style={{ marginBottom: '3rem', marginTop: '3rem' }}>
            {headerText}
          </Paragraph>
        )}
        {children}
      </Content>
    </Container>
  );
};
