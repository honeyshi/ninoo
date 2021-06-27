import { Button, ControlLabel, FormControl, FormGroup, InputGroup, Schema } from 'rsuite';
import React, { useState } from 'react';

import { FormLayout } from 'components/Layout';
import { Paragraph } from 'components/Paragraph';
import { PasswordToggler } from 'components/PasswordToggler';
import { Signup as SignupIcon } from 'illustrations';

type FormValueType = { email: string; password: string; passwordConfirm: string };
const { StringType } = Schema.Types;

const model = Schema.Model({
  email: StringType().isEmail('Введите корректный адрес электронной почты').isRequired('Обязательное поле'),
  password: StringType()
    .rangeLength(6, 30, 'Введите не менее 6 и не более 30 символов')
    .containsNumber('Пароль должен содержать числа')
    .containsLetter('Пароль должен содержать английские буквы')
    .isRequired('Обязательное поле'),
  passwordConfirm: StringType()
    .addRule((value, data) => {
      return value === data.password;
    }, 'Пароли не совпадают')
    .isRequired('Обязательное поле'),
});

export const Signup: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formValue, setFormValue] = useState<FormValueType>({
    email: '',
    password: '',
    passwordConfirm: '',
  });

  return (
    <FormLayout
      header="Регистрация"
      helperText="Начните своё увлекательное путешествие по городу"
      buttonText="Регистрация"
      icon={<SignupIcon width="100%" height="100%" />}
      model={model}
      afterButton={
        <FormGroup>
          <Paragraph tag="span">Уже есть аккаунт?</Paragraph>
          <Button appearance="link" href="/auth">
            Войти.
          </Button>
        </FormGroup>
      }
      onFormChange={(formValue) => setFormValue(formValue as FormValueType)}
      formValue={formValue}>
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
    </FormLayout>
  );
};
