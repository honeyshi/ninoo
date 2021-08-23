import { Grid, Row } from 'rsuite';

import { BasicLayout } from 'components/Layout';
import { GuideCard } from 'components/GuideCard';
import React from 'react';

export const GuidesPage: React.FC = () => {
  return (
    <BasicLayout headerText="Гиды для невероятных путешествий">
      <Grid>
        <Row gutter={16}>
          <GuideCard />
          <GuideCard />
          <GuideCard />
          <GuideCard />
          <GuideCard />
          <GuideCard />
          <GuideCard />
          <GuideCard />
          <GuideCard />
          <GuideCard />
          <GuideCard />
          <GuideCard />
        </Row>
      </Grid>
    </BasicLayout>
  );
};
