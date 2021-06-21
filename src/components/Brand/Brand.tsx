import './Brand.less';

import { Icon } from 'components/Icon';
import React from 'react';
import classNames from 'classnames';

export const Brand: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <a href="/" className={classNames('brand-logo', className)}>
      <Icon className="icon" name="pin-distance" styleType="fill" />
      ninoo
    </a>
  );
};
