import { Icon } from 'components/Icon';
import React from 'react';

interface PasswordTogglerProps {
  show: boolean;
  setShow: () => void;
  setHide: () => void;
}

export const PasswordToggler: React.FC<PasswordTogglerProps> = (props: PasswordTogglerProps) => {
  return (
    <>
      {!props.show && <Icon name="eye" onClick={props.setShow} />}
      {props.show && <Icon name="eye-close" onClick={props.setHide} />}
    </>
  );
};
