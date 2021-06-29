import { Button, Checkbox, ControlLabel, FlexboxGrid, FormControl, FormGroup, InputGroup, Schema } from 'rsuite';
import React, { useState } from 'react';

import { FormLayout } from 'components/Layout';
import { Login } from 'illustrations';
import { Paragraph } from 'components/Paragraph';
import { PasswordToggler } from 'components/PasswordHandlers';

const { StringType } = Schema.Types;
const model = Schema.Model({
  password: StringType().isRequired('Обязательное поле'),
  email: StringType().isEmail('Введите корректный адрес электронной почты').isRequired('Обязательное поле'),
});

export const Auth: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <FormLayout
      header="С возвращением!"
      helperText="Продолжите своё увлекательное путешествие по городу"
      buttonText="Войти"
      icon={<Login width="100%" height="100%" />}
      model={model}
      afterButton={
        <FormGroup>
          <Paragraph tag="span">Еще нет аккаунта?</Paragraph>
          <Button appearance="link" href="/signup">
            Зарегистрируйтесь.
          </Button>
        </FormGroup>
      }>
      <FormGroup>
        <ControlLabel>Email</ControlLabel>
        <FormControl name="email" />
      </FormGroup>
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
        <FlexboxGrid justify="space-between">
          <Checkbox>Запомнить меня</Checkbox>
          <Button appearance="link" href="/forgot-password">
            Забыли пароль?
          </Button>
        </FlexboxGrid>
      </FormGroup>
    </FormLayout>
  );
};
