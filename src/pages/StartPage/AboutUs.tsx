import { AboutUs as AboutUsIcon } from 'illustrations';
import { FlexboxGrid } from 'rsuite';
import { Paragraph } from 'components/Paragraph';
import React from 'react';

export const AboutUs: React.FC = () => {
  return (
    <FlexboxGrid align="middle" justify="space-around" className="h-100">
      <FlexboxGrid.Item colspan={10}>
        <FlexboxGrid align="middle" style={{ flexDirection: 'column' }}>
          <Paragraph primary tag="h2" style={{ marginBottom: '3rem' }}>
            Что мы делаем
          </Paragraph>
          <Paragraph style={{ fontSize: '24px', lineHeight: '2' }}>
            Сервис позволяет найти гида, который проведет интересную экскурсию по городу, покажет места для красивых
            фотоссесий и расскажет, где вкусно поесть. А также вы сможете узнать информацию о достопримечательностях и
            грядущих событиях.
          </Paragraph>
        </FlexboxGrid>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={12} className="h-100 ">
        <AboutUsIcon className="h-100" />
      </FlexboxGrid.Item>
    </FlexboxGrid>
  );
};
