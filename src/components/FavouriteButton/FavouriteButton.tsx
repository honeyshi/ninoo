import React, { useState } from 'react';

import { Button } from 'rsuite';
import { Icon } from 'components/Icon';

interface IFavouriteButtonProps {
  isFavourite?: boolean;
}

export const FavouriteButton: React.FC<IFavouriteButtonProps> = ({ isFavourite }) => {
  const [favourite, setFavourite] = useState(isFavourite ?? false);
  const [hover, setHover] = useState(false);

  const toggleFavorite = () => {
    setFavourite(!favourite);
  };

  return (
    <Button
      size="sm"
      onClick={() => toggleFavorite()}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ background: 'none' }}>
      {!favourite && !hover && <Icon name="heart-3" size="2x" className="text-danger" />}
      {(favourite || hover) && <Icon name="heart-3" styleType="fill" size="2x" className="text-danger" />}
    </Button>
  );
};
