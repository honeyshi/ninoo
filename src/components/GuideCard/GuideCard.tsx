import './GuideCard.less';

import { Col, FlexboxGrid, Panel } from 'rsuite';

import { FavouriteButton } from 'components/FavouriteButton';
import { Icon } from 'components/Icon';
import { Image } from 'components/Image';
import { Paragraph } from 'components/Paragraph';
import React from 'react';

export const GuideCard: React.FC = () => {
  return (
    <Col xs={8} className="guide-card-col">
      <Panel className="guide-card-wrapper">
        <FlexboxGrid justify="end">
          <FlexboxGrid.Item className="favourite-button">
            <FavouriteButton />
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <FlexboxGrid justify="center">
          <FlexboxGrid.Item>
            <Image src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
          </FlexboxGrid.Item>
        </FlexboxGrid>
        <Panel
          className="guide-card-inner"
          header={
            <Paragraph primary tag="h2" className="card-header">
              John Snow
            </Paragraph>
          }>
          <FlexboxGrid align="middle" style={{ flexDirection: 'column' }}>
            <FlexboxGrid.Item>
              <FlexboxGrid>
                <FlexboxGrid.Item>
                  <Paragraph primary tag="span">
                    4.7
                  </Paragraph>
                </FlexboxGrid.Item>
                <FlexboxGrid.Item>
                  <Icon className="rating-icon" name="vip-crown-2" styleType="fill" />
                </FlexboxGrid.Item>
              </FlexboxGrid>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item className="profession">
              <Paragraph muted tag="i">
                Photographer, traveller
              </Paragraph>
            </FlexboxGrid.Item>
            <FlexboxGrid.Item>
              <Paragraph className="description" tag="span">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit.”
              </Paragraph>
            </FlexboxGrid.Item>
          </FlexboxGrid>
        </Panel>
      </Panel>
    </Col>
  );
};
