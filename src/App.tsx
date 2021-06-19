import 'rsuite/src/styles/index.less';
import 'remixicon/fonts/remixicon.css';

import { Container, Header } from 'rsuite';

import { Navigation } from 'components/Navigation';
import React from 'react';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Container>
        <Header>
          <Navigation />
        </Header>
      </Container>
    </div>
  );
};
