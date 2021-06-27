import { ControlLabel, FormControl, FormGroup, Schema } from 'rsuite';

import { ForgotPassword as ForgotPasswordIcon } from 'illustrations';
import { FormLayout } from 'components/Layout';
import React from 'react';

const { StringType } = Schema.Types;

const model = Schema.Model({
  email: StringType().isEmail('Введите корректный адрес электронной почты').isRequired('Обязательное поле'),
});

export const ForgotPassword: React.FC = () => {
  return (
    <FormLayout
      header="Забыли пароль"
      helperText="Введите свой email для восстановления пароля"
      buttonText="Отправить ссылку"
      icon={<ForgotPasswordIcon width="100%" height="100%" />}
      model={model}>
      <FormGroup>
        <ControlLabel>Email</ControlLabel>
        <FormControl name="email" />
      </FormGroup>
    </FormLayout>
  );
};
