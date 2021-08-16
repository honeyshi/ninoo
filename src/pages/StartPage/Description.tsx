import { Button, FlexboxGrid } from 'rsuite';

import { Description as DescriptionIcon } from 'illustrations';
import { Paragraph } from 'components/Paragraph';
import React from 'react';

export const Description: React.FC = () => {
  return (
    <FlexboxGrid align="middle" justify="space-around" className="h-100">
      <FlexboxGrid.Item colspan={12} className="h-100 ">
        <DescriptionIcon className="h-100" />
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={10}>
        <FlexboxGrid align="middle" style={{ flexDirection: 'column' }}>
          <Paragraph tag="h3" style={{ marginBottom: '3rem' }}>
            Ищите проводников для незабываемых путешествий по Нижнему Новгороду и области
          </Paragraph>
          <Button appearance="primary" size="lg">
            Подробнее
          </Button>
        </FlexboxGrid>
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};
