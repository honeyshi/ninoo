import { AboutUs } from './AboutUs';
import { BasicLayout } from 'components/Layout';
import { Description } from './Description';
import React from 'react';

export const StartPage: React.FC = () => {
  return (
    <BasicLayout>
      <Description />
      <AboutUs />
    </BasicLayout>
  );
};
