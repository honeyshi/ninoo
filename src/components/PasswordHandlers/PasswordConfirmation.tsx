import { ControlLabel, FormControl, FormGroup, InputGroup } from 'rsuite';
import React, { useState } from 'react';

import { PasswordToggler } from 'components/PasswordHandlers';

export const PasswordConfirmation: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <>
      <FormGroup>
        <ControlLabel>Пароль</ControlLabel>
        <InputGroup inside className="w-100">
          <FormControl name="password" type={showPassword ? 'text' : 'password'} />
          <InputGroup.Button>
            <PasswordToggler
              show={showPassword}
              setShow={() => setShowPassword(true)}
              setHide={() => setShowPassword(false)}
            />
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
      <FormGroup>
        <ControlLabel>Повторите пароль</ControlLabel>
        <InputGroup inside className="w-100">
          <FormControl name="passwordConfirm" type={showConfirmPassword ? 'text' : 'password'} />
          <InputGroup.Button>
            <PasswordToggler
              show={showConfirmPassword}
              setShow={() => setShowConfirmPassword(true)}
              setHide={() => setShowConfirmPassword(false)}
            />
          </InputGroup.Button>
        </InputGroup>
      </FormGroup>
    </>
  );
};
